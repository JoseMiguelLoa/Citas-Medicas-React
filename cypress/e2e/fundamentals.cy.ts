import { useState } from "react";
import CitaModel from "../../src/Models/CitaModel";
import DiagnosticoModel from "../../src/Models/DiagnosticoModel";
import MedicoModel from "../../src/Models/MedicoModel";
import PacienteModel from "../../src/Models/PacienteModel";
import UsuarioModel from "../../src/Models/UsuarioModel";
import { GetAllMedicos } from "../../src/Services/MedicoService"
import { GetAllPacientes } from "../../src/Services/PacienteService";

async function obtenerMedicos(){
  try {
    const medicos = await GetAllMedicos();

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
async function obtenerPacientes(){
  try {
    const pacientes = await GetAllPacientes();

    console.log(pacientes);
    if (typeof pacientes === "string"){
      return "Error"
    }
    return pacientes;
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    return 'Error al obtener pacientes:'+ error;
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





describe('Todo Medico Test test', () => {

  beforeEach(() => {
    cy.visit('/').wait(100);
    cy.get('#1').should('exist');
    cy.get('#1').click();
  })

  it('Crear Médico y comprobar que existe', () =>{
    
    cy.get('#crear').should('exist').click();
    cy.get('#nombre').should("exist").type("Marcos");
    cy.get('#apellidos').should("exist").type("Malaso Fenco");
    cy.get('#usuario').should("exist").type("Pepo");
    cy.get('#numColegiado').should("exist").type("43");
    
    cy.get('#crear').should('exist').click();
    
    cy.contains(/Crear Nuevo Médico/i).should('exist')
    
    cy.get('#clave').should("exist").type("1234");

    cy.get('#crear').should('exist').click();

    cy.contains(/Crear Nuevo Médico/i).should('exist')

    cy.get('#numColegiado').should("exist").type("4312345123");

    cy.get('#crear').click();


  })
  it('ver el nuevo médico creado y realizar una cita', () =>{
    cy.wait(2000).then(() => {
      obtenerMedicos().then(medicosR => {
        if(typeof medicosR !== "string"){
          return obtenerPacientes().then(pacientesR =>{
            if(typeof pacientesR !== "string"){
              let medicoCID : number = medicosR[medicosR.length-1].id; 
  
  
              cy.get(`#${medicoCID}`).should('exist').click().wait(100);
              cy.get('#volver').click();
              cy.contains(/citas/i).should('exist').click();
              cy.get('#crear').should('exist').click();
  
              cy.get('input[type="datetime-local"]').type('2024-04-12T12:00');
  
              cy.get('#attribute').type('221');
              const pacienteIdS = azarNumero(pacientesR);
              cy.get('#pacienteId').select(`${pacienteIdS}`);
  
              cy.get('#medicoId').select(`${medicoCID}`);
  
              cy.get('#motivo').type("Dolor de cabeza");
  
              cy.get('#crear').click();
  
              cy.contains(/médicos/i).should('exist').click().wait(100);
  
              cy.get(`#${medicoCID}`).should('exist').click().wait(100);
  
              cy.get('#borrar').should('be.disabled');
  
              cy.get('#citas').should('not.be.disabled').click();
  
              cy.contains('ID:').should('exist').click();
  
              cy.contains(`ID Paciente: ${pacienteIdS}`).should('exist');
              cy.contains(`ID Médico: ${medicoCID}`).should('exist')
  
              cy.contains(`${medicoCID}`).click().wait(100);
  
              cy.get('#citas').should('exist').click();
  
  
              cy.contains('ID:').should('exist').click();
  
              cy.get('#borrar').should('exist').click().wait(400);
  
              cy.get('#volver').should('exist').click().wait(400);
  
              cy.get('#borrar').click();
  
              console.log("Finish");
  
            }
          })
        }   
      })
    })
    cy.wait(2000);
  })
  

  
  it ('Desde la pantalla de home hasta un médico aleatorio', () => {
    obtenerMedicos().then(medicosR => {
      if(typeof medicosR !== "string"){

        let medico : MedicoModel
         const medicoIdG = azarNumero(medicosR);
        for (let i = 0; i < medicosR.length; i++) {
           if(medicosR[i].id == medicoIdG)
              medico = medicosR[i];
        }
        cy.get(`#${medicoIdG}`).should('exist').click()
        cy.get('#modificar').click();
        cy.get('#nombre').should("exist").type("S");
          

        
      }
      
      
    });
  })


  
})