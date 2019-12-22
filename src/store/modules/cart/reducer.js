export default function cart(state = [], action) {
  // switch is created so the state will only change if the action is "ADD_TO_CART"
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
