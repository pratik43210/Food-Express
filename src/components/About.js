// import { Component, StrictMode } from "react";
import { Link, Outlet} from "react-router-dom";
// import Profile from "./ProfileClass";
// we can use different name for default export
// import ProfileFunctionalComponent from "./Profile";

export const AboutUs=()=>{
    return(
        <div className=" bg-orange-100 p-2">
            <h1 className=" font-semibold text-3xl mb-4">About us Page</h1>
            <p className="text-xl mb-4">
            {" "}
            welcome to our website! 🚀
            </p>
            <Link  to="profile"><h3 className=" text-blue-800 font-medium">About profile</h3></Link>
            <Link to="/"><h3 className=" text-blue-800 font-medium">Go Back ⬅️</h3></Link>
        </div>
    );
}

// export class AboutUs extends Component{
// // class About extends Component{
//     constructor(props){
//         super(props);
//         console.log("Parent constructor");
//     }

//     async componentDidMount(){
//         console.log("Parent componentDidMount");
//     }

//     render(){
//         console.log("Parent render");
//         return(
//         <div>
//             <h1>About us Page</h1>
//             <p>
//             {" "}
//             This is Namaste React Live Course Chapter 07- Finding the Path 🚀
//             </p>
//             {/* <Profile name={"first child"} xyz="abc"/>
//             <Profile name={"Second child"} xyz="def"/> */}
//             <Link  to="profile"><h3>About profile</h3></Link>
//             <Link to="/"><h3>Go Back</h3></Link>
//         </div>
//         );
//     }
// };

//* ORDER OF EXECUTION
// 
// Parent constructor
//* Parent render
//      Child constructor : first child
//      Child render : first child
//      Child constructor : Second child
//      Child render : Second child
// 
//* DOM updated for children
// 
// Child componentDidMount : first child
// Child componentDidMount : Second child
// 
//* DOM updated for parent
// 
// Parent component did mount

const About=()=>{
    return(
        <div>
            {/* <ProfileFunctionalComponent name={"Pratik Raja"}/> */}
            <Outlet/>
        </div>
    );
}

export default About;