export const Types = {
    INIT   : "CONDITION:STARUS:INIT",
    INC    : "CONDITION:ACTION:INC",
    DEC    : "CONDITION:ACTION:DEC",
};


export const AppInitialState = {
    type : Types.INIT,
    count : 0,
}

export const INCREMENT_COUNTER = {
    type: Types.INC
}

export const DECREMENT_COUNTER = {
    type: Types.DEC
}

