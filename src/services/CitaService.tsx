import axios from 'axios';
import React from 'react'
import CitaModel from '../Models/CitaModel';
import { GetAllMedicos } from './MedicoService';

const API_URL = "http://localhost:8080/Cita/";


export const GetAllCitas = async () => {
  try {
    const response = await axios.get<CitaModel[]>(API_URL);
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

export const GetCitaById = async (id : number) =>{
  try {
    
    const response = await axios.get<CitaModel>(API_URL+`${id}`);
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

export const CreateCita = async (fechaHora : Date,motivoCita : string,attribute11 : number,pacienteId : number,medicoId : number)=>{
  try {
    const CitaC = {
        fechaHora,
        motivoCita,
        attribute11,
        pacienteId,
        medicoId
    }
    console.log(CitaC)
    const response = await axios.post(API_URL, CitaC);
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


export const UpdateCita = async (id : number,motivoCita : string,attribute11 : number)=>{
  try {
    const CitaU = {
      motivoCita,
      attribute11,
    }

    const response = await axios.patch(API_URL+`${id}`, CitaU);
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

export const DeleteCita = async (id : number) =>{
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

export const getCitasMedico = async (idMedico : number) =>{
  try{
      const citas = await GetAllCitas();
      let citasR : CitaModel[] = [];

      if(typeof  citas !== "string"){
        
          citas.forEach(cita => {
            
              if(cita.medicoId == idMedico){
                
                  citasR.push(cita);
              }
          });
          return citasR;
      }else
        return citas;
              
  
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


export const getCitasPaciente = async (idMedico : number) =>{
  try{
      const citas = await GetAllCitas();
      let citasR : CitaModel[] = [];

      if(typeof  citas !== "string"){
          citas.forEach(cita => {
              if(cita.pacienteId == idMedico){
                  citasR.push(cita);
              }
          });
          return citasR;
      }else
        return citas;
              
  
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