const usuarios = [
  { id: 1, name: 'Juan', lastName: 'Pérez' },
  { id: 2, name: 'María', lastName: 'González' },
  { id: 3, name: 'Carlos', lastName: 'Rodríguez' },
  { id: 4, name: 'Ana', lastName: 'Martínez' },
  { id: 5, name: 'Luis', lastName: 'Hernández' }
]

export const Users = () => {
  return (
    <ul className="space-y-2">
      {usuarios.map(usuario => (
        <li key={usuario.id} className="p-4 border rounded shadow">
          <p>ID: {usuario.id}</p>
          <p>Nombre: {usuario.name}</p>
          <p>Apellido: {usuario.lastName}</p>
        </li>
      ))}
    </ul>
  )
}
