const toDo = [
  {
    id: 1,
    description: "Study",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Read",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Walk",
    isCompleted: true,
  },
];

const toDoJSON = JSON.stringify(toDo); // Converts the list to JSON
console.log(toDoJSON);

const toDoList = JSON.parse(toDoJSON); // Converts JSON to a list
console.log(toDoList);
console.log(toDoList[1].description);
