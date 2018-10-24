import {Types, gmodule} from '../actions/wsmodules'

export const WS_INIT = (
    dispatch,
    url = "ws://"+location.host+"/ws") => ({
    type      : Types.INIT,
    onopen    : () => dispatch(WS_OPEN),
    onmessage : (ev) => dispatch(WS_MESSAGE(ev)),
    onclose   : () => dispatch(WS_CLOSE),
    onerror   : () => dispatch(WS_ERROR),
    url : url
});

export const WS_SEND = (msg) => {
    gmodule.pid++;
    return ({
        type: Types.SEND,
        msg : msg,
        pid : gmodule.pid
    });
};

export const WS_MESSAGE = (ev) => {
    let jsondata = JSON.parse(ev.data);
    return ({
        type : Types.LOG_MESSAGE,
        msg  : jsondata.msg,
        pid  : jsondata.pid
    });
};

export const WS_OPEN  = {type: Types.OPEN}
export const WS_CLOSE = {type: Types.CLOSE}
export const WS_ERROR = {type: Types.ERROR}
