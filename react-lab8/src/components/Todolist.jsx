import { Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../page/Todo";
import TodoItem from "./TodoItem";
import styled from "styled-components"
const List = styled.ul `{
  list-style: none;
}`

export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <List>
          <TodoContext.Consumer>
            
            {(value) =>
              value.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            }
          </TodoContext.Consumer>
          </List>
        </Col>
      </Row>
    </Container>
  );
};
