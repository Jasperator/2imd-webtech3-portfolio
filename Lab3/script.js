class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
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
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify


    let noteToStorage = JSON.parse(localStorage.getItem('todo')) || [];
		noteToStorage.push(this.title);
		localStorage.setItem('todo', JSON.stringify(noteToStorage));
    



  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

    this.remove();
		let todo = JSON.parse(localStorage.getItem(todo)) || [];

		let todoText = this.querySelector(p).innerHTML; // p selecteren
		let index = todo.indexOf(todoText); // de index van de p nemen
		todo.splice(index, 1); // splice removes content uit array
		localStorage.setItem('todo', JSON.stringify(todo)); // localstorage updaten
    
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
     this.btnAdd.addEventListener("click", this.createNote.bind(this));

     this.loadNotesFromStorage();
     document.querySelector('#txtAddNote').addEventListener('keydown', (e) => {
       if (e.keyCode == 13) {
         e.preventDefault();
         this.createNote();
       }
     });
     
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice

    let dataStorage = JSON.parse(localStorage.getItem('newNote'));
    if(dataStorage.length > 0) {
      dataStorage.forEach(title => {
        let note = new Note(title);
        note.add();
      });
    }
  }
  
   
  createNote(e){
    // this function should create a new note by using the Note() class
    // HINT🤩
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);

     note.add();
    note.saveToStorage();
    //this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector('#txtAddNote').value = ``;

  }
  
}

let app = new App();