const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERID_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_USERID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "GET_USERID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data
          ? action.payload.response.data.msg
          : action.payload.message,
      };
    }
    case "RESET_DATA": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [],
        pageInfo: {},
        msg: "",
      };
    }
    // case "SET_ALL_DATA_USER": {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     data: action.data,
    //     // pageInfo: action.payload.data.pagination,
    //     // msg: action.payload.data.msg,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default user;
