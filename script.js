let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const modal = document.getElementById("itemModal");
const modalImage = document.getElementById("modalImage");
const modalItemName = document.getElementById("modalItemName");
const modalItemPrice = document.getElementById("modalItemPrice");
const closeModal = document.querySelector(".close");

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}

setInterval(() => moveSlide(1), 5000);

document.getElementById("tshirtButton").addEventListener("click", function() {
    window.location.href = "tshirts.html";
});



// Get the modal and its elements
// Add event listeners to each .view icon
document.querySelectorAll('.view').forEach(function(viewIcon) {
    viewIcon.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the corresponding item details
        const img = this.closest('.imgLink').querySelector('.imgItem').src;
        const itemName = this.closest('.imgLink').querySelector('.itemName').innerText;
        const itemPrice = this.closest('.imgLink').querySelector('.itemPrice').innerText;

        // Set the modal content
        modalImage.src = img;
        modalItemName.textContent = itemName;
        modalItemPrice.textContent = itemPrice;

        // Display the modal
        modal.style.display = "block";
    });
});

// When the user clicks on the close button, hide the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
