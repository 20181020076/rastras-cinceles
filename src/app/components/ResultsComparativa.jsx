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
  const porcentaje = () =>{
    if (selectedValue==7){
      return tractor2-tractor1
    }
    return ((1-(tractor2/tractor1))*100)

  }

  const handleResults = async() => {
    // rendimiento
    if(selectedValue==0){
      
      await setTractor1(rendimiento(1))
      await setTractor2(rendimiento(2))
      
      
      // consumo (Gal/hr)
    }else if(selectedValue==1){
      
      await setTractor1(consumoPesosHora(1))
      await setTractor2(consumoPesosHora(2))
      
      
      // consumo (Gal/ha)
    }else if(selectedValue==2){
      const rend1 = rendimiento(1)
      const rend2 = rendimiento(2)
      const consume1 =  consumoPesosHora(1)
      const consume2 =  consumoPesosHora(2)
      
      await setTractor1(consume1/rend1)
      await setTractor2(consume2/rend2)
      
      

      
      // costo combustible ($/hr)
    }else if(selectedValue==3){
      const consume1 =  (consumo1*60)/(1000*3.7854*tiempo1)*precioCombustible
      const consume2 =  (consumo2*60)/(1000*3.7854*tiempo2)*precioCombustible
      await setTractor1(consume1)
      await setTractor2(consume2)
      
      // costo combustible ($/ha)
      
    }else if(selectedValue==4){
      const costo1 =  (consumo1*60)/(1000*3.7854*tiempo1)*precioCombustible/ rendimiento(1)
      const costo2 =  (consumo2*60)/(1000*3.7854*tiempo2)*precioCombustible/ rendimiento(2)

      await setTractor1(costo1)
      await setTractor2(costo2)
      
    }
    // relacion peso/potencia (kg/hp)
    else if(selectedValue==5){
      const relacionPesoPotencia1 = peso1/potencia1
      const relacionPesoPotencia2 = peso2/potencia2

      await setTractor1(relacionPesoPotencia1)
      await setTractor2(relacionPesoPotencia2)
      
      // eficiencia
    }else if(selectedValue==6){
      const rend1 =  rendimiento(1)
      const rend2 =  rendimiento(2)

      const efi1 = (1-((0.72)-(rend1))/0.72)*100
      const efi2 = (1-((0.63)-(rend2))/0.63)*100

      await setTractor1(efi1)
      await setTractor2(efi2)
    
    }
    // patinamiento
    else if(selectedValue==7){
      const pat1 = (1-(sinImplemento1/conImplemento1))*100
      const pat2 = (1-(sinImplemento2/conImplemento2))*100
      await setTractor1(pat1)
      await setTractor2(pat2)
      
      // Costo ($) vs No horas
    }else if(selectedValue==8){
      const precioHoras1 = consumoPesosHora(1)*horasDia*precioCombustible
      const precioHoras2 = consumoPesosHora(2)*horasDia*precioCombustible
      await setTractor1(precioHoras1)
      await setTractor2(precioHoras2)
      
      // Costo ($) vs No hectarea
    }else if(selectedValue==9){
      const costo1 =  (consumo1*60)/(1000*3.7854*tiempo1)*precioCombustible/ rendimiento(1)
      const costo2 =  (consumo2*60)/(1000*3.7854*tiempo2)*precioCombustible/ rendimiento(2)
      await setTractor1(costo1*horasDia)
      await setTractor2(costo2*horasDia)
      
    }
    
    
    
  };
  const handleColor = () => {
      // rendimiento (ha/hr)
    if(selectedValue=="0"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-green-500"

      }else if(porcentage<0){
      return "bg-red-500"
      }
      return ""

      // consumo de combustible(gal/hr)
    }else if(selectedValue=="1"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
      // consumo de combustible(gal/ha)

    }else if(selectedValue=="2"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""

      // costo combustible($/hr)
    }else if(selectedValue=="3"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
      // costo combustible($/ha)
    }else if(selectedValue=="4"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
      // relacion peso/potencia(kg/hp)
    }else if(selectedValue=="5"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
      // eficiencia
    }else if(selectedValue=="6"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-green-500"

      }else if(porcentage<0){
      return "bg-red-500"
      }
      return ""
      // patinamiento
    }else if(selectedValue=="7"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
    }
    // costo ($) cs No Horas
    else if(selectedValue=="8"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
    // costo ($) cs No Hectareas
    }else if(selectedValue=="9"){
      const porcentage = porcentaje()
      if(porcentage>0){
      return "bg-red-500"

      }else if(porcentage<0){
      return "bg-green-500"
      }
      return ""
    }
  }
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
    horasDia,
    conImplemento1,
    conImplemento2,
    sinImplemento1,
    sinImplemento2,

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
            <>{selectedValue==3 || selectedValue==4 || selectedValue==8 || selectedValue==9?"$"+tractor1.toFixed(0):tractor1.toFixed(2)}</>
          </div>
          <div className="flex justify-between">
            <h3>Tractor 2</h3>
            <>{selectedValue==3 || selectedValue==4?"$"+tractor2.toFixed(0):tractor2.toFixed(2)}</>

          </div>
          <div className="flex justify-between">
            <h3>Diferencia</h3>
            <>{diferencia().toFixed(2)}</>
          </div>
          <div className="flex justify-between">
            <h3>Porcentaje</h3>
            <div className={`px-1 ${handleColor()}`}>{porcentaje().toFixed(0)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComparativa;
