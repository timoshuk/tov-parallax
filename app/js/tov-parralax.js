"use strict";

var target = [].slice.call(document.querySelectorAll(".scroll"));
tovParallax(target);

function tovParallax(elementsarr) {
  window.addEventListener("scroll", function (e) {
    var scrolled = window.pageYOffset;
    elementsarr.forEach(function (item) {
      if (item.dataset.ratex && item.dataset.ratey) {
        item.style.transform = "translate3d(".concat(scrolled * item.dataset.ratex, "px, ").concat(scrolled * item.dataset.ratey, "px, 0)");
      } else if (item.dataset.ratex && !item.dataset.ratey) {
        item.style.transform = "translate3d(".concat(scrolled * item.dataset.ratex, "px, 0, 0)");
      } else if (!item.dataset.ratex && item.dataset.ratey) {
        item.style.transform = "translate3d(0, ".concat(scrolled * item.dataset.ratey, "px, 0)");
      }
    });
  });
}