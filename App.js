import React from "react";
import ReactDOM from "react-dom/client";

// JSX=>React.createElement=>Object=>HTML(Rendered in React DOM)
//below is a react element
const Title=()=>(
    <div id="title" key="h2">
        <img alt="logo" src="https://www.foodexpressdronten.nl/www.foodexpressdronten.nl/img/logo.png"/>
    </div>
);

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
const Header= ()=>{
    return (
    <div className="header">
        {/* {Title()} (comments in jsx are written in parenthesis)*/}
        <Title/>
        <div className="nav-items">
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

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

const Body=()=>(
    <>
    <h1>Body</h1>
    </>
);

const Footer=()=>(
    <>
    <h1>Footer</h1>
    </>
);

const AppLayout=()=>{
    return (
        //<React.Fragment can be replaced by empty tag <></>
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
};
const styleObj={
    backgroundColor: "red",
    // textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems:"center",
};

// const jsx=(
//     // <div style={{backgroundColor: "red"}}> direct way of inline css
//     // using{{}}
//     <div style={styleObj}>
//         <h1>JSX</h1>
//         <h2>Second JSX</h2>
//     </div>
// );

const root=ReactDOM.createRoot(document.getElementById ("root"));

// root.render(heading);
// to render functional component use:
root.render(<AppLayout/>);

console.log("Hello");