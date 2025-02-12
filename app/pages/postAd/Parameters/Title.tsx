import { FC } from 'react'
import { Input } from '~/components/Input';

type PriceProps = {
  error: { _errors: string[] } | undefined;
}

const Title: FC<PriceProps> = ({ error }) => {
  return (
    <>
      <div className="sm:grid sm:gap-4 mb-6 sm:grid-cols-[212px_1fr] sm:grid-rows-[56px_auto]">
        <h3 className="text-sm max-sm:mb-4 flex items-center">Название объявления</h3>
        <Input style={{ outline: error ? "2px solid red" : "" }} placeholder="Название" name="title" className="w-full lg:w-[480px] mb-4 max-sm:mb-2" />
        {error ? <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> :
          <p className="text-[13px] text-gray-500 sm:col-start-2">Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»</p>}
      </div>
    </>
  )
}

export default Title