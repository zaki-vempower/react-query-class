import React from "react";
import { useMutation, useQuery } from "react-query";
import wait from "wait";
import "./styles.css";

function Query(props) {
  return props.children(useMutation(props.fn, props.options));
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data1: ""
    };
  }
  render() {
    console.log("sdsds", this.state);
    return (
      <Query
        fn={() => wait(2500).then(() => "result")}
        options={{
          onSuccess: (data) => {
            this.setState({
              data1: "hellooooooo"
            });
            console.log(data);
            const message = "success";
            alert(message);
          },
          onError: () => {
            alert("there was an error");
          }
        }}
      >
        {({ data, isLoading, mutate }) => {
          return (
            <div className="App">
              <h1>Hello {data}</h1>
              {isLoading ? <h1>Loading: {data}</h1> : ""}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  mutate();
                }}
              >
                new
              </button>
              <h2>Start editing to see some magic happen!</h2>
            </div>
          );
        }}
      </Query>
    );
  }
}
