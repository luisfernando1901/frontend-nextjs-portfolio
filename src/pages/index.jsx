import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Portfolio</title>
        <meta
          name="description"
          content="Developed in Nextjs and tailwindcss."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center text-white bg-black/90">
        <p className="text-xl tracking-wide">
          Please, navigate to{" "}
          <a className="text-blue-300" href="/luisfer.nest">
            /luisfer.nest
          </a>
        </p>
      </div>
    </>
  );
}
