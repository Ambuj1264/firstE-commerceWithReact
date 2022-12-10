import { Add_TO_CART } from "./constant";
import { Remove_TO_CART } from "./constant";
import { RemoveAll_To_Cart } from "./constant";
export const cartData = (data = [], action) => {
  //  if(action.type===Add_TO_CART){
  //     console.log("reducer called ",action)
  //     return action.data
  //  }
  //  else{
  //     return "no action matched"
  //  }

  switch (action.type) {
    case Add_TO_CART:
      console.log("AddTOCART ", action);
      return [action.data,...data]
      break;
    case Remove_TO_CART:
      console.log("Remove_TO_CART", action);
    data.length= data.length? data.length-1:[]
      return [...data];
      break;
    case RemoveAll_To_Cart:
      console.log("RemoveAll_To_Cart", action);
      data=[]
      return [...data];
      break;

    default:
        return data
      break;
  }
};
