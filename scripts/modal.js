const btnModal = document.querySelector(".btn-modal");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

let showModal = () => {
  modalBg.classList.add("bg-active");
};

btnModal.addEventListener("click", showModal);

let hideModal = () => {
  modalBg.classList.remove("bg-active");
};

modalClose.addEventListener("click", hideModal);
