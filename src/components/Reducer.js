export const initialState = {
  basket: [
    {
      id: 21452863,
      title:
        "The Energy Bus lean startup: how constant innovation creates radically successful businesses paperback",
      price: 12.95,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/81oSdLIKdWL.jpg",
    },
  ],
  user: null,
};
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);
// This is incrementing all of the prices inside of the basket, starting at 0 and
// returns that number

const reducer = (state, action) => {
  // This console log IS SUPER important.
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state, // Return the exact current state
        basket: [...state.basket, action.item],
        // but change the basket from whatever
        // it currently was, plus whatever item you just added.
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for Removing item to basket

      //we cloned the basket
      let newBasket = [...state.basket];

      // we checked to see if product exists
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
          //if the item exists in basket, remove it..
          newBasket.splice(index, 1);
      } else {
          console.warn(
              `can't remove product (id: ${action.id} as its not in basket`
          );
      }
        // Return state but with a new basket
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
