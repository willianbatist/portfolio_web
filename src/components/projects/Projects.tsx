"use client"
import * as P from "./projects.style";
import ProjectCard from "./ProjectCard";
import { projectPics } from "../../utils";


export default function Projects() {
  return(
    <P.Projects id="projetos">
      <P.Heading>
        <h4>Meus</h4>
        <h2>Projetos</h2>
      </P.Heading>
      <div className="cards">
        { projectPics.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            tag={project.tag}
            name={project.name}
            link={project.url}
          />
        )) }
      </div>
    </P.Projects>
  );
}
