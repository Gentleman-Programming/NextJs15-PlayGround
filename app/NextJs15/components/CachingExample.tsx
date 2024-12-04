// este ejemplo ilustra cómo configurar el comportamiento de caché en next.js 15.
// por defecto, las rutas dinámicas ya no están cacheadas. podés usar `dynamic` para configurarlas explícitamente.

export const dynamic = 'force-static';

export default function CachingExample() {
  return (
    <div>
      <h2>caching semantics</h2>
      <p>
        esta ruta está configurada como estática con el siguiente código:
      </p>
      <pre className="bg-gray-200 p-4 rounded">
        <code>{`export const dynamic = 'force-static';`}</code>
      </pre>
    </div>
  );
}
