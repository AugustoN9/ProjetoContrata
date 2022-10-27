function logar() {
    var login = document.getElementById('user').value;
    var senha = document.getElementById('password').value;

    if (login == "admin@admin.com" && senha == "admin") {
        alert('logado com sucesso!');
        location.href = "index.html";
    }
    else {
        alert('usuario ou senha incorretos!');
    }
}