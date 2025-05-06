async function buscarPiada() {
    const resultado = document.getElementById("resultado");

    try {
      const resposta = await fetch(`https://api.chucknorris.io/jokes/random`);

      if (!resposta.ok) throw new Error("Erro ao buscar a piada.");

      const dados = await resposta.json();

      console.log("JSON recebido da API:", dados);

      resultado.innerHTML = `
        <p><strong>Piada a seguir:</strong> ${dados.value}</p>
      `;
    } catch (erro) {
      resultado.textContent = `Erro: ${erro.message}`;
      console.error("Erro na requisição:", erro);
    }
  }