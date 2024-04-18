import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import MedicoPage from "../Pages/MedicoPage/MedicoPage";
import PacientePage from "../Pages/PacientePage/PacientePage";
import CitaPage from "../Pages/CitaPage/CitaPage";
import DiagnosticoPage from "../Pages/DiagnosticoPage/DiagnosticoPage";
import AcreditacionPage from "../Pages/AcreditacionPage/AcreditacionPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element : < App/>,
        children:[
            {path : "", element:< HomePage/>},
            {path : "medico", element:< MedicoPage/>},
            {path : "paciente", element:< PacientePage/>},
            {path : "cita", element:< CitaPage/>},
            {path : "diagnostico", element:< DiagnosticoPage/>},
            {path : "acreditacion", element:< AcreditacionPage/>},
            {path : "login", element:< LoginPage/>},

        ]
    }
])