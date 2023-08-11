async function showProduct() {

    const a = await fetch('./db.json').then((response) => response.json())
    var section = document.getElementById("products")

    for (var i = 0; i < a.produto.length; i++) {

        var obj = {
            "id": a.produto[i].id,
            "nome": a.produto[i].nome,
            "descricao": a.produto[i].descricao,
            "preco": a.produto[i].preco,
            "imagens": [a.produto[i].imagem[0].imagem0, a.produto[i].imagem[0].imagem1]
        }

        var div = document.createElement("card")
        div.setAttribute("class", "card")
        section.appendChild(div)

        var nomeProduto = document.createElement("h2")
        var imagemProduto = document.createElement("img")
        var precoProduto = document.createElement("span")

        nomeProduto.setAttribute("class", "nome_produto")
        imagemProduto.setAttribute("class", "img_produto")
        precoProduto.setAttribute("class", "preco_produto")

        nomeProduto.textContent = `${obj.nome}`
        imagemProduto.src = obj.imagens[0]
        precoProduto.textContent = `R$ ${obj.preco}`

        div.appendChild(nomeProduto)
        div.appendChild(imagemProduto)
        div.appendChild(precoProduto)
    }
}

showProduct()