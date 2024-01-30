"use client";
import { useState } from "react";
import InputsComparativa from "../components/InputsComparativa";
import ResultsComparativa from "../components/ResultsComparativa";
export default function Comparativa() {
  const [potencia1, setPotencia1] = useState(0);
  const [potencia2, setPotencia2] = useState(0);
  const [peso1, setPeso1] = useState(0);
  const [peso2, setPeso2] = useState(0);
  const [area1, setArea1] = useState(0);
  const [area2, setArea2] = useState(0);
  const [tiempo1, setTiempo1] = useState(0);
  const [tiempo2, setTiempo2] = useState(0);
  const [consumo1, setConsumo1] = useState(0);
  const [consumo2, setConsumo2] = useState(0);
  const [precioCombustible, setPrecioCombustible] = useState(0);

  console.log(potencia1);
  return (
    <div className="w-screen  min-h-screen flex flex-col justify-center items-center bg-primary py-10">
      <div className="w-[80%] bg-secundary flex flex-col items-center justify-center">
        <InputsComparativa
          setPotencia1={setPotencia1}
          setPotencia2={setPotencia2}
          setPeso1={setPeso1}
          setPeso2={setPeso2}
          setArea1={setArea1}
          setArea2={setArea2}
          setTiempo1={setTiempo1}
          setTiempo2={setTiempo2}
          setConsumo1={setConsumo1}
          setConsumo2={setConsumo2}
          setPrecioCombustible={setPrecioCombustible}
        />
        <ResultsComparativa
          potencia1={potencia1}
          potencia2={potencia2}
          peso1={peso1}
          peso2={peso2}
          area1={area1}
          area2={area2}
          tiempo1={tiempo1}
          tiempo2={tiempo2}
          consumo1={consumo1}
          consumo2={consumo2}
          precioCombustible={precioCombustible}
        />
      </div>
    </div>
  );
}
