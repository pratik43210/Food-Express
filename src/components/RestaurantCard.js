import {imgUrl} from "../constants";

// const RestaurantCard=(props)=>{
export const RestaurantCard=(
    {name,
    cuisines,
    cloudinaryImageId,
    avgRating}
)=>{
    return (
        <div className="p-2 bg-orange-200 rounded-lg flex flex-col justify-between min-h-[450px] shadow-lg">
            {/* <img src={imgUrl+props.restaurant.data.data?.cloudinaryImageId}/> */}
            <div>
                <img className=" w-full object-cover h-[280px]" src={imgUrl+cloudinaryImageId}/>
                <h2 className="font-bold">{name}</h2>
                <h3 className="pb-2">{cuisines.join(", ")}</h3>
            </div>
            {/* <img className=" w-auto" src={imgUrl+cloudinaryImageId}/>
            <h2 className="font-bold">{name}</h2>
            <h3 className="pb-5">{cuisines.join(", ")}</h3> */}
            <h4 className="font-semibold text-white bg-red-600 w-16 rounded-full px-1">{avgRating} ⭐</h4>
        </div>
    );
};