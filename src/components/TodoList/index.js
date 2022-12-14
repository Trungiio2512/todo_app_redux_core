import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Button, Select, Tag } from "antd";
// import { addTodo } from "../../store/actions";
import { addTodo } from "../../store/todoSilce";
import { todoRemainingSelector } from "../../store/selector";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const inputRef = useRef();

  const todos = useSelector(todoRemainingSelector);

  const handleSubmit = () => {
    setTodoName("");
    inputRef.current.focus();
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
  };

  const handleChangeValue = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input ref={inputRef} value={todoName} onChange={handleChangeValue} />

          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>

          <Button type="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
