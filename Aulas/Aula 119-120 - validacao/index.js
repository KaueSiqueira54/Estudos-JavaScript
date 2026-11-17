const nome = document.querySelector("#f_nome");
const nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evento) => {
  let estadoValidacao = nota.validity;

  if (estadoValidacao.valueMissing) {
    nota.setCustomValidity("AOPA! Este campo é obrigatório!");
  } else if (estadoValidacao.rangeOverFlow) {
    nota.setCustomValidity("Nota alta demais!");
  } else if (estadoValidacao.rangeUnderflow) {
    nota.setCustomValidity("Nota baixa demais!");
  }

  nota.reportValidity();
  // f_msg.innerHTML = nota.validationMessage;

  evento.preventDefault();
});

// Métodos de validação do DOM
// checkValidity()
// setCustomValidity()

// reportValidity() - mostra a mensagem de validação no navegador

// Propriedade de validação
// input.validy - me traz o objeto de validação
// validationMessage -traz a mensagem de validação

// checkValidity() - retorna a mensagem de validação padrão
// caso a validação não seja satisfeita

// input.validationMessage - traz a mensagem de validação padrão
// de acordo com as validações do HTML

// Propriedades de validação

// customError: true, se uma mensagem de validação personalizada for definida.
// patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
// rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
// rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
// stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
// tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
// typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
// valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
// valid: true, se o valor de um elemento for válido
