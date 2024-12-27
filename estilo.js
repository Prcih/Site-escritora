
    // Seleciona o botão
    const btnTop = document.getElementById('btn-top');

    // Monitora o scroll da página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Mostra o botão se a rolagem for maior que 200px
            btnTop.classList.add('show');
        } else {
            btnTop.classList.remove('show');
        }
    });

    // Ao clicar no botão, sobe ao topo suavemente
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    // Adiciona um evento a todos os links do menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão

            const targetID = this.getAttribute('href'); // Obtém o ID da seção
            const targetSection = document.querySelector(targetID);

            // Rola suavemente para a seção
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });


    