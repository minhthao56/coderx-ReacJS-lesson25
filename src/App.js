import "./App.css";
import React, { Component } from "react";
import BookList from "./components/BookList";
import axios from "axios";
import { Layout, Row, Input, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

export class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      titile: [],
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:4000/books/find?q=" + this.state.value)
      .then((res) => {
        this.setState({
          titile: res.data,
        });
      });
  };

  componentDidMount() {
    axios.get("http://localhost:4000/books/api/books").then((res) => {
      this.setState({
        titile: res.data,
      });
    });
  }
  render() {
    return (
      <Layout>
        <Header></Header>
        <Content>
          {/*Find books */}
          <div className="form-find">
            <form onSubmit={this.onSubmit}>
              <label>
                <h1>Find book</h1>
                <Input
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Type title here"
                  style={{
                    width: 320,
                    height: 40,
                  }}
                />
              </label>
              <button type="submit">Find</button>
            </form>
          </div>
          <Row>
            {/* list Books */}
            {this.state.titile.map((tlbook) => {
              return (
                <BookList
                  tl={tlbook.tl}
                  description={tlbook.description}
                  price={tlbook.price}
                  image={tlbook.image}
                />
              );
            })}
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
