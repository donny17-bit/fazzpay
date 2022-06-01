const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: "",
};

const transfer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_TRANSFER": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
        // pageInfo: action.payload.data.pagination,
        // msg: action.payload.data.msg,
      };
    }
    case "SET_DATA_RECEIVER": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
        // pageInfo: action.payload.data.pagination,
        // msg: action.payload.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default transfer;
