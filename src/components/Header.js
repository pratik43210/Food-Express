import { useState, useContext } from "react";
// Logo comes as default export
import Logo from "../assets/img/food-logo.png"
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
// import useOnline from "../utils/useOnline";

// const loggedInUser=()=>{
//     return true;
// }



const Title=()=>{
    return(
    // routing using anchor tag reloads the whole page which is not good
    // we want to create a single page application(SPA)
    <a id="title" href="/">
        <img alt="logo" src={Logo} className="h-6 md:h-20 sm:h-14 px-1 ml-2 my-2 rounded-full bg-white"/>
    </a>
    );
};
// named export
export const Header= ()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    // const [title, setTitle]=useState("Food App");

    // useEffect(()=>{
    //     console.log("useEffect");
    // },[]);
    // const isOnline=useOnline();

    // const {user}=useContext(UserContext);
    return(
    <div className="header min-w-[300px] flex justify-between items-center bg-pink-100 sticky top-0 shadow-md p-2">
        {/* {Title()} (comments in jsx are written in parenthesis)*/}
        <div className="brand flex">
        <Title/>
        
        {/* <h2 className="title">Food App</h2> */}
        </div>

        {/* <h2>{title}</h2> */}
        {/* <button onClick={
            ()=>{
                
                if(title=="Food Express"){
                    setTitle("New Food App");
                }else{
                    setTitle("Food Express");
                }
            }
        }>Change Title</button> */}
        <div className="nav-items sm:text-base  text-[3vw] grow-[0.4]">
            <ul className="flex grow-1 justify-around">
            <li className=" hover:bg-red-100 p-1 rounded-md"><Link to="/" className="link">Home</Link></li>
            <li className=" hover:bg-red-100 p-1 rounded-md"><Link to="/about" className="link">About</Link></li>
            <li className=" hover:bg-red-100 p-1 rounded-md"><Link to="/contact" className="link">Contact</Link></li>
            <li className=" hover:bg-red-100 p-1 rounded-md"><Link to="/instamart" className="link">Instamart</Link></li>
            <li className=" hover:bg-red-100 rounded-md cursor-pointer p-1">Cart</li>
            </ul>

            {/* {only accepts javascript expression not statement
            e.g., instead of a=10; console.log(a);
            use: ((a=10), console.log(a))
            } */}
 
        </div>
        {/* <h1 className="text-xs">{isOnline? "🟢" : "🔴"}</h1>
        {user.name} */}
        {isLoggedIn?<button className="shadow-md sm:text-base text-[2.8vw] sm:w-16 bg-red-300 p-1 rounded-md mr-2 hover:bg-red-400  hover:text-white" onClick={()=>setIsLoggedIn(false)}>logout</button>:<button className="shadow-md sm:text-base text-[2.8vw] bg-red-300 p-1 rounded-md sm:w-16 mr-2 hover:bg-red-400 hover:text-white" onClick={()=>setIsLoggedIn(true)}>login</button>}
    </div>
    );
};

// default export
// export default Header;