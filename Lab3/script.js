class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div');
    newNote.setAttribute('class', 'card');

    let newP = document.createElement('p');
    newP.innerHTML = title;

    newNote.appendChild(newP);

    let newA = document.createElement('a');

    newA.setAttribute('class', 'card-remove');

    newA.innerHTML = 'Remove';

    newNote.appendChild(newA);
    newA.addEventListener('click', this.remove.bind(newNote));


    return newNote;

  }

  add() {

    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage() {

    let noteToStorage = JSON.parse(localStorage.getItem('noteToStorage')) || [];
    noteToStorage.push(this.title);
    localStorage.setItem('noteToStorage', JSON.stringify(noteToStorage));

  }

  remove() {
    this.remove();
    let localArray = JSON.parse(localStorage.getItem('noteToStorage')) || [];

    let note = this.querySelector('p').innerHTML;
    let index = localArray.indexOf(note);
    localArray.splice(index, 1);
    localStorage.setItem('noteToStorage', JSON.stringify(localArray));

  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");


    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));

    this.loadNotesFromStorage();
    document.querySelector('#txtAddNote').addEventListener('keydown', (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        this.createNote();
      }
    });

  }

  loadNotesFromStorage() {
    let dataStorage = JSON.parse(localStorage.getItem('noteToStorage')) || [];
    if (dataStorage.length > 0) {
      dataStorage.forEach(dataStorage => {
        let note = new Note(dataStorage);
        note.add();
      });


    }
  }


  createNote(e) {

    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);

    note.add();
    note.saveToStorage();
    this.reset();
  }

  reset() {
    document.querySelector('#txtAddNote').value = ``;

  }

}

let app = new App();