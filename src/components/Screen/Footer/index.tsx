import { View } from 'components/Common';
import { makeStyles, Grid, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps, ms, Styles } from 'styles';
import { AuthCopyrights } from 'components/Auth';
import { routes } from 'screens/consts';
import { NavLink } from 'react-router-dom';
import { LineAwesomeIcon } from 'components/Icons';

interface Props extends StyleProps {
  theme?: SceenFooterTheme;
}

type SceenFooterTheme = 'light' | 'dark';

export const ScreenFooter: FC<Props> = ({ style, theme: controlTheme = 'light' }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const color = controlTheme === 'dark' ? colors.white : colors.darkIndigo;
  const styles = getStyles(controlTheme);

  const navLinks = [
    { label: 'FAQ', path: routes.faq },
    { label: 'Terms of Service', path: routes.terms },
    { label: 'Privacy Policy', path: routes.policy },
  ];

  return (
    <View style={ms(styles.container, style)}>
      <Grid container className={classes.copyright}>
        <Grid item sm={12} md={4} className={classes.copyrightWrap}>
          <AuthCopyrights style={{ color }} className={classes.copy} />
        </Grid>
        <Grid item sm={12} md={4} className={classes.socialWrap}>
          <ul className={classes.socialSection}>
            <li>
              <LineAwesomeIcon type="twitter" className={classes.socialBtn} color={color} size={35} />
            </li>
            <li>
              <LineAwesomeIcon type="facebook-f" className={classes.socialBtn} color={color} size={30} />
            </li>
            <li>
              <LineAwesomeIcon type="youtube" className={classes.socialBtn} color={color} size={35} />
            </li>
            <li>
              <LineAwesomeIcon type="instagram" className={classes.socialBtn} color={color} size={35} />
            </li>
          </ul>
        </Grid>
        <Grid item sm={12} md={4} className={classes.linktoWrap}>
          <ul className={classes.linkSection}>
            {navLinks.map(link => {
              return (
                <NavLink
                  key={link.label}
                  style={{ color: color }}
                  className={classes.textLink}
                  activeStyle={{ color: colors.windowsBlue }}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </View>
  );
};

const getStyles = (theme: SceenFooterTheme): Styles => ({
  container: {
    width: '100%',
    color: theme === 'dark' ? colors.white : colors.darkIndigo,
    backgroundColor: theme === 'dark' ? colors.darkIndigo : colors.white,
    borderTop: theme === 'dark' ? `2px solid ${colors.white}` : `2px solid ${colors.greyish}`,
  },
});

const useStyles = (theme: Theme) =>
  makeStyles({
    copyright: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      padding: '20px 20px',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& span': {
        fontSize: 16,
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        paddingRight: 30,
        paddingTop: 29,
        paddingLeft: 30,
        paddingBottom: 41,
      },
    },
    linkSection: {
      listStyle: 'none',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      paddingRight: 113,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        lineHeight: 3,
        marginBottom: 33,
      },
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-around',
      },
      [theme.breakpoints.down('lg')]: {
        paddingRight: 0,
      },
    },
    socialSection: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        marginBottom: 25,
      },
    },
    copy: {
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        paddingTop: 12,
      },
    },
    socialBtn: {
      margin: '0 10px',
    },
    copyrightWrap: {
      width: '100%',
      order: 1,
      [theme.breakpoints.down('sm')]: {
        order: 3,
        paddingLeft: 0,
        textAlign: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 86,
      },
    },
    socialWrap: {
      order: 2,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        order: 1,
      },
    },
    linktoWrap: {
      order: 3,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        order: 2,
      },
    },
    textLink: {
      textDecoration: 'none',
      margin: '0 10px',
      fontSize: 18,
      [theme.breakpoints.down('lg')]: {
        margin: '0px 0px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 16,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
  })();

export type ScreenFooterProps = Props;
export default ScreenFooter;
