export const addDetails = (userDetails) => ({
  type: "Add_User_IN_List",
  payload: userDetails,
});

export const showDetails = (showUserDetails) => ({
  type: "MOVE_USER_TO_DISPLAY",
  payload: showUserDetails,
});

export const updateDetails = (updateUserDetails) => ({
  type: "UPDATE_USER_DETAILS",
  payload: updateUserDetails,
});

//export default addDetails;
