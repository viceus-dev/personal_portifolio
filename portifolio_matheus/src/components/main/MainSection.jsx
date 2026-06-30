import javascript from "../../assets/Images/javascript.svg";
import pandas from "../../assets/Images/pandas.svg";
import python from "../../assets/Images/python.svg";
import react_icon from "../../assets/Images/react_icon.svg";
import sqlite from "../../assets/Images/sqlite.svg";
import tailwind from "../../assets/Images/tailwind.svg";
import SecondCta from "./SecondCta";
;

function MainSection() {
  const work_stack = [
    { img: python, name: "Python" },
    { img: javascript, name: "Javascript" },
    { img: react_icon, name: "React" },
    { img: tailwind, name: "TailwindCss" },
    { img: sqlite, name: "Sqlite" },
    { img: pandas, name: "Pandas" }
  ];

  return (
    <div className="mt-20 flex flex-col items-center relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#721CFF] opacity-20 blur-[100px]" />

      {/* Estado */}
      <p className="font-semibold mt-10">Belém/PA</p>

      {/* Logo */}
      <h1 className="font-nexus text-[259px] leading-none  mt-10">Viceus.dev</h1>

      {/* Subtitulo */}
      <h2 className="font-bold text-[20px]">
        Software Developer focado em Dados e Automação
      </h2>

      {/* Descrição */}
      <p className="text-center">
        Desenvolvimento fullstack e análise de dados focados em
        <span className="block text-[#721CFF] opacity-70">
          automação, performance e fluidez operacional.
        </span>
      </p>

      {/* Botões */}
      <div className="flex gap-10 mt-15">
        <a href="#" className="w-[200px] h-[60px] bg-[#1A1A1A] hover:bg-[#721CFF] duration-200 flex items-center justify-center text-[#f5f5f5] rounded-[10px]">Ver Projetos</a>
        <a href="#" className="w-[200px] h-[60px] bg-[#1A1A1A] hover:bg-[#721CFF] duration-200 flex items-center justify-center text-[#f5f5f5] rounded-[10px]">Entrar em Contato</a>
      </div>

      {/* Stack */}
      <div className="mt-20">
        <ul className="flex gap-6">
          {work_stack.map((stack, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={stack.img} alt={stack.name} className="h-5 w-5" />
              <p>{stack.name}</p>
            </li>
          ))}
        </ul>
      </div>

        {/* Second Cta */}
        <SecondCta />

    </div>
  );
}

export default MainSection;