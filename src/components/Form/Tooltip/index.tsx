import { Grid, Tooltip, TooltipProps } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  title: TooltipProps['title'];
}

export const FormTooltip: FC<Props> = ({ style, title }) => {
  const [hover, setHover] = useState<boolean>(false);
  const styles = getStyles(hover);

  return (
    <Tooltip style={style} arrow placement="top-start" title={title}>
      <Grid style={styles.iconHolder} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <LineAwesomeIcon type="question-circle" style={{ color: 'inherit' }} />
      </Grid>
    </Tooltip>
  );
};

const getStyles = (hover: boolean): Styles => ({
  iconHolder: {
    color: hover ? colors.warmPurple : colors.greyish,
    ...mx.centeredContent,
    ...mx.square(24),
    marginLeft: 6,
  },
});

export type FormTooltipProps = Props;
export default FormTooltip;
