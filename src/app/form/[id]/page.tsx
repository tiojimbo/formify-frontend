type Params = {
  id: string;
};

export default async function FormPage({ params }: { params: Params }) {
  return (
    <div className="p-6 text-center text-lg font-medium">
      Viewing Form ID: <strong>{params.id}</strong>
    </div>
  );
}
