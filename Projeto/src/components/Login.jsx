import React from 'react';
// Certifique-se de que os nomes dos arquivos estão corretos nas suas pastas
import ImagemCarro from "./../assets/img/dreamina-2026-02-13-8268-Reference Image 1, create a highly reali... 1.png"; 
import LogoAsas from "./../assets/img/Untitled.png";

function LoginPage() {
    const styles = {
        container: {
            backgroundColor: '#8BAFCA',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            fontFamily: 'Arial, sans-serif'
        },
        loginBox: {
            backgroundColor: 'white',
            width: '1000px',
            height: '650px',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column', // Mantém o rodapé embaixo
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        },
        mainContent: {
            display: 'flex',
            flex: 1, // Faz esta área crescer e empurrar o footer para baixo
            position: 'relative'
        },
        formSide: {
            flex: 1,
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 2, // Garante que o formulário fique sobre a imagem se necessário
            backgroundColor: 'white'
        },
        imageSide: {
            flex: 3.0,
            position: 'relative',
            backgroundImage: `url(${ImagemCarro})`, // Usa a imagem importada
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
        },
        logoAsas: {
            width: '180px',
            marginBottom: '40px',
            alignSelf: 'center'
        },
        label: {
            fontSize: '18px',
            color: '#7FA1BC',
            marginBottom: '8px',
            display: 'block'
        },
        input: {
            width: '100%',
            height: '45px',
            backgroundColor: '#8BAFCA',
            border: 'none',
            borderRadius: '15px',
            color: 'white',
            padding: '0 20px',
            marginBottom: '20px',
            outline: 'none'
        },
        btnEntrar: {
            backgroundColor: '#8BAFCA',
            color: 'white',
            border: 'none',
            padding: '12px 60px',
            borderRadius: '20px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '10px'
        },
        apexBadge: {
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: '#3E729C',
            width: '112%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '40px',
            fontWeight: 'bold',
            letterSpacing: '5px'
        },
        footer: {
            backgroundColor: '#9fd3fe',
            color: 'white',
            padding: '10px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '120px',
            fontSize: '10px',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                
                <div style={styles.mainContent}>
                    {/* LADO ESQUERDO: LOGIN */}
                    <div style={styles.formSide}>
                        <img src={LogoAsas} alt="Logo Asas" style={styles.logoAsas} />
                        
                        <div>
                            <label style={styles.label}>Digite seu E-mail:</label>
                            <input type="email" style={styles.input} />
                        </div>

                        <div>
                            <label style={styles.label}>Digite sua senha:</label>
                            <input type="password" style={styles.input} />
                        </div>

                        <button style={styles.btnEntrar}>ENTRAR</button>
                    </div>

               
                    <div style={styles.imageSide}>
                        <div style={styles.apexBadge}>APEX</div>
                    </div>
                </div>

           
            </div>
        </div>
    );
}

export default LoginPage;
