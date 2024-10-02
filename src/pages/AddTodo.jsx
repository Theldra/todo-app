import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        //Post data to todo api
        //Go to the homepage
        navigate('/');
    }

    return (
        <div>
            <h1>Add A New Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="Enter your task" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddTodo;