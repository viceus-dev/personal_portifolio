function FooterSection(){
    return (
        <div className="w-full h-[200px] bg-[#1A1A1A] flex justify-between items-center px-64 text-[#F5F5F5]">
            <div className="font-nexus text-8xl ">VICEUS.DEV</div>
            <div>
                <div className="text-2xl mb-4">Disponível para <span className="text-[#721CFF]">projetos</span> e <span className="text-[#721CFF]">oportunidades</span></div>
                <div>Projetos em dados, automação e interfaces modernas.</div>
            </div>
            <div>
                <ul>
                    <li className="mb-4">
                        <a href="https://viceus.dev@gmail.com" target="_blank">viceus.dev@gmail.com</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/viceus-dev" target="_blank">github.com/viceus-dev</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/viceus" target="_blank">linkedin.com/in/viceus</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterSection;