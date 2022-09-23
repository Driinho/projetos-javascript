document.querySelector('#salvar').onclick = function() {
    if(document.querySelector('#novaTarefa input').value.length == 0) {
        alert("Por favor escreva um tarefa!!");
    } else {
        document.querySelector('#tarefas').innerHTML += `
            <div class="tarefa">
                <span class="nomeTarefa">
                    ${document.querySelector('#novaTarefa input').value}
                </span>
                <button class="deletar">
                    <i>Apagar</i>
                </button>
            </div>
        `;

        document.querySelector('#novaTarefa input').value = "";

        var tarefaAtual = document.querySelectorAll(".deletar");
        for(var i=0; i<tarefaAtual.length; i++){
            tarefaAtual[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}