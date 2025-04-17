import axios from "axios";

export const GetRequest = (url, header, mytype) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${header}`
        }
      });

      if (res.status === 200) {
        dispatch({
          type: mytype,
          response: res.data,
        });
      }
    } catch (err) {
      console.error(err.response); // Log the error response for debugging
      dispatch({
        type: 'SHOW_MODAL',
        response: err.response.data || err.message,
        status: err.response ? err.response.status : '404'
      });
    }
  };
};
