import { useState, useEffect } from "react";
const loggedInUser=()=>{
    return true;
}

export const Title=()=>(
    <div id="title" key="h2">
        <img alt="logo" src="https://www.foodexpressdronten.nl/www.foodexpressdronten.nl/img/logo.png"/>
    </div>
);
;
// named export
export const Header= ()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [title, setTitle]=useState("Food Express");

    useEffect(()=>{
        console.log("useEffect");
    },[]);

    console.log("render")
    return(
    <div className="header">
        {/* {Title()} (comments in jsx are written in parenthesis)*/}
        <Title/>

        <h1>{title}</h1>
        {/* <button onClick={
            ()=>{
                
                if(title=="Food Express"){
                    setTitle("New Food App");
                }else{
                    setTitle("Food Express");
                }
            }
        }>Change Title</button> */}
        <div className="nav-items">
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            </ul>

            {/* {only accepts javascript expression not statement
            e.g., instead of a=10; console.log(a);
            use: ((a=10), console.log(a))
            } */}

        </div>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>logout</button>:<button onClick={()=>setIsLoggedIn(true)}>login</button>}
    </div>
    );
};

// default export
// export default Header;