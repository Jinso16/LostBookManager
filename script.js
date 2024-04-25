const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const genero = document.getElementById('genero').value;
  const estado = document.getElementById('estado').value;
  const nomeDoador = document.getElementById('nomeDoador').value;
  const contatoDoador = document.getElementById('contatoDoador').value;

  // Validação opcional (evita envio de dados incompletos)
  if (titulo === '' || autor === '' || genero === '' || estado === '') {
    alert('Preencha todos os campos obrigatórios!');
    return; // Interrompe a execução do código caso a validação falhe
  }

  // Salvar no navegador
  var matriz = new Array(6)
  
  if (localStorage.getItem("qnt") === null)
  {
    localStorage.setItem('qnt', 0)
  }

  var i = parseInt(localStorage.getItem("qnt"))

  localStorage.setItem('titulo'+i, titulo)
  localStorage.setItem('autor'+i, autor)
  localStorage.setItem('genero'+i, genero)
  localStorage.setItem('estado'+i, estado)
  localStorage.setItem('nomeDoador'+i, nomeDoador)
  localStorage.setItem('contatoDoador'+i, contatoDoador)

  i = i+1
  localStorage.setItem('qnt', i)

  alert('Livro cadastrado com sucesso!');
});

function setTable() 
{
  document.getElementById("td1").value = localStorage.getItem('titulo0')

  alert(document.getElementById("td1").value)
}
