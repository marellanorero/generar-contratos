export default function HomePage() {
  return (
    <main className="p-6 link-container" >
      <h1 className="text-2xl font-bold">Generador de contratos</h1>
      <a href="/personform" className="enlace text-blue-600 underline">
        Generar contrato persona natural
      </a>
      <br></br>
      <a href="/companyform" className="enlace text-blue-600 underline">
        Generar contrato empresa
      </a>
      <a href="/" className="enlace text-blue-600 underline">
        Buscar un contrato existente
      </a>
    </main>
  );
}
