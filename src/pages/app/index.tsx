import {
  Banner,
  CustomFooter,
  Diferentials,
  ListOfProjects,
  TechList,
  WorkAndEvents,
} from "./components";

export function AppPage() {
  return (
    <>
      <div className="flex flex-col gap-24">
        <section className="flex flex-col items-center" id="home">
          <Banner />
        </section>

        <section className="flex flex-col items-center" id="projects">
          <div className="container">
            <ListOfProjects />
          </div>
        </section>

        <section className="flex flex-col items-center" id="tech">
          <div className="container">
            <TechList />
          </div>
        </section>

        <section className="flex flex-col items-center" id="differentials">
          <div className="container">
            <Diferentials />
          </div>
        </section>

        <section className="flex flex-col items-center" id="services">
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
