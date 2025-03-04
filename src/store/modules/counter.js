const initialState = {
    number: 0,
    hidden: false,
    timerId :null,
    Display: true,
    Scale : true,
    w : true,
  };
  
  // 리듀서
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "mousein-change":
            return {
                ...state,
                hidden : false,
                Display : false,
                Scale : false,
                w   : false,  };
        case "mouseout-change":
            return{
                ...state,
                hidden: false
            }
        case "reset-time":
            return {...state, timerId : null,};
        case  "hide-app-time":
            return {
                ...state,
                hidden : true,
                Display : false,};
        case "scale-action-time":
            return {...state, Scale : false,};
        case "dust-time":
            return {...state, w : false,};
      default:
        return state;
    }
    
  };

export default counter;