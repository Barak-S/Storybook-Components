import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Image } from 'components/Common';
import React, { FC, MouseEvent } from 'react';
import { StyleProps } from 'styles';

import addIcon from './assets/addIcon.svg';
import contactIcon from './assets/contactIcon.svg';
import faqIcon from './assets/faqIcon.svg';
import profileIcon from './assets/profileIcon.svg';
import supportIcon from './assets/supportIcon.svg';
import DashboardButton from './components/Button';

interface Props extends StyleProps {
  disabledBtns?: ButtonType[];
  hiddenBtns?: ButtonType[];
  onBtnClick?: (type: ButtonType) => void;
}

type ButtonType = 'add' | 'profile' | 'faq' | 'support' | 'contact';

export const DashboardUserNav: FC<Props> = ({ disabledBtns, hiddenBtns, onBtnClick }) => {
  const isDisabled = (btn: ButtonType) => disabledBtns && disabledBtns.includes(btn);
  const isHidden = (btn: ButtonType) => hiddenBtns && hiddenBtns.includes(btn);

  const handleClick = (btn: ButtonType) => (e: MouseEvent) => {
    e.preventDefault();
    if (onBtnClick) {
      onBtnClick(btn);
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container className={classes.container}>
      {!isHidden('add') && (
        <DashboardButton icon={<Image source={addIcon} />} onClick={handleClick('add')} disabled={isDisabled('add')}>
          {'Add Event'}
        </DashboardButton>
      )}
      {!isHidden('profile') && (
        <DashboardButton
          icon={<Image source={profileIcon} />}
          onClick={handleClick('profile')}
          disabled={isDisabled('profile')}
        >
          {'Update Profile'}
        </DashboardButton>
      )}
      {!isHidden('faq') && (
        <DashboardButton icon={<Image source={faqIcon} />} onClick={handleClick('faq')} disabled={isDisabled('faq')}>
          {'FAQ'}
        </DashboardButton>
      )}
      {!isHidden('support') && (
        <DashboardButton
          icon={<Image source={supportIcon} />}
          onClick={handleClick('support')}
          disabled={isDisabled('support')}
        >
          {'Support'}
        </DashboardButton>
      )}
      {!isHidden('contact') && (
        <DashboardButton
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

export default DashboardUserNav;
