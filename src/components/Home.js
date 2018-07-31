import React, { Component } from 'react';
import { Card, CardTitle, CardText } from "material-ui/Card";

class Home extends Component {
  render() {
    return (
      <Card>
        <CardTitle title="Hello World"/>
        <CardText>
          <ul>
            <li>hello</li>
            <li>wolrd</li>
            <li>!!!!</li>
            <li>????</li>
          </ul>
        </CardText>
      </Card>
    );
  }
}

export default Home;