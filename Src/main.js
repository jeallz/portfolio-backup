// HEADER
const menu = document.getElementById("menu-h");
const element = document.querySelector(".header-links");

menu.addEventListener("change", () => {
    if (menu.checked) {
        element.style.transform = "translateY(0%)";
    } else {
        element.style.transform = "translateY(-100%)";
    }
});

// TEXTO ANIMADO
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animatedText', {
        speed: 150,
        loop: true
    })
    .type('Web Front-end ', { delay: 3000 })
    .delete(24)
    .type('Mobile Flutter ', { delay: 3000 })
    .delete(24)
    .type('Discord Bots ', { delay: 3000 })
    .delete(24)
    .go();
});

// SECTION CONHECIMENTOS
let dados = []

const titulo = document.getElementById("titulo")
const texto = document.getElementById("text")
const nivel = document.getElementById("conhecimento")

const checks = document.querySelectorAll(".tech input")

function carregarTecnologia(index){

    const tech = dados[index]

    if(!tech) return

    titulo.textContent = tech.nome
    texto.textContent = tech.descricao
    nivel.textContent = tech.nivel
}

fetch("./Src/data.json")
.then(res => res.json())
.then(data => {

    dados = data.tecnologias

    checks.forEach(check => {
        
        check.addEventListener("change", () => {

            if(!check.checked){

                const algumMarcado = document.querySelectorAll(".tech input:checked").length

                if(algumMarcado === 0){
                    check.checked = true
                    return
                }

            }

            checks.forEach(c => {
                if(c !== check) c.checked = false
            })

            const index = Number(check.dataset.tech)
            carregarTecnologia(index)

        })

    })

    const inicial = document.querySelector('.tech input:checked')

    if(inicial){
        const index = Number(inicial.dataset.tech)
        carregarTecnologia(index)
    }

})
.catch(err => {
    console.error("Erro ao carregar JSON:", err)
})

/* ----- NAVEGAÇÃO ------ */

//botões
const next1 = document.getElementById('next');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const voltar1 = document.getElementById('voltar');
const voltar2 = document.getElementById('voltar2');
const voltar_init = document.getElementById('voltar_init');

// dots
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');

//divisões
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

//código 

next1.addEventListener('click', () => {
    div1.classList.add('next_div');

    dot1.classList.remove('active');
    dot2.classList.add('active');
});

voltar1.addEventListener('click', () => {
    div1.classList.remove('next_div');
    
    dot2.classList.remove('active');
    dot1.classList.add('active');
});

next2.addEventListener('click', () => {
    div2.classList.add('next_div');

    dot2.classList.remove('active');
    dot3.classList.add('active');
});

voltar2.addEventListener('click', () => {
    div2.classList.remove('next_div');

    dot3.classList.remove('active');
    dot2.classList.add('active');
});

next3.addEventListener('click', () => {
    div3.classList.add('next_div');

    dot3.classList.remove('active');
    dot4.classList.add('active');
});

voltar_init.addEventListener('click', () => {
    div3.classList.remove('next_div');
    dot4.classList.remove('active');
    dot3.classList.add('active');

    setTimeout(() => {
        div2.classList.remove('next_div');

        dot3.classList.remove('active');
        dot2.classList.add('active');
    }, 400)

    setTimeout(() => {
        div1.classList.remove('next_div');

        dot2.classList.remove('active');
        dot1.classList.add('active');
    }, 800)
});

// NAVEGAÇÃO PROJETOS

// main
const main = document.getElementById('main');

// Banners
const projetos = document.getElementById('projetos');
const diplomas = document.getElementById('diplomas');

const projetos2 = document.getElementById('projetos2');
const diplomas2 = document.getElementById('diplomas2');

// Dots div
const dots = document.getElementById('dots');

// Botões Voltar 
const voltar_home1 = document.getElementById('voltar_home1');
const voltar_home2 = document.getElementById('voltar_home2');

// divisões
const projects_main = document.getElementById('projects_main');
 
projetos.addEventListener('click', () => {
    projects_main.classList.add('next_div2');
    dots.style.display = 'none';
});

projetos2.addEventListener('click', () => {
    projects_main.classList.add('next_div2');
    dots.style.display = 'none';
});


voltar_home1.addEventListener('click', () => {
    projects_main.classList.remove('next_div2');
    dots.style.display = 'flex';
});

diplomas.addEventListener('click', () => {
    diplomas_main.classList.add('next_div2');
    dots.style.display = 'none';
});

diplomas2.addEventListener('click', () => {
    diplomas_main.classList.add('next_div2');
    dots.style.display = 'none';
});


voltar_home2.addEventListener('click', () => {
    diplomas_main.classList.remove('next_div2');
    dots.style.display = 'flex';
});

// PROJETOS

// divisões
const nxt_div = document.getElementById('nxt-container');
const coffee_div = document.getElementById('coffee-container');
const stranger_div = document.getElementById('stranger-container');

//botões
const nxt = document.getElementById('nxt');
const coffee = document.getElementById('coffee');
const stranger = document.getElementById('stranger');
const voltar_nxt = document.getElementById('voltar-nxt');
const voltar_coffee = document.getElementById('voltar-coffee')
const voltar_stranger = document.getElementById('voltar-stranger')

//code
nxt.addEventListener('click', () => {
    nxt_div.classList.add('next_div');
});

voltar_nxt.addEventListener('click', () => {
    nxt_div.classList.remove('next_div');
});

coffee.addEventListener('click', () => {
    coffee_div.classList.add('next_div');
});

voltar_coffee.addEventListener('click', () => {
    coffee_div.classList.remove('next_div');
});

stranger.addEventListener('click', () => {
    stranger_div.classList.add('next_div');
});

voltar_stranger.addEventListener('click', () => {
    stranger_div.classList.remove('next_div');
});

//LOADING

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading")

        gsap.to("#loading", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => loading.remove()
        });

        const tl = gsap.timeline();

        tl.from(".img", {
            x: -200,
            opacity: 0,
            duration: 1
        })
        .from(".text", {
            x: 200,
            opacity: 0,
            duration: 1
        }, "-=0.7")
        .from(".conteudo", {
            y: 200,
            opacity: 0,
            duration: 1
        }, "-=0.7");

    }, 1200)

});