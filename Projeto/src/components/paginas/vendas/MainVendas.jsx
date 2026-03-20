import { useParams } from "react-router";
import { useState, useActionState, useEffect } from "react";
import Vendas from "./Vendas";
import cross from "./../../../assets/img/Cross.png"
import suv from "./../../../assets/img/SUV.png"
import picape from "./../../../assets/img/Picape.png"
import esportivo from "./../../../assets/img/esportivo.png"
import hatch from "./../../../assets/img/Hatch.png"

function MainVendas() {


    return (
        <>
            <div className="container-fluid py-5" >
                <div className="container p-4 shadow" >

                    <h1 className="text-center mb-5" >
                        VEÍCULOS VENDIDOS
                    </h1>

                    <div className="row g-4 justify-content-center">


                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100 text-center border-0 shadow-sm">
                                <div className="card-body text-white">
                                    <h5 className="card-title">Carros SUV</h5>
                                    <img src={suv} className="img-fluid rounded my-2" alt="SUV Strong" />
                                    <p className="mb-1 text-dark fw-bold">SUV Strong</p>
                                    <h4 className="fw-bold">R$499.000,00</h4>
                                    <div className="text-start"><small className="text-warning fw-bold">4 unidades</small></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className ="card h-100 text-center border-0 shadow-sm ">
                                <div className="card-body text-white">
                                    <h5 className="card-title">Carros Hatchback</h5>
                                    <img src={hatch} className="img-fluid rounded my-2" alt="HATCH Aston" />
                                    <p className="mb-1 text-dark fw-bold">HATCH Aston</p>
                                    <h4 className="fw-bold">R$93.000,00</h4>
                                    <div className="text-start"><small className="text-warning fw-bold">9 unidades</small></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100 text-center border-0 shadow-sm" >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Caminhotes Picapes</h5>
                                    <img src={picape} className="img-fluid rounded my-2" alt="PICAPE Triton" />
                                    <p className="mb-1 text-dark fw-bold">PICAPE Triton</p>
                                    <h4 className="fw-bold">R$259.000,00</h4>
                                    <div className="text-start"><small className="text-warning fw-bold">8 unidades</small></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100 text-center border-0 shadow-sm" >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Carro Esportivo</h5>
                                    <img src={esportivo} className="img-fluid rounded my-2" alt="Esportivo IMPULSE" />
                                    <p className="mb-1 text-dark fw-bold">Esportivo IMPULSE</p>
                                    <h4 className="fw-bold">R$750.000,00</h4>
                                    <div className="text-start"><small className="text-warning fw-bold">3 unidades</small></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100 text-center border-0 shadow-sm" >
                                <div className="card-body text-white">
                                    <h5 className="card-title">Nosso futuro PROJETO</h5>
                                    <img src={cross} className="img-fluid rounded my-2" alt="Apex CROSS" />
                                    <p className="mb-1 text-dark fw-bold">Apex CROSS</p>
                                    <h4 className="fw-bold">R$Não Definido</h4>
                                    <div className="text-start"><small className="text-warning fw-bold">0 unidades</small></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default MainVendas;