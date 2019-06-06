import React from 'react';

class SearchBar extends React.Component{
  

  render(){
    return(
      <input 
      type="text"
      name="search"
      onChange={this.props.searchFilter}
      placeholder="search,," 
      //onSubmit={this.props.searchFilter}
      //value={this.props.newSearch}
      ></input>
    );

  }

}

export default SearchBar;  