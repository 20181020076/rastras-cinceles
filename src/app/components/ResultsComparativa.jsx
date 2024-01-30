import React, { useEffect, useState } from "react";

const ResultsComparativa = ({
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
}) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [tractor1, setTractor1] = useState(0)
  const [tractor2, setTractor2] = useState(0)
  const [diferencia, setDiferencia] = useState(0)
  const [Porcentaje, setPorcentaje] = useState(0)
  const handleResults = () => {
    // rendimiento
    if(selectedValue==0){
      setTractor1((tiempo1/consumo1)*60/1000)
      setTractor2((tiempo2/consumo2)*60/1000)
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // consumo (Gal/hr)
    }else if(selectedValue==1){
      setTractor1((consumo1*60)/(1000*3.7854*tiempo1))
      setTractor2((consumo2*60)/(1000*3.7854*tiempo2))
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // consumo (Gal/ha)
    }else if(selectedValue==2){
      setTractor1(((consumo1*60)/(1000*3.7854*tiempo1))/(tiempo1/consumo1)*60/1000)
      setTractor2(((consumo2*60)/(1000*3.7854*tiempo2))/(tiempo2/consumo2)*60/1000)
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // costo combustible ($/hr)
    }else if(selectedValue==3){
      setTractor1(precioCombustible*tiempo1)
      setTractor2(precioCombustible*tiempo2)
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // costo combustible ($/ha)
      
    }else if(selectedValue==4){
      setTractor1((precioCombustible*tiempo1)/((tiempo1/consumo1)*60/1000))
      setTractor2((precioCombustible*tiempo2)/((tiempo2/consumo2)*60/1000))
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
    }
    // relacion peso/potencia (kg/hp)
    else if(selectedValue==5){
      setTractor1(peso1/potencia1)
      setTractor2(peso2/potencia2)
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // eficiencia
    }else if(selectedValue==6){
      setTractor1(1-((0)/(1)))
      setTractor2((consumo2*60)/(1000*3.7854*tiempo2))
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
    }
    // patinamiento
    else if(selectedValue==7){
      setTractor1((consumo1*60)/(1000*3.7854*tiempo1))
      setTractor2((consumo2*60)/(1000*3.7854*tiempo2))
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // Costo ($) vs No horas
    }else if(selectedValue==8){
      setTractor1((consumo1*60)/(1000*3.7854*tiempo1))
      setTractor2((consumo2*60)/(1000*3.7854*tiempo2))
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
      // Costo ($) vs No hectarea
    }else if(selectedValue==8){
      setTractor1((consumo1*60)/(1000*3.7854*tiempo1))
      setTractor2((consumo2*60)/(1000*3.7854*tiempo2))
      setDiferencia(tractor1-tractor2)
      setPorcentaje(1-(tractor2-tractor1))
    }
    
    
    
  };
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    handleResults()
    
  };
  useEffect(()=>{
    handleResults()
  },[ potencia1,
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
    selectedValue])
  return (
    <div>
      <h2 className="font-bold">resultados</h2>
      <div className="flex flex-col">
        <select onChange={handleChange}>
          <option value="0">Rendimiento (ha/hr)</option>
          <option value="1">Consumo Combustible (gal/hr)</option>
          <option value="2">Consumo Combustible (gal/ha)</option>
          <option value="3">Costo Combustible ($/hr)</option>
          <option value="4">Costo Combustible ($/ha)</option>
          <option value="5">Relacion peso/potencia (kg/hp)</option>
          <option value="6">Eficiencia</option>
          <option value="7">Patinamiento %</option>
          <option value="8">Costo ($) Vs No Horas</option>
          <option value="9">Costo ($) Vs No Hectarias</option>
        </select>
        <div className=" justify-between">
          <div className="flex justify-between">
            <h3>Tractor 1</h3>
            <>{tractor1}</>
          </div>
          <div className="flex justify-between">
            <h3>Tractor 2</h3>
            <>{tractor2}</>
          </div>
          <div className="flex justify-between">
            <h3>Diferencia</h3>
            <>{diferencia}</>
          </div>
          <div className="flex justify-between">
            <h3>Porcentaje</h3>
            <>{Porcentaje}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComparativa;
