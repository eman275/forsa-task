// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


import axios from "axios";
import { AnyNsRecord } from "dns";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  DELETE_ELEMENT,
  ADD_ELEMENT,
  UPDATE_ELEMENT,
} from "./types";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data : any) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error :any) => {
  return {
    type: FETCH_DATA_FAILURE,
    error: error.message,
  };
};

export const deleteElement = (index:any) => {
  return {
    type: DELETE_ELEMENT,
    payload: index,
  };
};

export const addElement = (data :AnyNsRecord) => {
  return {
    type: ADD_ELEMENT,
    payload: data,
  };
};

export const updateElement = (item :any,index :any) => {
  return {
    type: UPDATE_ELEMENT,
    payload:{
      item,
      index
    }
  };
};

export const fetchData = (item : any) => {
  return (dispatch : any) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://63bd70b818bc301c0267c02b.mockapi.io/api/v1/home_images")
      .then((response : any) => {
        const data = response;
        console.log('data' , data)
        dispatch(fetchDataSuccess(data));
      })
      .catch((error : any) => {
        dispatch(fetchDataFailure(error));
      });
  };
};

