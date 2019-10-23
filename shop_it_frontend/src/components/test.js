import React from "react";
import edamam from "../apis/edamam";
import { Button } from "react-bootstrap";

class Test extends React.Component {
  state = {};
  searchRef = React.createRef();

  click = () => {
    const query = "cinnamon";
    const app_id = process.env.REACT_APP_APP_ID;
    const application_key = process.env.REACT_APP_APPLICATION_KEY;
    console.log(application_key);
    edamam
      .get(`/parser?ingr=${query}&app_id=${app_id}&app_key=${application_key}`)
      .then(res => {
        console.log(res.statusText);
        console.log(res.data);
        const data = res.data.parsed[0];
        const category = "CATEGORY: " + data.food.category;
        const categoryLabel = "CATEGORYLABEL: " + data.food.categoryLabel;
        const label = "LABEL: " + data.food.label;
        let result = "";
        // switch (category || categoryLabel || label) {
        //   case "raw":
        //     result.push("produce");
        //     break;
        // }
        if (label.includes("raw")) {
          result = "raw/produce";
        }
        if (label.includes("cereal")) {
          result = "cereal";
        }
        if (label.includes(query)) {
          result = `${query} has no label`;
        }
        console.log(result);
        console.log(category + categoryLabel + label);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form method="GET">
          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            ref={this.searchRef}
          ></input>
          <Button variant="outline-primary">Search</Button>
        </form>
      </div>
    );
  }
}

export default Test;
