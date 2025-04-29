document.addEventListener('DOMContentLoaded', function() {
    // Get the modal window
    const modal = document.getElementById('modal-window');
    
    // Get the button that opens the modal
    const orderBtn = document.querySelector('.section-1-button');
    
    // Get the <span> element that closes the modal
    const closeBtn = document.getElementById('close-modal');
    
    // When the user clicks the button, open the modal 
    orderBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
    
    // When the user clicks on the X button, close the modal
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });