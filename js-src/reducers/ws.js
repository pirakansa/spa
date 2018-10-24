import {gmodule, Types, AppInitialState, ConnectionStatus} from '../actions/wsmodules'

const LOGSSIZE = 1024;

const Ws = (state = AppInitialState, action) => {
    switch (state.wsstatus) {
        case ConnectionStatus.CONNECT:{
            return ConnectWs(state, action);
        }
        default:{
            return UnconnectWs(state, action);
        }
    }
}

const ConnectWs = (state, action) => {
    switch (action.type) {
        case Types.SEND:{
            let ns = Object.assign({}, state);
            gmodule.ws.send(
                JSON.stringify({
                    pid: action.pid,
                    msg: action.msg
                })
            );
            return ns;
        }
        case Types.LOG_MESSAGE:{
            let ns = Object.assign({}, state);
            ns.logs.unshift({
                    pid: action.pid,
                    msg: action.msg
            });
            ns.logs.splice(LOGSSIZE);
            return ns;
        }
        case Types.ERROR:{
            return Object.assign({}, state, {wsstatus : ConnectionStatus.NONE});
        }
        case Types.CLOSE:{
            return Object.assign({}, state, {wsstatus : ConnectionStatus.NONE});
        }
        default:{
            return state;
        }
    }
}

const UnconnectWs = (state, action) => {
    switch (action.type) {
        case Types.INIT:{
            gmodule.ws = new WebSocket(action.url);
            gmodule.ws.onopen = action.onopen;
            gmodule.ws.onmessage = action.onmessage;
            gmodule.ws.onclose = action.onclose;
            gmodule.ws.onerror = action.onerror;
            return state;
        }
        case Types.OPEN:{
            return Object.assign({}, state, {wsstatus : ConnectionStatus.CONNECT});
        }
        case Types.ERROR:{
            return Object.assign({}, state, {wsstatus : ConnectionStatus.NONE});
        }
        default:{
            return state;
        }
    }
}
export default Ws;
