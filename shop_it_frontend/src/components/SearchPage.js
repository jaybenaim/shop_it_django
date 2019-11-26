import React from "react";
// import edamam from "../apis/edamam";
import { Button } from "react-bootstrap";
import axios from "axios";
import Suggestions from "./Suggestions";

class SearchPage extends React.Component {
  state = {
    suggestions: [],
    searchResults: [],
    nextItems: false,
    query: ""
  };
  searchRef = React.createRef();

  getFoodData = prevQuery => {
    const query = this.searchRef.current.value;
    axios
      .get(
        "https://food-nutrition.canada.ca/api/canadian-nutrient-file/food/?lang=en&type=json"
      )
      .then(res => {
        let data = res.data;
        const suggestions = data.filter(d => {
          if (
            d.food_description.includes(query) ||
            d.food_description.includes(prevQuery)
          ) {
            return d.food_description;
          }
        });
        // filter one

        // filter two
        this.setState({ suggestions: suggestions });
      });
  };

  showSuggestions = () => {
    const { suggestions } = this.state;
    let suggestionElements = suggestions.map((suggestion, i) => {
      while (i < 20) {
        if (suggestions !== null) {
          return (
            <Suggestions key={i} showClass="show" suggestion={suggestion} />
          );
        }
      }
    });
    return suggestionElements;
  };
  //   nextItems = () => {
  //     // this.setState({ suggestions: [] });
  //     const { nextItems } = this.state;
  //     this.showSuggestions(10, 20);
  //   };
  //   handleNextItem = () => {
  //     const { nextItems } = this.state;
  //     this.setState({ nextItems: !nextItems });
  //     this.nextItems();
  //   };
  handleSearchQuery = event => {
    let eventData = event.target.value;

    this.setState({ query: eventData });

    clearTimeout();
    setTimeout(() => {
      this.getFoodData(eventData);
    }, 500);
  };
  render() {
    console.log(this.state.query);
    return (
      <div>
        <form className="search-form" method="GET">
          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            ref={this.searchRef}
            onChange={this.handleSearchQuery}
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
          {/* <Button
            onClick={() => this.handleNextItem()}
            variant="outline-primary"
          >
            More Related Items
          </Button> */}
          {/* <ul>{this.nextItems()}</ul> */}
        </div>
      </div>
    );
  }
}

export default SearchPage;
