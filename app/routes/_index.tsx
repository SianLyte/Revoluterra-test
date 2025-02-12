import type { MetaFunction } from "@remix-run/node";
import { json, } from "@remix-run/node";
import AdForm, { ActionData } from "~/pages/postAd/Form/AdForm";
import { adFormSchema } from "~/pages/postAd/Form/AdFormSchema";


export const meta: MetaFunction = () => {
  return [
    { title: "Revoluterra Test" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({ request }: { request: Request }): Promise<Response | ActionData> => {
  const formData = await request.formData();

  const result = adFormSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return json({ errors: result.error.format(), success: false }, { status: 400 });
  }

  return json({ success: true });
};


export default function Index() {
  return (
    <div className="bg-slate-100 min-h-screen bg-background pt-[105px]">
      <div className="container pb-8">
        <div className=" w-full pb-[75px] pt-0 xl:pt-0">
          <h1 className="text-3xl font-semibold mb-8 mx-4 max-lg:text-center max-sm:text-2xl max-sm:mb-6">Добавить объявление</h1>
          <AdForm />
        </div >
      </div >
    </div >
  );
}


