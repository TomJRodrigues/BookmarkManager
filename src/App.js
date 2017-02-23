import React, { Component } from 'react';
import Subject from './Subject.js';
import AddSubject from './AddSubject.js';
// import Header from './Header.js';
// import Navbar from './Navbar.js';
// import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();

    this.addNewResource = this.addNewResource.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      resources: [
      {
        subject: "Classes 1 & 2: Functional Programming Basics",
        resources: [
          {
            title: "FunFunFunction Functional Programming Playlist",
            url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84",
            read: true,
          },
          {
            title: "FunFunFunction var, let, and const",
            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8",
            read: false,
          },
          {
            title: "FunFunFunction arrow functions",
            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I",
            read: true,
          }
        ]
      },


      {
        subject: "Class 3: ES6",
        resources: [
          {
            title: "Kyle Robinson Young ES6 Essentials",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA",
            read: false,
          },
          {
            title: "Var, Let or Const?",
            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.5h0vad4qh",
            read: false,
          }
        ]
      },


      {
        subject: "Classes 4 & 5: Intro to React",
        resources: [
          {
            title: "Thinking in React",
            url: "https://facebook.github.io/react/docs/thinking-in-react.html",
            read: false,
          },
          {
            title: "Mindspace React Tutorial",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS",
            read: false,
          },
          {
            title: "LearnCode Academy React Tutorial",
            url: "https://youtu.be/fd2Cayhez58",
            read: false,
          }
        ]
      },

      {
        subject: "Class 6: Events & State",
        resources: [
          {
            title: "Handling Events",
            url: "https://facebook.github.io/react/docs/handling-events.html",
            read: false,
          },
          {
            title: "React Stateless Functional Components: Nine Wins You Might Have Overlooked",
            url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.63sbuc4mm",
            read: false,
          },
          {
            title: "Mindspace Tutorial (7-10)",
            url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8",
            read: false,
          },
          {
            title: "Understanding Bind",
            url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/",
            read: false,
          },
          {
            title: "Learncode Academy",
            url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be",
            read: false,
          }
        ]
      },

      {
        subject: "Satire & Jokes",
        resources: [
          {
            title: "How it Feels to Learn Javascript in 2016",
            url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.d8l50z9ig",
            read: false,
          }
        ]
      }

    ]}
  }

  addNewSubject(subject) {               // receives new subject from AddSubject.js and sets state
    const tempState = this.state;
    tempState.resources.push(subject);
    this.setState(tempState);
  }

  addNewResource(subject, resource) {    // receives new resource from Subject.js and sets state
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    this.setState(tempState);
  }

  handleInputChange(event) {            // allows typing and checkbox-checking
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div>
          <AddSubject 
            addNewSubject={this.addNewSubject}
          />
        </div>
        {
          this.state.resources.map((resource, index) => {
            return(
              <Subject 
                index={index} 
                addResource={this.addNewResource}
                handleInputChange={this.handleInputChange}
                changeCheckStatus={this.changeCheckStatus} 
                items={resource}  
                />

            )
          })
        }
      </div>
    );
  }
}

export default App;

          // <form htmlFor="subjectButton">
            // <input 
            //   id="subjectButton" 
            //   type="text" name="subject" 
            //   onChange={this.handleInputChange} 
            //   value={this.state.subject} 
            //>
            //<button onClick={this.addNewSubject}>New Subject</button>
          //</form> 


        // {
        //   <Header />
        // }
        // {
        //  this.state.resources.map((resource, index) => {
        //     return(
        //       <Navbar index={index} items={resource} />
        //     )
        //   })
        // }
        // {
        //   <Footer />
        // }