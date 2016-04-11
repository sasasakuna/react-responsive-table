import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'

class ReactResponsiveTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSet: [{a: '1111111111', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2222222222', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '33333333333', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4444444444', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '55555555555', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '66666666666', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7777777777', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8888888888', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9999999999', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10101010101010101'}]
    }
  }

  render() {
    var rows = this.state.dataSet.map(function(data, index){
      return (
        <tr key={index}>
          <td>{data.a}</td>
          <td>{data.b}</td>
          <td>{data.c}</td>
          <td>{data.d}</td>
          <td>{data.e}</td>
          <td>{data.f}</td>
          <td>{data.g}</td>
          <td>{data.h}</td>
          <td>{data.i}</td>
          <td>{data.j}</td>
        </tr>
      )
    })
    return (
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(<ReactResponsiveTable />, document.getElementById('container'))
