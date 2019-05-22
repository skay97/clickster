import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from "./Components/cards";
import Navbar from './Components/navbar';




class App extends React.Component {

  state = {
    pictures: [
      {
        link: "https://picsum.photos/id/237/200/300",
        id: 1,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/238/200/300",
        id: 2,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/239/200/300",
        id: 3,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/240/200/300",
        id: 4,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/241/200/300",
        id: 5,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/242/200/300",
        id: 6,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/243/200/300",
        id: 7,
        isClicked: false
      },
      {
        link: "https://picsum.photos/id/244/200/300",
        id: 8,
        isClicked: false
      }],
    score: 0,
    highScore: 0
  }

  onClick = (id, isClicked) => {

    console.log("test")
    console.log(id)
    console.log(isClicked)

    if (!isClicked) {

      console.log("has not ben clicked")
      let updatedPictures = this.state.pictures.map(picture => {
        if (picture.id === id) {
          picture.isClicked = true
        }
        return picture
      })
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          highScore: this.state.score + 1
        })
      }
      this.setState({
        pictures: updatedPictures,
        score: this.state.score + 1
      })
    } else {
      console.log("has been clicked")
      const resetArr = this.state.pictures.map((picture) => {
        // let copy = { ...picture }
        // copy.isClicked = false;
        picture.isClicked = false;
        return picture;
      })
      // console.log(resetArr)
      this.setState({
        pictures: resetArr,
        score: 0
      })
    }

    let pictures = [...this.state.pictures].sort(() => Math.random() - 0.5);

    this.setState({ pictures })


  }


  render() {
    return (
      <div>

        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Cards
          pictures={this.state.pictures}
          click={this.onClick}
        />

      </div>
    )
  }
}

export default App;
