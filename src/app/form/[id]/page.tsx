import { MainLayout } from "@/components/layout/main-layout";

interface FormPageProps {
  params: {
    id: string;
  };
}

export default function FormPage({ params }: FormPageProps) {
  return (
    <MainLayout>
      <div className="text-lg font-medium text-center">
        Viewing Form ID: <strong>{params.id}</strong>
      </div>
    </MainLayout>
  );
}
