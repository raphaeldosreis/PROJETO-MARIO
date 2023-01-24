 const botaoTrailler = document.querySelector(".botao-trailer");
 const modal = document.querySelector(".modal");
 const botaoFecharTrailler = document.querySelector(".fechar-modal");
 const video = document.getElementById("video");
 const linkdoVideo = video.src


 botaoTrailler.addEventListener("click", ()=> {
modal.classList.add("aberto");
video.setAttribute("src", linkdoVideo)
 });
 
 botaoFecharTrailler.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
 })