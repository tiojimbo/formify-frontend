// src/app/form/[id]/page.tsx

export default async function FormPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="p-6 text-center text-lg font-medium">
      Viewing Form ID: <strong>{id}</strong>
    </div>
  );
}
