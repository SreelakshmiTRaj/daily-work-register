import { FormProvider } from "@/context/FormContext";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <FormProvider>
          <div className="max-w-3xl mx-auto p-6">{children}</div>
        </FormProvider>
      </body>
    </html>
  );
}