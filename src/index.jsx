import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'

class ReactResponsiveTable extends React.Component {
  render() {
    var self = this
    const childrenWithProps = React.Children.map(self.props.children,
      (child) => React.cloneElement(child, {
        width: self.props.width
      })
    )
    return (
      <div className="table" style={{maxWidth: this.props.width}}>
        {childrenWithProps}
      </div>
    )
  }
}

class Thead extends React.Component {
  render() {
    return (
      <div className="thead" style={{width: this.props.width}}>
        <div className="tr">
          {this.props.children}
        </div>
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
    var content = this.props.children || this.props.value || (this.props.data ? this.props.data[this.props.dataKey] : '')
    console.log('desktop');
    return (
      <div className="td" style={{width: this.props.width}} dataKey={this.props.dataKey}>
        {content}
      </div>
    )
  }
}

class Cell extends React.Component {
  render() {
    var content = this.props.children || this.props.value || (this.props.data ? this.props.data[this.props.dataKey] : '')
    console.log('mobile');
    return (
      <div style={{width: this.props.width}} dataKey={this.props.dataKey}>
        <div>{this.props.dataKey}</div>
        <div>{content}</div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSet: [{a: '11', b: '12', c: '13', d: '14', e: '15', f: '16', g: '17', h: '18', i: '19', j: '110'},
             {a: '21', b: '22', c: '23', d: '24', e: '25', f: '26', g: '27', h: '28', i: '29', j: '210'},
             {a: '31', b: '2', c: '33333333333', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4444444444', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '55555555555', f: '6', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '66666666666', g: '7', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7777777777', h: '8', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8888888888', i: '9', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '999999999999999999999999999', j: '10'},
             {a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10101010101010101'}],
     style: {transform: 'translate3d(0px, 0px, 0px)'},
     theadWidth: {width: this.props.width},
     flag: true
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
    if(document.documentElement.clientWidth < 1024 && this.state.flag === true) {
      this.setState({flag: false})
    }
    else if(document.documentElement.clientWidth >= 1024 && this.state.flag === false){
      this.setState({flag: true})
    }
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
      if(state.flag === true) {
        return (
              <ReactResponsiveTable width={1350}>
                <Thead>
                  <Column width={100}>
                    a
                  </Column>
                  <Column width={100} value="b">
                  </Column>
                  <Column width={100} value="c">
                  </Column>
                  <Column width={100} value="d">
                  </Column>
                  <Column width={100} value="e">
                  </Column>
                  <Column width={100} value="f">
                  </Column>
                  <Column width={100} value="g">
                  </Column>
                  <Column width={100} value="h">
                  </Column>
                  <Column width={100} value="i">
                  </Column>
                  <Column width={100} value="j">
                  </Column>
                </Thead>
                <Tbody dataSet={this.state.dataSet} className='desktop'>
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
              </ReactResponsiveTable>
        )
      }
      else {
        return (
          <Tbody dataSet={this.state.dataSet} className='mobile'>
            <Cell width={100} dataKey="a">
            </Cell>
            <Cell width={100} dataKey="b">
            </Cell>
            <Cell width={100} dataKey="c">
            </Cell>
            <Cell width={100} dataKey="d">
            </Cell>
            <Cell width={100} dataKey="e">
            </Cell>
            <Cell width={100} dataKey="f">
            </Cell>
            <Cell width={100} dataKey="g">
            </Cell>
            <Cell width={100} dataKey="h">
            </Cell>
            <Cell width={100} dataKey="i">
            </Cell>
            <Cell width={100} dataKey="j">
            </Cell>
          </Tbody>
        )
      }
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))
