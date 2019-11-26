import React from "react";
// import edamam from "../apis/edamam";
import { Button, Alert } from "react-bootstrap";
import axios from "axios";
import Suggestions from "./Suggestions";
import RandomIngredient from "./randomIngredient";

class SearchPage extends React.Component {
  state = {
    suggestions: [],
    searchResults: [],
    nextItems: false,
    resultsCategory: "",
    ingredients: [],
    displayedForm: null,

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
        if (!suggestions) this.displayForm("error");
        this.setState({ suggestions: suggestions });
      })
      .catch(err => {
        console.log(err);
        this.displayForm("error");
      });
  };
  displayForm = form => {
    this.setState({
      displayedForm: form
    });
  };
  getRandomIngredients = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => {
        let data = res.data.meals[0];
        let ing1 = data.strIngredient1;
        let ing2 = data.strIngredient2;
        let ing3 = data.strIngredient3;
        let ing4 = data.strIngredient4;
        let ing5 = data.strIngredient5;
        let ing6 = data.strIngredient6;

        let results = [ing1, ing2, ing3, ing4, ing5, ing6];
        this.setState({ ingredients: results });
      });
  };
  showIngredients = () => {
    const { ingredients } = this.state;
    let suggestionElements = ingredients.map((suggestion, i) => {
      if (ingredients !== null) {
        return (
          <RandomIngredient key={i} showClass="show" suggestion={suggestion} />
        );
      }
    });
    return suggestionElements;
  };
  showSuggestions = () => {
    const { suggestions } = this.state;
    let suggestionElements = suggestions.map((suggestion, i) => {
      while (i < 20) {
        if (suggestions !== null) {
          return (
            <Suggestions key={i} showClass="show" suggestion={suggestion} />
          );
        } else {
          this.displayForm("error");
        }
        i++;
      }
    });

    return suggestionElements;
  };
  getCategoryFromItem = suggestion => {
    let categories = ["meat", "fish", "cereal", "cheese"];
    // filter and compare suggestions vs categories (aisle labels)
    let qReg = /[raw]/gi;
    let poultry = /[chicken]/gi;
    let soup = /[soup]/gi;
    if (suggestion.match(qReg) || suggestion.match(poultry)) {
      this.setState({
        resultsCategory: "poultry"
      });
    } else if (suggestion.match(soup)) {
      this.setState({ resultsCategory: "soup" });
    }
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
    }, 1000);
  };
  render() {
    const { displayedForm } = this.state;
    let alert;
    if (displayedForm === "error") {
      alert = <Alert variant="danger">Something Went Wrong, Try again.</Alert>;
    }
    return (
      <div>
        {alert}
        <form className="search-form" method="GET">
          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            ref={this.searchRef}
            onChange={this.handleSearchQuery}
            placeholder="Chicken..."
          ></input>
          <div className="search-button-container">
            <Button
              className="suggestion-button"
              onClick={this.getFoodData}
              variant="outline-primary"
            >
              Get Suggestions
            </Button>
            <Button
              className="random-button"
              variant="outline-primary"
              onClick={this.getRandomIngredients}
            >
              Get Random Ingredients
            </Button>
          </div>
        </form>
        <div className="suggestion-box">
          <ul>{this.showSuggestions()}</ul>
          <ul>{this.showIngredients()}</ul>
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
