import React from 'react';
import { Selector } from '../Selector/Selector';
import { Direction } from '../../store/panelSlice';
import { FiltersList } from '../FiltersList/FiltersList';

import './SelectionBlock.scss';

interface SelectionBlockProps {
  title: string;
  filters: string[];
  options: Direction[];
  selectedFilter: string;
  type: string;
}

export const SelectionBlock: React.FC<SelectionBlockProps> = ({
  title,
  filters,
  options,
  selectedFilter,
  type,
}) => {
  return (
    <div className="filter">
      <h4 className="title">{title}</h4>
      <FiltersList filters={filters} selectedFilter={selectedFilter} type={type} />
      <Selector options={options} selectedFilter={selectedFilter} type={type} />
    </div>
  );
};
