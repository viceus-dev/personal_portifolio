function ProfileComponent(){
    return(
        <div className="mt-25 grid gap-15 mt-40">
            <div className=" span-rows-2 text-4xl font-bold">
                <p>Generalista por <span className="text-[#721CFF]">Natureza</span>,</p>
                <p><span className="text-[#721CFF]"> Engenheiro</span> por Obssessão</p>
            </div>
            <div className="text-left flex-columns">
                <p className="mb-4">Olá, eu sou <span className="text-[#721CFF] font-bold">Matheus Vicente.</span></p>
                <p>Mais do que programar, meu foco é resolver problemas e transformar ideias em soluções reais.
                    Isso me levou a desenvolver um perfil generalista, unindo desenvolvimento, dados, automação e visão de produto.
                    Meu objetivo é direcionar meu perfil para a área de Machine Learning e construir soluções tecnológicas de ponta a ponta.</p>
            </div>

            <hr className="h-[2px] bg-[#721CFF] border-0 mt-10 mb-10"/>
            
            <div className="grid grid-cols-3 grid-rows-3 gap-10">
                <div className="col-span-2 border-[2px] rounded-[10px] px-8 py-8">
                    <p className="font-bold mb-4">Dev Software</p>
                    <p>React • JavaScript • HTML • CSS • REST APIs • Docker • MongoDB • SQLite</p>
                </div>

                <div className="row-span-2 bg-[#1A1A1A] text-[#F5F5F5] px-8 py-8 rounded-[10px]">
                    <p className="font-bold text-4xl mb-4">Vamos <span className="text-[#721CFF] font-bold">construir</span> algo?</p>
                    <p>Desenvolvo soluções focadas em dados, automação e experiência moderna.</p>
                    <div className="mt-10 flex gap-10 items-center ">
                        <a href="#" className="w-40 h-10 border-solid border-[2px] boder-[#F5F5F5] rounded-full flex items-center justify-center hover:border-[0px] hover:bg-[#721CFF] trasition-all duration-90"> Linkedin</a>
                        <a href="#" className="w-40 h-10 border-solid border-[2px] boder-[#F5F5F5] rounded-full flex items-center justify-center hover:border-[0px] hover:bg-[#721CFF] trasition-all duration-90">Email</a>
                    </div>
                </div>

                <div className="col-span-2 border-[2px] rounded-[10px] px-8 py-8">
                    <p className="font-bold mb-4" >Dados e ML</p>
                    <p>Python • Pandas • Matplotlib • Scikit-learn • Streamlit</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;