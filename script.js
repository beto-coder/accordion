const handleItemClick = (event) => {
  deactiveAll();
  active(event.currentTarget);
};

const deactiveAll = () => {
  const items = document.getElementsByClassName("accordion-item");
  for (let item of items) {
    deactive(item);
  }
};

const active = (item) => {
  item.classList.add("accordion-item-active");
  const sign = item.querySelector(".sign");
  sign.innerHTML = "-";
};

const deactive = (item) => {
  item.classList.remove("accordion-item-active");
  const sign = item.querySelector(".sign");
  sign.innerHTML = "+";
};

const addListener = () => {
  const items = document.getElementsByClassName("accordion-item");
  for (let item of items) {
    console.log(item);
    item.addEventListener("click", handleItemClick);
  }
};

window.onload = () => {
  addListener();
};
