import React, { Component } from 'react';
import Subject from './Subject.js';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {resources: [

      {
        subject: "Classes 1 & 2: Functional Programming Basics",
        resources: [
          {
            title: "FunFunFunction Functional Programming Playlist",
            url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"
          },
          {
            title: "FunFunFunction var, let, and const",
            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"
          },
          {
            title: "FunFunFunction arrow functions",
            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"
          }
        ]
      },


      {
        subject: "Class 3: ES6",
        resources: [
          {
            title: "Kyle Robinson Young ES6 Essentials",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA"
          },
          {
            title: "Var, Let or Const?",
            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.5h0vad4qh"
          }
        ]
      },


      {
        subject: "Classes 4 & 5: Intro to React",
        resources: [
          {
            title: "Thinking in React",
            url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
          {
            title: "Mindspace React Tutorial",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
          {
            title: "LearnCode Academy React Tutorial",
            url: "https://youtu.be/fd2Cayhez58"
          }
        ]
      },

      {
        subject: "Class 6: Events & State",
        resources: [
          {
            title: "Handling Events",
            url: "https://facebook.github.io/react/docs/handling-events.html"
          },
          {
            title: "React Stateless Functional Components: Nine Wins You Might Have Overlooked",
            url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.63sbuc4mm"
          },
          {
            title: "Mindspace Tutorial (7-10)",
            url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8"
          },
          {
            title: "Understanding Bind",
            url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/"
          },
          {
            title: "Learncode Academy",
            url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"
          }
        ]
      },

      {
        subject: "Satire & Jokes",
        resources: [
          {
            title: "How it Feels to Learn Javascript in 2016",
            url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.d8l50z9ig"}
        ]
      }

    ]}
  }

  handleSubmit(event) {
    event.preventDefault();
    let numberOfResources = this.state.resources.length;
    console.log(numberOfResources);
    console.log("Test");
    this.setState({
      
    });
  }

  render() {
    return (
      <div>
        {
          <Header />
        }
        {
         this.state.resources.map((resource, idx) => {
            return(
              <Navbar items={resource} key={idx} />
            )
          })
        }
        {
          this.state.resources.map((resource, idx) => {
            return(
              <Subject items={resource} key={idx} handleSubmit={this.handleSubmit} />

            )
          })
        }
        {
          <Footer />
        }
      </div>
    );
  }
}

export default App;
