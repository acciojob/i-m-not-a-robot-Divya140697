document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  const resetButton = document.getElementById('reset');
  const verifyButton = document.getElementById('verify');
  const messagePara = document.getElementById('para');
  let clickedImages = [];

  // Add event listeners to the images
  images.forEach(image => {
    image.addEventListener('click', handleClick);
  });

  // Add event listener to the reset button
  resetButton.addEventListener('click', reset);

  // Add event listener to the verify button
  verifyButton.addEventListener('click', verify);

  // Reset the state to the initial state
  reset();

  // Handle image click event
  function handleClick(event) {
    const clickedImage = event.target;

    if (!clickedImages.includes(clickedImage)) {
      clickedImages.push(clickedImage);

      if (clickedImages.length === 2) {
        verifyButton.style.display = 'block';
      }
    }
  }

  // Reset the state to the initial state
  function reset() {
    clickedImages = [];
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';
    messagePara.textContent = '';
    shuffleImages();
  }

  // Shuffle the images randomly
  function shuffleImages() {
    const classNames = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
    classNames.sort(() => Math.random() - 0.5);

    images.forEach((image, index) => {
      image.className = classNames[index];
    });
  }

  // Verify
