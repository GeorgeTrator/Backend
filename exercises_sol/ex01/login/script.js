const formulario = document.querySelector("form")

const Inome = document.querySelector("#nome")

const Isenha = document.querySelector("#senha")

async function buscar(event) {

    // Previne o comportamento padrão do formulário:
    // recarregar a página
    event.preventDefault()

    // Estrutura de dados que será enviada ao servidor
    // no formato de um objeto JavaScript
    const dados = {

        nome: Inome.value,
        senha: Isenha.value

    }

    try {

        // Faz uma requisição HTTP para um endereço na máquina local
        const response = await fetch("http://localhost:8080/usuario", {

            // Especificação do método HTTP utilizado na requisição
            method: 'GET',

            // Informa o formato dos dados que esperamos receber
            // e o formato dos dados que estamos enviando
            headers: {

                "Accept": "application/json",
                "Content-type": "application/json"

            },

            // Converte o objeto JavaScript para uma string JSON
            body: JSON.stringify(dados)

        })

        // Verifica se o servidor respondeu com sucesso
        if (!response.ok) {

            throw new Error("Não foi possível finalizar o procedimento")

        }

        // Converte a resposta JSON do servidor
        // para um objeto JavaScript
        const dadosResposta = await response.json()

        // Exibe os dados recebidos do servidor no console
        console.log(dadosResposta)

    } catch (error) {

        // Exibe uma mensagem caso ocorra algum erro
        console.error("Erro: " + error)

    }
}

// Executa a função buscar quando o formulário for enviado
formulario.addEventListener('submit', buscar)