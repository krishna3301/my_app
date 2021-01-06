//import Registration from '../Registration';

const initialState = {
  userList: [],
  userDetails: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_User_IN_List":
      state.userList.push(action.payload);
      console.log("User Added", state.userList);
      return {
        ...state,
        userList: [...state.userList],
      };

    case "MOVE_USER_TO_DISPLAY":
      // state.userDetails.push(action.payload)
      state.userDetails.push(state.userList[action.payload]);
      return {
        ...state,
        userDetails: [...state.userDetails],
      };
    case "UPDATE_USER_DETAILS":
      let updateUserIndex = state.userList.findIndex(
        (item) => item.email === action.payload.email
      );
      state.userList[updateUserIndex] = action.payload;
      if (state.userDetails.email === action.payload.email) {
        state.userDetails = action.payload;
      }
      return {
        ...state,
        userList: [...state.userList],
        userDetails: [...state.userDetails],
      };
    /*  case "UPDATE_SHOW_DETAILS":      
       if(state.userDetails.email === action.payload.email)
            {
              state.userDetails = action.payload
            }
            return{
              ...state,
              userDetails: [...state.userDetails]
            }; */

    default:
      return state;
  }
}

export default userReducer;
