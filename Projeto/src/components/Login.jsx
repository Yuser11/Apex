import React from 'react';
// Certifique-se de que os nomes dos arquivos estão corretos nas suas pastas
import ImagemCarro from "./../assets/img/dreamina-2026-02-13-8268-Reference Image 1, create a highly reali... 1.png"; 
import LogoAsas from "./../assets/img/Untitled.png";
// Importação do arquivo CSS separado

function LoginApex() {
  return (
    <div className="container-fluid p-0 vh-100 d-flex flex-column bg-white">
      
      {/* Cabeçalho - Estrutura de Grid Bootstrap */}
      <header className="row g-0">
        <div className="col-12 d-flex justify-content-end">
          <div className="apex-header-polygon">
            <h1 className="apex-title">APEX</h1>
          </div>
        </div>
      </header>

      {/* Área Principal */}
      <main className="row g-0 flex-grow-1 align-items-center" >
        {/* Lado Esquerdo: Formulário de Login */}
        <div className="col-md-5 d-flex flex-column align-items-center">
          <div className="login-box">
            <p className="label-text">Digite seu E-mail:</p>
            <input type="email" className="form-control rounded-pill apex-input mb-4" />
            
            <p className="label-text">Digite sua senha:</p>
            <input type="password" className="form-control rounded-pill apex-input mb-4" />
            
            <button className="btn rounded-pill px-5 btn-entrar">
              ENTRAR
            </button>
          </div>
        </div>

        {/* Lado Direito: Imagem com recorte diagonal */}
        <div className="col-md-7 h-100 p-0 d-none d-md-block overflow-hidden">
          <img 
            src="url_da_imagem_carro.jpg" 
            alt="Carro Apex" 
            className="w-100 h-100 image-clip"
          />
        </div>
      </main>

    
       
        
      
    </div>
  );
}

export default LoginApex;
