import { createSlice } from '@reduxjs/toolkit';
import { directions, filters } from '../mocks/mocks';
import { RootState } from './store';

export interface Direction {
  code: string;
  name: string;
}

export interface Filter {
  from: Direction;
  to: Direction[];
}

interface InitialState {
  directions: Direction[];
  filters: Filter[];
  sendFilterState: string;
  getFilterState: string;
  selectedName: string;
}

const initialState: InitialState = {
  directions: directions,
  filters: filters,
  sendFilterState: 'Все',
  getFilterState: 'Все',
  selectedName: '',
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setSendFilterState: (state, { payload }) => {
      state.sendFilterState = payload;
    },
    setGetFilterState: (state, { payload }) => {
      state.getFilterState = payload;
    },
    setSelectedName: (state, { payload }) => {
      state.selectedName = payload;
    },
  },
});

export const { setSendFilterState, setGetFilterState, setSelectedName } = panelSlice.actions;

export const selectAllDirections = (state: RootState) => state.panelSlice.directions;
export const selectAllFilters = (state: RootState) => state.panelSlice.filters;
export const selectSendFilterState = (state: RootState) => state.panelSlice.sendFilterState;
export const selectGetFilterState = (state: RootState) => state.panelSlice.getFilterState;
export const selectSelectedName = (state: RootState) => state.panelSlice.selectedName;

export default panelSlice.reducer;
