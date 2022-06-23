// query selector retorna o primeiro elemento 
// que correspondem aos seletores especificados 
let $titulo = document.querySelector ("#titulo");

// define ou retorna o conteúdo de texto
$titulo.textContent = "ETEC Professor Basilides de Godoy";

let $tabela = document.querySelector("#tabela-aluno");
//console.log($tabela);

let $registroAlunos = document.querySelectorAll(".aluno"); // pega todos os elementos
console.log($registroAlunos);

for(let j = 0;j < $registroAlunos.length;j++){
    let $contagem = $registroAlunos[j]; 

    let $nome = $contagem.querySelector(".td-nome").textContent;
    let $n1 = $contagem.querySelector(".td-n1").textContent;
    let $n2 = $contagem.querySelector(".td-n2").textContent;
    let $n3 = $contagem.querySelector(".td-n3").textContent;
    
    let $mediaAluno = calcularMedia($n1,$n2,$n3);

    let $MediaFinal = $contagem.querySelector(".td-media");
    $MediaFinal.textContent = $mediaAluno.toFixed(2);

    let $situacao = $contagem.querySelector(".td-situacao");
    $situacao.textContent = mostrarSituacao($mediaAluno)[0];
    $situacao.classList.add(mostrarSituacao($mediaAluno)[1]);

    if($MediaFinal.textContent < 5){
        $MediaFinal.style.color = "red";
        $MediaFinal.style.fontWeight = "bold";
    }
    else{
        $MediaFinal.style.color = "blue";
        $MediaFinal.style.fontWeight = "bold";
    }
}

function calcularMedia(x,y,z){
    return (parseFloat(x)+parseFloat(y)+parseFloat(z))/3;
}

function mostrarSituacao(x){
    let $resultado=[];

    if(x < 5){
        $resultado.push("Reprovado");
        $resultado.push("reprovado");
    }
    else{
        $resultado.push("Aprovado");
        $resultado.push("aprovado");
    }
    return $resultado;
}
