import HeaderMenu from "./HeaderMenu";

function HeaderSection(){
    return (
        <div className="flex justify-between items-center gap-16 py-4 px-8 mb-4">
            <div>
                {/*Empty*/}
            </div>

            <div>
                  {/*Menu -> MenuItems*/}
                  <HeaderMenu/>
            </div>

            <div>
                 {/*Image CTA */}
                <img src="/images/Email-me.svg" alt="Email me"/>
            </div>    
        </div>
    );
};

export default HeaderSection;