import { useState } from "react";

export default function CalculadoraHE() {
  const [jor, setJor] = useState("");
  const [he, setHe] = useState("");
  const [jorNuevo, setJorNuevo] = useState("");
  const [heNuevo, setHeNuevo] = useState("");

  const calcular = () => {
    const JOR = parseFloat(jor) || 0;
    const HE = parseFloat(he) || 0;
    const JORN = parseFloat(jorNuevo) || 0;
    const HEN = parseFloat(heNuevo) || 0;

    const total = JOR + JORN;

    if (total === 0) return "";

    return (((JOR * HE) + (JORN * HEN)) / total).toFixed(1);
  };

  const limpiar = () => {
    setJor("");
    setHe("");
    setJorNuevo("");
    setHeNuevo("");
  };

  const copiar = async () => {
    const resultado = calcular();

    if (resultado !== "") {
      await navigator.clipboard.writeText(resultado.toString());
      alert("Resultado copiado");
    }
  };

  return (
    <>
    <main className="mt-8 flex items-center justify-center">

      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col">

        <h1 className="text-2xl font-bold text-center mb-6">
          Calculadora HE Ponderada
        </h1>

        <div className="space-y-4">

          <div>
            <label className="font-medium">Jornales (JOR)</label>

            <input
              type="number"
              value={jor}
              onChange={(e) => setJor(e.target.value)}
              className="border rounded w-full p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">
              Horas Efectivas (HE)
            </label>

            <input
              type="number"
              step="0.01"
              value={he}
              onChange={(e) => setHe(e.target.value)}
              className="border rounded w-full p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">
              Jornales Nuevos
            </label>

            <input
              type="number"
              value={jorNuevo}
              onChange={(e) => setJorNuevo(e.target.value)}
              className="border rounded w-full p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">
              Horas Efectivas Nuevas
            </label>

            <input
              type="number"
              step="0.01"
              value={heNuevo}
              onChange={(e) => setHeNuevo(e.target.value)}
              className="border rounded w-full p-2 mt-1"
            />
          </div>

        </div>

        <div className="mt-8 text-center">

          <p className="text-gray-500">
            Horas Efectivas Ponderadas
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mt-2">
            {calcular()}
          </h2>

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={limpiar}
            className="flex-1 bg-gray-300 hover:bg-gray-400 rounded-lg py-2"
          >
            Limpiar
          </button>

          <button
            onClick={copiar}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
          >
            Copiar
          </button>

        </div>

      </div>

    </main>
    </>
  );
}