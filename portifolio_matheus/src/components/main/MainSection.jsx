import javascript from "/images/icons/javascript.svg";
import pandas from "/images/icons/pandas.svg";
import python from "/images/icons/python.svg";
import react_icon from "/images/icons/react_icon.svg";
import sqlite from "/images/icons/sqlite.svg";
import tailwind from "/images/icons/tailwind.svg";

import SecondCta from "./SecondCta";

const WORK_STACK = [
  { img: python, name: "Python" },
  { img: javascript, name: "JavaScript" },
  { img: react_icon, name: "React" },
  { img: tailwind, name: "Tailwind CSS" },
  { img: sqlite, name: "SQLite" },
  { img: pandas, name: "Pandas" },
];

function MainSection() {
  return (
    <section
      id="Home"
      className="relative mt-20 flex flex-col items-center px-4 sm:px-6"
    >
      {/* Cidade */}
      <p className="font-semibold">
        Belém • PA
      </p>

      {/* Hero */}
      <div className="relative mt-6 flex justify-center">
        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -z-10
            h-[550px]
            w-[550px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-600/20
            blur-[180px]
          "
        />

        <h1
          className="
            font-nexus
            leading-none
            text-center
            text-[clamp(10rem,12vw,14rem)]
            select-none
          "
        >
          VICEUS.DEV
        </h1>
      </div>

      {/* Subtítulo */}
      <h2 className="mt-4 text-center text-xl font-bold md:text-3xl">
        Software Developer focado em Dados e Automação
      </h2>

      {/* Descrição */}
      <p className="mt-6 max-w-2xl text-center leading-8">
        Desenvolvimento fullstack e análise de dados focados em
        <span className="block text-violet-600">
          automação, performance e fluidez operacional.
        </span>
      </p>

      {/* Botões */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row text-[#F5F5F5]">
        <a href="#Projetos" className=" flex h-14 w-full max-w-xs items-center justify-center rounded-xl
            bg-[#1A1A1A]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-violet-600
            hover:shadow-lg
            hover:shadow-violet-600/30
            sm:w-[200px] ">
          Ver Projetos
        </a>

       <a href="#Projetos" className=" flex h-14 w-full max-w-xs items-center justify-center rounded-xl
            bg-[#1A1A1A]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-violet-600
            hover:shadow-lg
            hover:shadow-violet-600/30
            sm:w-[200px] ">
          Entrar em Contato
        </a>
      </div>

      {/* Tecnologias */}
      <ul className="mt-16 flex flex-wrap justify-center gap-4">
        {WORK_STACK.map((stack) => (
          <li
            key={stack.name}
            className=" flex items-center gap-2 px-4 py-2">
            <img
              src={stack.img}
              alt={stack.name}
              className="h-5 w-5"
            />
            <span className="text-sm md:text-base">
              {stack.name}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA secundário */}
      <SecondCta />
    </section>
  );
}

export default MainSection;