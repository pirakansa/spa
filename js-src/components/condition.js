import React from 'react';

class ConditionCount extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count == this.props.count)
            return false;
        else
            return true;
    }
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

export default ConditionCount;