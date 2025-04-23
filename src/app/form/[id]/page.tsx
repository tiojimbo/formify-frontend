import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Form Page",
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function FormPage({ params }: PageProps) {
  return (
    <div className="p-6 text-center text-lg font-medium">
      Viewing Form ID: <strong>{params.id}</strong>
    </div>
  );
}
