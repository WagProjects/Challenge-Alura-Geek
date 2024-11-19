import { post } from './mock.js';
import { criarCard } from './listaCards.js';

const nome = document.querySelector("input[name=nome]");
const valor = document.querySelector("input[name=valor]");
const imagem = document.querySelector("input[name=imagem]");

addEventListener("submit", async (event) => {
  event.preventDefault();

  try	{
    const response = await post.criarProduto({
      nome: nome.value,
      preco: valor.value,
      imagem: imagem.value
    });
    console.log("Produto criado", response);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
  }

  criarCard(
    nome.value,
    valor.value,
    imagem.value
  );
});

