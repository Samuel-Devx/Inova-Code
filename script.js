function modont () {
   var corpo = document.body;
    var botao = document.getElementById("modoNoturno");

    // Alterna a classe
    if (corpo.classList.contains("dark-mode")) {
      corpo.classList.remove("dark-mode");
    
    } else {
      corpo.classList.add("dark-mode");
    
    }
  }  
function envi () {
    const pt = document.getElementById (`pt`)
    if (pt.value ==  ``) {
        pt.style.border = `solid 5px #ad2121ff`
        alert(`ERRO Digite algo para enviar!!`)
    }
    else {
         pt.style.border = `solid 5px #21ACAD`
        alert(`Sua pergunda foi enviada com sucesso!`)
        
        
}
 }




 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('_ativo');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Seleciona todos os elementos filhos do body (exceto script e style)
  const elementos = Array.from(document.body.querySelectorAll('*'))
    .filter(el => !['SCRIPT', 'STYLE', 'LINK', 'META', 'TITLE'].includes(el.tagName));

  elementos.forEach(el => observer.observe(el));