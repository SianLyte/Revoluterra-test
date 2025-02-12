import { FC } from "react";
import { Input } from "~/components/Input"
type VideoProps = {
  error: { _errors: string[] } | undefined;
}

const Video: FC<VideoProps> = ({ error }) => {

  return (
    <div className="sm:grid sm:gap-4 mb-6 sm:grid-cols-[212px_1fr] sm:grid-rows-[56px_auto]">
      <h3 className="text-sm max-sm:mb-4 pt-[18px]">Видео</h3>
      <Input style={{ outline: error ? "2px solid red" : "" }} placeholder="Ссылка на видео" name="video" className="w-full lg:w-[480px] mb-4 max-sm:mb-2" />
      {error ? <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> : null}
    </div>

  )
}

export default Video