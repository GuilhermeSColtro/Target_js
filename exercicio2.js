/**
 * Função que verifica a presença da letra 'a' em uma string
 * e conta quantas vezes ela aparece, ignorando maiúsculas e minúsculas.
 * 
 * 
 */
function verificarA(inputString) {
    let count = 0;

    const stringMinuscula = inputString.toLowerCase();

    for (let letra of stringMinuscula) {
       
        if (letra === 'a') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

verificarA("amanha"); 
verificarA("Banana"); 
verificarA("Abraço."); 
verificarA("freio"); 