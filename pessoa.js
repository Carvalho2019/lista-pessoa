const btn = document.querySelector('#btnAdd');
const nome = document.querySelector('#txtNome');
const list = document.querySelector('tbody#listPessoa');

var pessoas = JSON.parse(localStorage.getItem('list_todos')) || ['Lista Vazia']
const renderizarPessoas = () => {
    list.innerHTML = '';

    for (pessoa of pessoas) {
        var pessoaElement = document.createElement('tr');
        var pessoaElement2 = document.createElement('td');
        var pessoaTexto = document.createTextNode(pessoa);

        var apagarElement = document.createElement('td');
        var linkElement = document.createElement('a');
        var pos = pessoas.indexOf(pessoa);
        linkElement.setAttribute('onclick', 'removerPessoas(' + pos + ')');
        linkElement.setAttribute('href', '#')
        var linkTexto = document.createTextNode('Apagar');
        linkElement.appendChild(linkTexto);
        apagarElement.appendChild(linkElement);

        pessoaElement2.appendChild(pessoaTexto);
        pessoaElement.appendChild(pessoaElement2);
        pessoaElement.appendChild(apagarElement);
        list.appendChild(pessoaElement);
    }
}

renderizarPessoas();

const addPessoas = () => {
    var pessoaText = nome.value;
    pessoas.push(pessoaText);
    nome.value = '';
    renderizarPessoas();
    saveToStorage();
}

btn.onclick = addPessoas;

const removerPessoas = (pos) => {
    pessoas.splice(pos, 1);
    renderizarPessoas();
    saveToStorage();
}

function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(pessoas));
}