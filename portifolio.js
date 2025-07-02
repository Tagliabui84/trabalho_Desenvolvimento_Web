// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Ajuste para compensar a navbar fixa
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se estiver aberto (pode ser adicionado posteriormente)
            // ...
        }
    });
});

// Função para mostrar/ocultar o botão de voltar ao topo
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Função para voltar ao topo quando o botão é clicado
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para enviar o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Capturar os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validação simples
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Aqui você normalmente enviaria os dados para um servidor
    // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
    
    // Limpar o formulário
    this.reset();
});

// Efeito de destaque no menu conforme a rolagem
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - navbarHeight - 50) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Adicionar classe ativa ao primeiro link quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const firstNavLink = document.querySelector('nav ul li a');
    if (firstNavLink && window.location.hash === '') {
        firstNavLink.classList.add('active');
    }
});