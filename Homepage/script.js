  document.querySelectorAll('.foodimg').forEach(foodimg => {
    const increaseBtn = foodBlock.querySelector('.increase');
    const decreaseBtn = foodBlock.querySelector('.decrease');
    const input = foodimg.querySelector('.add-ip');

    increaseBtn.addEventListener('click', () => {
      let value = parseInt(input.value);
      input.value = value + 1;
    });

    decreaseBtn.addEventListener('click', () => {
      let value = parseInt(input.value);
      if (value > 0) {
        input.value = value - 1;
      }
    });
  });