import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa a biblioteca de gráficos

function MainHome() {
    // É necessário para o Chart.js desenhar os gráficos
    const chartMetasRef = useRef(null);
    const chartPizzaRef = useRef(null);
    const chartVendasRef = useRef(null);

    useEffect(() => {
        // Definição de cores para manter o padrão do Figma
        const purple = '#9b51e0';
        const yellow = '#f2c94c';
        const lightBlue = '#3b82f6';
        const pink = '#ff6384';

        // Estrutura do primeiro gráfico 
        const chart1 = new Chart(chartMetasRef.current, {
            type: 'bar',
            data: {
                labels: ['HatchBack', 'SUV', 'Picapes', 'Esportivo'],
                datasets: [
                    { label: 'Vendidos', data: [200, 100, 180, 90], backgroundColor: purple, barThickness: 20 },
                    { label: 'Meta do mês', data: [350, 250, 300, 200], backgroundColor: yellow, barThickness: 20 }
                ]
            },
            options: {
                maintainAspectRatio: false, // Preenche a altura do container pai( Estilização do código)
                plugins: { 
                    legend: { position: 'right', labels: { boxWidth: 15, font: { size: 12 } } },
                    title: {
                        display: true,
                        text: 'METAS DO MÊS',
                        color: '#000000',
                        font: { size: 14, weight: 'bold' },
                        padding: { top: 10, bottom: 20 }
                    }
                },
                layout: { padding: 10 }
            }
        });

        // Estrutura do segundo gráfico 
        const chart2 = new Chart(chartPizzaRef.current, {
            type: 'pie',
            data: {
                labels: ['Hatchback', 'Picapes', 'Esportivo', 'Suv'],
                datasets: [{ data: [40, 25, 10, 25], backgroundColor: [lightBlue, yellow, pink, purple], borderWidth: 0 }]
            },
            options: {
                maintainAspectRatio: false, // Preenche a altura do container pai( Estilização do código)
                plugins: { 
                    legend: { position: 'right', labels: { boxWidth: 15, font: { size: 15 } } },
                    title: {
                        display: true,
                        text: 'MODELOS MAIS VENDIDOS EM NOSSA EMPRESA',
                        color: '#000000',
                        font: { size: 14, weight: 'bold' },
                        padding: { top: 10, bottom: 20 }
                    }
                },
                layout: { padding: 10 }
            }
        });

        // Estrutura do terceiro gráfico 
        const chart3 = new Chart(chartVendasRef.current, {
            type: 'bar',
            data: {
                labels: ['Jan/Fev/Mar', 'Abr/Mai/Jun', 'Jul/Ago/Set', 'Out/Nov/Dez'],
                datasets: [{ data: [600, 400, 500, 300], backgroundColor: purple, borderRadius: 5 }]
            },
            options: {
                maintainAspectRatio: false, // Preenche a altura do container pai( Estilização do código)
                plugins: { 
                    legend: { display: false }, // Torna gráfico mais limpo sem a legenda, pois existi só um dataset (As informações relacionadas ao Gráfico)
                    title: {
                        display: true,
                        text: 'HISTÓRICO DE VENDAS ANUAL',
                        color: '#000000',
                        font: { size: 18, weight: 'bold' },
                        padding: { top: 10, bottom: 20 }
                    }
                },
                scales: { 
                    x: { grid: { display: false } }, // Remove as linhas de grade verticais
                    y: { beginAtZero: true, max: 1000 } 
                }
            }
        });

        // Evitar bugs no código
        return () => {
            chart1.destroy();
            chart2.destroy();
            chart3.destroy();
        };
    }, []); // Array sozinho, para rodar só uma vez

    return (
        <main className="main-bg col"> {/* Container principal com fundo azul claro */}
            <div style={{ width: '100%', maxWidth: '1100px' }}>
                <div className="row justify-content-center g-4">
                    
                    {/* Card de Metas */}
                    <div className="col-md-6">
                        <div className="blue-card text-center shadow">
                            <span className="label-header">Metas do mês</span>
                            <div className="white-chart-box" style={{ height: '250px' }}>
                                <canvas ref={chartMetasRef}></canvas>
                            </div>
                        </div>
                    </div>
    
                    {/* Card de Modelos (Pizza) */}
                    <div className="col-md-6">
                        <div className="blue-card text-center shadow">
                            <span className="label-header">Modelos mais vendidos</span>
                            <div className="white-chart-box" style={{ height: '250px' }}>
                                <canvas ref={chartPizzaRef}></canvas>
                            </div>
                        </div>
                    </div>
    
                    {/* Card de Vendas Anuais (Largo) */}
                    <div className="col-12">
                        <div className="blue-card text-center shadow">
                            <span className="label-header">Vendas no ano passado</span>
                            <div className="white-chart-box" style={{ height: '300px' }}>
                                <canvas ref={chartVendasRef}></canvas>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}

export default MainHome;
