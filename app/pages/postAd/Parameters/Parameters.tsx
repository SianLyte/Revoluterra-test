import { FC, useState } from 'react'
import { Button, ButtonTheme } from '~/components/Button'
import { Input } from '~/components/Input'
import { FormSchemaErrors } from '../Form/AdFormSchema';
import { useMobile } from '~/lib/hooks/useMobile';

type ParametersProps = {
  errors: FormSchemaErrors | undefined;
}

const Parameters: FC<ParametersProps> = ({ errors }) => {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("new");

  const resetStateFromResize = () => {
    window.innerWidth <= 1024 ? setType('') : setType('personal')
  }

  const { isMobile } = useMobile(resetStateFromResize);


  return (
    <>
      <h2 className="text-2xl max-sm:text-lg font-semibold mb-6">Параметры</h2>

      <div className="sm:grid sm:gap-4 mb-6 sm:grid-cols-[212px_1fr] sm:grid-rows-[56px_auto]">
        <h3 className="text-sm max-sm:mb-4 flex items-center">Название объявления</h3>
        <Input placeholder="Название" name="title" className="w-full lg:w-[480px] mb-4 max-sm:mb-2" />
        {errors?.title ? <p className="text-[13px] text-red-500  sm:col-start-2">{errors.title._errors[0]}</p> :
          <p className="text-[13px] text-gray-500 sm:col-start-2">Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»</p>}
      </div>


      <div className="sm:grid sm:gap-4 sm:grid-cols-[212px_1fr] sm:grid-rows-[48px_auto] mb-6">
        <h3 className="text-sm flex items-center mb-4">Состояние</h3>
        <div className="flex gap-2">
          <Button className={`mb-2 py-[14px]  px-6 border`}
            theme={condition === "new" ? ButtonTheme.SECONDARY : ButtonTheme.OUTLINE}
            onClick={() => setCondition('new')}>
            Новое
          </Button>
          <Button className={`mb-2 px-6 border`}
            theme={condition === "used" ? ButtonTheme.SECONDARY : ButtonTheme.OUTLINE}
            onClick={() => setCondition('used')}>
            Б/У
          </Button>
        </div>
        <p className="text-[13px] text-gray-500 underline sm:col-start-2">Какую вещь можно считать новой</p>
        <input type="hidden" name="condition" value={condition} />
      </div>



      <div className="sm:grid sm:gap-4 sm:grid-cols-[212px_1fr] sm:grid-rows-[48px_auto] mb-6">
        <h3 className="text-sm flex items-center mb-4">Вид объявления</h3>
        {isMobile ?
          <div>
            <select name="type" value={type} onChange={(e) => setType(e.target.value || "personal")}
              className="text-grey w-full rounded-lg bg-slate-100 py-[18px] px-4 h-14 text-sm lg:w-[480px] mb-4 max-sm:mb-2 appearance-none bg-[url('/caret-down.svg')] bg-no-repeat bg-[right_20px_center]">
              <option value="" disabled>Выберите вид объявления</option>
              <option value="personal">Покупал для себя</option>
              <option value="resale">Покупал для перепродажи</option>
            </select>
            {errors?.type ? <p className="text-[13px] text-red-500  sm:col-start-2">{errors.type._errors[0]}</p> : null}
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

export default Parameters