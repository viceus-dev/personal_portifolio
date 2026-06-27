import linkedin from "/images/linkedin.svg"
import github from "/images/github.svg"
import email from "/images/email.svg"

function SecondCta(){
    const links = [
        {img : linkedin, name: "Linkedin", link : "https://www.linkedin.com/in/viceus"},
        {img : github, name: "Github", link : "https://github.com/viceus-dev"},
        {img : email, name: "Email", link : "https://mail.google.com/mail/?view=cm&fs=1&to=viceus.dev@gmail.com&su=Contato"}
    ]

    return (
        <div className="flex justify-around h-[49px] border-2 rounded-full w-2/3 mt-15 items-center">
            {/* Available */}
            <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#00E692] rounded-[2px]"></div>
                <p>Disponível para trabalhar </p>
            </div>

            {/* Profile */}
             <div>
                <p>
                    Automação / Software / Dados
                </p>
             </div>

            {/* Links */}

            <ul className="flex gap-4">
                {links.map(function(link,index){
                    return(
                        <li key={index}>
                            <a href={link.link}>
                                <img src={link.img} alt={link.name} />
                            </a>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default SecondCta;


