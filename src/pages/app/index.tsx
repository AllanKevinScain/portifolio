import {
  Banner,
  Diferentials,
  ListOfProjects,
  CustomFooter,
  WorkAndEvents,
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
            <Diferentials />
          </div>
        </section>

        <section id="services">
          <div className="container">
            <WorkAndEvents />
          </div>
        </section>
      </div>

      <footer id="contact">
        <CustomFooter />
      </footer>
    </>
  );
}
