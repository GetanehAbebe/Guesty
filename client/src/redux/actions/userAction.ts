import { GET_USER_DATA } from "./types";
import { API } from "../../cofig";

export const getUserData = (name: string) => async (dispatch: any) => {
  try {
    const result = await fetch(`${API}/name-analyzer?name=${name}`).then(
      (res) => res.json()
    );
    dispatch({
      type: GET_USER_DATA,
      payload: result,
    });
  } catch (err) {
    console.error("There is a problem with fetching data", err);
  }
};
