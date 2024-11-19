import { criarCard } from './listaCards.js';

// METODO GET
async function get(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao realizar requisição GET:', error);
      throw error;
    }
  }

async function carregarProdutos(){
  try {
    const produtos = await get('http://localhost:3000/produtos');
    console.log(produtos);
    
    //Itera pelos produtos e cria elementos no DOM
    produtos.forEach(produto => {
      criarCard(produto.nome, produto.preco, produto.imagem, produto.id);
    });
  }
  catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}
  
carregarProdutos();

//METODO POST
const post = {
  criarProduto: async (produto) => {
    try {
      const resposta = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (!resposta.ok) {
        throw new Error(`Erro ao criar produto: ${resposta.status}`);
      }

      const dados = await resposta.json();
      return dados;
    } catch (erro) {
      console.error(erro);
      throw erro;
    }
  },
};

export { post };