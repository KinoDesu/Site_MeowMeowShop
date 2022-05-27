

var items = [
    {

        imagem: 'https://i.pinimg.com/564x/30/8a/20/308a20fca605c2ae0d506d502416bc63.jpg',
        nome: 'Batom rosa',
        texto: 'é um batom rosa',
        quantidade: 0
    },
    {
        imagem: 'https://i.pinimg.com/564x/77/5f/b1/775fb1ea57d34898a15829e976f325ac.jpg',
        nome: 'Peruca rosa',
        texto: 'é uma peruca rosa',
        quantidade: 0
    },
    {
        imagem: 'https://i.pinimg.com/564x/04/0b/a5/040ba5bc58207f57de9c708cb8fe93fc.jpg',
        nome: 'Peruca Loira',
        texto: 'é um peruca loira',
        quantidade: 0
    },
    {
        imagem: 'https://i.pinimg.com/564x/04/0b/a5/040ba5bc58207f57de9c708cb8fe93fc.jpg',
        nome: 'Peruca Ruiva',
        texto: 'é um peruca Ruiva',
        quantidade: 0
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
                <div class="produto-single">
                    <img src="`+ val.imagem + `"/>
                    <p>`+ val.nome + `</p>
                    <hr>
                    <p>`+ val.texto + `</p>
                    <button class="add-cart" href="#"></button>
                </div>
                `;
    })

}

inicializarLoja();
