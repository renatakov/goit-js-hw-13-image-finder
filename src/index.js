import css from "./css/style.css";

import apiService from "./js/apiService.js";
import refs from "./js/imgRefs.js";
import imgTemplate from "./templates/image.hbs"
import debouce from "lodash.debounce"

const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'load more...';
loadMoreBtn.classList.add('loadMoreBtn');

refs.ul.append(loadMoreBtn);

refs.input.addEventListener('input', debouce((event)=>{
  let input = event.target.value;
  apiService.getImages(input)
  .then(d => insertElements(d.hits, imgTemplate, refs.ul))
  // loadMoreBtn.addEventListener('click', ()=>{
  //   apiService.setPage(apiService._page + 1);
  // })
}, 1000))


function insertElements(data, template, place) {
  const element = template(data)
  place.insertAdjacentHTML('afterbegin', element)
}