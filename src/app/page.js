import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <main className="h-screen w-screen flex flex-col  justify-center items-center">
        <div className="w-[80%] border border-black grid grid-cols-2 gap-5">
          <Link className="border border-red-500" href={"/potencias"}>
            Calculo de potencias
          </Link>
          <Link className="border border-red-500" href={"/comparativa"}>
            Prueba comparativa rendimiento entre tractores
          </Link>
          <div className="border border-red-500">proximamente</div>
        </div>
      </main>
    </>
  );
}
