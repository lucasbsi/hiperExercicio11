
//     Desenvolver utilizando as caixas de diálogos
//  (Prompt e Alert) em JavaScript uma função para 
// verificar se uma palavra é um palíndromo
    
    
    
    


   var palavra = prompt("Informe uma palavra");

   checkPalindrom(palavra);

   function checkPalindrom (str) {
    if(str == str.split('').reverse().join('')){
        alert("Palavra palindroma")
    }else{
        alert("Palavra NAO É palindroma")
        }
   } 
    
//     p=s=>s==[...s].reverse().join``
//     console.log(p('arara'));

