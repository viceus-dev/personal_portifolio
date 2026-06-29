import seta from "/images/seta.svg"
import coding from "/images/coding.png"
function ProjectsSection(){
    const ProjectItem = [{
        status : "Desenvolvimento",
        title : "Análise SQL Vendas",
        subtitle : "Análise SQL de dados de vendas de um e-commerce fornecidos pelo Kaggle",
        stack : ["SQLite","Python","Pandas","React","Tailswind"],
        link : "#"
    }]

    const test_stack = ["SQLite","Python","Pandas","React","TailWind"]
    return(
        <div>
            <div className=" span-rows-2 text-4xl font-bold">
                <p><span className="text-[#721CFF]">Trabalhos</span> e <span className="text-[#721CFF]">Projetos</span> recentes</p>
            </div>

            <div className="mt-20 flex flex-wrap justify-between">
                <div className="w-90 h-120 border-[2px] mb-20 rounded-[12px] overflow-hidden">
                    <div className="relative">
                        <img src={coding} alt="" className="w-full object-fit rounded-t-[10px]"/>
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-[#f5f5f5] rounded-[5px]">
                            <div className="w-2 h-2 bg-[#FFB703] rounded-[2px]"></div>
                            <div>Desenvolvimento</div>
                        </div>
                    </div>

                    <div className="px-4 mt-4">
                        <div className="font-bold text-heading mb-4 text-xl">Análise SQL Vendas</div>
                        <div className="text-body text-sm mb-4">Análise SQL de dados de vendas de um e-commerce fornecidos pelo Kaggle</div>
                        <div className="flex gap-4 flex-wrap text-xs">
                            {test_stack.map(function(item,index){
                                return(
                                    <div key={index} className=" px-3 py-1 rounded-[5px] bg-[#721CFF] ">{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mt-4 py-5 bg-[#1A1A1A] flex justify-end items-center gap-4 pr-10">
                        <p className="text-[#F5F5F5]">Explorar projeto</p>
                        <img src={seta} alt="" />
                    </div>
                </div>
                <div className="w-90 h-120 border-[2px] mb-20 rounded-[12px] overflow-hidden">
                    <div className="relative">
                        <img src={coding} alt="" className="w-full object-fit rounded-t-[10px]"/>
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-[#f5f5f5] rounded-[5px]">
                            <div className="w-2 h-2 bg-[#FFB703] rounded-[2px]"></div>
                            <div>Desenvolvimento</div>
                        </div>
                    </div>

                    <div className="px-4 mt-4">
                        <div className="font-bold text-heading mb-4 text-xl">Análise SQL Vendas</div>
                        <div className="text-body text-sm mb-4">Análise SQL de dados de vendas de um e-commerce fornecidos pelo Kaggle</div>
                        <div className="flex gap-4 flex-wrap text-xs">
                            {test_stack.map(function(item,index){
                                return(
                                    <div key={index} className=" px-3 py-1 rounded-[5px] bg-[#721CFF] ">{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mt-4 py-5 bg-[#1A1A1A] flex justify-end items-center gap-4 pr-10">
                        <p className="text-[#F5F5F5]">Explorar projeto</p>
                        <img src={seta} alt="" />
                    </div>
                </div>
                <div className="w-90 h-120 border-[2px] mb-20 rounded-[12px] overflow-hidden">
                    <div className="relative">
                        <img src={coding} alt="" className="w-full object-fit rounded-t-[10px]"/>
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-[#f5f5f5] rounded-[5px]">
                            <div className="w-2 h-2 bg-[#FFB703] rounded-[2px]"></div>
                            <div>Desenvolvimento</div>
                        </div>
                    </div>

                    <div className="px-4 mt-4">
                        <div className="font-bold text-heading mb-4 text-xl">Análise SQL Vendas</div>
                        <div className="text-body text-sm mb-4">Análise SQL de dados de vendas de um e-commerce fornecidos pelo Kaggle</div>
                        <div className="flex gap-4 flex-wrap text-xs">
                            {test_stack.map(function(item,index){
                                return(
                                    <div key={index} className=" px-3 py-1 rounded-[5px] bg-[#721CFF] ">{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mt-4 py-5 bg-[#1A1A1A] flex justify-end items-center gap-4 pr-10">
                        <p className="text-[#F5F5F5]">Explorar projeto</p>
                        <img src={seta} alt="" />
                    </div>
                </div>
                

            </div>
        </div>
    )


}

export default ProjectsSection;