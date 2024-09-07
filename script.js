document.addEventListener('DOMContentLoaded', () => {

    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
  
    let currentIndex = 1; // Start with the second image
  
    carouselPrev.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1; // If the index is less than 0, go to the last item
      }
      updateCarousel();
    });
  
    carouselNext.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex > carouselItems.length - 1) {
        currentIndex = 0; // If the index is greater than the last item, go to the first item
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      // Remove active class from all items
      carouselItems.forEach(item => item.classList.remove('active'));
      // Add active class to the current item
      carouselItems[currentIndex].classList.add('active');
      // Reorder the items
      reorderItems();
    }
  
    function reorderItems() {
      const activeItem = carouselItems[currentIndex];
      const nextItem = carouselItems[(currentIndex + 1) % carouselItems.length];
      const prevItem = carouselItems[(currentIndex - 1 + carouselItems.length) % carouselItems.length];
      
      // Reorder the items by moving active to the start, then next, then previous
      carouselInner.innerHTML = ''; // Clear the inner content
      carouselInner.appendChild(prevItem);
      carouselInner.appendChild(activeItem);
      carouselInner.appendChild(nextItem);
    }
  });
  