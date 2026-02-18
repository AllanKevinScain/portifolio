import {
  Banner,
  Diferenciais,
  ListOfProjects,
  Rodape,
  Servicos,
} from "./components";

export function AppPage() {
  return (
    <>
      <div className="flex flex-col gap-24">
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
      </div>

      <footer id="contato">
        <Rodape />
      </footer>
    </>
  );
}
