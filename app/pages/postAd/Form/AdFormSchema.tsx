import { z } from "zod";
import { zfd } from "zod-form-data";



export type FormSchemaErrors = {
  title?: { _errors: string[] };
  condition?: { _errors: string[] };
  type?: { _errors: string[] };
  description?: { _errors: string[] };
  price?: { _errors: string[] };
  photos?: { _errors: string[] };
  video?: { _errors: string[] };
  location?: { _errors: string[] };
  phone?: { _errors: string[] };
}

export const adFormSchema = zfd.formData({
  title: z.string().regex(/(\b[a-zA-Zа-яА-ЯёЁ]+\b)/gu, "Укажите хотя бы одно слово только из английских букв"),
  condition: z.enum(["new", "used"]),
  type: z.enum(["personal", "resale"], { message: "Выберите что-то из списка" }),
  description: z.string().min(1, "Описание не должно быть пустым"),
  price: z.string().regex(/^\d+$/, "Цена должна содержать только цифры"),
  photos: zfd.repeatable(z.array(z.instanceof(File)).min(1, "Добавьте хотя бы одно фото").max(10, "Максимум 10 фото")),
  video: z.string().url("Введите корректную ссылку на видео").regex(/\./, "В ссылке должна быть точка"),
  location: z.enum(["moscow", "saint-petersburg", "ekaterinburg", "kazan", "krasnodar"], { message: "Выберите город из списка" }),
  phone: z.string().regex(/^\d+$/, "Телефон должен содержать только цифры"),
});