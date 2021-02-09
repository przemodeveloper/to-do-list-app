import React, { Component } from 'react';
import Bulletin from '../Bulletin/Bulletin';
import './BulletinList.css';

class BulletinList extends Component {

    state = {
        bulletin: [
          {
            id: 1,
            title: 'Hello World',
            listOfTasks: ['eat sandwich', 'clean house']
          },
          {
            id: 2,
            title: 'Hello Mars',
            listOfTasks: ['eat spaghetti', 'go to sleep']
          },
        ],
        titleField: '',
        descriptionField: ''
      }


      addEmptyCard = () => {
          this.setState({
              bulletin: [...this.state.bulletin, {id: this.state.bulletin.length + 1, title: '...', listOfTasks: []}]
          })
      }

      captureInput = (event, id) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            bulletin: prevState.bulletin.map(object => (object.id === id ? Object.assign(object, { [name]: value }) : object))
        }))
      }

      captureSingleTask = (event) => {
          this.setState({descriptionField: event.target.value})
          console.log(this.state.descriptionField)
      }

      addTask = (id) => {
          const specificBulletin = this.state.bulletin[id - 1].listOfTasks;
          this.setState({
              specificBulletin: specificBulletin.push(this.state.descriptionField),
          })
          
      }

      deleteCard = (id) => {
        const array = [...this.state.bulletin];

        const filteredArray = array.filter(element => {
            return id !== element.id
        })

        this.setState({...this.state.bulletin, bulletin: filteredArray});
      }

    render() {
        return(
            <div>
                <button onClick={this.addEmptyCard}>+</button>
                <div className="container">
                    {this.state.bulletin.map(((element, index) => {
                        return <div className="inner-container"><Bulletin 
                        id={element.id} 
                        title={element.title} 
                        list={element.listOfTasks}
                        captureInput={this.captureInput}
                        captureSingleTask={this.captureSingleTask}
                        addTask={this.addTask}
                        descriptionField={this.state.descriptionField}
                        deleteCard={this.deleteCard}
                        /></div>
                    }))}
                </div>
                
            </div>
        )
    }
}

export default BulletinList;