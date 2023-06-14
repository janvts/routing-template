import React from "react";
import {Layout, Menu, MenuProps} from "antd";
import {Outlet, Link, useOutlet, NavLink, useNavigate, useLocation} from "react-router-dom";
import HomeInformation from "./components/homeinformation";
const { Header} = Layout;


function capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export const Home: React.FC = () =>{

    const navigate = useNavigate(); //needed to navigate automatically inside a function
    const outlet = useOutlet() //needed to check conditionally if an Outlet is rendered or not
    const location = useLocation(); // get the currently selected path
    const selectedKey = location.pathname.substring(1);

    //Modify this function for showing your components, do not forget to add them in router-managment.tsx as well!
    const topMenuItems: MenuProps["items"] = ["component1", "component2"].map(
        (key) => ({
            key,
            label: `${capitalizeFirstLetter(key)}`,
        })
    );

    function backToHome(){
        navigate("/")
    }

    return(
        <Layout>
            <Header className="header" >
                <div className='logo'  onClick={backToHome} style={{ cursor: 'pointer' }}>
                    <img src={`${process.env.PUBLIC_URL}/TMDT_Logo_light_complete.png`} alt="logo"/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[selectedKey]}
                    >
                    {topMenuItems.map((item) =>{
                        if(item){
                        return(
                        <Menu.Item key={item.key}>
                            <Link to={`/${item.key}`}>{capitalizeFirstLetter(item.key as string)}</Link>
                        </Menu.Item>
                    )}})}
            </Menu>
            </Header>
            {outlet ? (
                /* Content to show when the Outlet has children, show Outlet as Content under the topmenu if it is clicked!*/
                <Outlet/>
            ) : (
                /* Content to show when the Outlet has no children */
               <HomeInformation/>
            )}
       </Layout>
    )
}

