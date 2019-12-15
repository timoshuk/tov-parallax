const target = [].slice.call(document.querySelectorAll(".scroll"));

tovParallax(target);

function tovParallax(elementsarr) {
  window.addEventListener("scroll", function(e) {
    let scrolled = window.pageYOffset;

    elementsarr.forEach(item => {
      if (item.dataset.ratex && item.dataset.ratey) {
        item.style.transform = `translate3d(${scrolled *
          item.dataset.ratex}px, ${scrolled * item.dataset.ratey}px, 0)`;
      } else if (item.dataset.ratex && !item.dataset.ratey) {
        item.style.transform = `translate3d(${scrolled *
          item.dataset.ratex}px, 0, 0)`;
      } else if (!item.dataset.ratex && item.dataset.ratey) {
        item.style.transform = `translate3d(0, ${scrolled *
          item.dataset.ratey}px, 0)`;
      }
    });
  });
}
