import React from 'react'

import PacienteModel from '../Models/PacienteModel';
import axios from 'axios';


const API_URL = "http://localhost:5237/Paciente/";


export const GetAllPacientes = async () => {
  try {
    const response = await axios.get<PacienteModel[]>(API_URL);
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

export const GetPacienteById = async (id : number) =>{
  try {
    
    const response = await axios.get<PacienteModel>(API_URL+`${id}`);
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

export const CreatePaciente = async (nombre : string , apellidos : string , usuario : string, clave : string ,  nss : string, numTarjeta : string, telefono : string, direccion : string)=>{
  try {
    const PacienteC = {
      nombre,
      apellidos,
      usuario,
      clave,
      nss,
      numTarjeta,
      telefono,
      direccion
    }
    console.log(PacienteC);

    const response = await axios.post(API_URL, PacienteC);
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


export const UpdatePaciente = async (ids : number,nombre : string , apellidos : string , usuario : string , clave : string , nss : string, numTarjeta : string, telefono : string, direccion : string)=>{
  try {
    const PacienteU = {
      nombre,
      apellidos,
      usuario,
      clave,
      nss,
      numTarjeta,
      telefono,
      direccion
    }
    const response = await axios.patch(API_URL+`${ids}`, PacienteU);
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

export const DeletePaciente = async (id : number) =>{
    try{
      const response =await axios.delete(API_URL+`${id}`);
      window.location.href = '/paciente'
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