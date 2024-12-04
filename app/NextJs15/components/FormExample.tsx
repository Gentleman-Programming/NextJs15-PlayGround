// // Note: This is abbreviated for demonstration purposes.
// // Not recommended for use in production code.
//
// 'use client'
//
// import { FormEvent, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
//
// interface FormProps {
//   action: string | (() => void);
//   [key: string]: any;
// }
//
// export default function FormExample(props: FormProps) {
//   const action = props.action
//   const router = useRouter()
//
//   useEffect(() => {
//     // if form target is a URL, prefetch it
//     if (typeof action === 'string') {
//       router.prefetch(action)
//     }
//   }, [action, router])
//
//   function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//
//     // grab all of the form fields and trigger a `router.push` with the data URL encoded
//     const formData = new FormData(event.currentTarget)
//     const data = new URLSearchParams()
//
//     for (const [name, value] of formData) {
//       data.append(name, value as string)
//     }
//
//     router.push(`${action}?${data.toString()}`)
//   }
//
//   if (typeof action === 'string') {
//     return <form onSubmit={onSubmit} {...props} />
//   }
//
//   return <form {...props} />
// }

import Form from 'next/form';

// el nuevo componente `<Form>` en next.js 15 permite prefetching, navegación del lado del cliente,
// y mejora progresiva para formularios. esto hace que las formas sean más rápidas y fáciles de implementar.

export default function FormExample() {
  return (
    <Form action="/search">
      <label>
        búsqueda:
        <input name="query" className="border text-black rounded px-2 py-1" />
      </label>
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        buscar
      </button>
    </Form>
  );
}
