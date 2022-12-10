import { Add_TO_CART } from "./constant";
import { Remove_TO_CART } from "./constant";
import { RemoveAll_To_Cart } from "./constant";
export const addToCart=(data)=>{
    console.log("action called ",data)
    return {
        type:Add_TO_CART,
        data:data
    }
}
export const RemoveToCart=(data)=>{
    console.log("action called remove",data)
    return {
        type:Remove_TO_CART
        ,data:data
    }
}
export const RemoveAllToCart=()=>{
    console.log("action all removeall")
    return {
        type:RemoveAll_To_Cart
    
    }
}