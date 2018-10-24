import React from 'react';

class StatusView extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status == this.props.status)
            return false;
        else
            return true;
    }
    render() {
         return (
          <div>
                {this.props.status}
          </div>
        );
    }
}

export default StatusView;