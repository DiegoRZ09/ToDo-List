const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event,id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  
  const tasks = JSON.parse(localStorage.getItem("tasks")); // Recibe el nombre de la llave
  const index = tasks.findIndex(item => item.id === id); //Da la posicion en la que se encuentra dentro del arreglo
  console.log(index);
  tasks[index].complete = !tasks[index].complete;
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Esto se hace para volver a cargar los cambios en localStorage
};

export default checkComplete;
