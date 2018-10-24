import React from 'react';

class Logs extends React.Component{
    render() {
        let logsNodes = this.props.logs.map( (log,index) => {
            return (
                <div key={index}>{log.pid}:{log.msg}</div>
            );
        });
        return (
          <div className="logbox">
                {logsNodes}
          </div>
        );
    }
}

export default Logs;
