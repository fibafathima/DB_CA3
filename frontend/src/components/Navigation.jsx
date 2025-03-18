import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/task">Task List</Link> | <Link to="/add">Add Task</Link>
    </nav>
  );
}

export default Navigation;
