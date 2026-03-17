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
            <div className="container justify-content-center 
            align-content-center">
                <div className="row">
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" />
                    <label htmlFor="senha">Senha:</label>
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} type="text" name="senha" id="senha" />
                    <button onClick={fazerLogin}>Entrar</button>
                </div>
            </div>
        </>

    );
}
export default Login;