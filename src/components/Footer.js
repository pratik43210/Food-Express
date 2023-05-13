import appstoreIcon from "../assets/img/appStore_icon.jpg";
import googlePlayIcon from "../assets/img/googlePlay-icon.jpg";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

export const Footer=()=>{
    // const {user,setUser}=useContext(UserContext);
    return(
    <div className="footer bg-black text-indigo-100 flex flex-wrap p-2 items-center justify-between min-w-[300px]">
    <h2 className=" m-2 text-xl font-semibold">Enjoying our app?</h2>
    <div className="footer-imgs flex flex-wrap p-2 gap-2">
        <img src={appstoreIcon} className="h-12"/>
        <img src={googlePlayIcon} className="h-12"/>
    </div>
    {/* <input 
        value={user.name}
        onChange={e=>{
            setUser({
                name:e.target.value,
                email:e.target.value+"@abc.com"
            })
        }}
    ></input>
    <h2>{user.email}</h2> */}
    </div>
);};