import { useState } from "react";

export default function Calculadora() {
  const [monto, setMonto] = useState("");
  const [propina, setPropina] = useState(0);
  const [error, setError] = useState("");

  const validarMonto = (valor) => {
    if (!valor || isNaN(valor) || valor <= 0) {
      setError("Por favor ingresa un monto válido.");
    } else {
      setError("");
    }
    setMonto(valor);
  };

  const propinaFinal = monto && propina > 0 ? (monto * propina) / 100 : 0;
  const total = monto && propina > 0 ? Number(monto) + propinaFinal : 0;

  return (
    <div className="w-[320px] p-6 bg-white shadow-2xl rounded-lg space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Calculadora de Propinas
      </h1>

      <input
        type="number"
        placeholder="Monto de la cuenta"
        value={monto}
        onChange={(e) => validarMonto(e.target.value)}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

<div className="flex gap-6 justify-center">
  <button
    onClick={() => setPropina(10)}
    className={`px-5 py-2 rounded font-semibold transition ${
      propina === 10
        ? "bg-green-600 text-white shadow-lg"
        : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    10%
  </button>
  <button
    onClick={() => setPropina(15)}
    className={`px-5 py-2 rounded font-semibold transition ${
      propina === 15
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    15%
  </button>
  <button
    onClick={() => setPropina(20)}
    className={`px-5 py-2 rounded font-semibold transition ${
      propina === 20
        ? "bg-purple-600 text-white shadow-lg"
        : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    20%
  </button>
</div>


{!error && propina > 0 && monto > 0 && (
  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-gray-800 text-center">
    <p className="mb-2">
      Propina: <span className="font-bold">${propinaFinal.toFixed(2)}</span>
    </p>
    <p>
      Total a pagar: <span className="font-bold">${total.toFixed(2)}</span>
    </p>
  </div>
)}

    </div>
  );
}
