import { FC, useState } from "react";
import { Input } from "~/components/Input";
import { useMobile } from "~/lib/hooks/useMobile";

type SelectCityProps = {
  error: { _errors: string[] } | undefined;
}

const SelectCity: FC<SelectCityProps> = ({ error }) => {
  const locations = ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Краснодар"];
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);

  const { isMobile } = useMobile();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredLocations(
      locations.filter((city) => city.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleSelect = (city: string) => {
    setLocation(city);
    setSearchTerm(city);
    setFilteredLocations([]);
  };

  return (
    <>
      <div className="relative">
        <h2 className="text-2xl max-sm:text-lg font-semibold mb-6">Место сделки</h2>

        {isMobile ?
          <>
            <Input
              style={{ outline: error ? "2px solid red" : "" }}
              type="text"
              name="location"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 mb-4"
              placeholder="Начните вводить адрес"
            />
            {filteredLocations.length > 0 && searchTerm != "" && (
              <ul className="absolute left-0 right-0 bg-white border rounded mt-1">
                {filteredLocations.map((city) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
                  <li
                    key={city}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelect(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
            <input type="hidden" name="location" value={location} />
            <Input disabled className="h-[320px] mb-8" />
            {error ? <p className="text-[13px] text-red-500">{error._errors[0]}</p> : null}
          </>
          :
          <div className="sm:grid sm:gap-4 sm:grid-cols-[212px_1fr] sm:grid-rows-[48px_auto] mb-6">
            <h3 className="text-sm flex items-center mb-4">Город</h3>
            <div>
              <select
                style={{ outline: error ? "2px solid red" : "" }}
                name="location" value={location} onChange={(e) => setLocation(e.target.value)}
                className="text-grey w-full rounded-lg bg-slate-100 py-[18px] px-4 h-14 text-sm lg:w-[480px] mb-4 max-sm:mb-2 appearance-none bg-[url('/caret-down.svg')] bg-no-repeat bg-[right_20px_center]">
                <option value="" disabled>Выберите город</option>
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Екатеринбург">Екатеринбург</option>
                <option value="Казань">Казань</option>
                <option value="Краснодар">Краснодар</option>
              </select>
              {error ? <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> : null}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default SelectCity