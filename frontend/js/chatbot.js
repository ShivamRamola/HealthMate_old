document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    chatbot.style.transition = 'all 0.2s';
    if (!hasMoved) {
      // Redirect to chatbot.html if clicked (not dragged)
      window.location.href = "chatbot.html";
    }
  }
});
