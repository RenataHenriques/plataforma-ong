// Conteúdo de: assets/js/main.js

import { setupFormValidation } from './modules/formValidator.js';

// ===========================================
// 1. LÓGICA DO SPA (Troca de Conteúdo e Roteamento Básico)
// ===========================================

// Função que carrega o conteúdo de um arquivo HTML via fetch
async function loadContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao carregar o conteúdo: ${response.statusText}`);
        }
        const html = await response.text();
        
        // 1. Extrai apenas o conteúdo dentro da tag <main>
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMainContent = doc.querySelector('main').innerHTML;
        
        // 2. Insere no <main> atual
        document.querySelector('main').innerHTML = newMainContent;
        
        // 3. Atualiza o título
        const newTitle = doc.querySelector('title').textContent;
        document.title = newTitle;
        
        // 4. Executa a função de validação APÓS carregar o formulário
        if (url.includes('cadastro.html')) {
            setupFormValidation();
        }

    } catch (error) {
        console.error('Falha ao carregar a página:', error);
        document.querySelector('main').innerHTML = `<div class="container"><h2>Erro 404</h2><p>Página não encontrada ou falha de rede.</p></div>`;
    }
}

// Manipulador de cliques para navegação
document.addEventListener('DOMContentLoaded', () => {
    
    // Adiciona um listener a toda a janela para interceptar cliques nos links <a>
    document.body.addEventListener('click', (e) => {
        // Verifica se o clique foi em um link interno (da navegação)
        const targetLink = e.target.closest('a');
        if (targetLink && targetLink.href.startsWith(window.location.origin)) {
            // Evita o comportamento padrão de recarregar a página
            e.preventDefault(); 
            
            const url = targetLink.href;
            
            // Simula o histórico do navegador (para o botão voltar)
            history.pushState(null, '', url); 
            
            // Carrega o conteúdo da URL
            loadContent(url);
        }
    });
    
    // Suporte para o botão 'Voltar' do navegador
    window.addEventListener('popstate', () => {
        loadContent(window.location.href);
    });

    // Como o 'cadastro.html' é o formulário, garantimos que a validação seja configurada
    if (window.location.href.includes('cadastro.html')) {
        setupFormValidation();
    }
});