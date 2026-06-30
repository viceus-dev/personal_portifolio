import PROJECTS from "./ProjectData.jsx";
import Seta from "/images/seta.svg";
import coding from "/images/coding.png";

function ProjectsSection() {
  const STATUS = {
    Desenvolvimento: {
      label: "Desenvolvimento",
      className: "bg-yellow-400 text-black",
    },
    Planejamento: {
      label: "Planejamento",
      className: "bg-blue-500 text-white",
    },
  };

  return (
    <section className="mt-32 px-4 sm:px-6 lg:px-0">

      {/* Title */}
      <h2 className="text-3xl font-bold md:text-5xl">
        <span className="text-[#721CFF]">Trabalhos</span> e{" "}
        <span className="text-[#721CFF]">Projetos</span> recentes
      </h2>

      {/* Grid */}
      <div id="Projetos" className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {PROJECTS.map((project) => {

          const status = STATUS[project.status] || {
            label: project.status,
            className: "bg-gray-400 text-black",
          };

          return (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-xl border border-[#1A1A1A] bg-[#F5F5F5]"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={coding}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                {/* Status */}
                <div className="absolute right-4 top-4">
                  <span
                    className={`px-3 py-1 rounded text-xs font-medium ${status.className}`}
                  >
                    {status.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-500">
                  {project.subtitle}
                </p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-[#721CFF] px-3 py-1 text-xs text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  className="mt-auto flex items-center justify-end gap-3 pt-6 text-sm font-semibold text-black transition hover:text-[#721CFF]"
                >
                  Explorar projeto
                  <img src={Seta} alt="" className="h-4 w-4 text-[#1A1A1A] hover:text-[#721CFF]" />
                </a>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default ProjectsSection;