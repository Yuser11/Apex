import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function MainHome() {
    const chartMetasRef = useRef(null);
    const chartPizzaRef = useRef(null);
    const chartVendasRef = useRef(null);

    useEffect(() => {
        const purple = '#9b51e0';
        const yellow = '#f2c94c';
        const lightBlue = '#3b82f6';
        const pink = '#ff6384';

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
                aintainAspectRatio: false,
                plugins: { 
                    legend: { position: 'right', labels: { boxWidth: 15, font: { size: 12 } } },
                    // TÍTULO ADICIONADO ABAIXO
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

        const chart2 = new Chart(chartPizzaRef.current, {
            type: 'pie',
            data: {
                labels: ['Hatchback', 'Picapes', 'Esportivo', 'Suv'],
                datasets: [{ data: [40, 25, 10, 25], backgroundColor: [lightBlue, yellow, pink, purple], borderWidth: 0 }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: { 
                    legend: { position: 'right', labels: { boxWidth: 15, font: { size: 15 } } },
                    // TÍTULO ADICIONADO ABAIXO
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

        const chart3 = new Chart(chartVendasRef.current, {
            type: 'bar',
            data: {
                labels: ['Jan/Fev/Mar', 'Abr/Mai/Jun', 'Jul/Ago/Set', 'Out/Nov/Dez'],
                datasets: [{ data: [100, 75, 95, 25], backgroundColor: purple, borderRadius: 5 }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: { 
                    legend: { display: false },
                    // TÍTULO ADICIONADO ABAIXO
                    title: {
                        display: true,
                        text: 'HISTÓRICO DE VENDAS ANUAL',
                        color: '#000000',
                        font: { size: 18, weight: 'bold' },
                        padding: { top: 10, bottom: 20 }
                    }
                },
                scales: { x: { grid: { display: false } }, y: { beginAtZero: true, max: 100 } }
            }
        });

        return () => {
            chart1.destroy();
            chart2.destroy();
            chart3.destroy();
        };
    }, []);

    const styles = {
        mainBg: { backgroundColor: '#7FA1BC', margin: '0', minHeight: '100vh', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', boxSizing: 'border-box' },
        blueCard: { backgroundColor: '#3E729C', borderRadius: '20px', padding: '35px', marginBottom: '20px' },
        labelHeader: { backgroundColor: '#7FA1BC', color: 'white', padding: '6px 25px', borderRadius: '25px', fontSize: '20px', display: 'inline-block', marginBottom: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' },
        whiteChartBox: { backgroundColor: 'white', borderRadius: '10px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }
    };

    return (
        <main className="col" style={styles.mainBg}>
            <div style={{ width: '100%', maxWidth: '1100px' }}>
                <div className="row justify-content-center g-4">
                    
                    <div className="col-md-6">
                        <div style={styles.blueCard} className="text-center shadow">
                            <span style={styles.labelHeader}>Metas do mês</span>
                            <div style={{ ...styles.whiteChartBox, height: '250px' }}>
                                <canvas ref={chartMetasRef}></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div style={styles.blueCard} className="text-center shadow">
                            <span style={styles.labelHeader}>Modelos mais vendidos</span>
                            <div style={{ ...styles.whiteChartBox, height: '250px' }}>
                                <canvas ref={chartPizzaRef}></canvas>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div style={styles.blueCard} className="text-center shadow">
                            <span style={styles.labelHeader}>Vendas no ano passado</span>
                            <div style={{ ...styles.whiteChartBox, height: '300px' }}>
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
