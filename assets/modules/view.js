import { data } from "./data.js";
import { state } from "./state.js";
import { startSpeech } from "./global.js";

const folderBlock = document.getElementById("folder-list");
const thesisBlock = document.getElementById("accordionFlushThesis");

const renderFolderHTML = (folder) => {
  return `
  <div data-info=${folder.id} data-language=${folder.language} class="d-flex folder btn btn-folder my-2 align-items-center">
      <div class="icon-block me-2">
          <img src="./assets/folder.png" class="folder-img" alt="folder-icon">
      </div>
      <div class="text-block">
          ${folder.name} [${folder.items.length}]
      </div>
  </div>`;
};

const renderThesisHTML = (thesis) => {
  return `<div class="thesis accordion-item">
                <h2 class="accordion-header" id="flush-${thesis.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse_${thesis.id}" aria-expanded="false" aria-controls="flush-collapse_${thesis.id}">
                        <div class="d-block">
                        <b>${thesis.id}. <small class="">${thesis.title}</small></b>
                        </div>
                    </button>
                </h2>
                <div id="flush-collapse_${thesis.id}" class="accordion-collapse collapse" aria-labelledby="flush-${thesis.id}"
                    data-bs-parent="#accordionFlushThesis">
                    <div class="accordion-body">
                        ${renderListItems(thesis.task,"square")}
                        <div>
                          <b><p class="m-0 mt-2">Kulcsszavak, fogalmak:</p></b>
                          <ul>
                          <i>${renderListItems(thesis.keys)}</i>
                          </ul>
                        </div>
                        <div class="d-flex justify-content-between">${thesis.content.length > 0 ? "<b>Tétel:</b><br>" : ""}</div>
                        <div class="text-content">${thesis.content}</div>
                        <!--<div class="form-control text textarea-thesis mt-2" contenteditable id="text_${thesis.id}">${thesis.content}</div>-->                        
                        </div>
                        <div class="listening-modules mt-2"></div>
                    </div>
                </div>
            </div>`;
};

const readerControlPanelHTML = () => {
  return `
          <div class="d-flex justify-content-between w-100" id="reader-control-panel">
            <div class="d-flex col-12 mb-3">

              <button class="btn btn-success w-100" data-method="" id="start-speech-btn" title="start">
                <span class="d-none d-sm-inline m-2">Start</span>
                <i class="fas fa-play"></i>
              </button>

              <button class="d-none btn btn-secondary w-100" data-method="resume" id="resume-speech-btn" title="resume" disabled>
                <span class="d-none d-sm-inline m-2">Resume</span>
                <i class="fas fa-play"></i>
              </button>

              <button class="btn btn-secondary w-100 ms-2" data-method="pause" id="pause-speech-btn" title="pause" disabled>
                <span class="d-none d-sm-inline m-2">Pause</span>
                <i class="fas fa-pause"></i>
              </button>

              <button class="btn btn-danger w-100 ms-2" data-method="cancel" id="stop-speech-btn" title="stop" disabled>
                <span class="d-none d-sm-inline m-2">Stop</span>
                <i class="fas fa-stop"></i>
              </button>
            </div>
        </div>`;
};

const renderListItems = (list,listStye = "disc")=>{
  let myList = "";
  if(list.length > 0) {
    list.forEach(e => {
      myList+= `<li style="list-style-type:${listStye}">${e}</li>`;
    });
  }
  return myList;

}

export const loadFolderElements = () => {
  folderBlock.innerHTML = "";
  data.forEach((folder) => {
    folderBlock.innerHTML += renderFolderHTML(folder);
  });
  setFolderElementEvents();
  navigatePagination();
};

const getSelelectedFolder = () => {
  return data.find((x) => x.id == state.folderId).items;
};

const sliceArray = (array, btnId) => {
  let startIndex = parseInt(btnId);
  let lastIndex = parseInt(startIndex) + 5;
  return array.slice(startIndex, lastIndex);
};

const loadThesisElements = () => {
  thesisBlock.innerHTML = "";
  let folder = getSelelectedFolder();
  let myArray = sliceArray(folder, state.selectedPage);
  myArray.forEach((thesis) => {
    thesisBlock.innerHTML += renderThesisHTML(thesis);
  });
};

const setFolderElementEvents = () => {
  const folderElements = document.querySelectorAll(".folder");
  folderElements.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.folderId = btn.dataset.info;
      state.selectedLanguage = btn.dataset.language;
      folderElements.forEach((btn) => btn.classList.remove("active"));
      resetPagination();
      setAccordionEvents();
      btn.classList.add("active");
    });
  });
  folderElements[0].click();
};

const navigatePagination = () => {
  const navButtons = document.querySelectorAll(".page-link.button");
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      resetActiveBtn();
      btn.classList.add("active");
      state.selectedPage = btn.dataset.btnid;
      loadThesisElements();
      setAccordionEvents();
    });
  });
};

const resetPagination = () => {
  state.selectedPage = 0;
  loadThesisElements();
  resetActiveBtn();
  document.querySelector(".page-link.button").classList.add("active");
};

const resetActiveBtn = () => {
  const navButtons = document.querySelectorAll(".page-link.button");
  navButtons.forEach((btn) => btn.classList.remove("active"));
};

const setAccordionEvents = () => {
  const elements = document.querySelectorAll(".accordion-header");
  elements.forEach((el) => {
    el.addEventListener("click", () => {
      const text = el.parentElement.querySelector(".text-content");
      if (text.innerHTML.length > 0) {
        let listeningBlock =
          el.parentElement.querySelector(".listening-modules");
        listeningBlock.innerHTML = readerControlPanelHTML();
      }
      setTimeout(() => {
        let visible = el.parentElement
          .querySelector(".accordion-collapse")
          .classList.contains("show");
        let listeningBlock =
          el.parentElement.querySelector(".listening-modules");
        if (visible && text.innerHTML.length > 0) {
          listeningBlock.style.opacity = "1";
          setReadingEvents(text.innerHTML);
        } else {
          listeningBlock.innerHTML = "";
          listeningBlock.style.opacity = "0";
        }
      }, 500);
    });
  });
};

const setReadingEvents = async (text) => {
  const startSpeechBtn = document.getElementById("start-speech-btn");
  const resumeSpeechBtn = document.getElementById("resume-speech-btn");
  const pauseSpeechBtn = document.getElementById("pause-speech-btn");
  const stopSpeechBtn = document.getElementById("stop-speech-btn");

  startSpeechBtn.addEventListener("click", async () => {
    startSpeechBtn.classList.add("d-none");
    resumeSpeechBtn.classList.remove("d-none");
    stopSpeechBtn.disabled = false;
    pauseSpeechBtn.disabled = false;
    const method = getReaderBtnData(startSpeechBtn);
    const speech = await startSpeech(state.selectedLanguage, text, "", method);
    if (speech === "end") {
      stopSpeechBtn.click();
    }
  });

  resumeSpeechBtn.addEventListener("click", async () => {
    pauseSpeechBtn.disabled = false;
    resumeSpeechBtn.disabled = true;
    const method = getReaderBtnData(resumeSpeechBtn);
    await startSpeech("", "", "", method);
  });
  pauseSpeechBtn.addEventListener("click", async () => {
    pauseSpeechBtn.disabled = true;
    resumeSpeechBtn.disabled = false;
    const method = getReaderBtnData(pauseSpeechBtn);
    await startSpeech("", "", "", method);
  });
  stopSpeechBtn.addEventListener("click", async () => {
    startSpeechBtn.classList.remove("d-none");
    resumeSpeechBtn.classList.add("d-none");
    stopSpeechBtn.disabled = true;
    pauseSpeechBtn.disabled = true;
    const method = getReaderBtnData(stopSpeechBtn);
    await startSpeech("", "", "", method);
  });
};

const getReaderBtnData = (eventButton) => {
  return {
    cancel: eventButton.dataset.method == "cancel",
    pause: eventButton.dataset.method == "pause",
    resume: eventButton.dataset.method == "resume",
  };
};
