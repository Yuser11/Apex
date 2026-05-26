import { useEffect, useState, useCallback } from "react";

const AlternadorDeTema = () => {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("theme") || "auto";
  });

  // Função para descobrir o tema real (considerando o sistema)
  const obterTemaAtivo = useCallback((tema) => {
    if (tema !== "auto") return tema;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  // Efeito para aplicar as mudanças sempre que o tema mudar
  useEffect(() => {
    const temaEfetivo = obterTemaAtivo(tema);
    
    // Aplica no HTML 
    document.documentElement.setAttribute("data-bs-theme", temaEfetivo);
    
    // Salva a preferência
    localStorage.setItem("theme", tema);

    // Ouvinte para mudanças no sistema (apenas se estiver em 'auto')
    const preferenciaSistema = window.matchMedia("(prefers-color-scheme: dark)");
    const escutarSistema = () => {
      if (tema === "auto") document.documentElement.setAttribute("data-bs-theme", obterTemaAtivo("auto"));
    };

    preferenciaSistema.addEventListener("change", escutarSistema);
    return () => preferenciaSistema.removeEventListener("change", escutarSistema);
  }, [tema, obterTemaAtivo]);

  useEffect(() => {
    const gerenciarClique = (e) => {
      const botao = e.target.closest("[data-bs-theme-value]");
      if (botao) {
        const novoTema = botao.getAttribute("data-bs-theme-value");
        setTema(novoTema);
      }
    };

    document.addEventListener("click", gerenciarClique);
    return () => document.removeEventListener("click", gerenciarClique);
  }, []);

  return null; 
};

export default AlternadorDeTema;