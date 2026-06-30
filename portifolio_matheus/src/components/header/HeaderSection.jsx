import HeaderMenu from "./HeaderMenu";

function HeaderSection(){
    return (
        <header className="flex justify-between items-center py-4 px-8 mb-4">
            <div>
                {/*Empty*/}
            </div>

            <div>
                  {/*Menu -> MenuItems*/}
                  <HeaderMenu/>
            </div>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=viceus.dev@gmail.com&su=Contato" target="_blank">
                 {/*Image CTA */}
                <img src="/images/Email-me.svg" alt="Email me"/>
            </a>    
        </header>
    );
};

export default HeaderSection;