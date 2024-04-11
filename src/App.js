import './App.css';
import Attachment from './Components/attachment';
import TodoList from './Components/TodoList';

function App() {
  return (<>
    <div className="todo-app">
       <TodoList/>
       <Attachment/>
    </div>
    </>
  );
}

export default App;
