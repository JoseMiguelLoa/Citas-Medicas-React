import axios from 'axios';
import React from 'react'
import DiagnosticoModel from '../Models/DiagnosticoModel';
import { GetAllMedicos } from './MedicoService';

const API_URL = "http://localhost:8080/Diagnostico/";


export const GetAllDiagnosticos = async () => {
  try {
    const response = await axios.get<DiagnosticoModel[]>(API_URL);
    return  response.data;
      

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Mensaje de error: ", error.message);
      return error.message;
    } else {
      console.log("Error inesperado: " + error);
      return "Error inesperado ha ocurrido";
    }
  }
};

export const GetDiagnosticoById = async (id : number) =>{
  try {
    
    const response = await axios.get<DiagnosticoModel>(API_URL+`${id}`);
    return  response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Mensaje de error: ", error.message);
      return error.message;
    } else {
      console.log("Error inesperado: " + error);
      return "Error inesperado ha ocurrido";
    }
  }

}

export const CreateDiagnostico = async (valoracionEspecialista :string , enfermedad : string, citaId : number)=>{
  try {
    const DiagnosticoC = {
        valoracionEspecialista,
        enfermedad,
        citaId
    }
    const response = await axios.post(API_URL, DiagnosticoC);
    return  response.data;
      
  
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Mensaje de error: ", error.message);
      return error.message;
    } else {
      console.log("Error inesperado: " + error);
      return "Error inesperado ha ocurrido";
    }
  }
}


export const UpdateDiagnostico = async (id : number,valoracionEspecialista :string , enfermedad : string)=>{
  try {
    const DiagnosticoU = {
        valoracionEspecialista,
        enfermedad
    }

    const response = await axios.patch(API_URL+`${id}`, DiagnosticoU);
    return response.data;
      
   
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Mensaje de error: ", error.message);
      return error.message;
    } else {
      console.log("Error inesperado: " + error);
      return "Error inesperado ha ocurrido";
    }
  }
}

export const DeleteDiagnostico = async (id : number) =>{
    try{
        const response =await axios.delete(API_URL+`${id}`);
        window.history.back();
        return response.data;

    }catch(error){
      if (axios.isAxiosError(error)) {
        console.log("Mensaje de error: ", error.message);
        return error.message;
      } else {
        console.log("Error inesperado: " + error);
        return "Error inesperado ha ocurrido";
      }
    }
}
