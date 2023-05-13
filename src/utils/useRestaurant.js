import { useState } from "react";
import { useEffect } from "react";
import { resMenuUrl } from "../constants";

const useRestaurant=(resId)=>{
    const [restaurantInfo,setRestaurantInfo]=useState({});
    const [menuInfo, setMenuInfo]=useState([]);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    const getRestaurantInfo=async ()=>{
        const data= await fetch(resMenuUrl+resId+"&submitAction=ENTER");
        const json= await data.json();
        
        setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
        const n=json?.data?.cards?.length;

        setMenuInfo(json?.data?.cards[n-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    const resObj={restaurant:restaurantInfo,menu:menuInfo};
    return resObj;
};

export default useRestaurant;