import { cookies } from 'next/headers';

// este ejemplo utiliza la nueva API asíncrona para manejar solicitudes que dependen de datos del request,
// como cookies, headers, params y searchParams. ahora estas APIs son asíncronas por defecto.

export default async function AsyncRequestExample() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  return (
    <div>
      <h2>async request api</h2>
      <p>
        este ejemplo muestra cómo usar la api de cookies en el modelo asíncrono:
      </p>
      <pre className="bg-sky-950 p-4 rounded">
        <code>token actual: {token?.value || 'no encontrado'}</code>
      </pre>
    </div>
  );
}
