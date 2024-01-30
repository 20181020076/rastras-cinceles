import React from "react";

const InputsComparativa = ({
  setPotencia1,
  setPotencia2,
  setPeso1,
  setPeso2,
  setArea1,
  setArea2,
  setTiempo1,
  setTiempo2,
  setConsumo1,
  setConsumo2,
  setPrecioCombustible,
}) => {
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center">
        <h2 className="block font-bold">Marca y Modelo </h2>
        <h2 className="block font-bold">Tractor 1 vs Tractor 2 </h2>
      </div>

      {/* input potencia */}
      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] block">Potencia (hp)</p>
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setPotencia1(0);
            } else {
              setPotencia1(value.target.value);
            }
          }}
        />
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setPotencia2(0);
            } else {
              setPotencia2(value.target.value);
            }
          }}
        />
      </div>
      {/* input peso */}
      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Peso(Kg)</p>
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setPeso1(0);
            } else {
              setPeso1(value.target.value);
            }
          }}
        />
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setPeso2(0);
            } else {
              setPeso2(value.target.value);
            }
          }}
        />
      </div>
      {/* input Area */}
      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Area (m2)</p>
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setArea1(0);
            } else {
              setArea1(value.target.value);
            }
          }}
        />
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setArea2(0);
            } else {
              setArea2(value.target.value);
            }
          }}
        />
      </div>
      {/* input Tiempo */}
      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Tiempo (min)</p>
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setTiempo1(0);
            } else {
              setTiempo1(value.target.value);
            }
          }}
        />
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setTiempo2(0);
            } else {
              setTiempo2(value.target.value);
            }
          }}
        />
      </div>
      {/* input Consumo de combustible */}
      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Consumo de combustible (ml)</p>
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setConsumo1(0);
            } else {
              setConsumo1(value.target.value);
            }
          }}
        />
        <input
          type="number"
          className="w-[30%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setConsumo2(0);
            } else {
              setConsumo2(value.target.value);
            }
          }}
        />
      </div>
      {/* input Precio del combustible */}
      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Precio del combustible ($/gal)</p>
        <input
          type="number"
          className="w-[60%]"
          onChange={(value) => {
            if (value.target.value == "" || value.target.value == null) {
              setPrecioCombustible(0);
            } else {
              setPrecioCombustible(value.target.value);
            }
          }}
        />
      </div>
      {/* input Precio del combustible */}
      <h2 className="font-bold">
        Prueba de patinamiento # de vueltas llanta trasera en una longitid de
        50m
      </h2>
      {/* input con implemento */}

      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Con implemento</p>
        <input type="number" className="w-[30%]" />
        <input type="number" className="w-[30%]" />
      </div>
      {/* input sin implemento */}

      <div className="flex w-full items-center justify-center border border-black">
        <p className="w-[40%] ">Sin implemento</p>
        <input type="number" className="w-[30%]" />
        <input type="number" className="w-[30%]" />
      </div>
      {/* input numero horas/dia */}

      <div className="flex w-full justify-center items-center">
        <p className="w-[40%]">Numero de horas o has /dia</p>
        <input type="text" className="w-[60%] h-[24px]" />
      </div>

      {/* input numero horas/dia */}

      <div className="flex w-full ">
        <h2 className="font-bold">Datos Teoricos</h2>
      </div>

      {/* input velocidad */}

      <div className="flex w-full justify-center items-center">
        <p className="w-[40%] ">Velocidad (Km/hr)</p>
        <input type="number" className="w-[30%] h-[24px]" />
        <input type="number" className="w-[30%] h-[24px]" />
      </div>
      {/* Ancho de operacion implemento*/}

      <div className="flex w-full justify-center items-center">
        <p className="w-[40%] ">Ancho de operacion implemento (m)</p>
        <input type="number" className="w-[30%] h-[24px]" />
        <input type="number" className="w-[30%] h-[24px]" />
      </div>
    </div>
  );
};

export default InputsComparativa;
