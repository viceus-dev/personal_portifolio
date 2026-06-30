import linkedin from "/images/linkedin.svg";
import github from "/images/github.svg";
import email from "/images/email.svg";

const SOCIAL_LINKS = [
  {
    img: linkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/viceus",
  },
  {
    img: github,
    name: "GitHub",
    link: "https://github.com/viceus-dev",
  },
  {
    img: email,
    name: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=viceus.dev@gmail.com&su=Contato",
  },
];

function SecondCta() {
  return (
    <section className="mt-20 w-full  rounded-4xl border border-2 px-6 py-5">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        
        {/* Status */}
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>

          <p className="font-medium">
            Disponível para trabalhar
          </p>
        </div>

        {/* Especialidades */}
        <p className=""> 
          Automação • Software • Dados
        </p>

        {/* Redes */}
        <ul className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="transition duration-200 hover:scale-110 hover:opacity-80"
              >
                <img
                  src={link.img}
                  alt={link.name}
                  className="w-6 h-6"
                />
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default SecondCta;