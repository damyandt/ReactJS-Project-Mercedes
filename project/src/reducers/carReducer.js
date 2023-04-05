export const carReducer = (state, action) => {
    switch (action.type) {
      case "CAR_FETCH":
        //return Object.assign({}, action.payload);
        return { ...action.payload };
      case "ADD_COMMENT":
        return {
          ...state,
          comments: [
            ...state.comments,
            {
              ...action.payload,
              author: {
                email: action.userEmail,
              },
            },
          ],
        };
      default:
        return state;
    }
  };