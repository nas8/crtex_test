import React, { useEffect } from 'react';
import { Direction, setGetFilterState, setSelectedName } from '../../store/panelSlice';
import { useDispatch } from 'react-redux';
import { Filters, SelectorBlockTypes } from '../../types/types';

import './Selector.scss';

interface SelectorProps {
  options: Direction[];
  selectedFilter: string;
  type: string;
}

export const Selector: React.FC<SelectorProps> = ({ options, selectedFilter, type }) => {
  const dispatch = useDispatch();
  const [firstOption] = options;

  useEffect(() => {
    if (type === SelectorBlockTypes.send) {
      dispatch(setSelectedName(firstOption.name));
    }
  }, [selectedFilter, dispatch, firstOption.name, type]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === SelectorBlockTypes.send) {
      dispatch(setSelectedName(e.target.value));
      dispatch(setGetFilterState(Filters.all));
    }
  };

  return (
    <select onChange={handleChange} className="selector">
      {options.map((option) => {
        return (
          <option key={option.code} value={option.name}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};
