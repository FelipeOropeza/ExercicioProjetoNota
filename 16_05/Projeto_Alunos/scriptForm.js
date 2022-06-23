const $botao = document.querySelector("#adicionar-aluno");
$botao.addEventListener("click", function(){
    event.preventDefault();

    let $dadosForm = document.querySelector("#form-aluno");
    let $dadosAluno = novoAluno($dadosForm);

    console.log($dadosAluno.vNome);
    console.log($dadosAluno.vNota1);
    console.log($dadosAluno.vNota2);
    console.log($dadosAluno.vNota3);
    console.log($dadosAluno.vMedia.toFixed(2));
    console.log($dadosAluno.vCalculo);

    let $alunotr = document.createElement("tr");
    let $nometd = document.createElement("td");
    let $n1td = document.createElement("td");
    let $n2td = document.createElement("td");
    let $n3td = document.createElement("td");
    let $mediatd = document.createElement("td");
    let $situacaotd = document.createElement("td");

    $nometd.textContent = $dadosAluno.vNome;
    $n1td.textContent = $dadosAluno.vNota1;
    $n2td.textContent = $dadosAluno.vNota2;
    $n3td.textContent = $dadosAluno.vNota3;
    $mediatd.textContent = $dadosAluno.vMedia.toFixed(2);
    $situacaotd.textContent = $dadosAluno.vCalculo;

    $situacaotd.classList.add(mostrarSituacao($dadosAluno.vMedia)[1]);

    if($mediatd.textContent < 5){
        $mediatd.style.color = "red";
        $mediatd.style.fontWeight = "bold";
    }
    else{
        $mediatd.style.color = "blue";
        $mediatd.style.fontWeight = "bold"; 
    }

    // inserindo celulas na <tr>
    $alunotr.appendChild($nometd);
    $alunotr.appendChild($n1td);
    $alunotr.appendChild($n2td);
    $alunotr.appendChild($n3td);
    $alunotr.appendChild($mediatd);
    $alunotr.appendChild($situacaotd);

    //inserindo linhas na tabela

    const $tabela = document.querySelector("#tabela-aluno")
    $tabela.appendChild($alunotr);

    $dadosForm.reset();
})


function novoAluno(formulario){
    if(formulario.querySelector("#nome").value == ""){
        alert("Obrigatório informa o nome do aluno !!");
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#nome").value.length < 8){
        alert("Favor informa o nome completo do aluno");
        formulario.querySelector("#nome").focus();
    }
    else if(formulario.querySelector("#n1").value == ""){
        alert("Obrigatório informa a primeira nota do aluno !!");
        formulario.querySelector("#n1").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
        alert("Inserir apenas valores numéricos no campo nota 1");
        formulario.querySelector("#n1").value = "";
        formulario.querySelector("#n1").focus();
    }
    else if(formulario.querySelector("#n2").value == ""){
        alert("Obrigatório informa a segunda nota do aluno !!");
        formulario.querySelector("#n2").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n2").value))){
        alert("Inserir apenas valores numéricos no campo nota 2");
        formulario.querySelector("#n2").value = "";
        formulario.querySelector("#n2").focus();
    }
    else if(formulario.querySelector("#n3").value == ""){
        alert("Obrigatório informa a terceira nota do aluno !!");
        formulario.querySelector("#n3").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n3").value))){
        alert("Inserir apenas valores numéricos no campo nota 3");
        formulario.querySelector("#n3").value = "";
        formulario.querySelector("#n3").focus();
    }
    else{
        let $vetorAluno = {
            vNome: formulario.querySelector("#nome").value,
            vNota1: formulario.querySelector("#n1").value,
            vNota2: formulario.querySelector("#n2").value,
            vNota3: formulario.querySelector("#n3").value,
            vMedia: calcularMedia(formulario.querySelector("#n1").value.replace(",","."),
            formulario.querySelector("#n2").value.replace(",","."),
            formulario.querySelector("#n3").value.replace(",",".")),
            vCalculo: mostrarSituacao(calcularMedia(formulario.querySelector("#n1").value.replace(",","."),
            formulario.querySelector("#n2").value.replace(",","."),
            formulario.querySelector("#n3").value.replace(",",".")))[0]
        }
        return $vetorAluno;
    }
}
