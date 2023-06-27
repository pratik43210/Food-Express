import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile=(props)=>{
    const [userInfo,setUserInfo]=useState({});

    useEffect(()=>{
        getProfileData();

        // const timer=setInterval(()=>{
        //     console.log("Hi");
        // },1000);

        // //* useEffect return is executed when we leave page(/during umnount??)
        // return ()=>{
        //     clearInterval(timer);
        // }
    },[]);

    const getProfileData=async()=>{
        const data=await fetch("https://api.github.com/users/pratik43210");
        const json=await data.json();

        setUserInfo(json);
    }


    return (
        <div className=" bg-orange-100 p-2 ">
            <h2 className=" font-semibold text-3xl mb-4">Profile</h2>
            <img src={userInfo?.avatar_url} className="profile-img w-48 rounded"/>
            <h3 className="text-xl">Name : {userInfo?.name}</h3>
            <h3 className="text-lg mb-4">Location: {userInfo?.location}</h3>
            <Link to="/about"><h3 className=" text-blue-800 font-medium">Go Back ⬅️</h3></Link>
        </div>
    );
};

export default Profile;