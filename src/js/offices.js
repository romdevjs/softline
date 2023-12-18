const offices = () => {
  const officesBlock = document.getElementById('offices');
  const selectBtn = document.getElementById('offices__select-btn');
  const officesButtons = document.querySelectorAll('.offices__btn');
  const officesImages = document.querySelectorAll('.offices__image');
  const officesMenuLists = document.querySelectorAll('.offices__menu-list');
  let activeValue = 'All';

  const toggleOfficeClassName = () => {
    officesBlock.classList.toggle('offices_open');
  }

  const checkActiveOfficesButton = () => {
    officesButtons.forEach((b, i) => {
      if (activeValue === b.dataset.value) {
        b.classList.add('offices__btn_active')
      } else {
        b.classList.remove('offices__btn_active')
      }
    })
  }

  const checkActiveOfficesImage = () => {
    officesImages.forEach(i => {
      if (activeValue === i.dataset.elem) {
        i.classList.remove('offices__image_hidden')
      } else {
        i.classList.add('offices__image_hidden')
      }
    })
  }

  const changeActiveValue = (value) => {
    activeValue = value;
    checkActiveOfficesButton();
    checkActiveOfficesImage();
  }

  const listItemClickHandler = (index) => {
    officesMenuLists.forEach((li, i) => {
      console.log(li)
      if (i === index) {
        li.classList.toggle('office__menu-list_active');
      } else {
        li.classList.remove('office__menu-list_active');
      }
    })
  }

  selectBtn.addEventListener('click', toggleOfficeClassName);

  officesButtons.forEach(b => {
    b.addEventListener('click', () => changeActiveValue(b.dataset.value))
  });

  officesMenuLists.forEach((l, i) => {
    l.addEventListener('click', () => listItemClickHandler(i));
  });

  checkActiveOfficesButton();
  checkActiveOfficesImage();
}

offices();