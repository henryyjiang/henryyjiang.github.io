function openOverlay(title, content) {
      const overlay = document.getElementById('overlay-window');

      overlay.classList.remove('hidden');
      setTimeout(() => overlay.classList.add('active'), 10);
    }

    function closeOverlay() {
      const overlay = document.getElementById('overlay-window');
      overlay.classList.remove('active');
      setTimeout(() => overlay.classList.add('hidden'), 10);
    }

    document.getElementById("projects-btn").onclick = () => openOverlay();
    document.getElementById("close-btn").onclick = () => closeOverlay();

    document.getElementById('overlay-window').addEventListener('click', (e) => {
    const content = document.getElementById('window');
      if (!content.contains(e.target)) {
        closeOverlay();
      }
    });