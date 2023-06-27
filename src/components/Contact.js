import { Link } from "react-router-dom";

const Contact=()=>{
    return(
        <div className=" bg-orange-100 p-2">
        <h1 className=" font-semibold text-3xl mb-4">Contact us Page</h1>
        <Link to="/"><h3 className=" text-blue-800 font-medium">Go Back ⬅️</h3></Link>
        </div>
    );
};

export default Contact;