import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector(store=>store.cart.items);
    const price=useSelector(store=>store.cart.price)
    
    let t=0;
    price.forEach(val=>{
        t+=+val;
    })
    
    // we can also subscribe to the whole store
    // but itss better for app performance to subscribe
    // to only required part of store instead of whole store
    // const store=useSelector((store)=>store);
    
    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    const handleRemoveItem=()=>{
        dispatch(removeItem());
    }

    return(
        <div className="bg-pink-50 p-2">
            <div className="flex justify-between">
                <button className="px-2 bg-red-200 rounded-full hover:bg-red-400 hover:text-white" onClick={()=>handleClearCart()}>Clear</button>
                <button className="px-2 text-sm bg-red-200 rounded-full hover:bg-red-400 hover:text-white" onClick={()=>handleRemoveItem()}>Remove</button>
            </div>
            <h1 className=" font-semibold text-3xl mb-4">Cart Items:</h1>
            <div className="flex flex-wrap">{
                cartItems.map(item=>{
                    return (
                        <FoodItem {...item}/>
                    );
                })
            }</div>
            

            {/* <ul>{
                cartItems.map(item=>{
                    return (
                        <li>{item}</li>
                    );
                })
            }</ul> */}
            {console.log(cartItems)}
            <h3 className="font-bold m-2 text-lg">Total: Rs. {t.toFixed(2)}</h3>
            <button className="px-2 bg-red-200 rounded hover:bg-red-400 hover:text-white">Place order</button>
        </div>
    )
}

export default Cart;