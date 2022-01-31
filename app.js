import { setMouseMove } from "./assets/modules/mouse.js";
import {
  loadFolderElements,
  randomThesisEvent,
} from "./assets/modules/view.js";

(() => {
  setMouseMove();
  loadFolderElements();
  randomThesisEvent();
})();
