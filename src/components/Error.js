import { useRouteError, Link} from "react-router-dom";

const Error=()=>{
    // useRouterError will give the error object
    const err=useRouteError();
    console.log(err);
    return(
        <div className=" bg-pink-50 p-2 text-xl">
            <h1 className=" font-semibold text-3xl mb-4">Oops!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.status+": "+err.statusText}</h2>
            <Link to="/"><h3 className=" text-blue-800 font-medium mt-4">Go Back ⬅️</h3></Link>
        </div>
    )
}

export default Error;