// Conteúdo de: assets/js/modules/formValidator.js

/**
 * Adiciona eventos para validação de formulário em tempo real.
 */
export function setupFormValidation() {
    // Tenta encontrar o formulário (importante: ele pode ser carregado via SPA)
    const form = document.querySelector('.form-grid'); 

    if (!form) {
        // console.log("Formulário de cadastro não encontrado. Validação desnecessária.");
        return; // Sai se não estiver na página de cadastro
    }

    // ---------------------------------------------
    // 1. Validação em Tempo Real (Eventos blur)
    // ---------------------------------------------
    const fields = form.querySelectorAll('input');

    fields.forEach(field => {
        // Valida quando o campo perde o foco
        field.addEventListener('blur', () => validateField(field));
        
        // Valida quando o usuário digita (feedback rápido)
        field.addEventListener('input', () => validateField(field));
    });

    // ---------------------------------------------
    // 2. Validação no Envio (Evento submit)
    // ---------------------------------------------
    form.addEventListener('submit', (e) => {
        let isFormValid = true;
        
        // Valida todos os campos antes de enviar
        fields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            e.preventDefault(); // Impede o envio se houver campos inválidos
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        } else {
            // Simulação de envio
            e.preventDefault();
            alert('Cadastro enviado com sucesso! (Funcionalidade simulada)');
            form.reset();
        }
    });
}

/**
 * Verifica se um campo específico é válido e aplica classes visuais.
 * @param {HTMLElement} field - O elemento de input a ser validado.
 * @returns {boolean} - True se o campo for válido, false caso contrário.
 */
function validateField(field) {
    // Remove classes anteriores
    field.classList.remove('is-valid', 'is-invalid');
    
    // A propriedade checkValidity() do HTML5 verifica 'required', 'pattern', 'type', etc.
    if (field.checkValidity()) {
        field.classList.add('is-valid');
        return true;
    } else {
        field.classList.add('is-invalid');
        
        // Adiciona aviso de preenchimento incorreto (simples)
        let warning = field.parentNode.querySelector('.validation-warning');
        if (!warning) {
             warning = document.createElement('span');
             warning.classList.add('validation-warning');
             warning.style.color = 'var(--cor-alerta-erro)';
             warning.style.fontSize = '0.875rem';
             field.parentNode.appendChild(warning);
        }

        if (field.type === 'email' && field.value !== '') {
            warning.textContent = 'E-mail inválido.';
        } else if (field.hasAttribute('pattern') && field.value !== '') {
            warning.textContent = 'Formato incorreto. Siga o padrão.';
        } else if (field.hasAttribute('required') && field.value === '') {
            warning.textContent = 'Este campo é obrigatório.';
        } else {
             warning.textContent = 'Campo incorreto.';
        }
        
        return false;
    }
}