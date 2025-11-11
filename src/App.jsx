import React, { useState } from "react";

export default function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCalculate = () => {
    const bill = parseFloat(billAmount);
    if (isNaN(bill) || bill <= 0) {
      setErrorMessage("Ingrese un monto válido mayor que 0.");
      setTipAmount(0);
      setTotalAmount(0);
      return;
    }

    setErrorMessage("");
    const tip = bill * (tipPercentage / 100);
    setTipAmount(tip);
    setTotalAmount(bill + tip);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Calculadora de Propinas</h1>

        {/*monto*/}
        <label className="block mb-2 font-semibold">Monto total de la cuenta a pagar:</label>
        <input
          type="number"
          placeholder="Ej. 500"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/*Porcentaje */}
        <label className="block mb-2 font-semibold">Porcentaje de propina:</label>
        <div className="flex justify-between mb-4">
          {[10, 15, 20].map((percent) => (
            <button
              key={percent}
              onClick={() => setTipPercentage(percent)}
              className={`py-2 px-4 rounded font-semibold ${
                tipPercentage === percent
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {percent}%
            </button>
          ))}
        </div>

        {/* Botn de calcular */}
        <button
          onClick={handleCalculate}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Calcular
        </button>

        {/* Alertas */}
        {errorMessage && (
          <div className="bg-red-100 text-red-800 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        {/* Resultados */}
        {tipAmount > 0 && (
          <div className="bg-blue-100 text-blue-800 p-4 rounded">
            <p>Propina: L. {tipAmount.toFixed(2)}</p>
            <p>Total a pagar: L. {totalAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
