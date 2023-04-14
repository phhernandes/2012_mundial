const clubSelector = document.getElementById('club-selector');
const shirtRadios = document.getElementsByName('shirt');
const nameRadios = document.getElementsByName('name');
const nameInput = document.querySelector('.name-input');
const nameField = document.getElementById('name');
const totalValue = document.getElementById('total-value');

// Define o valor padrão da camisa sem personalização
let shirtValue = 249.99;

// Atualiza o valor total quando qualquer uma das seleções é alterada
function updateTotal() {
  let total = shirtValue;

  // Se o usuário selecionou a opção de nome, adiciona R$10 ao valor total
  if (nameRadios[0].checked) {
    total += 15;
  }

  totalValue.innerText = `R$${total.toFixed(2)}`;
}


// Adiciona ouvintes de eventos para as seleções de camisa e nome
for (const radio of [...shirtRadios, ...nameRadios]) {
  radio.addEventListener('change', function() {
    if (radio.value === 'yes') {
      nameInput.style.display = 'block';
    } else {
      nameInput.style.display = 'none';
    }

    updateTotal();
  });
}

// Adiciona um ouvinte de eventos para a entrada de texto do nome
nameField.addEventListener('input', function() {
  updateTotal();
});