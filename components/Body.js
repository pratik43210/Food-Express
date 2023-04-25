import { useEffect, useState } from "react";
// import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import { Shimmerlist } from "./Shimmer";

    //  "?." optional chaining
const filterData=(searchText,restaurants)=>{
    return restaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
};

export const Body=()=>{
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants]=useState([]);
    // let searchTxt="KFC";
    // what is a state
    // what is react hooks? - functions
    // what is use state

    // searchText is a local state variable
    const [searchText, setSearchText]=useState("");
    //returns array -[variable name,  function to update variable]
    
    // const [searchClicked, setSearchClicked]=useState("false");

    useEffect(()=>{
        getRestaurant();
    }, []);

    async function getRestaurant(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    // not render component (early return)
    if(!allRestaurants) return null;

    // if(filteredRestaurants.length==0)
    // return <h1>No restaurant matches your filter!!</h1>

    return (allRestaurants.length===0)?<Shimmerlist/>: (
    <>
        <div className="search-container">
            <input 
                type="text"
                className="search-input"
                placeholder="search"
                value={searchText}
                onChange={(e)=>{
                    // searchText=e.target.value; is not correct
                    setSearchText(e.target.value);
                    // console.log(searchText);
                }}
            />
            {/* <h1>{searchClicked}</h1> */}
            <button
            className="search-btn"
            onClick={()=>{
                // if(searchClicked=="false"){
                //     setSearchClicked("true")
                // }
                //* need to filter the data on click
                //* update the state
                const data=filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
                if(searchText==""||searchText==" "){
                    setFilteredRestaurants(allRestaurants);
                }
            }}
            >Search</button>
        </div>
        <div className="restaurant-list">
        {/* <RestaurantCard name={restaurantList[0].data.data?.name}/> */}

        {
            // no key<<<<index key(ok way)< unique key
            filteredRestaurants.map(restaurant=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
            })
        }

        {/* <RestaurantCard {...restaurantList[0].data.data}/>
        <RestaurantCard {...restaurantList[1].data.data}/>
        <RestaurantCard {...restaurantList[2].data.data}/>
        <RestaurantCard {...restaurantList[3].data.data}/>
        <RestaurantCard {...restaurantList[4].data.data}/>
        <RestaurantCard {...restaurantList[5].data.data}/> */}
        </div>
    </>
);
};