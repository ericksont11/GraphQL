import React, { Component } from 'react';
import {graphql} from 'react-apollo'
import { getAuthorsQuery } from '../queries/queries'

class AddBook extends Component {
  constructor(props){
      super(props)
      this.state = {
          name: '',
          genre: '',
          authorId: ''
      }
  }
  displayAuthors(){
      var data = this.props.data
      if(data.loading){
          return (<option>Loading Books...</option>)
      } else {
          return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
      }
  }
  submitForm(event){
      event.preventDefault()
      console.log(this.state)
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
            <label>Book name:</label>
            <input type ="text" onChange={(e)=> this.setState({name: e.target.value})}/>
        </div>
        <div className="field">
            <label>Genre:</label>
            <input type ="text" onChange={(e)=> this.setState({genre: e.target.value})}/>
        </div>
        <div className="field">
            <label>Author:</label>
            <select onChange={(e)=> this.setState({authorId: e.target.value})}>
                <option>Select Author</option>
                {this.displayAuthors()}
            </select>
        </div>

        <button>Add</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);