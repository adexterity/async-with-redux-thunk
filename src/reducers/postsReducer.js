export default (state = [], action) => {
  /* if(action.type === "FETCH_POSTS"){
    return action.payload;
  }

  return state; */

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

//this reducer will maintain a list posts that we have fetch from that JSON API
