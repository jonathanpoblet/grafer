import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const postRequest = async (dataObject, endpoint) => {
  try {
    const { data } = await axios.post(URL + endpoint, dataObject, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const getRequest = async (endpoint) => {
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const putRequest = async (endpoint, id, dataUpdate) => {
  try {
    const { data } = await axios.put(URL + endpoint + id, dataUpdate, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const deleteRequest = async (endpoint, id) => {
  try {
    const { data } = await axios.delete(URL + endpoint + id, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
