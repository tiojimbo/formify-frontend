export default function FormPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-6 text-center text-lg font-medium">
      Viewing Form ID: <strong>{params.id}</strong>
    </div>
  );
}
 //