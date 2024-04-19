import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import MedicoPage from "../Pages/MedicoPage/MedicoMainPage/MedicoPage";
import PacientePage from "../Pages/PacientePage/PacientePage";
import CitaPage from "../Pages/CitaPage/CitaPage";
import DiagnosticoPage from "../Pages/DiagnosticoPage/DiagnosticoPage";
import AcreditacionPage from "../Pages/AcreditacionPage/AcreditacionPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MedicoIdPage from "../Pages/MedicoPage/MedicoIdPage/MedicoIdPage";
import MedicoCreatePage from "../Pages/MedicoPage/MedicoCreatePage/MedicoCreatePage";
import MedicoUpdatePage from "../Pages/MedicoPage/MedicoUpdatePage/MedicoUpdatePage";

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
            {path : "cita", element:< CitaPage/>},
            {path : "diagnostico", element:< DiagnosticoPage/>},
            {path : "acreditacion", element:< AcreditacionPage/>},
            {path : "login", element:< LoginPage/>},

        ]
    }
])