import React from 'react';
import { connect } from 'react-redux'
import * as ConditionAct from '../actions/condition'
import * as WsAct from '../actions/ws'
import StatusView from './statusview'
import ConditionCount from './condition'
import Logs from './logs'

class Viewer extends React.Component{
    constructor(props) {
        super(props);
        this.props.onInitws();
    }
    onchange(ev) {
        this.props.onSendws(ev.target.value);
    }
    render() {
        return (
            <div>
                <StatusView status={this.props.ws.wsstatus} />
                <ConditionCount count={this.props.condition.count} />
                <button onClick={this.props.onDecrement}>dec</button>
                <button onClick={this.props.onIncrement}>inc</button>
                <input type="text" onChange={this.onchange.bind(this)} />
                <Logs logs={this.props.ws.logs} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDecrement  : () => dispatch(ConditionAct.DECREMENT_COUNTER),
        onIncrement  : () => dispatch(ConditionAct.INCREMENT_COUNTER),
        onSendws     : (msg) => dispatch(WsAct.WS_SEND(msg)),
        onInitws     : () => dispatch(WsAct.WS_INIT(dispatch)),
    };
}

const View = connect(
    state => state,
    mapDispatchToProps
)(Viewer);

export default View;
