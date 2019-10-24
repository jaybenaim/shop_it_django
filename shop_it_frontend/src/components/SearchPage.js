import React from "react";
// import edamam from "../apis/edamam";
import { Button } from "react-bootstrap";
import axios from "axios";
import Suggestions from "./Suggestions";

class SearchPage extends React.Component {
  state = {
    suggestions: [],
    searchResults: []
  };
  searchRef = React.createRef();

  getFoodData = () => {
    const query = this.searchRef.current.value;
    axios
      .get(
        "https://food-nutrition.canada.ca/api/canadian-nutrient-file/food/?lang=en&type=json"
      )
      .then(res => {
        let data = res.data;
        const suggestions = data.filter(d => {
          if (d.food_description.includes(query)) {
            return d.food_description;
          }
        });
        this.setState({ suggestions: suggestions });
      });
  };

  showSuggestions = () => {
    const { suggestions } = this.state;
    let suggestionElements = suggestions.map((suggestion, i) => {
      while (i < 10) {
        if (suggestions !== null) {
          return (
            <Suggestions key={i} showClass="show" suggestion={suggestion} />
          );
        }
      }
    });
    return suggestionElements;
  };
  render() {
    return (
      <div>
        <form className="search-form" method="GET">
          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            ref={this.searchRef}
          ></input>

          <Button
            className="suggestion-button"
            onClick={this.getFoodData}
            variant="outline-primary"
          >
            Get Suggestions
          </Button>
        </form>
        <div className="suggestion-box">
          <ul>{this.showSuggestions()}</ul>
        </div>
      </div>
    );
  }
}

export default SearchPage;
