// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../constants";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem, addPrice } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu=()=>{
    // const {id}=useParams();
    const {resId}=useParams();
    

    const {restaurant,menu}=useRestaurant(resId);

    // const [restaurant,setRestaurant]=useState({});
    // const [menu, setMenu]=useState([]);

    // useEffect(()=>{
    //     getRestaurantInfo();
    // },[resId]);

    // const getRestaurantInfo=async ()=>{
    //     const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="+resId+"&submitAction=ENTER");
    //     const json= await data.json();
    //     console.log(json?.data?.cards);
    //     // setRestaurant(json.data?.cards);
    //     setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    //     const n=json?.data?.cards?.length;
    //     console.log(n);
    //     setMenu(json?.data?.cards[n-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    //     console.log(json?.data?.cards[n-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    // }
    
    const dispatch=useDispatch();

    const handleAdditem=(item)=>{
        dispatch(addItem(item));
        dispatch(addPrice(((+item.price)/100).toFixed(2)));
    }

    return(!restaurant)?<Shimmer/>: (
        <div className="menu bg-pink-50 py-2 flex flex-row">
        <div className="res-info  text-xl ml-1 bg-red-200 p-2 rounded-l-2xl">
            {/* <h1>Restaurant id:{resId}</h1> */}
            <h2 className=" font-semibold text-3xl mb-4">{restaurant.name}</h2>
            <img src={imgUrl+restaurant.cloudinaryImageId} className="res-img w-[60%] mb-2"/>
            <h3>Location: {restaurant.areaName}</h3>
            <h3>City: {restaurant.city}</h3>
            <h3>Rating: {restaurant.avgRating}⭐</h3>
            <h3>Price: {restaurant.costForTwoMessage}</h3>
        </div>
        <div className="menu-items  text-md font-medium mr-1 bg-red-100 p-2 rounded-r-2xl grow">
            <h1 className="text-2xl font-semibold">Menu</h1>
            <ul className="list-disc pl-4">{
                (!Array.isArray(menu))?<Error/>:menu.map(item=><li key={item.card.info.id} >{item.card.info.name} 
                <button className=" text-center text-sm ml-2 w-[22px] h-[20px] bg-red-50 rounded-full hover:bg-red-400 hover:text-white"
                    onClick={()=>handleAdditem(item.card.info)}
                >+</button>
                </li>)
            }</ul>
        </div>
        </div>
    );
};

export default RestaurantMenu;