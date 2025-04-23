interface Params {
  params: {
    id: string;
  };
}

export default function FormPage({ params }: Params) {
  return (
    <div className="p-6 text-center text-lg font-medium">
      Viewing Form ID: <strong>{params.id}</strong>
    </div>
  );
}