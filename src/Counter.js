import React, {Component} from 'react';

import { connect } from 'react-redux';


class Counter extends Component {

    

    increment = () => {
        // this.setState({
        //   count: this.state.count + 1
        // });
    
        this.props.dispatch({ type: 'INCREMENT' });
      }


      decrement = () => {
        // this.setState({
        //   count: this.state.count - 1
        // });
    
        this.props.dispatch({ type: 'DECREMENT' });
      }


    render() {

        console.log(this.props);
       
      
        return (
          <div>
            <h2>Counter</h2>
            <div>
              <button onClick={this.decrement}>-</button>
              <span>{this.props.count}</span>
              <button onClick={this.increment}>+</button>
            </div>
          </div>
        )
      }

}

function mapStateToProps(state) {
    console.log(state);

    return {
        count: state.counter
    }
 
}

export default connect(mapStateToProps)(Counter);