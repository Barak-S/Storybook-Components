import { TextLink, View } from 'components/Common';
import { makeStyles, Grid, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, StyleProps, ms, Styles } from 'styles';
import { AuthCopyrights } from 'components/Auth';
import { routes } from 'screens/consts';
import { LineAwesomeIcon } from 'components/Icons';

interface Props extends StyleProps {
  theme?: 'light' | 'dark';
}

export const ScreenFooter: FC<Props> = ({ style, theme: controlTheme }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const backgroundColor = controlTheme === 'dark' ? colors.darkIndigo : colors.white;
  const color = controlTheme === 'dark' ? colors.white : colors.darkIndigo;
  const borderTop = controlTheme === 'dark' ? `2px solid ${colors.white}` : `2px solid ${colors.greyish}`;

  const styles = getStyles(backgroundColor, color, borderTop);

  return (
    <View style={ms(styles.container, style)}>
      <Grid container className={classes.copyright}>
        <Grid sm={12} md={4} className={classes.copyrightWrap}>
          <AuthCopyrights style={{ color: color }} />
        </Grid>
        <Grid sm={12} md={4} className={classes.socialWrap}>
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
        <Grid sm={12} md={4} className={classes.linktoWrap}>
          <ul className={classes.linkSection}>
            <li>
              <TextLink href={routes.dashboard.faq} className={classes.textLink} style={ms({ color: color }, style)}>
                {'FAQ'}
              </TextLink>
            </li>
            <li>
              <TextLink href={routes.terms} className={classes.textLink} style={ms({ color: color }, style)}>
                {'Terms of Service'}
              </TextLink>
            </li>
            <li>
              <TextLink href={routes.policy} className={classes.textLink} style={ms({ color: color }, style)}>
                {'Privacy Policy'}
              </TextLink>
            </li>
          </ul>
        </Grid>
      </Grid>
    </View>
  );
};

const getStyles = (backgroundColor: string | undefined, color: string | undefined, borderTop: string | undefined): Styles => ({
  container: {
    width: '100%',
    color: color,
    backgroundColor: backgroundColor,
    borderTop: borderTop,
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
        padding: '30px 20px',
      },
    },
    linkSection: {
      listStyle: 'none',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        lineHeight: 3,
        marginBottom: 25,
      },
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-around',
      },
      [theme.breakpoints.up('lg')]: {
        paddingRight: 113,
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
      margin: '0 10px',
      [theme.breakpoints.down('md')]: {
        margin: '0 5px',
      },
    },
  })();

export type ScreenFooterProps = Props;
export default ScreenFooter;
