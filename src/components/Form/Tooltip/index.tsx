import { Grid, Tooltip, TooltipProps } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mx, StyleProps, Styles, useHover } from 'styles';

interface Props extends StyleProps {
  title: TooltipProps['title'];
  placement?: TooltipProps['placement'];
}

export const FormTooltip: FC<Props> = ({ style, placement = 'top-start', title }) => {
  const { hover, hoverProps } = useHover();
  const styles = getStyles(hover);

  return (
    <Tooltip style={style} arrow placement={placement} title={title}>
      <Grid style={styles.iconHolder} {...hoverProps}>
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
