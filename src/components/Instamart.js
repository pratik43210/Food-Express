import { Link } from "react-router-dom";
import { useState } from "react";

// const Section=({title,description})=>{
const Section=({title,description, isVisible, setIsVisible, hide})=>{
    // const [isVisible,setIsVisible]=useState(false);
    return (
        <div className="bg-red-100 my-2">
        <h3 className="font-bold text-xl">{title}</h3>
        {isVisible? <><button className="underline text-xs" onClick={()=>{
            hide();
        }}>Hide</button>
        <p>{description}</p></>:
        <button className="underline text-xs" onClick={()=>{
            setIsVisible();
        }}>Show</button>}
        </div>
    )
}

//creating a accordion
const Instamart=()=>{
    // const [sectionConfig,setSectionConfig]=useState({
    //     showAbout:true,
    //     showTeam:false,
    //     showCareers:true,
    // });
    
    const[visibleSection,setVisibleSection]=useState("about");

    return(
        <div className=" bg-pink-50 p-2">
            <h2 className=" font-semibold text-3xl mb-4">Instamart</h2>
            <h2 className="text-xl">Welcome to Instamart 🛒</h2>
            <h3 className="text-xl mb-4">More content coming soon!</h3>
            <Section 
            // isVisible={sectionConfig.showAbout}
            // setIsVisible={()=>{
            //     setSectionConfig({
            //         showAbout:true,
            //         showTeam:false,
            //         showCareers:false,
            //     })
            isVisible={visibleSection=="about"}
            setIsVisible={()=>{
                setVisibleSection("about");
            }}
            hide={()=>{
                setVisibleSection("");
            }}
            title={"About Instamart"}
            description={"This is the about section of Instamart"}/>
            <Section
            isVisible={visibleSection=="team"}
            setIsVisible={()=>{
                setVisibleSection("team")
            }}
            hide={()=>{
                setVisibleSection("");
            }}
            title={"Team Instamart"}
            description={"This is the teams section of Instamart"}/>
            <Section
            isVisible={visibleSection=="careers"}
            setIsVisible={()=>{
                setVisibleSection("careers")
            }}
            hide={()=>{
                setVisibleSection("");
            }}
            title={"Careers Instamart"}
            description={"This is the careers section of Instamart"}/>
            <Link to="/"><h3 className=" text-blue-800 font-medium">Go Back ⬅️</h3></Link>
        </div>
    );
};

export default Instamart;