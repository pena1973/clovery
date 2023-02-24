
// создаем массив ролей а ля приехал из апи

let roles = [
  {
    href: "product/#00da02d1-9641-4df0-ae0c-a583fa21a02e",
    src: "Product_manager.jpg",
    alt: "Product-менеджер",
    title: "Product-менеджер",
    description: "1 место",
  },

  {
    href: "uxui-designer/#00da02d1-9641-4df0-ae0c-a583fa21a02e",
    src: "UXUI.jpg",
    alt: "UI/UX-дизайнер",
    title: "UI/UX-дизайнер",
    description: "1 место",
  },

  {
    href: "frontend/#00da02d1-9641-4df0-ae0c-a583fa21a02e",
    src: "frontend.jpg",
    alt: "Frontend-программист",
    title: "Frontend-программист",
    description: "2 места",
  },

  {
    href: "backend/#00da02d1-9641-4df0-ae0c-a583fa21a02e",
    src: "PRO010.jpg",
    alt: "Бэкенд-программист",
    title: "Бэкенд-программист",
    description: "2 места",
  },

  {
    href: "qa/#00da02d1-9641-4df0-ae0c-a583fa21a02e",
    src: "qa-engineer.jpg",
    alt: "QA-инженер",
    title: "QA-инженер",
    description: "1 место",
  },

  {
    href: "devops-engineer/#00da02d1-9641-4df0-ae0c-a583fa21a02e",
    src: "DevOps.png",
    alt: "DevOps-инженер",
    title: "DevOps-инженер",
    description: "1 место",
  },
// всякая ерунда (просто чтоб показать свое понимание работы)
  {
    href: "",    
    alt: null,
    title: undefined,
    description: 1,
  },

]

function initBlock() {
  let groupBlock = document.querySelector(".profBlocksWrapper");
  
  for (let i = 0; i < roles.length; i++) {
    
    //  прроверю чтобы с сервера не приехала всякая ерунда    
    if (!roles[i].href) continue;
    if (!roles[i].src) continue;
    if (!roles[i].title) continue;
    if (!roles[i].description) continue;
    // отображу
    let blockDiv =
      `<a class="profBlockLink"`
      + `href="https://cloveri.com/start/anketa/${roles[i].href}">`

      + `<img src="https://api.cloveri.com/media/profession/logo/${roles[i].src}" alt="(${roles[i].alt})"`
      + `style="width:100%; max-width:400px">`

      + `<div class="profBlocks">(${roles[i].title})<br><br>`
      + `<small>(${roles[i].description})</small>`
      + `</div>`
      + '</a>'

    groupBlock.innerHTML += blockDiv;
  };
}

document.addEventListener("DOMContentLoaded", function () {
  initBlock();
});
