import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function MainHome() {
    // Cria referências mutáveis para os elementos <canvas> do HTML
    const chartMetasRef = useRef(null);
    const chartPizzaRef = useRef(null);
    const chartVendasRef = useRef(null);

    useEffect(() => {
        // Definição de cores personalizadas em formato hexadecimal
        const purple = '#9b51e0';
        const yellow = '#f2c94c';
        const lightBlue = '#3b82f6';
        const pink = '#ff6384';


        // GRÁFICO 1: METAS DO MÊS (Gráfico de Barras Duplas)
        const chart1 = new Chart(chartMetasRef.current, {
            type: 'bar', // Define o tipo como gráfico de barras
            data: {
                labels: ['HatchBack', 'SUV', 'Picapes', 'Esportivo'], // Categorias do eixo X
                datasets: [
                    { label: 'Vendidos', data: [200, 100, 180, 90], backgroundColor: purple, barThickness: 20 },
                    { label: 'Meta do mês', data: [350, 250, 300, 200], backgroundColor: yellow, barThickness: 20 }
                ]
            },
            options: {
                maintainAspectRatio: false, // Permite que o gráfico preencha a altura do container pai
                plugins: {
                    legend: { position: 'right', labels: { boxWidth: 15, font: { size: 12 } } }, // Legenda à direita
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


        // GRÁFICO 2: MODELOS MAIS VENDIDOS (Gráfico de Pizza)
        const chart2 = new Chart(chartPizzaRef.current, {
            type: 'pie', // Define o tipo como gráfico de pizza
            data: {
                labels: ['Hatchback', 'Picapes', 'Esportivo', 'Suv'],
                // Fatia correspondente a cada modelo com uma cor única e sem bordas
                datasets: [{ data: [40, 25, 10, 25], backgroundColor: [lightBlue, yellow, pink, purple], borderWidth: 0 }]
            },
            options: {
                maintainAspectRatio: false,
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

        // GRÁFICO 3: HISTÓRICO DE VENDAS ANUAL (Gráfico de Barras Simples)
        const chart3 = new Chart(chartVendasRef.current, {
            type: 'bar',
            data: {
                labels: ['Jan/Fev/Mar', 'Abr/Mai/Jun', 'Jul/Ago/Set', 'Out/Nov/Dez'], // Agrupamento por trimestres
                datasets: [{ data: [600, 400, 500, 300], backgroundColor: purple, borderRadius: 5 }] // Barras com cantos arredondados
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }, // Oculta a legenda já que há apenas um conjunto de dados
                    title: {
                        display: true,
                        text: 'HISTÓRICO DE VENDAS ANUAL',
                        color: '#000000',
                        font: { size: 18, weight: 'bold' },
                        padding: { top: 10, bottom: 20 }
                    }
                },
                scales: {
                    x: { grid: { display: false } }, // Remove as linhas de grade verticais do fundo
                    y: { beginAtZero: true, max: 1000 } // Força o eixo Y a começar em 0 e ir até 1000
                }
            }
        });

        // Função de limpeza (cleanup) do useEffect
        // Executada automaticamente se o componente for desmontado da tela
        return () => {
            chart1.destroy(); // Destrói a instância do gráfico 1 para liberar memória
            chart2.destroy(); // Destrói a instância do gráfico 2
            chart3.destroy(); // Destrói a instância do gráfico 3
        };
    }, []); // Array vazio garante que os gráficos sejam criados apenas uma vez

    return (
        <main className="main-bg col">
            <div style={{ width: '100%', maxWidth: '1100px' }}>
                <div className="row justify-content-center g-4">

                    {/* Container do Gráfico de Metas */}
                    <div className="col-md-6">
                        <div className="blue-card text-center shadow">
                            <span className="label-header">Metas do mês</span>
                            <div className="white-chart-box" style={{ height: '250px' }}>
                                {/* O ref conecta este elemento canvas específico ao gráfico correspondente criado no useEffect */}
                                <canvas ref={chartMetasRef}></canvas>
                            </div>
                        </div>
                    </div>

                    {/* Container do Gráfico de Pizza */}
                    <div className="col-md-6">
                        <div className="blue-card text-center shadow">
                            <span className="label-header">Modelos mais vendidos</span>
                            <div className="white-chart-box" style={{ height: '250px' }}>
                                <canvas ref={chartPizzaRef}></canvas>
                            </div>
                        </div>
                    </div>

                    {/* Container do Gráfico Histórico Anual */}
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
