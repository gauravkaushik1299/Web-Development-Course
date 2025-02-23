// Selectors
const addBtn = document.getElementById("add");

// Load notes from local storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  // Loop through notes and add them to the page
  notes.forEach((note) => addNewNote(note));
}

// Event listener for adding a new note
addBtn.addEventListener("click", () => addNewNote());

/**
 * Adds a new note to the page
 * @param {string} text - The text to add to the note
 */
function addNewNote(text = "") {
  // Create a new note element
  const note = document.createElement("div");
  note.classList.add("note");

  // Create the HTML for the note
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  // Select the elements
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // Set the text area value and main innerHTML
  textArea.value = text;
  main.innerHTML = marked(text);

  // Add event listeners
  deleteBtn.addEventListener("click", () => {
    // Remove the note from the page
    note.remove();

    // Update local storage
    updateLS();
  });

  editBtn.addEventListener("click", () => {
    // Toggle the main and text area
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    // Get the value of the text area
    const { value } = e.target;

    // Update the main innerHTML
    main.innerHTML = marked(value);

    // Update local storage
    updateLS();
  });

  // Add the note to the page
  document.body.appendChild(note);
}

/**
 * Updates local storage with the current notes
 */
function updateLS() {
  // Select all text areas
  const notesText = document.querySelectorAll("textarea");

  // Create an array to store the notes
  const notes = [];

  // Loop through the text areas and add the values to the notes array
  notesText.forEach((note) => notes.push(note.value));

  // Update local storage
  localStorage.setItem("notes", JSON.stringify(notes));
}




