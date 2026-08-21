function mostrarMensagem() {
    alert("Bem-vindo ao Empreenda+! 🚀");
}


function abrirPost(numero) {

    const area = document.getElementById("postCompleto");

    if (numero === 1) {

        area.innerHTML = `
            <h2>5 passos para começar a empreender</h2>

            <p>
                Empreender pode parecer difícil no começo,
                mas com planejamento e dedicação é possível
                transformar uma boa ideia em um negócio.
            </p>

            <h3>1. Encontre uma boa ideia</h3>

            <p>
                Pense em um produto ou serviço que possa
                resolver um problema ou atender uma
                necessidade das pessoas.
            </p>

            <h3>2. Conheça seu público</h3>

            <p>
                Descubra quem são as pessoas que poderiam
                comprar seu produto ou utilizar seu serviço.
            </p>

            <h3>3. Faça um planejamento</h3>

            <p>
                Organize seus objetivos, custos, preços
                e estratégias para colocar sua ideia em prática.
            </p>

            <h3>4. Divulgue seu negócio</h3>

            <p>
                Utilize as redes sociais para apresentar
                sua marca e alcançar novos clientes.
            </p>

            <h3>5. Aprenda e melhore</h3>

            <p>
                Observe os resultados e procure sempre
                melhorar seus produtos, serviços e atendimento.
            </p>
        `;
    }


    if (numero === 2) {

        area.innerHTML = `
            <h2>Como ter ideias para novos negócios?</h2>

            <p>
                Muitas ideias de negócios surgem quando
                observamos problemas do nosso cotidiano.
            </p>

            <h3>Observe os problemas</h3>

            <p>
                Preste atenção nas dificuldades que as pessoas
                enfrentam no dia a dia.
            </p>

            <h3>Pense em soluções</h3>

            <p>
                Depois de encontrar um problema, pense em
                maneiras simples e eficientes de solucioná-lo.
            </p>

            <h3>Conheça seu público</h3>

            <p>
                Converse com pessoas e descubra se elas
                realmente precisam daquela solução.
            </p>
        `;
    }


    if (numero === 3) {

        area.innerHTML = `
            <h2>O que é uma startup?</h2>

            <p>
                Uma startup é uma empresa criada para
                desenvolver um modelo de negócio inovador
                e com potencial de crescimento.
            </p>

            <h3>Inovação</h3>

            <p>
                Startups normalmente procuram criar
                novas soluções para problemas existentes.
            </p>

            <h3>Crescimento</h3>

            <p>
                Um dos objetivos é desenvolver um negócio
                que possa crescer e alcançar muitos clientes.
            </p>

            <h3>Exemplo</h3>

            <p>
                Uma empresa pode criar uma plataforma digital
                para facilitar determinado serviço e alcançar
                clientes de diferentes regiões.
            </p>
        `;
    }

    area.scrollIntoView({
        behavior: "smooth"
    });
}
const slides = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
];

let slideAtual = 0;

function mudarSlide(direcao) {

    slideAtual += direcao;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    document.getElementById("slide").src = slides[slideAtual];

    const bolinhas = document.querySelectorAll(".bolinha");

    bolinhas.forEach(function(bolinha, index) {

        bolinha.classList.remove("ativa");

        if (index === slideAtual) {
            bolinha.classList.add("ativa");
        }

    });
}