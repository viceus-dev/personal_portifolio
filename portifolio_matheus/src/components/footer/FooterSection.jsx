function FooterSection() {
  return (
    <footer className="mt-32 w-full bg-[#1A1A1A] text-[#F5F5F5] px-6 sm:px-10 lg:px-24 py-16">

      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">

        {/* Logo */}
        <div className="font-nexus text-9xl sm:text-8xl lg:text-9xl">
          VICEUS.DEV
        </div>

        {/* Text */}
        <div className="max-w-md">
          <div className="text-xl sm:text-2xl mb-4">
            Disponível para{" "}
            <span className="text-[#721CFF]">projetos</span> e{" "}
            <span className="text-[#721CFF]">oportunidades</span>
          </div>

          <p className="text-sm sm:text-base text-zinc-300">
            Projetos em dados, automação e interfaces modernas.
          </p>
        </div>

        {/* Links */}
        <ul className="space-y-3 text-sm sm:text-base">
          <li>
            <a
              href="mailto:viceus.dev@gmail.com"
              className="hover:text-[#721CFF] transition"
            >
              viceus.dev@gmail.com
            </a>
          </li>

          <li>
            <a
              href="https://github.com/viceus-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#721CFF] transition"
            >
              github.com/viceus-dev
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/viceus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#721CFF] transition"
            >
              linkedin.com/in/viceus
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}

export default FooterSection;