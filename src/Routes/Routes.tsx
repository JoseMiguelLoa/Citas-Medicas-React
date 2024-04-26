import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import MedicoPage from "../Pages/MedicoPage/MedicoMainPage/MedicoPage";
import PacientePage from "../Pages/PacientePage/PacienteMainPage/PacientePage";
import CitaPage from "../Pages/CitaPage/CitaMainPage/CitaPage";
import AcreditacionPage from "../Pages/AcreditacionPage/AcreditacionPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MedicoIdPage from "../Pages/MedicoPage/MedicoIdPage/MedicoIdPage";
import MedicoCreatePage from "../Pages/MedicoPage/MedicoCreatePage/MedicoCreatePage";
import MedicoUpdatePage from "../Pages/MedicoPage/MedicoUpdatePage/MedicoUpdatePage";
import PacienteIdPage from "../Pages/PacientePage/PacienteIdPage/PacienteIdPage";
import PacienteCreatePage from "../Pages/PacientePage/PacienteCreatePage/PacienteCreatePage";
import PacienteUpdatePage from "../Pages/PacientePage/PacienteUpdatePage/PacienteUpdatePage";
import CitaIdPage from "../Pages/CitaPage/CitaIdPage/CitaIdPage";
import CitaCreatePage from "../Pages/CitaPage/CitaCreatePage/CitaCreatePage";
import CitaUpdatePage from "../Pages/CitaPage/CitaUpdatePage/CitaUpdatePage";
import CitaUsuarioPage from "../Pages/CitaPage/CitaUsuarioPage/CitaUsuarioPage";
import DiagnosticoIdPage from "../Pages/DiagnosticoPage/DiagnosticoIdPage/DiagnosticoIdPage";
import DiagnosticoCreatePage from "../Pages/DiagnosticoPage/DiagnosticoCreatePage/DiagnosticoCreatePage";
import DiagnosticoUpdatePage from "../Pages/DiagnosticoPage/DiagnosticoUpdatePage/DiagnosticoUpdatePage";

export const router = createBrowserRouter([

    {
        path: "/",
        element : < App/>,
        children:[
            {path : "", element:< HomePage/>},
            {path : "medico", element:< MedicoPage/>},
            {path : "medico/:id", element:< MedicoIdPage/>},
            {path : "medico/formC", element:< MedicoCreatePage/>},
            {path : "medico/formU/:id", element:< MedicoUpdatePage/>},
            {path : "paciente", element:< PacientePage/>},
            {path : "paciente/:id", element:< PacienteIdPage/>},
            {path : "paciente/formC", element:< PacienteCreatePage/>},
            {path : "paciente/formU/:id", element:< PacienteUpdatePage/>},
            {path : "cita", element:< CitaPage/>},
            {path : "cita/:id", element:< CitaIdPage/>},
            {path : "cita/formC", element:< CitaCreatePage/>},
            {path : "cita/formU/:id", element:< CitaUpdatePage/>},
            {path : "cita/usuario/:id", element:< CitaUsuarioPage />},
            {path : "diagnostico/:id", element:< DiagnosticoIdPage/>},
            {path : "diagnostico/formC/:id", element:< DiagnosticoCreatePage/>},
            {path : "diagnostico/formU/:id", element:< DiagnosticoUpdatePage/>},
            {path : "acreditacion", element:< AcreditacionPage/>},
            {path : "login", element:< LoginPage/>},

        ]
    }
])