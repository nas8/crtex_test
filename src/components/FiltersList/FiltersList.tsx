import React from 'react';
import { useDispatch } from 'react-redux';
import { setGetFilterState, setSendFilterState } from '../../store/panelSlice';

import { Filters, SelectorBlockTypes } from '../../types/types';

import './FiltersList.scss';

interface FiltersListProps {
  filters: string[];
  selectedFilter: string;
  type: string;
}

export const FiltersList: React.FC<FiltersListProps> = ({ filters, selectedFilter, type }) => {
  const dispatch = useDispatch();

  const handleClick = (filter: string) => {
    if (type === SelectorBlockTypes.send) {
      dispatch(setSendFilterState(filter));
      dispatch(setGetFilterState(Filters.all));
    }

    if (type === SelectorBlockTypes.get) {
      dispatch(setGetFilterState(filter));
    }
  };

  return (
    <ul className="list">
      {filters.map((filter) => {
        return (
          <li
            onClick={() => handleClick(filter)}
            className={filter === selectedFilter ? 'active' : ''}
            key={filter}>
            {filter}
          </li>
        );
      })}
    </ul>
  );
};
