import {
  Banner,
  Diferenciais,
  ListOfProjects,
  Rodape,
  Servicos,
  TechList,
} from "./components";

export function AppPage() {
  return (
    <>
      <div className="flex flex-col gap-24">
        <section id="home">
          <Banner />
        </section>

        <section id="projects">
          <div className="container">
            <ListOfProjects />
          </div>
        </section>

        <section id="tech">
          <div className="container">
            <TechList />
          </div>
        </section>

        <section id="differentials">
          <div className="container">
            <Diferenciais />
          </div>
        </section>

        <section id="services">
          <div className="container">
            <Servicos />
          </div>
        </section>
      </div>

      <footer id="contact">
        <Rodape />
      </footer>
    </>
  );
}
