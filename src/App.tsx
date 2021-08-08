import React, { Component } from "react";
import Number from "./Number";
import { Form , Input} from "./input";

interface IState {
  counter: number;
  name: string;

}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange}/>
        </Form>
        <Number count={counter}></Number>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: {
        value
      }
    } = event;
    this.setState({
      name: value
    })
  }

  onFormSubmit = (event: React.FormEvent) => {
    event?.preventDefault();
  }

  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;
