import axios from "axios";
import UsuarioModel from "../Models/ModelCreation/UsuarioModelCreation"

const API_URL = "http://localhost:5237/Usuario/";


export const GetAllUsers = async () => {
  try {
    const response = await axios.get<UsuarioModel[]>(API_URL);
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

export const GetUserById = async (id : number) =>{
  try {
    const response = await axios.get<UsuarioModel>(API_URL+`${id}`);
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

export const CreateUser = async (nombre : string , apellidos : string , usuario : string, clave : string)=>{
  try {
    
    const response = await axios.get<UsuarioModel>(API_URL);
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
