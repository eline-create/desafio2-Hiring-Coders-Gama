const dados = document.getElementById("dados");

dados.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("endereco").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;

    let data = {
        nome,
        cpf,
        endereco,
        telefone,
        email,
    };

    let newData = JSON.stringify(data);

    localStorage.setItem("lead", newData);
    console.log(data)

    let content = document.getElementById("content");
    let carregando = `<h5> Carregando ... </h5>`;
    let pronto = `<h5> Prontinho. Cadastrado ;)</h5>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000);
});