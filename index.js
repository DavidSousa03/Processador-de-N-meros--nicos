document.addEventListener("DOMContentLoaded", function () {
    const numbersTextarea = document.getElementById("numbers");
    const resultTextarea = document.getElementById("result");
    const submitButton = document.getElementById("submit");
    const clearButton = document.getElementById("clear");
    const botaoCopiar = document.getElementById("botao-copiar");
  
    botaoCopiar.addEventListener("click", () => {
      const resultado = document.getElementById("result");
      const textToCopy = resultado.value;
      resultado.select();
      navigator.clipboard.writeText(textToCopy).then(
        console.log("Resultado copiado para a área de transferência")
      ).catch(error =>{
        console.log(`error: ${error}`)
      });
     
    });
  
    clearButton.addEventListener("click", function () {
      numbersTextarea.value = " ";
      // resultTextarea.value = " "
    });
  
    submitButton.addEventListener("click", function () {
      const inputNumbers = numbersTextarea.value
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);
  
      const uniqueNumbers = Array.from(new Set(inputNumbers));
      const result = uniqueNumbers.join(",");
      resultTextarea.value = result;
    });
  });
  