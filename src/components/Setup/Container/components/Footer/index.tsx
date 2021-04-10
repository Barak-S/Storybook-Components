import { View } from 'components/Common';
import React, { FC } from 'react';
import { buildStyles, ms, StyleProps } from 'styles';
import { lastIndex } from 'utils';

import SetupContainerFooterBtn, { SetupContainerFooterBtnItem } from './components/Btn';

interface Props extends StyleProps {
  className?: string;
  leftBtns?: SetupContainerFooterBtnItem[];
  rightBtns?: SetupContainerFooterBtnItem[];
  onBtnClick?: (btn: SetupContainerFooterBtnItem) => void;
}

const defLeftBtns: SetupContainerFooterBtnItem[] = [
  {
    id: 'back',
    type: 'contained',
    title: 'back',
    startIcon: 'chevron-circle-left',
  },
];

const defRightBtns: SetupContainerFooterBtnItem[] = [
  {
    id: 'save',
    type: 'text',
    title: 'Save & Continue Later',
  },
  {
    id: 'continue',
    type: 'contained',
    title: 'continue',
    endIcon: 'chevron-circle-right',
  },
];

export const SetupContainerFooter: FC<Props> = ({
  className,
  style,
  leftBtns = defLeftBtns,
  rightBtns = defRightBtns,
  onBtnClick,
}) => {
  const styles = useStyles();

  return (
    <View className={className} style={[styles.container, style]}>
      <View style={styles.leftBlock}>
        {leftBtns.map((itm, index) => (
          <SetupContainerFooterBtn
            key={itm.id}
            style={ms(styles.leftItm, index === lastIndex(leftBtns) && { marginBottom: 0 })}
            item={itm}
            onClick={onBtnClick}
          />
        ))}
      </View>
      <View style={styles.rightBlock}>
        {rightBtns.map((itm, index) => (
          <SetupContainerFooterBtn
            key={itm.id}
            style={ms(styles.rightItm, index === lastIndex(rightBtns) && { marginBottom: 0 })}
            item={itm}
            onClick={onBtnClick}
          />
        ))}
      </View>
    </View>
  );
};

const useStyles = buildStyles(({ isMobile, whenMobile, whenNotMobile }) => ({
  container: {
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: whenNotMobile('space-between'),
  },
  leftBlock: {
    flexDirection: isMobile ? 'column' : 'row',
    marginBottom: whenMobile(10),
  },
  leftItm: {
    marginRight: whenNotMobile(10) || 0,
    marginBottom: whenMobile(10),
  },
  rightBlock: {
    flexDirection: isMobile ? 'column' : 'row',
  },
  rightItm: {
    marginLeft: whenNotMobile(10) || 0,
    marginBottom: whenMobile(10),
  },
}));

export type SetupContainerFooterProps = Props;
export { SetupContainerFooterBtnItem } from './components/Btn';
export default SetupContainerFooter;
