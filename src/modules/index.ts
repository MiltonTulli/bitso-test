import { combineReducers } from 'redux';
import world, { IWorldReducerState, worldInitialState } from './world/reducer';

export interface IState {
  worldReducer: IWorldReducerState;
}

export const initialState: IState = {
  worldReducer: worldInitialState
};

export default combineReducers({
  worldReducer: world
});
