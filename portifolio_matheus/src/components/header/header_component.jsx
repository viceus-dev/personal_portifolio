import Menu from "./menu";

function HeaderComponent(){
    return (
        <div>
            <div>
                {/*Empty*/}
            </div>

            <div>
                  {/*Menu -> MenuItems*/}
                  <Menu />
            </div>

            <div>
                 {/*Image CTA */}
                <img src="./src/assets/Images/Email-me.svg" alt="Email me"/>
            </div>
            
        </div>
    );
};

export default HeaderComponent