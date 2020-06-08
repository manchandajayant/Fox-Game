import { ICONS } from "./constants";
import { doc } from "prettier";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[ICON]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  function buttonclick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonclick);
}
