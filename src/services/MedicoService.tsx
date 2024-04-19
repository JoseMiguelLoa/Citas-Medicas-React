import React from 'react'
import MedicoModelObtain from '../Models/ModelObtain/MedicoModelObtain';
import axios from 'axios';


const API_URL = "http://localhost:5237/Medico/";


export const GetAllMedicos = async () => {
  try {
    const response = await axios.get<MedicoModelObtain[]>(API_URL);
    const data = response.data;
      
    return data;
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

export const GetMedicoById = async (id : number) =>{
  try {
    
    const response = await axios.get<MedicoModelObtain>(API_URL+`${id}`);
    const data = response.data;
      
    return data;
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

export const CreateMedico = async (nombre : string , apellidos : string , usuario : string, clave : string , numColegiado : string)=>{
  try {
    const medicoC = {
      id : 0,
      nombre,
      apellidos,
      usuario,
      clave,
      numColegiado
    }

    const response = await axios.post(API_URL, medicoC);
    const data = response.data;
      
    return data;
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


export const UpdateMedico = async (id : number,nombre? : string , apellidos? : string , usuario? : string , clave? : string , numColegiado? : string)=>{
  try {
    const medicoC = {
      id : 0,
      nombre,
      apellidos,
      usuario,
      clave,
      numColegiado
    }

    const response = await axios.patch(API_URL+`${id}`, medicoC);
    const data = response.data;
      
    return data;
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

