import { FC } from 'react'

type PhotoProps = {
  error: { _errors: string[] } | undefined;
  photos: File[];
  handlePhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removePhoto: (index: number) => void
}

const Photo: FC<PhotoProps> = ({ error, photos, handlePhotoUpload, removePhoto }) => {

  return (
    <div className="sm:grid sm:gap-4 mb-6 sm:grid-cols-[212px_1fr] sm:grid-rows-[auto_auto]">
      <h3 className="text-sm max-sm:mb-4 pt-[18px]">Фотографии</h3>
      <input type="file" name="photos" multiple className="hidden" id="photo-upload" onChange={handlePhotoUpload} />
      <div className="flex flex-wrap gap-4 max-w-[550px]">
        {photos?.map((photo, index) => (
          <div key={index} className="relative w-[120px] h-[90px] rounded">
            <img src={URL.createObjectURL(photo)} alt="preview" className="w-full h-full object-cover rounded-lg" />
            <button type="button" className="flex justify-center items-center absolute top-1 right-1 bg-white rounded-full text-white w-7 h-7" onClick={() => removePhoto(index)}>
              <img src="/cross.svg" alt="cross" />
            </button>
          </div>
        ))}
        <label htmlFor="photo-upload" className="w-[120px] h-[90px] flex items-center justify-center rounded-lg bg-slate-100 cursor-pointer">
          <img src="/camera.svg" alt="camera" />
        </label>
      </div>
      {error ?
        <p className="text-[13px] text-red-500  sm:col-start-2">{error._errors[0]}</p> :
        <div className="text-[13px]  sm:col-start-2 text-gray-500">{photos.length} из 10</div>}
    </div>
  )
}

export default Photo