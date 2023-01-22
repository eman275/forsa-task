import { Interface } from "readline";

export const FETCH_DATA_REQUEST='FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS='FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE='FETCH_DATA_FAILURE';
export const DELETE_ELEMENT='DELETE_ELEMENT';
export const ADD_ELEMENT='ADD_ELEMENT';
export const UPDATE_ELEMENT='UPDATE_ELEMENT';


export interface citiesData {
     image:string;
    id:string;
    createdAt:string;
    name:string;   
}


export interface PropertyType { 
    image:string;
    id:string;
address : string;
type:string;
number_of_bedrooms:number;
area:string;
price:number;
}





  