import React from 'react'
import MedicoModelObtain from '../Models/MedicoModel';
import axios from 'axios';


const API_URL = "http://localhost:5237/Medico/";


export const GetAllMedicos = async () => {
  try {
    const response = await axios.get<MedicoModelObtain[]>(API_URL);
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

export const GetMedicoById = async (id : number) =>{
  try {
    
    const response = await axios.get<MedicoModelObtain>(API_URL+`${id}`);
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

export const CreateMedico = async (nombre : string , apellidos : string , usuario : string, clave : string , numColegiado : string)=>{
  try {
    const medicoC = {
      nombre,
      apellidos,
      usuario,
      clave,
      numColegiado
    }
    console.log(medicoC)
    const response = await axios.post(API_URL, medicoC);
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


export const UpdateMedico = async (ids : number,nombre : string , apellidos : string , usuario : string , clave : string , numColegiado : string)=>{
  try {
    const medicoU = {
      nombre,
      apellidos,
      usuario,
      clave,
      numColegiado
    }

    const response = await axios.patch(API_URL+`${ids}`, medicoU);
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

export const DeleteMedico = async (id : number) =>{
    try{
        const response =await axios.delete(API_URL+`${id}`);
        console.log("Buenas tardes");
        window.location.href = '/medico'
        console.log("buenas noches ")
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