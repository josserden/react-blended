import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ icon, title, total }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size: 30 }}>{icon}</IconContext.Provider>

      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticBox.propTypes = {};
