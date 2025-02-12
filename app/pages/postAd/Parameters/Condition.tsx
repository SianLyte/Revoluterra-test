import { FC, useState } from 'react'
import { Button, ButtonTheme } from '~/components/Button'

const Condition: FC = () => {
  const [condition, setCondition] = useState("new");

  return (
    <>
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
    </>
  )
}

export default Condition