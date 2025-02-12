import { Form, useActionData, useSubmit } from "@remix-run/react";
import { Button, ButtonTheme } from "~/components/Button";
import { FormSchemaErrors } from "./AdFormSchema";
import { usePhoto } from "../Photo/lib/usePhoto";
import SelectCity from "../SelectCity/SelectCity";
import Contacts from "../Contacts/Contacts";
import Description from "../Details/Description";
import Price from "../Details/Price";
import Photo from "../Photo/Photo";
import Video from "../Details/Details";
import Title from "../Parameters/Title";
import Condition from "../Parameters/Condition";
import AdType from "../Parameters/AdType";

export type ActionData = {
  success: boolean,
  errors?: FormSchemaErrors
};

const AdForm = () => {
  const actionData = useActionData<ActionData>();
  const submit = useSubmit();
  const { photos, handlePhotoUpload, removePhoto, addPhotosToFormData } = usePhoto();


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addPhotosToFormData(formData);
    submit(formData, { method: "POST", preventScrollReset: true, encType: "multipart/form-data" });
  }

  return (
    <Form className="bg-white p-8 mx-4 max-md:p-6 lg:pb-16 md:p-10 rounded-lg" method="post" onSubmit={onSubmit}>
      <h2 className="text-2xl max-sm:text-lg font-semibold mb-6">Параметры</h2>
      <Title error={actionData?.errors?.title} />
      <Condition />
      <AdType error={actionData?.errors?.type} />

      <h2 className="text-2xl max-sm:text-lg font-semibold mb-6">Подробности</h2>
      <Description error={actionData?.errors?.description} />
      <Price error={actionData?.errors?.price} />
      <Photo photos={photos} handlePhotoUpload={handlePhotoUpload} removePhoto={removePhoto} error={actionData?.errors?.photos} />
      <Video error={actionData?.errors?.video} />
      <SelectCity error={actionData?.errors?.location} />
      <Contacts error={actionData?.errors?.phone} />

      <div className="flex gap-4 mb-6 max-sm:mb-4 flex-wrap">
        <Button type="submit" className="max-sm:w-full min-h-[48px] w-[180px]" theme={ButtonTheme.PRIMARY}>Разместить</Button>
        <Button className="min-h-[48px] w-[180px]" theme={ButtonTheme.OUTLINE}>Сохранить и выйти</Button>
      </div>
      {actionData?.success ? <div className="text-[20px] text-green-600">Объявление успешно создано и отправлено на модерацию</div> : null}
      <p className=" max-w-[620px] text-[13px] text-gray-500">Вы публикуете объявление и данные в нём, чтобы их мог посмотреть кто угодно в интернете.
        Вы также соглашаетесь с <span className="underline">правилами.</span></p>
    </Form>
  )
}

export default AdForm