function criaCartao (categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `<div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
    <p>${pergunta}</p>
</div>
<div class="resposta-cartao">
    <p>${resposta}</p>
    </div>
</div>
    `

    let RespostaEstaVisivel = false;

    function viracartao(){
        RespostaEstaVisivel = !RespostaEstaVisivel;
        cartao.classList.toggle('active', RespostaEstaVisivel);
    }

    cartao.addEventListener('click', viracartao);

    container.appendChild(cartao);

}