import React, { Component } from 'react';
import Header from '../Header';

import Kobe from './Kobe';
const kobeStats = require('./kobeStats.json')

const getPoints = () => {
  var points = []
  kobeStats.forEach(point => {
    points.push(point.PTS)
  })
  console.log("points:", points)
  return points
}

const getFieldGoalPercentage = () => {
  var fieldGoalPercentage = []
  kobeStats.forEach(fgp => {
    fieldGoalPercentage.push(fgp.FGP * 100)
  })
  console.log("fg%: ", fieldGoalPercentage)
  return fieldGoalPercentage
}

const getAssists = () => {
  var assists = []
  kobeStats.forEach(assist => {
    assists.push(assist.AST)
  })
  console.log("assists: ", assists)
  return assists;
}

const getSteals = () => {
  var steals = []
  kobeStats.forEach(steal => {
    steals.push(steal.STL)
  })
  console.log("steals: ", steals)
  return steals;
}

const getBlocks = () => {
  var blocks = []
  kobeStats.forEach(block => {
    blocks.push(block.BLK)
  })
  console.log("blocks: ", blocks)
  return blocks;
}

const getRebounds = () => {
  var rebounds = []
  kobeStats.forEach(rebound => {
    rebounds.push(rebound.TRB)
  })
  console.log("rebounds: ", rebounds)
  return rebounds;
}

const getYear = () => {
  var years = []
  kobeStats.forEach(year => {
    years.push(year.Season)
  });
  console.log("years: ", years)
  return years
}  
class KobeChart extends Component {
  state = {
    year: getYear(),
    points: [
      {
        color: "light-blue",
        name: "average points",
        values: getPoints(),
        height: 240
      }
    ],
    fieldGoalPercentage: [
      {
        color: "dark-blue",
        name: "fg %",
        values: getFieldGoalPercentage(),
        height: 240
      }
    ],
    assists: [
      {
        color: "dark-blue",
        name: "assists",
        values: getAssists(),
        height: 240
      }
    ],
    steals: [
      {
        color: "dark-blue",
        name: "steals",
        values: getSteals(),
        height: 240
      }
    ],
    blocks: [
      {
        color: "dark-blue",
        name: "blocks",
        values: getBlocks(),
        height: 240
      }
    ],
    rebounds: [
      {
        color: "dark-blue",
        name: "rebounds",
        values: getRebounds(),
        height: 240
      }
    ]
  };

  componentWillMount() {
    var pointValue = {...this.state.points}
    var fgp = {...this.state.fieldGoalPercentage}
    this.setState({ 
      pointValue: getPoints(),
      fgp: getFieldGoalPercentage()
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Kobe
            title="Average Points Per Year"
            type="line"
            data={{
              labels: this.state.year,
              datasets: this.state.points
            }}
            onSelect={a => console.log(a.index)}
          />
        </div>
        <div>
          <Kobe
            title="Assists"
            type="bar"
            data={{
              labels: this.state.year,
              datasets: this.state.assists
            }}
            onSelect={a => console.log(a.index)}
          />
        </div>
        <div>
          <Kobe
            title="Steals"
            type="bar"
            data={{
              labels: this.state.year,
              datasets: this.state.steals
            }}
            onSelect={a => console.log(a.index)}
          />
        </div>
        <div>
          <Kobe
            title="Blocks"
            type="bar"
            data={{
              labels: this.state.year,
              datasets: this.state.blocks
            }}
            onSelect={a => console.log(a.index)}
          />
        </div>
        <div>
          <Kobe
            title="Rebounds"
            type="bar"
            data={{
              labels: this.state.year,
              datasets: this.state.rebounds
            }}
            onSelect={a => console.log(a.index)}
          />
        </div>
        <div>
          <Kobe
            title="Field Goal Percentage"
            type="line"
            data={{
              labels: this.state.year,
              datasets: this.state.fieldGoalPercentage
            }}
            onSelect={a => console.log(a.index)}
          />
        </div>
      </div>
    );
  }
}

export default KobeChart;
