import { ClickAwayListener, Grid, Tooltip, TooltipProps } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useEffect, useState } from 'react';
import { colors, mx, StyleProps, Styles, useHover } from 'styles';

interface Props extends StyleProps {
  title: TooltipProps['title'];
  placement?: TooltipProps['placement'];
}

export const FormTooltip: FC<Props> = ({ style, placement = 'top-start', title }) => {
  const { hover, hoverProps } = useHover();
  const styles = getStyles(hover);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!hover && visible) {
      setVisible(false);
    }
  }, [hover]);

  const handleClick = () => {
    setVisible(true);
  };

  const handleClickAway = () => {
    if (visible) setVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Tooltip style={style} arrow placement={placement} title={title} open={visible || hover}>
        <Grid style={styles.iconHolder} {...hoverProps} onClick={handleClick}>
          <LineAwesomeIcon type="question-circle" style={{ color: 'inherit' }} />
        </Grid>
      </Tooltip>
    </ClickAwayListener>
  );
};

const getStyles = (hover: boolean): Styles => ({
  iconHolder: {
    color: hover ? colors.yellow : colors.greyish,
    ...mx.centeredContent,
    ...mx.square(24),
    marginLeft: 6,
  },
});

export type FormTooltipProps = Props;
export default FormTooltip;
