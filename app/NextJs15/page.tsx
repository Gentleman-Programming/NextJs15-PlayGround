import AfterApiExample from "./components/AfterApiExample"
import AsyncRequestExample from "./components/AsyncRequestExample"
import FormExample from "./components/FormExample"
import InstrumentationExample from "./components/InstrumentationExample"
import ServerActionsExample from "./components/ServerActionsExample"
import { Users } from "./Users"

const NextJsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <Users />
      <InstrumentationExample />
      <AsyncRequestExample />
      <AfterApiExample>Despúes de mi</AfterApiExample>
      <FormExample />
      <ServerActionsExample />
    </div>
  )
}

export default NextJsPage

