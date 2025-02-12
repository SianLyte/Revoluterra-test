import { FC, useState } from 'react'
import { Button, ButtonTheme } from '~/components/Button'
import { useMobile } from '~/lib/hooks/useMobile';

type AdTypeProps = {
  error: { _errors: string[] } | undefined;
}

const AdType: FC<AdTypeProps> = ({ error }) => {
  const [type, setType] = useState("");

  const resetStateFromResize = () => {
    window.innerWidth <= 1024 ? setType('') : setType('personal')
  }

  const { isMobile } = useMobile(resetStateFromResize);


  return (
    <>
      <div className="sm:grid sm:gap-4 sm:grid-cols-[212px_1fr] sm:grid-rows-[48px_auto] mb-6">
        <h3 className="text-sm flex items-center mb-4">Вид объявления</h3>
        {isMobile ?
          <div>
            <select style={{ outline: error ? "2px solid red" : "" }} name="type" value={type} onChange={(e) => setType(e.target.value || "personal")}
              className="outline-transparent text-grey w-full rounded-lg bg-slate-100 py-[18px] px-4 h-14 text-sm lg:w-[480px] mb-4 max-sm:mb-2 appearance-none bg-[url('/caret-down.svg')] bg-no-repeat bg-[right_20px_center]">
              <option value="" disabled>Выберите вид объявления</option>
              <option value="personal">Покупал для себя</option>
              <option value="resale">Покупал для перепродажи</option>
            </select>
            {error ? <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> : null}
          </div> :
          <div className="flex gap-2">
            <input type="hidden" name="type" value={type} />
            <Button className={`mb-2 px-6 border`}
              theme={type === 'personal' ? ButtonTheme.SECONDARY : ButtonTheme.OUTLINE}
              onClick={() => setType('personal')}>
              Покупал для себя
            </Button>
            <Button className={`mb-2 px-6 border`}
              theme={type === 'resale' ? ButtonTheme.SECONDARY : ButtonTheme.OUTLINE}
              onClick={() => setType('resale')}>
              Покупал для перепродажи
            </Button>
          </div>
        }
      </div>
    </>
  )
}

export default AdType