import CitaModel from "../../src/Models/CitaModel";
import DiagnosticoModel from "../../src/Models/DiagnosticoModel";
import MedicoModel from "../../src/Models/MedicoModel";
import PacienteModel from "../../src/Models/PacienteModel";
import UsuarioModel from "../../src/Models/UsuarioModel";
import { GetAllMedicos } from "../../src/Services/MedicoService"

async function obtenerMedicos(){
  try {
    const medicos = await GetAllMedicos();
    // Hacer algo con los medicos obtenidos
    console.log(medicos);
    if (typeof medicos === "string"){
      return "Error"
    }
    return medicos;
  } catch (error) {
    console.error('Error al obtener medicos:', error);
    return 'Error al obtener medicos:'+ error;
  }
}
function azarNumero( arr : MedicoModel[]|PacienteModel[]|CitaModel[]| DiagnosticoModel[]|UsuarioModel[]){
  let numeros : number[] = [arr[0].id]
  let numMax :number = arr[0].id;  
  for (let i = 1; i < arr.length; i++) {
    numeros.push(arr[i].id)
    if(numMax < arr[i].id)
      numMax = arr[i].id;
  }

  let numAle : number = Math.floor(Math.random() * numMax);

  while (!numeros.includes(numAle) ){
    numAle = Math.floor(Math.random() * numMax);
  }


  return numAle;

}


let medico : MedicoModel

describe('Fundamentals test', () => {
  it ('Desde la pantalla de home hasta un médico aleatorio', () => {
    obtenerMedicos().then(medicosR => {
      if(typeof medicosR !== "string"){
        cy.visit('/');
        cy.get('#1').should('exist');
        cy.get('#1').click();
         const numAleg = azarNumero(medicosR);
        for (let i = 0; i < medicosR.length; i++) {
           if(medicosR[i].id == numAleg)
              medico = medicosR[i];
        }
        cy.get(`#${numAleg}`).should('exist').click()

      }
      
      
    });
  })



})