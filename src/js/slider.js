import '../scss/style.scss';

const slide = () => {
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('slider__btn-prev');
  const nextBtn = document.getElementById('slider__btn-next');
  const sliderImages = document.querySelectorAll('.slider__image');
  const sliderTabs = document.querySelectorAll('.slider__tabs-item');

  let activeIndex = 0;

  const checkActiveIndex = () => {
    nextBtn.disabled = activeIndex >= sliderImages.length - 1;
    prevBtn.disabled = activeIndex <= 0;
  }

  const showActiveTabs = () => {
    sliderTabs.forEach((t,i) => {
      if(i === activeIndex){
        t.classList.add('slider__tabs-item_active');
      } else {
        t.classList.remove('slider__tabs-item_active');
      }
    });
  }

  const moveSlider = (index) => {
    if(index > -1 && index < sliderImages.length){
      slider.style.transform = `translate(${index * -100}%)`;
    }
    checkActiveIndex();
    showActiveTabs();
  }

  const moveSliderLeft = () => moveSlider(++activeIndex);

  const moveSliderRight = () => moveSlider(--activeIndex);

  sliderTabs.forEach((t,i) => {
    t.addEventListener('click',() => {
      activeIndex = i;
      moveSlider(i)
    });
  })

  prevBtn.addEventListener('click', moveSliderRight);
  nextBtn.addEventListener('click', moveSliderLeft);

  showActiveTabs();
  checkActiveIndex();
}

slide();
