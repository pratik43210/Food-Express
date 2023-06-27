import {imgUrl} from "../constants";

// const RestaurantCard=(props)=>{
const FoodItem=(
    {name,
    price,
    imageId,
    description}
)=>{
    return (
        <div className="p-2 bg-orange-300 flex rounded-lg flex-col min-h-[360px] min-w-[160px] max-w-[40%] w-[18%] h-[100%] grow shadow-lg m-2 justify-between">
            {/* <img src={imgUrl+props.restaurant.data.data?.cloudinaryImageId}/> */}
            <div>
                <img className=" w-[100%] max-w-[260px]" src={imgUrl+imageId}/>
                <h2 className="font-bold">{name}</h2>
                <h3 className="pb-5">{description}</h3>
            </div>
            
            <h3 className=" font-normal bg-[#f81105e6] text-white w-[auto] p-2 rounded text-sm">Price: Rs. {(+price/100).toFixed(2)}</h3>
            {/* <h4 className="font-semibold bg-red-300 w-16 rounded-full px-1">Price: {(price/100).toFixed(2)}</h4> */}
        </div>
    );
};

export default FoodItem;