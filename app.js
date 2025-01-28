let listaAmigos = []; // Array onde armazeno os nomes
let amigosSorteados = []; // É um array extra para lembrar quais amigos já foram sorteados e evitar repetições.

// Função da lista amigos, pois mais de uma vez, é necessario realizar a limpeza da lista atual

function excluirAmigos(){
    let ul = document.querySelector('.name-list'); // Puxa a UL .name-list, que é onde o nome vai aparecer
    ul.innerHTML = ''; // limpa a lista, garante que não está duplicando, ou no caso do sorteio, não mostra a lista junto ao numero sorteado
}

// Função para adicionar amigos

function adicionarAmigo(){
    let nomeParticipante = document.getElementById('amigo').value; // Nome do participando excrito no input do HTML agora faz parte do processo da função

    // Se o nome participante foi maior que um, continua, senão, não reconhece como um nome valido, então vai subir o alerta

    if(nomeParticipante.length > 1 ){
        listaAmigos.push(nomeParticipante); // Adiciona o nome digitado no input ao array listaAmigos
        excluirAmigos(); // Puxa função responsavel por limpar a lista

        let ul = document.querySelector('.name-list'); // Variavel UL recebe a UL .name-list

        // forEach percorre os nomes no array, para cada amigo percorrido no array, as três funções abaixo são realizadas
        
        listaAmigos.forEach(amigos => {
            let linha = document.createElement('li'); // Cria uma li dentro da ul
            linha.textContent = amigos; // Define o texto do <li> no caso, os nomes que estão sendo percorridos dentro do array listaAmigos.
            ul.appendChild(linha); // Adiciona o <li> na <ul>
        });
        
        document.getElementById('amigo').value = ''; // Limpa o input, para não precisar apagar toda vez que for colocar um nome novo

    }
    else{
        alert('Digite um nome!'); 
    }
}

// Sorteio do amigo

function sortearAmigo(){
    
    // Se não tiver nenhum nome dentro do array listaAmigos 
    
    if(listaAmigos.length == 0){
        alert('Você não registrou nenhum amigo! ')
    }

    else if(amigosSorteados.length == listaAmigos.length){
        alert('Todos os nomes já foram sorteados.')
        return;
    }
    // Senão

    else{
        excluirAmigos() // Puxa a função excluirAmigos, para que só apareça o nome do ganhador
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Randoniza os nomes dentro do array listaAmigo
        
        // Enquanto o nome que foi gerado estiver em amigos sorteados, vai continuar sorteando / enquanto o nome não estiver, quando todos estiverem dentro do amigosSorteados, acabou
        while(amigosSorteados.includes(listaAmigos[indiceAleatorio])){
            indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        }
        amigosSorteados.push(listaAmigos[indiceAleatorio]); // Adiciona o amigo sorteado no array amigosSorteados para não repetir
        console.log(amigosSorteados); // Para desenvolvedores 
        
        let resultadoAmigoSecreto = document.getElementById('resultado'); // Puxa a UL resultado
        resultadoAmigoSecreto.innerHTML = `O amigo secreto sorteado é ${listaAmigos[indiceAleatorio]}`; // A UL até Então vazia, agora passa a ter o texto informando o vencedo
    }   
    
}

// Feito por Vinicius Morais Pinheiro.


