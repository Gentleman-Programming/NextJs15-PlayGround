
// el archivo `instrumentation.js` ahora está estable. permite observar el ciclo de vida del servidor
// y registrar errores, integrándose con herramientas como opentelemetry o sentry.

export async function register() {
  console.log('instrumentation registrada');
}

export async function onRequestError(err: Error) {
  console.error('error capturado:', err.message);
}

export default function InstrumentationExample() {
  return (
    <div>
      <h2>instrumentation.js API </h2>
      <p>ahora podés observar el ciclo de vida del servidor y capturar errores con hooks como onRequestError.</p>
    </div>
  );
}
