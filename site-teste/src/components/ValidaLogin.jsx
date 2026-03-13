import { Navigate } from 'react-router';

function ValidaLogin({ pagina }) {
  const token = localStorage.getItem('token');
  const tokenValido = !!token;

  return tokenValido ? pagina : <Navigate to="/login" />;
}

export default ValidaLogin;