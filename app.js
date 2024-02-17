// Recebe os inputs do usuário, faz verificações de segurança e exibe os números sorteados
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let inicioIntervalo = parseInt(document.getElementById("de").value);
    let finalIntervalo = parseInt(document.getElementById("ate").value);

    if (inicioIntervalo >= finalIntervalo) {
        alert('O valor do campo "Do número" deve ser inferior ao valor do campo "Até o número". Verifique, por favor!');
        return;
    }

    if (quantidade > (finalIntervalo - inicioIntervalo + 1)) {
        alert('O valor do campo "Quantidade de números" deve ser igual ou inferior à quantidade de números presente no intervalo definido. Verifique, por favor!');
        return;
    }

    let sorteados = [];
    let numeroAleatorio;

    for (let i = 0; i < quantidade; i++) {
        numeroAleatorio = obterNumeroAleatorio(inicioIntervalo, finalIntervalo);
        while (sorteados.includes(numeroAleatorio)){
            numeroAleatorio = obterNumeroAleatorio(inicioIntervalo, finalIntervalo);
        }

        sorteados.push(numeroAleatorio);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
    let botaoSortear = document.getElementById("btn-sortear");
    botaoSortear.innerText = 'Sortear novamente';

    ativarBotaoReiniciar();

}

// Gera os números pseudo-aleatórios
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ativarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }
}

function desativarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao")){
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    
    desativarBotaoReiniciar();
    
    let botaoSortear = document.getElementById("btn-sortear");
    botaoSortear.innerText = 'Sortear';
}