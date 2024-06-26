import { useEffect, useState } from "react";
// import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmerlist } from "./Shimmer";
import { Link, resolvePath } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";

export const Body=()=>{
    const [allRestaurants, setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants]=useState([]);
    const [result,setResult]=useState("");
    // let searchTxt="KFC";
    // what is a state
    // what is react hooks? - functions
    // what is use state

    // searchText is a local state variable
    const [searchText, setSearchText]=useState("");
    //returns array -[variable name,  function to update variable]
    
    // const [searchClicked, setSearchClicked]=useState("false");

    useEffect(()=>{
        let lat,lng;
        getGeolocation().then(pos=>{
            lat=pos.coords.latitude;
            lng=pos.coords.longitude;
        }).then(()=>getRestaurant(lat,lng));
    }, []);

    const getGeolocation=()=>{
        return new Promise((resolve,reject)=>{
            navigator.geolocation.getCurrentPosition(resolve,reject);
        })
    }

    async function getRestaurant(lat,lng){
        const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`);
        const json=await data.json();

        const paths = json?.data?.cards;
        const cards = json?.data?.cards;
        let restaurants=[];

        restaurants=cards.find(card=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }

    const online=useOnline();

    if(!online){
        return <h2>⚠️Offline! please check our connection!!</h2>
    }

    // not render component (early return)
    if(!allRestaurants) return null;

    // if(filteredRestaurants.length==0)
    // return <h1>No restaurant matches your filter!!</h1>
    return (allRestaurants.length==0)?<Shimmerlist/>: (
    <div className="bg-yellow-50">
        <div className="search-container flex justify-between p-2">
            <div>
                <input 
                    type="text"
                    className="search-input pl-2 bg-[rgba(255,111,0,0.36)] rounded-l w-28"
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
                className="search-btn px-2 hover:bg-red-600 rounded-r bg-[rgb(255,36,16)] text-white"
                onClick={()=>{
                    // if(searchClicked=="false"){
                    //     setSearchClicked("true")
                    // }
                    //* need to filter the data on click
                    //* update the state
                    const data=filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                    (data.length!=1)?setResult(data.length+" results found-"):setResult("1 result found-");
                    if(searchText==""||searchText==" "){
                        setFilteredRestaurants(allRestaurants);
                        setResult("");
                    }
                }}
                >Search</button>
            </div>
            

            <button className="clear-filter bg-[rgb(255,36,16)] text-white rounded-md px-2 hover:bg-red-600 hover:text-white" onClick={()=>{
                setFilteredRestaurants(allRestaurants);
                setSearchText("");
                setResult("");
            }}>Clear Filter</button>
        </div>
        <h2 className="search-results flex ml-2 test-sm font-semibold">{result}</h2>
        <div className="restaurant-list flex flex-wrap">
        {/* <RestaurantCard name={restaurantList[0].data.data?.name}/> */}

        {
            // no key<<<<index key(ok way)< unique key
            filteredRestaurants.map(restaurant=>{
                return (
                    <Link to={"/restaurant/"+restaurant.info.id} className="card link min-w-[160px] w-[18%] h-[100%] grow m-2"  key={restaurant.info.id}><RestaurantCard {...restaurant.info}/></Link>
                );
            })
        }

        {/* <RestaurantCard {...restaurantList[0].data.data}/>
        <RestaurantCard {...restaurantList[1].data.data}/>
        <RestaurantCard {...restaurantList[2].data.data}/>
        <RestaurantCard {...restaurantList[3].data.data}/>
        <RestaurantCard {...restaurantList[4].data.data}/>
        <RestaurantCard {...restaurantList[5].data.data}/> */}
        </div>
    </div>
);
};