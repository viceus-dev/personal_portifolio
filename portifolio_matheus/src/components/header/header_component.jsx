import HeaderMenu from "./header_menu";

function HeaderComponent(){
    return (
        <div className="flex justify-between items-center gap-16 py-4 px-8">
            <div>
                {/*Empty*/}
            </div>

            <div>
                  {/*Menu -> MenuItems*/}
                  <HeaderMenu/>
            </div>

            <div>
                 {/*Image CTA */}
                <img src="./src/assets/Images/Email-me.svg" alt="Email me"/>
            </div>    
        </div>
    );
};

export default HeaderComponent;