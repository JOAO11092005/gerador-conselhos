 async function puxaUrl(resultadoDaUrl){
    const url = await fetch('https://api.adviceslip.com/advice');
    const resultado = await url.json();
    
   
    return resultadoDaUrl = resultado;

}

export {puxaUrl};