import React from "react";
import SearchBar from './searchBar';
import unsplash from "../apis/unsplash";
import ImageList from "./imageList";

export default class App extends React.Component{

  state={
    images:[]
  }

  onSubmit= async (searchTerm)=>{

    let res=await unsplash.get("/search/photos",{
      params:{query:searchTerm}
    })

    this.setState({images:res.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{marginTop:"10px"}}>
        <SearchBar onSubmit={this.onSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
