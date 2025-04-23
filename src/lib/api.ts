const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, options);
  if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);
  return res.json();
}
