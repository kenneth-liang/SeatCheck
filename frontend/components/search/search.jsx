import React from 'react';
import {withRouter} from 'react-router-dom'

import Autosuggest from "react-autosuggest";


const searches = [
  {
    title: "Cities",
    searches: [
      {
        name: "San Francisco",
      },
      {
        name: "Las Vegas",
      },
      {
        name: "Seattle",
      },
      {
        name: "Chicago",
      },
      {
        name: "New York",
      },
      {
        name: "Los Angeles",
      },
    ],
  },
  {
    title: "Cuisines",
    searches: [
      {
        name: "Steak",
      },
      {
        name: "Seafood",
      },
      {
        name: "French",
      },
      {
        name: "Asian",
      },
      {
        name: "Indian",
      },
      {
        name: "Italian",
      },
      {
        name: "American",
      },
      {
        name: "Mexican",
      },
      {
        name: "Californian",
      },
      {
        name: "Korean",
      },
    ],
  },
  // {
  //   title: "Restaurants",
  //   searches: [
  //     {
  //       name: "House of Prime Rib",
  //     },
  //     {
  //       name: "Bouchon at The Venetian",
  //     },
  //     {
  //       name: "Amber India",
  //     },
  //     {
  //       name: "Bestia",
  //     },
  //     {
  //       name: "Lexington Brass",
  //     },
  //     {
  //       name: "Nacho Daddy",
  //     },
  //     {
  //       name: "The Publican",
  //     },
  //     {
  //       name: "Zingari Rooftop Ristorante",
  //     },
  //     {
  //       name: "Wayfare Taver",
  //     },
  //     {
  //       name: "Gracias Madre",
  //     },
  //     {
  //       name: "Ombu Grill",
  //     },
  //     {
  //       name: "Takami Sushi & Robata Restaurant",
  //     },
  //     {
  //       name: "Arte Cafe",
  //     },
  //     {
  //       name: "Prime & Provisions Steakhouse",
  //     },
  //     {
  //       name: "NoMI",
  //     },
  //     {
  //       name: "Salty's on Alki Beach",
  //     },
  //     {
  //       name: "Canlis",
  //     },
  //     {
  //       name: "Wild Ginger McKenzie",
  //     },
  //     {
  //       name: "Ivar's Acres of Clams",
  //     },
  //     {
  //       name: "Ohlala French Bistro",
  //     },
  //     {
  //       name: "The Capital Grille",
  //     },
  //     {
  //       name: "SUSHISAMBA",
  //     },
  //     {
  //       name: "True Food Kitchen",
  //     },
  //     {
  //       name: "Best Friend",
  //     },
  //     {
  //       name: "Olio e Più",
  //     },
  //     {
  //       name: "Jue Lan Club",
  //     },
  //     {
  //       name: "Royal 35 Steakhouse",
  //     },
  //     {
  //       name: "Le Colonial",
  //     },
  //     {
  //       name: "The Hampton Social",
  //     },
  //     {
  //       name: "Pink Taco",
  //     },
  //   ],
  // },
];


const CITY = [
  "San Francisco",
  "Las Vegas",
  "Seattle",
  "Chicago",
  "New York",
  "Los Angeles",
];

const CUISINE = [
  "Steak",
  "Seafood",
  "French",
  "Asian",
  "Indian",
  "Italian",
  "American",
  "Mexican",
  "Californian",
  "Korean",
];

const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return searches
    .map((section) => {
      return {
        title: section.title,
        searches: section.searches.filter((search) =>
          regex.test(search.name)
        ),
      };
    })
    .filter((section) => section.searches.length > 0);
}

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;


const renderSectionTitle = (section) => {
  return <strong>{section.title}</strong>;
}

const getSectionSuggestions = (section) => {
  return section.searches;
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchRestaurants()
  // }

  onChange (event, { newValue }) {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    
    let nextState;
    if (CITY.includes(this.state.value)) {
      nextState = { city: this.state.value };
    } else if (CUISINE.includes(this.state.value)) {
      nextState = { cuisine: this.state.value };
    } 
    
    // else {
    //   nextState = { name: this.state.value };
    // }
    
    this.props.history.push({
      pathname: "/restaurants",
      state: nextState,
    });
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search Location or Cuisine",
      value,
      onChange: this.onChange,
      className: "search-input"
    };

    return (
      <div>
        <form className="search-form-container">
          <div className="search-field">
            <Autosuggest
              multiSection={true}
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              renderSectionTitle={renderSectionTitle}
              getSectionSuggestions={getSectionSuggestions}
              inputProps={inputProps}
            />
          </div>
          <div>
            <input
              type="submit"
              className="search-submit-button"
              onClick={this.handleSubmit}
              value="Let's Go"
            />
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(Search);


 