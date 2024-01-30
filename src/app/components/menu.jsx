"use client";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-full ">
        <div
          className={`top-5 h-[40px] w-[40px] rounded-full border-2 border-black flex flex-col justify-center items-center gap-1 fixed z-30 ${
            !active ? "left-3" : "left-[65vw]"
          } transition-all duration-300`}
          onClick={() => setActive(!active)}
        >
          <div className={`h-1 w-[70%] border border-black bg-black ${
            !active ? "" : "rotate-45 translate-y-1"
          }`}></div>
          <div className={`h-1 w-[70%] border border-black bg-black ${
            !active ? "" : "hidden"
          }`}></div>
          <div className={`h-1 w-[70%] border border-black bg-black ${
            !active ? "" : "-rotate-45 -translate-y-1"
          }`}></div>
        </div>
      </div>

      <div
        className={`fixed h-screen flex justify-start pt-[15vh] w-[80vw] flex flex-col bg-red-500 z-20 ${
          active ? "left-0" : "-left-[500px]"
        } transition-all duration-300`}
      >
        <Link href="/" onClick={()=>setActive(false)}>Home</Link>
        <Link href="/potencias" onClick={()=>setActive(false)}>Calculo de Potencia</Link>
        <Link href="/comparativa" onClick={()=>setActive(false)}>Comparativa de tractores</Link>
      </div>
    </>
  );
};

export default Menu;
