import React from "react";

import "./SearchBar.css";

export default class SearchBar extends React.Component {
constructor(props){
  super(props);

  this.state = {
    term: ""
  }
  
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);

}

handleTermChange(event){
  this.setState({ term: event.target.value });
}

search() {
  this.props.onSearch(this.state.term);
}

render(){
  return(
   <div className="container">
    <div className="SearchBar">
      <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
       <button className="SearchButton" onClick={this.search}>SEARCH</button>
    </div>
  </div> 
);
}
}
