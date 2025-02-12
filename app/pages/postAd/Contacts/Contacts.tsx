import { FC } from "react";
import { Input } from "~/components/Input";

type ContactsProps = {
  error: { _errors: string[] } | undefined;
}

const Contacts: FC<ContactsProps> = ({ error }) => {
  return (
    <>
      <h2 className="text-2xl max-sm:text-lg font-semibold mb-6">Контакты</h2>
      <div className="sm:grid sm:gap-4 sm:grid-cols-[212px_1fr] sm:grid-rows-[56px_auto] sm:mb-12 max-sm:mb-10">
        <h3 className="text-sm max-sm:mb-4 pt-[18px]">Телефон</h3>
        <Input placeholder="8 ___ ___ - __ - __ " name="phone" className="w-full lg:w-[480px] mb-4 max-sm:mb-2" style={{ outline: error ? "2px solid red" : "" }} />
        {error ?
          <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> :
          <div className="sm:col-start-2">
            <p className="max-w-xl text-[13px] text-gray-500">Чтобы ваши номера не попали в базы мошенников, мы показываем вместо них подменные, а звонки переводим вам.
              Эту защиту нельзя отключить.</p>
            <p className="text-[13px] text-gray-500 underline">Подробнее</p>
          </div>}
      </div>
    </>
  )
}

export default Contacts