"use client"
import * as P from "./projects.style";
import ProjectCard from "./ProjectCard";
import { projectPics } from "../../utils";


export default function Projects() {
  return(
    <P.Projects>
      <P.Heading>
        <h4>Meus</h4>
        <h2>Projetos</h2>
      </P.Heading>
      { projectPics.map((project) => (
        <ProjectCard
          key={project.id}
          img={project.img}
          tag={project.tag}
          name={project.name}
        />
      )) }
    </P.Projects>
  );
}
