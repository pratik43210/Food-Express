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

        const cards = json?.data?.cards;

        // Find restaurant info
        const resInfo = cards?.find(card => card?.card?.card?.info)?.card?.card?.info;
        setRestaurantInfo(resInfo);

        const menuCards = cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const menuItems = menuCards?.find(menuCard => menuCard?.card?.card?.itemCards)?.card?.card?.itemCards;
        
        if(menuCards?.find(menuCard => menuCard?.card?.card?.itemCards))

        setMenuInfo(menuItems);
    }

    const resObj={restaurant:restaurantInfo,menu:menuInfo};
    return resObj;
};

export default useRestaurant;