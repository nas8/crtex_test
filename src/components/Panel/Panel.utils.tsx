import { BANKS, CASH, CRYPTOS } from '../../constants/constants';
import { Direction, Filter } from '../../store/panelSlice';
import { Filters } from '../../types/types';

export const getFilteredOptions = (options: Direction[], selectedOption: string) => {
  const filteredValues = options.filter((option) => {
    if (selectedOption === Filters.all) {
      return option;
    }

    if (selectedOption === Filters.crypto) {
      return CRYPTOS.includes(option.code);
    }

    if (selectedOption === Filters.banks) {
      return BANKS.includes(option.code);
    }

    if (selectedOption === Filters.cash) {
      return CASH.includes(option.code);
    }

    return false;
  });

  return filteredValues.length > 0 ? filteredValues : [{ code: 'empty', name: 'empty' }];
};

export const getToByName = (filters: Filter[], name: string) => {
  const filter = filters.find(({ from, to }) => from.name === name);

  return filter ? filter.to : [];
};
