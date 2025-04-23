import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-100 dark:bg-slate-900 h-screen p-4 fixed left-0 top-0 border-r border-slate-200">
      <div className="text-xl font-bold mb-8">Formify</div>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/form/123" className="hover:underline">Formulário</Link>
      </nav>
    </aside>
  );
}
