function HeaderMenuItem({target, value}){
    return (
        <li>
            <a href={`#${target}`} className="relative group" >{value}
                <span className="absolute left-0 -bottom-1 w-0 h-1 rounded-xl bg-[#721CFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
    
        </li>
    )
}

export default HeaderMenuItem;