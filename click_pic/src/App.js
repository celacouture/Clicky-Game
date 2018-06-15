import React, {Component} from 'react';
import FlagCard from './components/FlagCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import NavBar from './components/NavBar'
import flags from './flags.json';
import './index.css'


class App extends React.Component{

  state={
    flags:flags,
    score:0,
    topScore:0
  };

  // // handleClick=id=>{
  // //
  // //   this.setState({
  // //     currentScore : this.state.currentScore + 1
  // //   })
  //
  //
  // }

  sortFlags = (id, clicked) => {

    const imgOrder = this.state.flags;

    if (clicked) {
      window.confirm('You lost. Try again and pay more attention');
      imgOrder.forEach((img, index) => {
      imgOrder[index].clicked = false;

      });

      return this.setState({
        flags: imgOrder.sort(() => Math.random() - 0.5),
        topScore: this.state.score,
        score: 0

      })
    }

    else {
      imgOrder.forEach((img, index) => {
        if(id === img.id) {
          imgOrder[index].clicked = true;
        }
      });
      return this.setState({flags: imgOrder.sort(() => Math.random() - 0.5), score: this.state.score + 1})
  }
};



  render(){
    return(

      <Wrapper>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}/>
        <Title>Did you know that there are over 29 countries with Red, White, and Blue flags? Below are 12 of them.
        Use your memory to click on each flag only once. Good Luck!</Title>
          {this.state.flags.map(flag=>
            <FlagCard
              key={flag.id}
              id={flag.id}
              link={flag.link}
              clicked={flag.clicked}
              sortFlags={this.sortFlags}
              />
                    )}
      </Wrapper>
    );
  }
}



export default App;
