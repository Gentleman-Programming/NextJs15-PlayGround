import { unstable_after as after } from 'next/server';

// el nuevo api experimental `after` permite ejecutar tareas secundarias después
// de que la respuesta principal haya sido enviada, ideal para logging o sincronización.

export default function AfterApiExample({ children }: { children: React.ReactNode }) {
  after(() => {
    console.log('tarea secundaria ejecutada después de la respuesta');
  });

  return (
    <div>
      <h2>unstable_after API</h2>
      <p>este ejemplo ejecuta código después de que se envíe la respuesta principal.</p>
      {children}
    </div>
  );
}
