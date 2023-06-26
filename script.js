//your JS code here. If required.
// Array of image URLs
const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg'
];

// Shuffle the image URLs randomly
const shuffledImageUrls = shuffleArray(imageUrls);

// Get the image elements
const imageElements = document.querySelectorAll('img');

// Assign the image URLs to the image elements
for (let i = 0; i < imageElements.length; i++) {
  imageElements[i].src = shuffledImageUrls[i];
}

// Variables to track selected images
let selectedImage1 = null;
let selectedImage2 = null;

// Function to select an image
function selectImage(element) {
  if (!selectedImage1) {
    selectedImage1 = element;
    selectedImage1.classList.add('selected');
    document.getElementById('reset').style.display = 'block';
  } else if (!selectedImage2 && element !== selectedImage1) {
    selectedImage2 = element;
    selectedImage2.classList.add('selected');
    document.getElementById('verify').style.display = 'block';
  }
}

// Function to reset the selected images and buttons
function reset() {
  selectedImage1.classList.remove('selected');
  selectedImage2.classList.remove('selected');
  selectedImage1 = null;
  selectedImage2 = null;
  document.getElementById('reset').style.display = 'none';
  document.getElementById('verify').style.display = 'none';
  document.getElementById('para').textContent = '';
}

// Function to verify the selected images
function verify() {
  const class1 = selectedImage1.className;
  const class2 = selectedImage2.className;

	  }