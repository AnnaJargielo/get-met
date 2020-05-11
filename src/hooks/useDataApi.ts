import { useState, useReducer, useEffect } from 'react';
import { EnvVariables } from '../utils';

enum ActionType {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_FAILURE = 'FETCH_FAILURE',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
}

type Action<T> =
  | { type: ActionType.FETCH_INIT }
  | { type: ActionType.FETCH_SUCCESS; payload: T }
  | { type: ActionType.FETCH_FAILURE; payload: Error };

interface State<T> {
  data?: T | null;
  isLoading: boolean;
  error: null | Error;
}

const dataFetchReducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case ActionType.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: null,
      };
    default:
      throw new Error();
  }
};

export const useDataApi = <T>(initialUrl: string): [State<T>, (url: string) => void] => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer<(state: State<T>, action: Action<T>) => State<T>>(
    dataFetchReducer,
    {
      isLoading: false,
      error: null,
      data: undefined,
    }
  );

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: ActionType.FETCH_INIT });

      try {
        const response = await fetch(`${EnvVariables.API_URL}${url}`);

        if (response.status >= 400) {
          throw new Error(response.statusText);
        }

        const result = (await response.json()) as T;

        if (!didCancel) {
          dispatch({ type: ActionType.FETCH_SUCCESS, payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: ActionType.FETCH_FAILURE, payload: error });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
