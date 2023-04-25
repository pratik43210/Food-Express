import {imgUrl} from "../constants";

// const RestaurantCard=(props)=>{
export const RestaurantCard=(
    {name,
    cuisines,
    cloudinaryImageId,
    avgRating}
)=>{
    return (
        <div className="card">
            {/* <img src={imgUrl+props.restaurant.data.data?.cloudinaryImageId}/> */}
            <img src={imgUrl+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
};