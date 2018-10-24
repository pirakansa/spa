import * as Act from '../actions/condition'

const Condition = (state = Act.AppInitialState, action) => {
    switch (action.type) {
        case Act.Types.INC:
            return Object.assign({}, state, {
                count : state.count + 1
            });
        case Act.Types.DEC:
            return Object.assign({}, state, {
                count : state.count - 1
            });
        default:
            return state;
      }
}

export default Condition;
