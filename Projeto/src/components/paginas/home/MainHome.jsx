import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, Cell as RechartsCell
} from 'recharts';
import { 
  Home, Info, Users, UserPlus, History, Package, LogOut, UserCircle 
} from 'lucide-react';

const MainHome = () => {
  // Dados: Metas do Mês (Barras horizontais)
  const dataMetas = [
    { name: 'Carro Hatchback', atual: 70, meta: 100 },
    { name: 'Carro SUV', atual: 50, meta: 100 },
    { name: 'Carro Sedan', atual: 25, meta: 100 },
  ];

  // Dados: Modelos mais vendidos (Pizza)
  const dataPizza = [
    { name: 'Carro Esportivo', value: 20 },
    { name: 'Carro Hatchback', value: 25 },
    { name: 'Caminhonete/Picape', value: 25 },
    { name: 'Carro SUV', value: 30 },
  ];

  // Dados: Vendas do ano passado (Barras verticais)
  const dataVendas = [
    { periodo: 'Janeiro/Fevereiro/Março', valor: 100 },
    { periodo: 'Abril/Maio/Junho', valor: 75 },
    { periodo: 'Julho/Agosto/Setembro', valor: 95 },
    { periodo: 'Outubro/Novembro/Dezembro', valor: 25 },
  ];

  const COLORS_PIZZA = ['#facc15', '#a855f7', '#fb923c', '#ef4444'];

  return (
    <div className="flex flex-col h-screen bg-[#94a8bc] font-sans overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-[#5b84a2] p-4 flex justify-between items-center text-white border-b border-black/20">
        <div className="flex items-center gap-4">
           {/* Logo Estilizada */}
           <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <div className="w-6 h-[2px] bg-white"></div>
                <div className="w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-6 bg-white rotate-45 absolute"></div>
                  <div className="w-1 h-6 bg-white -rotate-45 absolute"></div>
                </div>
                <div className="w-6 h-[2px] bg-white"></div>
              </div>
           </div>
        </div>
        <h1 className="text-4xl font-serif tracking-[10px] border-y-2 border-white px-10">APEX</h1>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-light">LOGIN</span>
          <UserCircle size={45} strokeWidth={1} />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR */}
        <nav className="w-64 p-6 flex flex-col gap-5 text-[#3d5a73] font-bold text-sm bg-transparent">
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><Home size={22}/> HOME</div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><Info size={22}/> INFORMAÇÕES</div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><Users size={22}/> CLIENTES</div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><UserPlus size={22}/> CADASTRO FUNCIONÁRIO</div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><History size={22}/> HISTÓRICO DE VENDAS</div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><Package size={22}/> PRODUTOS</div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors mt-auto mb-10"><LogOut size={22}/> SAIR</div>
        </nav>

        {/* DASHBOARD GRID */}
        <main className="flex-1 p-6 grid grid-cols-2 gap-6 overflow-y-auto">
          
          {/* Gráfico Metas (Horizontal) */}
          <div className="bg-[#5b84a2]/60 p-4 rounded-[40px] border border-black/10 shadow-lg">
            <h3 className="text-center text-white font-bold mb-4 text-xs uppercase tracking-widest">Metas do Mês:</h3>
            <div className="bg-white rounded-[30px] p-4 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={dataMetas} margin={{ left: 30, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} fontSize={10} tick={{fill: '#5b84a2', fontWeight: 'bold'}} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="meta" fill="#fbbf24" radius={[0, 10, 10, 0]} barSize={20} />
                  <Bar dataKey="atual" fill="#a855f7" radius={[0, 10, 10, 0]} barSize={20} style={{ transform: 'translateY(-20px)' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico Pizza */}
          <div className="bg-[#5b84a2]/60 p-4 rounded-[40px] border border-black/10 shadow-lg">
            <h3 className="text-center text-white font-bold mb-4 text-[10px] uppercase tracking-tighter">Modelos mais vendidos em nossa empresa:</h3>
            <div className="bg-white rounded-[30px] p-2 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={dataPizza} innerRadius={0} outerRadius={70} dataKey="value">
                    {dataPizza.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_PIZZA[index % COLORS_PIZZA.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" iconSize={8} wrapperStyle={{fontSize: '10px'}} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico Vendas Anuais (Full Width) */}
          <div className="col-span-2 bg-[#5b84a2]/60 p-5 rounded-[40px] border border-black/10 shadow-lg">
            <h3 className="text-center text-white font-bold mb-4 text-xs uppercase tracking-widest">Vendas do Ano Passado:</h3>
            <div className="bg-white rounded-[30px] p-6 h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataVendas}>
                  <XAxis dataKey="periodo" fontSize={10} tick={{fill: '#333'}} axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="valor" fill="#a855f7" radius={[10, 10, 0, 0]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#5b84a2] text-white p-6 grid grid-cols-4 items-center border-t border-black/20 text-[9px]">
        <div className="text-4xl font-serif border-y border-white inline-block px-4 w-fit">APEX</div>
        <div className="space-y-1">
          <p>ÚLTIMA ATUALIZAÇÃO: 03/01/2026 ÀS 07:20</p>
          <p>PERÍODO DE REFERÊNCIA: 20/02/2025</p>
          <p>SUPORTE: ANALISEAPEX2025@GMAIL.COM.BR</p>
        </div>
        <div className="space-y-1">
          <p className="font-bold">PROPÓSITO</p>
          <p>VERSÃO 1.0</p>
          <p>SOBRE A APEX</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold">REDES SOCIAIS</span>
          <div className="flex gap-4 text-xl">
             {/* Simulando ícones sociais */}
             <div className="w-6 h-6 border border-white rounded-md flex items-center justify-center">I</div>
             <div className="w-6 h-6 border border-white rounded-md flex items-center justify-center">F</div>
             <div className="w-6 h-6 border border-white rounded-md flex items-center justify-center">T</div>
             <div className="w-6 h-6 border border-white rounded-md flex items-center justify-center">W</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainHome;
