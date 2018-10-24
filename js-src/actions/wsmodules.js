export const gmodule = {
    ws: null,
    pid: 1
};

export const ConnectionStatus = {
    NONE         : "WEBSOCKET:STARUS:NONE",
    CONNECT      : "WEBSOCKET:STARUS:CONNECT",
};

export const Types = {
    SEND         : "WEBSOCKET:ACTION:SEND",
    INIT         : "WEBSOCKET:ACTION:INIT",
    LOG_MESSAGE  : "WEBSOCKET:ACTION:MESSAGE",
    CLOSE        : "WEBSOCKET:ACTION:CLOSE",
    OPEN         : "WEBSOCKET:ACTION:OPEN",
    ERROR        : "WEBSOCKET:ACTION:ERROR"
};

export const AppInitialState = {
    wsstatus: ConnectionStatus.NONE,
    logs: [],
    callback:{}
}

