import React from "react";
import Communicator from "../services/ApiCommunicator";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.communicator = new Communicator();
    this.state = {
      breweries: []
    };
  }

  componentDidMount() {
    this.communicator.getEndpoint("locations", { region: "VA" }).then(data => {
      this.setState({ breweries: data });
    });
  }

  render() {
    if (this.state && this.state.breweries.length) {
      const breweries = this.state.breweries.map(brewery =>
        <li key={brewery.id}>{brewery.name}</li>
      );

      return (
        <div>
          <h1>Suh Dew</h1>
          {breweries}
        </div>
      );
    }

    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
