import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";


function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    })

    async function fazerLogin() {
        try {
            let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ email: email, senha: senha }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            console.log(resposta);
            if (resposta.status === 201) {
                console.log('Resposta do servidor ok!');
                if (resposta.ok === true) {
                    let tokenBackend = Math.random()
                    localStorage.setItem('token', tokenBackend)
                    navigate('/')
                } else {
                    alert('Erro ao cadastrar!');
                }
            } else {
                console.log('Resposta do servidor erro!');
            }
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <>
            {/* CSS para replicar a foto */}
            <style>{`
                .login-page { min-height: 100vh; display: flex; flex-direction: column; background: white; font-family: sans-serif; }
                .main-content { flex: 1; display: flex; }
                .form-side { display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; }
                .image-side { 
                   
                    position: relative;
                }
                .logo-apex-top {
                    background: #5b84a2; color: white; padding: 20px 60px; font-size: 2.5rem;
                    font-weight: bold; position: absolute; top: 0; width: 100%; letter-spacing: 4px;
                }
               
                .btn-entrar {
                    background: #5b84a2; color: white; border: none; border-radius: 15px;
                    padding: 6px 40px; font-weight: bold; cursor: pointer; margin-top: 10px;
                }
                .footer-apex { background: #5b84a2; color: white; padding: 25px 45px; font-size: 11px; }
                .social-icons i { font-size: 20px; margin-left: 15px; cursor: pointer; }
            `}</style>

            <div className="login-page">
                <div className="main-content">
                    {/* Lado do Formulário */}
                    <div className="col-12 col-md-5 form-side">
                    <img src='./../assets/img/sidebar/dreamina-2026-02-13-8268-Reference Image 1, create a highly reali... 1.png' alt="" /> 
                        <div className="text-center mb-5">
                            <i className="bi bi-steering" style={{fontSize: '4rem'}}></i>
                            <div style={{width: '100px', height: '2px', background: 'black', margin: '-10px auto 0'}}></div>
                        </div>

                        <div style={{width: '100%', maxWidth: '300px'}}>
                            <label style={{color: '#000000', display: 'block', marginBottom: '5px'}}>Digite seu E-mail:</label>
                            <input className="apex-input" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                            
                            <label style={{color: '#000000', display: 'block', marginBottom: '5px'}}>Digite sua senha:</label>
                            <input className="apex-input" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" />
                            
                            <div className="text-center">
                                <button className="btn-entrar" onClick={fazerLogin}>ENTRAR</button>
                            </div>
                        </div>
                    </div>

                    {/* Lado da Imagem */}
                    <div className="col-md-7 image-side d-none d-md-block">
                        <img src='./../assets/img/sidebar/dreamina-2026-02-13-8268-Reference Image 1, create a highly reali... 1.png' alt="" /> 
                        <div className="logo-apex-top">
                            <span style={{borderTop: '3px solid white', borderBottom: 'px solid white'}}>APEX</span>
                        </div>
                    </div>
                </div>

                {/* Rodapé */}
                <footer className="footer-apex">
                    <div className="row align-items-center">
                        <div className="col-md-2 text-center">
                            <h3 style={{borderTop: '2px solid white', borderBottom: '2px solid white', display: 'inline-block', padding: '2px 15px', letterSpacing: '3px'}}>APEX</h3>
                        </div>
                        <div className="col-md-4">
                            <p className="m-0">ULTIMA ATUALIZAÇÃO: 03/01/2026 ÀS 7:20</p>
                            <p className="m-0">PERÍODO DE REFERÊNCIA: 20/02/2025</p>
                            <p className="m-0">SUPORTE: ANALISEAPEX2025@GMAIL.COM.BR</p>
                        </div>
                        <div className="col-md-3">
                            <p className="m-0">PROPÓSITO</p>
                            <p className="m-0">VERSÃO 1.0</p>
                            <p className="m-0">SOBRE A APEX</p>
                        </div>
                        <div className="col-md-3 text-end">
                            <p className="mb-2">REDES SOCIAIS</p>
                            <div className="social-icons">
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-tiktok"></i>
                                <i className="bi bi-whatsapp"></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Login;
