import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, Styles } from 'styles';

export const FormSelectIndicatorsContainer: FC = () => (
  <div style={styles.container}>
    <LineAwesomeIcon type="chevron-circle-down" color={colors.brownishGrey} />
  </div>
);

const styles: Styles = {
  container: {
    background: colors.veryLightPinkThree,
    borderRadius: '0 12px 12px 0',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
  },
};

export default FormSelectIndicatorsContainer;
