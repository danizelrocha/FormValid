// Elementos do formulário
const form = document.querySelector ("form");
const nome = document.querySelector ("#nome");
const email = document.querySelector ("#email");
const assunto = document.querySelector ("#assunto");
const mensagem = document.querySelector ("#mensagem");
const errorMessages = document.querySelector (".error-message");

// Disparar o formulario
form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
    resetErrors();
});

// Função limpar o erro
function resetErrors() {
    errorMessages.forEach((msg) => {
        msg.textContent = "";
    });
    nome.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    assunto.parentElement.classList.remove("error");
    mensagem.parentElement.classList.remove("error");
}

// Validar os inputs percorre cada um para procurar erros
function validateInputs() {
   const nomeValue = nome.value.trim()// trim tira os espaços em branco
   const emailValue = email.value.trim()// trim tira os espaços em branco
   const assuntoValue = assunto.value.trim()// trim tira os espaços em branco
   const mensagemValue = mensagem.value.trim()// trim tira os espaços em branco
// verifica se os inputs estão vazio 
   if(nomeValue === "") {
    setError(nome, "Nome obrigatório!");
   }

   if(emailValue === "") {
    setError(email, "E-mail obrigatório!");
   } else if(!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido!");
   }

   if(assuntoValue === "") {
    setError(assunto, "Assunto obrigatório!");
   }

   if(mensagemValue === "") {
    setError(mensagem, "Mensagem obrigatório!");
   }
}

// função dispara o erro para todos os inputs
function setError(input, errorMessage) {
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add("error");//retona o input em vermelho observar encremento no css linhas 67-68-69
}

// Validação para email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }