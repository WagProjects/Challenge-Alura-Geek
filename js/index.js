import './form.js';

document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        const lixeiras = document.querySelectorAll(".lixeira");
        console.log(lixeiras);
        //Evento DELETE
        lixeiras.forEach((lixeira) => {
            lixeira.addEventListener("click", function(){
                const id = this.getAttribute("data-id");
                console.log('ID da lixeira',id);
        
                //Requisicao DELETE
                fetch(`http://localhost:3000/produtos/${id}`, {
                    method: "DELETE"
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Produto Excluido:", data);
                    this.closest(".card-container--info").remove(); // Remove o card da interface
                })
                .catch(error => {
                    console.error("Erro ao excluir produto:", error);
                });
            });
        });

        observer.disconnect();
    });
    observer.observe(document.body, {
        childList: true, // Observe direct children being added/removed
        subtree: true,   // Observe all descendants, not just direct children
    });
})
