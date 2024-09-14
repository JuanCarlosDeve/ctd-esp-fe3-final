import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contacto</h1>
      {submittedData ? (
        <div className="text-center bg-green-100 p-4 rounded-md">
          <p className="text-green-700">
            Gracias <strong>{submittedData.nombre}</strong>, te contactaremos cuando antes vía email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Nombre completo</label>
            <input
              type="text"
              {...register("nombre", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 5,
                  message: "El nombre debe tener al menos 5 caracteres"
                }
              })}
              className={`w-full p-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato del email no es válido"
                }
              })}
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>

          {Object.keys(errors).length > 0 && (
            <p className="text-red-500 text-center mt-4">Por favor verifique su información nuevamente</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
