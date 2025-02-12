import { FC } from 'react'

type DetailsProps = {
  error: { _errors: string[] } | undefined;
}

const Description: FC<DetailsProps> = ({ error }) => {
  return (
    <div className="sm:grid sm:gap-4 mb-6 sm:grid-cols-[212px_1fr] sm:grid-rows-[160px_auto]">
      <h3 className="text-sm max-sm:mb-4 pt-[18px]">Описание объявления</h3>
      <textarea placeholder="Телефон" name="description" className="resize-none w-full rounded-lg bg-slate-100 py-5 px-4 h-[160px] text-sm lg:w-[480px] mb-4 max-sm:mb-2" />
      {error ? <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> :
        <p className="text-[13px] text-gray-500 sm:col-start-2">Не указывайте в описании телефон и e-mail — для этого есть отдельные поля</p>}
    </div>
  )
}

export default Description