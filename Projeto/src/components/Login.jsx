import React, { useState, useEffect } from 'react'; // Importação corrigida
import { useNavigate } from 'react-router'; // Importação corrigida
import ImagemCarro from "./../assets/img/dreamina-2026-02-13-8268-Reference Image 1, create a highly reali... 1.png";
import LogoAsas from "./../assets/img/Untitled.png";

function LoginApex() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let logado = sessionStorage.getItem('token');
    if (logado) {
      navigate('/');
    }
  }, [navigate]);

  async function fazerLogin() {
    if (email.trim() === '' || senha.trim() === '') {
      alert('VOCÊ NÃO COLOCOU EMAIL OU SENHA!');
      return;
    }

    try {
      console.log(JSON.stringify({ email: email, senha: senha }))
      let resposta = await fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify({ email: email, senha: senha }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await resposta.json()
      console.log(json)
      if (resposta.status === 200) {
        sessionStorage.setItem("token",json.acessToken );
        sessionStorage.setItem("idUsuario",json.idUsuario );
        navigate('/');
      }
      else{
        alert("Login invalido")
      }




    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <div className="container-fluid p-0 vh-100 d-flex flex-column bg-white">
      <header className="row g-0">
        <div className="col-12 d-flex justify-content-end">
          <div className="apex-header-polygon">
            <h1 className="apex-title">APEX</h1>
          </div>
        </div>
      </header>

      <main className="row g-0 flex-grow-1 align-items-center">
        <div className="col-md-5 d-flex flex-column align-items-center">
          <div className="login-box">
            <p className="label-text">Digite seu E-mail:</p>
            <input
              type="email"
              className="form-control rounded-pill apex-input mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Conecta ao estado
            />

            <p className="label-text">Digite sua senha:</p>
            <input
              type="password"
              className="form-control rounded-pill apex-input mb-4"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} // Conecta ao estado
            />

            <button
              className="btn rounded-pill px-5 btn-entrar"
              onClick={fazerLogin} // Adicionado o clique
            >
              ENTRAR
            </button>
          </div>
        </div>

        <div className="col-md-7 h-100 p-0 d-none d-md-block overflow-hidden">
          <img 
            src={ImagemCarro} 
            alt="Carro Apex" 
            className="w-100 h-100 image-clip"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </main>
    </div>
  );
}

export default LoginApex;
