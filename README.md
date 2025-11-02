# Plataforma de Voluntariado - Grupo Solidário
### Projeto Final: SPA, Acessibilidade WCAG e Práticas Profissionais

## 📝 Descrição do Projeto
Este projeto simula a plataforma de uma ONG, focada em conectar voluntários a projetos sociais. A arquitetura foi desenvolvida com os princípios de Single Page Application (SPA) básico, CSS Modular e JavaScript ES6+. O projeto final consolida a aplicação de práticas profissionais como: Acessibilidade **WCAG 2.1 (Nível AA)**, **Otimização para Produção** e **Versionamento Git/GitHub Semântico**.

## ✨ Requisitos Técnicos Cumpridos

### Acessibilidade (WCAG 2.1 Nível AA)
- **Navegação por Teclado:** Implementada e garantida por estilos `:focus` robustos em todos os links, botões e campos de formulário.
- **Estrutura Semântica:** Uso correto de HTML5 para garantir a leitura por dispositivos assistivos.
- **Contraste Mínimo:** A paleta de cores garante a taxa de contraste mínima de 4.5:1 exigida.
- **Modo Escuro Acessível:** Implementação via *media query* `prefers-color-scheme: dark` no arquivo `acessibilidade.css`, oferecendo alto contraste.

### Otimização para Produção
- **Minificação:** Arquivos CSS e JavaScript foram minificados e armazenados na pasta `dist/`.
- **Compressão:** Todas as imagens na pasta `assets/images/` foram comprimidas.

### Controle de Versão (Git/GitHub)
- **Estratégia de Branching:** Demonstração da estrutura GitFlow (simulação via Commits Semânticos).
- **Commits Semânticos:** Histórico de commits organizado usando prefixos.
- **Releases:** Criação do **Release `v1.0.0`** para a versão final estável.

## 🛠️ Tecnologias Utilizadas
- HTML5 (Semântico)
- CSS3 (Modular, Variáveis CSS)
- JavaScript ES6+ (Módulos, `fetch`, Validação de Formulário)

## 🚀 Como Executar
1.  Clonar o repositório.
2.  O projeto deve ser executado em um **servidor local** (como o Live Server do VS Code) para que a navegação SPA (`fetch`) e a lógica de módulos JavaScript funcionem corretamente, evitando erros de CORS.

---
## 👤 Autor e Versão
- **Autor:** [Renata Henriques]
- **Versão:** v1.0.0