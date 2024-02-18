"use client";
import { useEffect, useState } from "react";
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
  const [horasDia, setHorasDia] = useState(0);
  const [conImplemento1, setConImplemento1] = useState(0);
  const [conImplemento2, setConImplemento2] = useState(0);
  const [sinImplemento1, setSinImplemento1] = useState(0);
  const [sinImplemento2, setSinImplemento2] = useState(0);

  useEffect(() => {}, [
    potencia1,
    potencia2,
    peso1,
    peso2,
    area1,
    area2,
    tiempo1,
    tiempo2,
    consumo1,
    consumo2,
    precioCombustible,
    horasDia,
    conImplemento1,
    conImplemento2,
    sinImplemento1,
    sinImplemento2,
  ]);
  return (
    <div className="w-screen  min-h-screen flex flex-col justify-center items-center bg-primary py-10">
      <div className="w-[80%] bg-secundary flex flex-col items-center justify-center">
        <InputsComparativa
          tiempo1={tiempo1}
          area1={area1}
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
          setHorasDia={setHorasDia}
          setConImplemento1={setConImplemento1}
          setConImplemento2={setConImplemento2}
          setSinImplemento1={setSinImplemento1}
          setSinImplemento2={setSinImplemento2}
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
          horasDia={horasDia}
          conImplemento1={conImplemento1}
          conImplemento2={conImplemento2}
          sinImplemento1={sinImplemento1}
          sinImplemento2={sinImplemento2}
        />
      </div>
    </div>
  );
}
