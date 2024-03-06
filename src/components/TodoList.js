// import React,{useState} from 'react'
// import TodoItem from './TodoItem';

// function TodoList() {
//     const [text,setText] = useState('')
//     const [tasks, setTasks] = useState([
//         {
//             id:1,
//             text:'Meeting at 12PM',
//             completed:true
//         },
//         {
//             id:2,
//             text:'Flight timing 3PM',
//             completed:false
//         }
//     ]);

//     function addTask(text){
//         const newTask = {
//             id:Date.now(),
//             text,
//             completed:false
//         };
//         setTasks([...tasks,newTask]);
//         setText('');
//     }

//     function deleteTask(id){
//         setTasks(tasks.filter(task=>task.id !== id))
//     };

//     function toggleCompleted(id){
// setTasks(tasks.map(task=>{
//     if(task.id === id){
//         return {...task, completed:task.completed}
//     }
//     else{
//         return task;
//     }
// }))
//     }

//   return (
//     <div className='todoList'>
//         <h1 className='heading'> To-Do App</h1>
//       {  tasks.map(task=>(
//         <TodoItem style={{ color: task.completed ? 'green' : 'red' }} key={task.id} task={task} toggleCompleted={toggleCompleted} deleteTask={deleteTask}/>
//       ))}
//       <input placeholder="Add a new task" value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={()=>addTask(text)}>Add</button>
//     </div>
//   )
// }

// export default TodoList
