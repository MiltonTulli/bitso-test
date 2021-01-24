import { ActionTypes } from './types';

export interface IWorldReducerState {}

export const worldInitialState: IWorldReducerState = {};

export interface IWorldsPayload {}

export default (state = worldInitialState, { type, payload }: { type: ActionTypes; payload }) => {
  switch (type) {
    default:
      return state;
  }
};
