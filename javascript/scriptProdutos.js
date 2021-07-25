const produtos = document.getElementById("produtos");

produtos.addEventListener("submit", (e) => {
    e.preventDefault();
    let area = document.getElementById("area").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let paginas = document.getElementById("paginas").value;
    let editora = document.getElementById("editora").value;
    let meio = document.getElementById("meio").value;

    let product = {
        area,
        titulo,
        autor,
        paginas,
        editora,
        meio,
    };

    let newProduct = JSON.stringify(product);

    localStorage.setItem(titulo, newProduct);
    console.log(product)

    let content = document.getElementById("content");
    let carregando = `<h5> Carregando ... </h5>`;
    let pronto = `<h5> Prontinho. Cadastrado ;)</h5>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000);
});