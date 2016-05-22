import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'

class Table extends React.Component {
  render() {
    return (
      <div className="table" style={{maxWidth: this.props.width}}>
        {this.props.children}
      </div>
    )
  }
}

class Thead extends React.Component {
  render() {
    return (
      <div className="thead">
        {this.props.children}
      </div>
    )
  }
}

class Tbody extends React.Component {
  render() {
    var self = this
    var rows = this.props.dataSet.map(function(data, index){
      const childrenWithProps = React.Children.map(self.props.children,
        (child) => React.cloneElement(child, {
          data: data
        })
      )
      return (
        <div key={index} className="tr" data={data}>
          {childrenWithProps}
        </div>
      )
    })
    return (
      <div className="tbody">
        {rows}
      </div>
    )
  }
}


class Column extends React.Component {
  render() {
    return (
      <div className="td" style={{width: this.props.width}} dataKey={this.props.dataKey}>
        {this.props.data[this.props.dataKey]}
      </div>
    )
  }
}

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
     theadWidth: {width: this.props.width}
    }
    this._handleScroll = this._handleScroll.bind(this)
    this._handleResize = this._handleResize.bind(this)
  }

  _handleResize () {
    // let theadWidth = ReactDOM.findDOMNode(this.refs.scrollableBody).offsetWidth
    // let tmp = {
    //   width: theadWidth + 'px'
    // }
    // this.setState({theadWidth: tmp})
  }

  componentDidMount () {
    this._handleResize()
    window.addEventListener('resize', this._handleResize)
  }

  componentWillUnmount () {
      window.removeEventListener('resize', this._handleResize)
  }

  _handleScroll(event) {
    let left = ReactDOM.findDOMNode(this.refs.scrollableBody).scrollLeft
    let tmp = {
      transform: 'translate3d' + '('+ -left + 'px' + ',' + '0px' + ',' + '0px' + ')'
    }
    this.setState({
      style: tmp
    })
  }

  render() {
    var state = this.state
    return (
        <Table width={this.props.width}>
          <Thead>
          </Thead>
          <Tbody dataSet={this.state.dataSet}>
            <Column width={100} dataKey="a">
            </Column>
            <Column width={100} dataKey="b">
            </Column>
            <Column width={100} dataKey="c">
            </Column>
            <Column width={100} dataKey="d">
            </Column>
            <Column width={100} dataKey="e">
            </Column>
            <Column width={100} dataKey="f">
            </Column>
            <Column width={100} dataKey="g">
            </Column>
            <Column width={100} dataKey="h">
            </Column>
            <Column width={100} dataKey="i">
            </Column>
            <Column width={100} dataKey="j">
            </Column>
          </Tbody>
        </Table>
    )
  }
}

ReactDOM.render(<ReactResponsiveTable width={1350}/>, document.getElementById('container'))
