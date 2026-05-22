import { Navigate } from "react-router"

function Protegida({children,regrasPermitidas}){
    const token = sessionStorage.getItem("token")
    const regra = sessionStorage.getItem("regra")
    //não autenticado
    if(!token){
        return <Navigate to="/login"/>
    }
    if (regrasPermitidas && !regrasPermitidas.includes(regra)) {
        return <Navigate to="/home"/>
    }
    return children
}
export default Protegida