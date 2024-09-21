// Selecting DOM elements
const addNoteBtn = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');
const noteTitleInput = document.getElementById('note-title');
const noteBodyInput = document.getElementById('note-body');
const noteColorInput = document.getElementById('note-color'); // New color picker input

// Event listener for adding a new note
addNoteBtn.addEventListener('click', () => {
    const title = noteTitleInput.value.trim();
    const body = noteBodyInput.value.trim();
    const color = noteColorInput.value; // Get the chosen color

    if (title === "" || body === "") {
        alert("Please fill out both fields before adding a note.");
        return;
    }

    // Create a new note element
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.style.backgroundColor = color; // Set the note background to the selected color

    const noteTitleElement = document.createElement('div');
    noteTitleElement.classList.add('note-title');
    noteTitleElement.innerText = title;

    const noteBodyElement = document.createElement('div');
    noteBodyElement.classList.add('note-body');
    noteBodyElement.innerText = body;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-outline-primary');
    deleteButton.innerText = 'Delete';
    


    // Delete note event listener
    deleteButton.addEventListener('click', () => {
        noteElement.remove();
    });

    // Appending note title, body and delete button to the note element
    noteElement.appendChild(noteTitleElement);
    noteElement.appendChild(noteBodyElement);
    noteElement.appendChild(deleteButton);

    // Append the new note to the notes list
    notesList.appendChild(noteElement);

    // Clear the input fields
    noteTitleInput.value = '';
    noteBodyInput.value = '';
});
