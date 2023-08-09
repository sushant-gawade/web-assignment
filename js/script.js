const slider = document.querySelector('.slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const profileWidth = document.querySelector('.profile').offsetWidth;
  let currentIndex = 0;

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSliderPosition();
  });

  function updateSliderPosition() {
    const offset = -currentIndex * profileWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }