import React, { Component } from 'react';
import {Autocomplete, Card, Button} from 'react-materialize';
import axios from 'axios';
import Result from './Result'
import BusinessCard from './BusiessCard';

const AutocompleteSuggestions = {}


class App extends Component { 

  constructor(props){
    super(props);
    this.state = {
        value: "",
        carddata: [],
        suggestions:  AutocompleteSuggestions,       
        backendip: 'http://172.18.18.3:5000/search/'
      };
    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(str){
    this.setState({value:str})
    axios.get(this.state.backendip+str)
    .then(res => {
      this.setState({carddata: []})
      this.setState({carddata: res.data})
    })
  }

  render() {
    return (
      <div style = {{width: "90%", color : "#92a8d1", margin: '1em 1em 1em 1em'}}>
        <Card
          style = {{width: "90%", color : "#92a8d1", margin: 'auto', themeColor: "#000000"}}
          actions =
          {
            <Button            
              style = {{ margin: '0 50%'}}
            >
              Search!
            </Button>
          }
        >
          <Autocomplete
            style = {{margin: 0, themeColor: "#000000"}}
            data = {this.state.suggestions}
            value = {this.state.value}
            onChange = {(e) => this.updateItems(e.target.value)}
            //onAutocomplete = {(val) => this.getCompany(this.state.suggestions[val])}
            limit = {10}
            //sortFunction = {}
          />
        </Card>
        {this.state.carddata.map( (e,i) =>  <Result key={i} data={e}/>)}
      </div>    
    );
  }
}

export default App;