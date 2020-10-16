import React from 'react';

import { connect } from 'react-redux';

const Heading = props => {
    return <h1>Wartość countera to {props.count}</h1>
}   

function mapStateToProps(state) {
    

    return {
        count: state.counter
    }
 
}

export default connect(mapStateToProps)(Heading);