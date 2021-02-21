//converte nota numeral em letras
var nota = prompt('Digite a nota')
var notaAlfabeto

if(nota>=90 && nota<=100){
   notaAlfabeto ='A'}
   else if(nota>=80 && nota<=89){
      notaAlfabeto ="B"}
      else if(nota>=70 && nota<=79){
         notaAlfabeto ="C"}
         else if(nota>=60 && nota<=69){
            notaAlfabeto ="D"}
            else if(nota>=0 && nota<=59){
               notaAlfabeto ="E"}
               else{notaAlfabeto ="invalido"}      
console.log(notaAlfabeto)   