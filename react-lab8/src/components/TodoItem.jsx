import { Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../page/Todo";

export default (props) =>{
    return(
        <li>
            <h1>Item1</h1>
            {props.todo.title}
            <TodoContext.Consumer>
                {
                    (value) => console.log(value)
                }
            </TodoContext.Consumer>
        </li>

    )}