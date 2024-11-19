const cardContainer = document.querySelector(".card-container");


export function criarCard(nome, valor, imagem, id) {
    const card = document.createElement("div");
    card.classList.add("card-container--info");
    card.innerHTML = `
        <img class="card-container--image" src="${imagem}" alt="${nome}">
        <p>${nome}</p>
        <div class="card-container--value">
            <p>$ ${valor},00</p>
            <img class="lixeira" src="Imagens/Vector.png" alt="Icone Lixeira" data-id="${id}">
        </div>
    `;

    cardContainer.appendChild(card);
}

