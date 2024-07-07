import React from "react";
import DashboarHome from "./DashboarHome";

const ProjectChildren = () => {
  return (
    <section>
      <p>No Added Projects Yet!</p>
    </section>
  );
};

function Projects(props) {
  return <DashboarHome heading="Projects" children={<ProjectChildren />} />;
}

export default Projects;
