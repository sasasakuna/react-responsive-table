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
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10101010101010101'}],
     style: {transform: 'translate3d(0px, 0px, 0px)'},
     theadWidth: {width: '1424px'}
    }
    this._handleScroll = this._handleScroll.bind(this)
    this._handleResize = this._handleResize.bind(this)
  }

  _handleResize () {
    console.log('resize...')
    // let theadWidth = ReactDOM.findDOMNode(this.refs.scrollableBody).width
    // let tmp = {
    //   width: theadWidth + 'px'
    // }
    // this.setState({theadWidth: tmp});
  }

  ComponentDidMount () {
    console.log('ComponentDidMount...')
    let theadWidth = ReactDOM.findDOMNode(this.refs.scrollableBody).width
    console.log('theadWidth: ', theadWidth)
    this.setState({theadWidth: theadWidth})
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount () {
      window.removeEventListener('resize', this._handleResize)
  }

  _handleScroll(event) {
    let left = ReactDOM.findDOMNode(this.refs.scrollableBody).scrollLeft
    let tmp = {
      transform: 'translate3d' + '('+ -left + 'px' + ',' + '0px' + ',' + '0px' + ')'
    }
    console.log('tmp: ', tmp)
    this.setState({
      style: tmp
    })
  }

  render() {
    var state = this.state
    var rows = this.state.dataSet.map(function(data, index){
      return (
        <div key={index} className="tr">
          <div className="td">{data.a}</div>
          <div className="td">{data.b}</div>
          <div className="td">{data.c}</div>
          <div className="td">{data.d}</div>
          <div className="td">{data.e}</div>
          <div className="td">{data.f}</div>
          <div className="td">{data.g}</div>
          <div className="td">{data.h}</div>
          <div className="td">{data.i}</div>
          <div className="td">{data.j}</div>
        </div>
      )
    })
    return (
      <div className="table" style={{'maxWidth': '1424px'}}>
        <div className="thead" style={state.theadWidth}>
          <div className="tr" style={state.style}>
            <div className="td">1</div>
            <div className="td">2</div>
            <div className="td">3</div>
            <div className="td">4</div>
            <div className="td">5</div>
            <div className="td">6</div>
            <div className="td">7</div>
            <div className="td">8</div>
            <div className="td">9</div>
            <div className="td">10</div>
          </div>
        </div>
        <div className="tbody" ref="scrollableBody" onScroll={this._handleScroll}>
          {rows}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ReactResponsiveTable />, document.getElementById('container'))
