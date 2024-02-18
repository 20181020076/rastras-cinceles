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
  horasDia,
  conImplemento1,
  conImplemento2,
  sinImplemento1,
  sinImplemento2,

}) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [tractor1, setTractor1] = useState(0)
  const [tractor2, setTractor2] = useState(0)
  const [Porcentaje, setPorcentaje] = useState(0)

  const rendimiento = (select) =>{
     if(select == 1){
      return(area1/tiempo1)*60/10000
     }else if(select == 2){
      return (area2/tiempo2)*60/10000
     }else{
      console.log("no existe esa opcion")
     }
  }
  const consumoPesosHora = (select) =>{
    if(select == 1){
      return ((consumo1*60)/(1000*3.7854*tiempo1))
     }else if(select == 2){
      return ((consumo2*60)/(1000*3.7854*tiempo2))
     }else{
      console.log("no existe esa opcion")
     }
  }
  const diferencia = () =>{
    return (tractor1 - tractor2)
  }

  const handleResults = async() => {
    // rendimiento
    if(selectedValue==0){
    
      await setTractor1(rendimiento(1))
      await setTractor2(rendimiento(2))
      
      // consumo (Gal/hr)
    }else if(selectedValue==1){
      setTractor1(consumoPesosHora(1))
      setTractor2(consumoPesosHora(2))
      
      // consumo (Gal/ha)
    }else if(selectedValue==2){
      const rend1 = rendimiento(1)
      const rend2 = rendimiento(2)
      const consume1 =  consumoPesosHora(1)
      const consume2 =  consumoPesosHora(2)
      setTractor1(consume1/rend1)
      setTractor2(consume2/rend2)
      
      // costo combustible ($/hr)
    }else if(selectedValue==3){
      const consume1 =  (consumo1*60)/(1000*3.7854*tiempo1)
      const consume2 =  (consumo2*60)/(1000*3.7854*tiempo2)
      setTractor1(precioCombustible*consume1)
      setTractor2(precioCombustible*consume2)
      
      // costo combustible ($/ha)
      
    }else if(selectedValue==4){
      const costo1 =  (consumo1*60)/(1000*3.7854*tiempo1)*precioCombustible/ rendimiento(1)
      setTractor1(costo1)
      setTractor2((precioCombustible*tiempo2)/((tiempo2/consumo2)*60/1000))
      
    }
    // relacion peso/potencia (kg/hp)
    else if(selectedValue==5){
      const relacionPesoPotencia1 = peso1/potencia1
      const relacionPesoPotencia2 = peso2/potencia2

      setTractor1(relacionPesoPotencia1)
      setTractor2(relacionPesoPotencia2)
      
      // eficiencia
    }else if(selectedValue==6){
      const efi1 = 1-((0.72)-(rendimiento(1)))/0.72
      const efi2 = 1-((0.72)-(rendimiento(2)))/0.72

      setTractor1(efi1*100)
      setTractor2(efi2*100)
    
    }
    // patinamiento
    else if(selectedValue==7){
      const pat1 = sinImplemento1/conImplemento1
      const pat2 = sinImplemento2/conImplemento2
      setTractor1((1-pat1)*100)
      setTractor2((1-pat2)*100)
      
      // Costo ($) vs No horas
    }else if(selectedValue==8){
      const precioHoras1 = consumoPesosHora(1)*horasDia*precioCombustible
      const precioHoras2 = consumoPesosHora(2)*horasDia*precioCombustible
      setTractor1(precioHoras1)
      setTractor2(precioHoras2)
      
      // Costo ($) vs No hectarea
    }else if(selectedValue==9){
      const costo1 =  (consumo1*60)/(1000*3.7854*tiempo1)*precioCombustible/ rendimiento(1)
      const costo2 =  (consumo2*60)/(1000*3.7854*tiempo1)*precioCombustible/ rendimiento(2)
      setTractor1(costo1*horasDia)
      setTractor2(costo2*horasDia)
      
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
        <select onChange={(e)=>handleChange(e)}>
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
            <>{selectedValue==3 || selectedValue==4?"$"+tractor1.toFixed(0):tractor1.toFixed(2)}</>
          </div>
          <div className="flex justify-between">
            <h3>Tractor 2</h3>
            <>{tractor2.toFixed(2)}</>
          </div>
          <div className="flex justify-between">
            <h3>Diferencia</h3>
            <>{diferencia().toFixed(2)}</>
          </div>
          <div className="flex justify-between">
            <h3>Porcentaje</h3>
            <>{Porcentaje.toFixed(2)}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComparativa;
