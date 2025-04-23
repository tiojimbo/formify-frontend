import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const FormPage: FC<PageProps> = ({ params }) => {
  return (
    <div className="p-6 text-center text-lg font-medium">
      Viewing Form ID: <strong>{params.id}</strong>
    </div>
  );
};

export default FormPage;
