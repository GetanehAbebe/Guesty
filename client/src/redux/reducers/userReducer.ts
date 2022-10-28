import { GET_USER_DATA, ERROR, FETCH, SUCCESS } from "../actions/types";

interface User {
  name: string;
  nationalities: string[];
  gender: string;
}

interface InitialStateProps {
  list: User[];
}

interface ActionProps {
  type: "GET_USER_DATA";
  payload: User;
}

const initialState: InitialStateProps = {
  list: [],
};

export default function (state = initialState, action: ActionProps) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_DATA:
      state.list.unshift(payload);

      return {
        ...state,
        list: [...state.list],
      };

    default:
      return state;
  }
}
