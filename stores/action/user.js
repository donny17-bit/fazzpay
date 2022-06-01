import axios from "../../utils/axios";

export const getUserId = (id) => {
  return {
    type: "GET_USERID",
    payload: axios.get(`user/profile/${id}`),
  };
};
