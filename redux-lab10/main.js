import store, { selectColors } from "./redux/store";
import {
  newColor,
  showFavourite,
  toggleColor,
  loadTodoAsync,
  addTodoAsync,
} from "./redux/actions/actionType";

import "./server";



// store.dispatch(toggleColor(3));

// store.dispatch(showFavourite());

// store.dispatch(showFavourite());

/*==== ADD COLOR  ==== */
const form = document.getElementById("add-color");

form.onsubmit = (e) => {
  e.preventDefault();

  const name = form.elements.name;
  const color = form.elements.color;

  const trimmedName = name.value.trim();

  if (trimmedName && color.value) {
    store.dispatch(newColor(trimmedName, color.value));
    name.value = "";
    color.value = "";
  }
};

/*==== SHOW FAVOURITE COLOR ==== */

const checkbox = document.getElementById("show-favourite");
checkbox.onchange = () => store.dispatch(showFavourite());

/*==== TAO COLOR LIST ==== */
store.subscribe(renderColors);

const colorList = document.getElementById("color-list");

function renderColors() {
  colorList.innerHTML = "";
  const colors = selectColors();

  colors.forEach((c) => {
    const color = document.createElement("div");
    const btn = document.createElement("button");

    color.className = "color";
    color.style.backgroundColor = c.color;
    color.textContent = c.name;

    colorList.append(color);

    btn.onclick = () => store.dispatch(toggleColor(c.id));
    btn.textContent = c.favourite ? " Like" : "Unlike";

    color.appendChild(btn);
  });
}

renderColors();

store.dispatch(loadTodoAsync());
store.dispatch(addTodoAsync("huy"));
store.dispatch(addTodoAsync("dzz"));
