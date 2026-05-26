import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Vendas from "./Vendas";



function MainVendas() {
    const [veiculos, setVeiculos] = useState([]);
    let urlVeiculos = 'http://localhost:3001/veiculos';


    useEffect(() => {
        async function buscarVeiculos() {
            try {
                let resposta = await fetch(urlVeiculos);
                let dadosVeiculos = await resposta.json();
                setVeiculos(dadosVeiculos)
                console.log(dadosVeiculos)
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarVeiculos();

    }, [0]);
    return (
        <>
            {
                veiculos.map((item, index) => {
                    <div className="container-fluid py-5 conterDiv" >
                        <div className="container p-4 shadow colorDIV" >

                            <h1 className="text-center mb-5 colorDIV" >
                                VEÍCULOS VENDIDOS
                            </h1>

                            <div className="row g-4 justify-content-center colorDIV">
                                <div className="col-md-4 col-sm-6" >
                                    <div className="card h-100 text-center border-0 shadow-sm colorValor">
                                        <div className="card-body text-white">
                                            <h5 className="card-title">Carros SUV</h5>
                                            <img src={'./../../../assets/react.svg'} className="img-fluid rounded my-2" alt="SUV Strong" />
                                            <p className="mb-1 text-dark fw-bold">SUV Strong</p>
                                            <h4 className="fw-bold">R$499.000,00</h4>
                                            <div className="text-start"><small className="text-warning fw-bold">4 unidades</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }

        </>
    );
}
export default MainVendas;