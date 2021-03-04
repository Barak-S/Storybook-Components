import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Image } from 'components/Common';
import React, { FC, MouseEvent } from 'react';
import { colors, Style, StyleProps } from 'styles';

import addIcon from './assets/addIcon.svg';
import contactIcon from './assets/contactIcon.svg';
import faqIcon from './assets/faqIcon.svg';
import profileIcon from './assets/profileIcon.svg';
import supportIcon from './assets/supportIcon.svg';
import DashboardButton from './components/Button';

interface Props extends StyleProps {
  disabledBtns?: BtnType[];
  btnsBackgroundColor?: string;
  hiddenBtns?: BtnType[];
  onBtnClick?: (type: BtnType) => void;
}

type BtnType = 'add' | 'profile' | 'faq' | 'support' | 'contact';

export const DashboardUserNav: FC<Props> = ({
  disabledBtns,
  hiddenBtns,
  btnsBackgroundColor = colors.paleGrey,
  onBtnClick,
}) => {
  const isDisabled = (btn: BtnType) => disabledBtns && disabledBtns.includes(btn);
  const isHidden = (btn: BtnType) => hiddenBtns && hiddenBtns.includes(btn);

  const handleClick = (btn: BtnType) => (e: MouseEvent) => {
    e.preventDefault();
    if (onBtnClick) {
      onBtnClick(btn);
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  const btnStye: Style = { backgroundColor: btnsBackgroundColor };

  return (
    <Grid container className={classes.container}>
      {!isHidden('add') && (
        <DashboardButton
          style={btnStye}
          icon={<Image source={addIcon} />}
          onClick={handleClick('add')}
          disabled={isDisabled('add')}
        >
          {'Add Event'}
        </DashboardButton>
      )}
      {!isHidden('profile') && (
        <DashboardButton
          style={btnStye}
          icon={<Image source={profileIcon} />}
          onClick={handleClick('profile')}
          disabled={isDisabled('profile')}
        >
          {'Update Profile'}
        </DashboardButton>
      )}
      {!isHidden('faq') && (
        <DashboardButton
          style={btnStye}
          icon={<Image source={faqIcon} />}
          onClick={handleClick('faq')}
          disabled={isDisabled('faq')}
        >
          {'FAQ'}
        </DashboardButton>
      )}
      {!isHidden('support') && (
        <DashboardButton
          style={btnStye}
          icon={<Image source={supportIcon} />}
          onClick={handleClick('support')}
          disabled={isDisabled('support')}
        >
          {'Support'}
        </DashboardButton>
      )}
      {!isHidden('contact') && (
        <DashboardButton
          style={btnStye}
          icon={<Image source={contactIcon} />}
          onClick={handleClick('contact')}
          disabled={isDisabled('contact')}
        >
          {'ContactUs'}
        </DashboardButton>
      )}
    </Grid>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        position: 'initial',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    },
  })();

export type DashboardUserNavBtnType = BtnType;
export type DashboardUserNavProps = Props;
export default DashboardUserNav;
