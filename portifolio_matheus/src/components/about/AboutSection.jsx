function AboutSection() {
  return (
    <section className="mt-32 px-4 sm:px-6 lg:px-0">

      {/* Header */}
      <div  id="Sobre" className="grid gap-10 md:grid-cols-2 md:items-center">

        <div className="text-3xl font-bold leading-tight md:text-5xl">
          <p>
            Generalista por{" "}
            <span className="text-[#721CFF]">Natureza</span>,
          </p>
          <p>
            <span className="text-[#721CFF]">Engenheiro</span> por obsessão
          </p>
        </div>

        <div className="text-[#1A1A1A] leading-7">
          <p className="mb-4">
            Olá, eu sou{" "}
            <span className="font-bold text-[#721CFF]">
              Matheus Vicente.
            </span>
          </p>

          <p>
            Meu foco é resolver problemas e transformar ideias em soluções reais.
            Isso me levou a um perfil generalista envolvendo desenvolvimento,
            dados, automação e visão de produto. Meu objetivo é atuar com
            Machine Learning e soluções de ponta a ponta.
          </p>
        </div>

      </div>

      <hr className="my-25 border border-2 rounded-full border-[#721CFF]" />

      {/* GRID PRINCIPAL */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* DEV + ML */}
        <div className="flex flex-col gap-6 lg:col-span-2">

          {/* Dev */}
          <div className="rounded-xl border border-[#1A1A1A] border-2 p-6">
            <p className="mb-3 font-semibold">Dev Software</p>
            <p className="text-[#1A1A1A]">
              React • JavaScript • HTML • CSS • REST APIs • Docker • MongoDB • SQLite
            </p>
          </div>

          {/* ML */}
          <div className="rounded-xl border border-[#1A1A1A] border-2 p-6">
            <p className="mb-3 font-semibold">Dados e ML</p>
            <p className="text-[#1A1A1A]">
              Python • Pandas • Matplotlib • Scikit-learn • Streamlit
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="rounded-xl bg-[#1A1A1A] p-6 text-white flex flex-col justify-between">

          <div>
            <p className="mb-4 text-2xl font-bold">
              Vamos <span className="text-[#721CFF]">construir</span> algo?
            </p>

            <p className="text-zinc-300">
              Desenvolvimento soluções focadas em dados, automação e experiência moderna.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-8 sm:flex-row justify-center px-8">
            <a
              href="https://www.linkedin.com/in/viceus"
              className="rounded-full border border-zinc-600 px-6 py-2 text-center transition hover:bg-[#721CFF] hover:border-transparent"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=viceus.dev@gmail.com&su=Contato"
              className="rounded-full border border-zinc-600 px-6 py-2 text-center transition hover:bg-[#721CFF] hover:border-transparent"
              target="_blank"
            >
              Email
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;