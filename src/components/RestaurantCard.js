import {imgUrl} from "../constants";

// const RestaurantCard=(props)=>{
export const RestaurantCard=(
    {name,
    cuisines,
    cloudinaryImageId,
    avgRating}
)=>{
    return (
        <div className="p-2 bg-red-200 rounded-lg flex flex-col justify-between min-h-[350px] shadow-lg">
            {/* <img src={imgUrl+props.restaurant.data.data?.cloudinaryImageId}/> */}
            <div>
                <img className=" w-auto" src={imgUrl+cloudinaryImageId}/>
                <h2 className="font-bold">{name}</h2>
                <h3 className="pb-2">{cuisines.join(", ")}</h3>
            </div>
            {/* <img className=" w-auto" src={imgUrl+cloudinaryImageId}/>
            <h2 className="font-bold">{name}</h2>
            <h3 className="pb-5">{cuisines.join(", ")}</h3> */}
            <h4 className="font-semibold bg-red-300 w-16 rounded-full px-1">{avgRating} ⭐</h4>
        </div>
    );
};