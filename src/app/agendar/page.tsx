import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import { FormComponent } from './components/scheduleForm'
import Values from './components/values'

export default function Component() {
  return (
    <div className="h-\[calc\(100\%\-8rem\)\] ">
      <ToastContainer />
      <div className="mx-auto  max-w-3xl space-y-8 bg-slate-100 p-10 rounded-sm ">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="font-bold">Reserva</h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Entre com as informações da Reserva.
          </p>
        </div>
        <FormComponent />
        <Values />
      </div>
    </div>
  )
}
