import HeaderMenuItem from "./header_menu_item";

function HeaderMenu(){

    const menu_items = ["Home","Habilidades","Projetos"]
    
    return(
        <div>
            <ul className="flex gap-8">
                {menu_items.map(function(item){
                    return (
                        <HeaderMenuItem target={item} value={item}/>
                    )
                })}

                <a href="/docs/Matheus_Rodrigues_CV.pdf" className="relative group" download>
                    Baixar CV
                    <span className="absolute left-0 -bottom-0 w-0 h-1 rounded-xl bg-[#721CFF] transition-all duration-300 group-hover:w-full"></span>
                </a>
            </ul>

        </div>
    )
}

export default HeaderMenu;