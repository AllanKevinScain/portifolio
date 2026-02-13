import {
  Banner,
  Diferenciais,
  Header,
  ListOfProjects,
  Rodape,
  Servicos,
} from "./components";

export default function App() {
  return (
    <div className="bg-(--color-bg)">
      <Header />
      <main className="flex flex-col gap-24">
        <section id="home">
          <Banner />
        </section>

        <section id="projetos">
          <div className="container">
            <ListOfProjects />
          </div>
        </section>

        <section id="diferenciais">
          <div className="container">
            <Diferenciais />
          </div>
        </section>

        <section id="servicos">
          <div className="container">
            <Servicos />
          </div>
        </section>
      </main>

      <footer id="contato">
        <Rodape />
      </footer>
    </div>
  );
}
