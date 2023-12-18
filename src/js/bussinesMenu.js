const bussinesMenu = () => {
  const items = document.querySelectorAll('.business__list-item');

  const itemClickHandler = (index) => {
    items.forEach((i, n) => {
      if (n === index) {
        i.classList.toggle('business__list-item_active');
      } else {
        i.classList.remove('business__list-item_active');
      }
    })
  }

  items.forEach((i, n) => {
    i.addEventListener('click', () => itemClickHandler(n));
  });
}

bussinesMenu();