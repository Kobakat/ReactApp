const tasks = ["Make some tea", "Meditate", "Plan out the day", "Go for a run"];

// => <ul> with <li> elements

function Todos() {
  //Manually render
  //   const taskListItems = [
  //     <li>{tasks[0]}</li>,
  //     <li>{tasks[1]}</li>,
  //     <li>{tasks[2]}</li>,
  //     <li>{tasks[3]}</li>,
  //   ];

  //List creation via for loops:
  //   const taskListItems = [];
  //   for (let i = 0; i < tasks.length; i++) {
  //     taskListItems.push(<li key={i}>{tasks[i]}</li>);
  //   }

  //Arrays have function methods: forEach, map, filter, find, etc
  //   const taskListItems = [];
  //   tasks.forEach((item, i) => {
  //     taskListItems.push(<li key={i}>{tasks[item]}</li>);
  //   });

  //Arrow function with explicit return
  //   const taskListItems = tasks.map((item, i) => {
  //     return <li key={i}>{item}</li>;
  //   });

  const taskListItems = tasks.map((item, i) => <li key={i}>{item}</li>);

  return (
    <ul>
      {tasks.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default Todos;
