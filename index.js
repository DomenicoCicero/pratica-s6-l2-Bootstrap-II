const cardsSaldi = document.querySelectorAll("#saldi img");
const cardsWS = document.querySelectorAll("#welcome-summer img");
const cardsLM = document.querySelectorAll("#last-minute img");
const numViaggiBtn = document.querySelector("footer .btn-2");
const btn1 = document.querySelector("footer .btn-1");

numViaggiBtn.addEventListener("click", e => {
  let totale = cardsSaldi.length + cardsWS.length + cardsLM.length;
  alert(`il numero totale dei viaggi in pagina è ${totale}`);
});
