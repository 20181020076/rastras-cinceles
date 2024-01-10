"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [mood, setMood] = useState(0);
  // const [anchoImplento, setAnchoImplento] = useState("");
  const [numeroDiscos, setNumeroDiscos] = useState("");
  const [diametroDiscos, setDiametroDiscos] = useState("");
  const [separacionCinceles, setSeparacionCinceles] = useState("");
  const [separacionDiscos, setSeparacionDiscos] = useState("");
  const [secciones, setSecciones] = useState(1);
  const [penetracionDisco, setPenetracionDisco] = useState(0.33);
  const [profundidadPreparacion, setProfundidadPreparacion] = useState("");
  const [numeroCinceles, setNumeroCinceles] = useState("");
  const [profundidadCinceles, setProfundidadCinceles] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [coefSuelo, setCoefSuelo] = useState("");
  const [potenciaVolante, setPotenciaVolante] = useState(0);
  const [potenciaBt, setPotenciaBt] = useState(0);
  const [fuerza, setFuerza] = useState(
    ((numeroDiscos * separacionDiscos * 2.54) / secciones) *
      coefSuelo *
      diametroDiscos *
      2.54 *
      penetracionDisco
  );

  const calculoPotencia = () => {
    if (mood == 0) {
      const nuevaFuerza =
        ((numeroDiscos * separacionDiscos * 2.54) / secciones) *
        coefSuelo *
        diametroDiscos *
        2.54 *
        penetracionDisco;

      setFuerza(nuevaFuerza.toFixed(2));

      const nuevaPotenciaBt =
        (nuevaFuerza * ((velocidad * 1000) / 3600).toFixed(2)) / 76.04;
      setPotenciaBt(nuevaPotenciaBt);

      const nuevaPotenciaVolante = nuevaPotenciaBt / 0.8;
      setPotenciaVolante(nuevaPotenciaVolante);
    } else if (mood == 1) {
      const nuevaFuerza = ((numeroCinceles * separacionCinceles) / secciones)*coefSuelo*profundidadCinceles;

      setFuerza(nuevaFuerza.toFixed(2));
     

      const nuevaPotenciaBt =
        (nuevaFuerza * ((velocidad * 1000) / 3600).toFixed(2)) / 76.04;
      setPotenciaBt(nuevaPotenciaBt);

      const nuevaPotenciaVolante = nuevaPotenciaBt / 0.7;
      setPotenciaVolante(nuevaPotenciaVolante);
    } else {
      console.log("no existe esa opcion");
    }
  };
  useEffect(() => {}, [mood]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary">
      <div className="flex flex-col bg-secundary min-h-[90%] w-[90%] rounded-xl p-4 justify-start items-center">
        <h1 className="font-bold text-xl mb-3">Calculo de potencias</h1>
        <div className="flex">
          <div
            className={`rounded-2xl p-1 border border-white ${
              mood == 0 ? "bg-primary text-white" : "bg-secundary"
            }`}
            onClick={() => setMood(0)}
          >
            Rastras
          </div>
          <div
            className={`rounded-2xl p-1 border border-white ${
              mood == 1 ? "bg-primary text-white" : "bg-secundary"
            }`}
            onClick={() => setMood(1)}
          >
            Cinceles
          </div>
        </div>
        {mood == 0 ? (
          <>
            {/* Rastras */}
            <label htmlFor="numeroDiscos">Numero de Discos</label>
            <input
              type="number"
              id="numeroDiscos"
              name="numeroDiscos"
              value={numeroDiscos}
              onChange={(e) => setNumeroDiscos(e.target.value)}
            />
            <label htmlFor="diametroDiscos">Diametro del disco (pul)</label>
            <input
              type="number"
              id="diametroDiscos"
              name="diametroDiscos"
              value={diametroDiscos}
              onChange={(e) => setDiametroDiscos(e.target.value)}
            />
            <label htmlFor="separacionDiscos">
              Separacion entre Discos (pulg)
            </label>
            <input
              type="number"
              id="separacionDiscos"
              name="separacionDiscos"
              value={separacionDiscos}
              onChange={(e) => setSeparacionDiscos(e.target.value)}
            />
            <label htmlFor="velocidad">Velocidad (km/hr)</label>
            <input
              type="number"
              id="velocidad"
              name="velocidad"
              value={velocidad}
              onChange={(e) => setVelocidad(e.target.value)}
            />
            <label htmlFor="secciones">Secciones</label>
            <input
              type="number"
              id="secciones"
              name="secciones"
              value={secciones}
              onChange={(e) => setSecciones(e.target.value)}
            />
            
            <label htmlFor="coefSuelo">
              Coeficiente, Rotura suelo (Kg/Cm2)
            </label>
            <input
              type="number"
              id="coefSuelo"
              name="coefSuelo"
              value={coefSuelo}
              onChange={(e) => setCoefSuelo(e.target.value)}
              />
              <p>Penetracion del disco 1/3</p>
              <p>0.33</p>
            <p>Profundidad de preparacion (cm)</p>
            <div>{diametroDiscos * 2.54 * penetracionDisco}</div>

            <label htmlFor="ancho">Ancho total del implemento (cm)</label>
            <div>{(numeroDiscos * separacionDiscos * 2.54) / secciones}</div>
          </>
        ) : (
          <>
            {/* Cinceles */}
            <label htmlFor="numeroCinceles">Numero de Cinceles</label>

            <input
              type="number"
              id="numeroCinceles"
              name="numeroCinceles"
              value={numeroCinceles}
              onChange={(e) => setNumeroCinceles(e.target.value)}
            />
            <label htmlFor="profundidadCinceles">
              Profundidad del Cincele (cm)
            </label>
            <input
              type="number"
              id="profundidadCinceles"
              name="profundidadCinceles"
              value={profundidadCinceles}
              onChange={(e) => setProfundidadCinceles(e.target.value)}
            />
            <label htmlFor="separacionCinceles">
              Separacion entre Cinceles (cm)
            </label>
            <input
              type="number"
              id="separacionCinceles"
              name="separacionCinceles"
              value={separacionCinceles}
              onChange={(e) => setSeparacionCinceles(e.target.value)}
            />
            <label htmlFor="velocidad">Velocidad (Km/hr)</label>
            <input
              type="number"
              id="velocidad"
              name="velocidad"
              value={velocidad}
              onChange={(e) => setVelocidad(e.target.value)}
            />
            <label htmlFor="secciones">Secciones</label>
            <input
              type="number"
              id="secciones"
              name="secciones"
              value={secciones}
              onChange={(e) => setSecciones(e.target.value)}
            />
            <label htmlFor="coefSuelo">
              Coeficiente, Rotura suelo (Kg/Cm2)
            </label>
            <input
              type="number"
              id="coefSuelo"
              name="coefSuelo"
              value={coefSuelo}
              onChange={(e) => setCoefSuelo(e.target.value)}
            />
            <p>Ancho total del implemento (cm)</p>
            <div>{(numeroCinceles * separacionCinceles) / secciones}</div>
          </>
        )}

        {/* <select
          id="coefSuelo"
          name="coefSuelo"
          value={coefSuelo}
          onChange={(e) => setCoefSuelo(e.target.value)}
        >
          <option value="opcion1">Muy blandas 0,25</option>
          <option value="opcion2">Blandas 0,25-0,50</option>
          <option value="opcion3">Media 0,50-1,00</option>
          <option value="opcion4">Firme 1,00-2,00</option>
          <option value="opcion5">Muy Firme 2,00-4,00</option>
          <option value="opcion3">Dura +4,00</option>
        </select> */}
        <button
          onClick={() => calculoPotencia()}
          className="border text-white bg-primary p-1 rounded-full"
        >
          Calcular
        </button>
        <div className="flex flex-col">
          <div>
            <span className="font-bold">Potencia al motor:</span>
            <>{potenciaVolante.toFixed(2)}</>{" "}
          </div>
          <div>
            <span className="font-bold">Potencia Bt en (hp): </span>
            {potenciaBt.toFixed(2)}
          </div>
          <div>
            <span className="font-bold">Fuerza en (kg-f): </span>
            {fuerza}
          </div>
        </div>
      </div>
    </main>
  );
}
