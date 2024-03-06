// Obtenez les éléments de l'interface utilisateur
const inputTask = document.getElementById('inputTask');
const btnTask = document.getElementById('btnTask');
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');

// Ajoutez une fonction d'écoute pour le bouton d'ajout
btnTask.addEventListener('click', () => {
    const taskText = inputTask.value.trim();  // Appliquer trim() ici

    // Vérifiez si la tâche n'est pas vide
    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        inputTask.value = '';
    }
});

// fonction d'écoute pour empêcher le formulaire de se soumettre 
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

// Ajoutez une fonction pour supprimer une tâche lors d'un double-clic
function supprimerTache(event) {
    // Assurez-vous que l'élément cliqué est une tâche li
    if (event.target.tagName === 'LI') {
        // Supprimez l'élément li
        event.target.remove();
    }
}

// Ajoutez une fonction d'écoute pour le double-clic sur la liste des tâches
taskList.addEventListener('dblclick', supprimerTache);
