'use strict';

const load = (element, className) => {
  const loadingTag = document.querySelector(element).innerHTML = `<p class="${className}">loading...</p>`;
  return loadingTag;
}

export default load;