'use server';

// las server actions ahora tienen IDs seguros y eliminan automáticamente el código no utilizado,
// mejorando la seguridad y el rendimiento.

export async function updateUserAction(formData: FormData) {
  console.log('acción de actualización de usuario:', formData);
}

export default async function ServerActionsExample() {
  return (
    <div>
      <h2>server actions security</h2>
      <p>
        las server actions ahora generan IDs seguros y eliminan código no utilizado automáticamente.
      </p>
    </div>
  );
}

