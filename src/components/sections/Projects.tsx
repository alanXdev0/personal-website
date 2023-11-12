"use client";

import ProjectDetailsInterface from "@/interfaces/ProjectDetailsInterface";
import { useEffect, useState } from "react";
import ProjectDetailsCard from "../ProjectDetailsCard";

export default function Projects() {
  const [projectsDetails, setProjectsDetails] = useState<
    ProjectDetailsInterface[]
  >([]);
  const [dataFetched, setDataFetched] = useState<boolean>(false);

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

  async function fetchData() {
    const response = await fetch("/data/projects.json");
    const data = await response.json();
    setProjectsDetails(data);
  }

  function renderCards() {
    return projectsDetails.map((project, index) => {
      return <ProjectDetailsCard key={index} projectDetails={project} />;
    });
  }

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-800/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <ul className="group/list">{renderCards()}</ul>
    </section>
  );
}
