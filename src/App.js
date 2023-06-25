import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//* header is exported by default and {Title} exported by name;
// import Header, {Title} from "./components/Header";
// if we use export const Header we should import through
// object destructuring
// while importing we may or may not include file extension
// ../ means upper level in file structure
import {Header} from "./components/Header";
// import * as Obj from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
// imgUrl is exported by name so written within {} 
// * We can also save react code files as file.jsx
// * Ex: Header.js can be written as Header.jsx to 
// * indicate that file has React code
import About, {AboutUs} from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Profile from "./components/ProfileClass";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";

//JSX=>React.createElement=>Object=>HTML(Rendered in React DOM)
//below is a react element
//const Title=()=>(
//     <div id="title" key="h2">
//         <img alt="logo" src="https://www.foodexpressdronten.nl/www.foodexpressdronten.nl/img/logo.png"/>
//     </div>
//);

// React Component (?Everything is a component in react?)
// two types- 
// **1.functional component (NEW- we will use most of the time)
// **2.class based component (OLD)
// can also be written as function(){...}
// header component gives error
// **In JSX we can write any javascript code within {}
// **in below functional component we made a function call "Title()"
// **which is js code so we put it within {}
// use PascalCase to write functional componenet
// as other formats are not supported for <Comp/> suntax
// used in rendering and jsx
// const Header= ()=>{
//     return (
//     <div className="header">
//         {/* {Title()} (comments in jsx are written in parenthesis)*/}
//         <Title/>
//         <div className="nav-items">
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Cart</li>
//             </ul>
//         </div>
//     </div>
//     );
// };

// we can also skip return
// const HeaderComponent2= ()=>(
//     <div>
//         <h1>Namaste React functional component</h1>
//         <h2>This is a h2 tag</h2>
//     </div>
// );
//Here we used () brackets for funtional component
//This is exactly same as the other code
//This is an arrow function thing and not react feature

// const AppLayout=()=>{
//     return (
//         // {..} if we put this block of javascript code,
//         // outside jsx code, we must enclose jsx within close
//         // brackets
//         {/**
//          Header
//          -logo
//          -nav items
//          -cart
//          Body
//          -search bar
//          -restaurantList
//          -restaurantCards
//             -image
//             -name
//             -rating
//             -cuisines
//          footer
//          -links
//          -copyright
//         */
//         }
//         (<React.Fragment>

//         </React.Fragment>)
//     );
// };



// we can put hard coded stuff in config.js or constants.js file
// const imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

/**Chunking
 * Code Splitting
 * Dynaic Binding
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 */

const Instamart=lazy(()=>import("./components/Instamart"));

const AppLayout=()=>{
    const [user, setUser]=useState({
        name:"Pratik",
        email:"pratik@abc.com",
    });

    return (
        //<React.Fragment can be replaced by empty tag <></>
        // context is only modified for those components
        // which are wrapped in <UserContext.Provider>
        <Provider store={store}>
            <UserContext.Provider value={{
                user:user,
                setUser:setUser,
            }}>
                {/* {Obj.Title()} */}
                <Header/>
                {/* <About/> // if path is /about */}
                {/* <Body/> //if path is / */}
                <Outlet/>
                <Footer/>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"",
                        element:<AboutUs/>,
                    },
                    {
                        path:"profile",
                        element:<Profile/>,
                    },
                ],
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/instamart",
                element:(
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart/>
                    </Suspense>
                ),
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element: <Cart/>
            },
        ],
    },
]);

const styleObj={
    backgroundColor: "red",
    // textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems:"center",
};

// const jsx=(
    // <div style={{backgroundColor: "red"}}> direct way of inline css
    // using{{}}
//     <div style={styleObj}>
//         <h1>JSX</h1>
//         <h2>Second JSX</h2>
//     </div>
// );

const root=ReactDOM.createRoot(document.getElementById ("root"));

// root.render(heading);
// to render functional component use:
root.render(<RouterProvider router={appRouter}/>);

// console.log("Hello");