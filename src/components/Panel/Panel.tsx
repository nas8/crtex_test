import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllDirections,
  selectAllFilters,
  selectGetFilterState,
  selectSelectedName,
  selectSendFilterState,
} from '../../store/panelSlice';
import { FILTERS } from '../../constants/constants';
import { SelectionBlock } from '../SelectionBlock/SelectionBlock';
import { getFilteredOptions, getToByName } from './Panel.utils';

import './Panel.scss';

export const Panel: React.FC = () => {
  const allDirections = useSelector(selectAllDirections);
  const allFilters = useSelector(selectAllFilters);

  const sendFilterState = useSelector(selectSendFilterState);
  const getFilterState = useSelector(selectGetFilterState);
  const selectedValue = useSelector(selectSelectedName);

  const getOptions = useMemo(
    () => getToByName(allFilters, selectedValue),
    [allFilters, selectedValue],
  );
  const filteredSendOptions = useMemo(
    () => getFilteredOptions(allDirections, sendFilterState),
    [allDirections, sendFilterState],
  );
  const filteredGetOptions = useMemo(
    () => getFilteredOptions(getOptions, getFilterState),
    [getOptions, getFilterState],
  );

  return (
    <div className="panel">
      <SelectionBlock
        type="send"
        title="Отдаёте"
        filters={FILTERS}
        options={filteredSendOptions}
        selectedFilter={sendFilterState}
      />
      <SelectionBlock
        type="get"
        title="Получаете"
        filters={FILTERS}
        options={filteredGetOptions}
        selectedFilter={getFilterState}
      />
    </div>
  );
};
