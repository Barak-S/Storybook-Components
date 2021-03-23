import { useMediaQuery, useTheme, Theme, makeStyles } from '@material-ui/core';
import { ScreenTitle, Title } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import { AccordionSections, FolderTabs } from 'components/Navigation';
import { ProfileAccountSection, ProfilePassSection, ProfileSettingsSection } from 'components/Profile';
import React, { FC } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const DashboardProfileScreen: FC<Props> = ({ style }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <ScreenTitle title="Profile" />
      <DashboardScreenContainer 
        style={style}
        className={classes.container}
      >
        <Title className={classes.title} type="h1">
          {'Profile'}
        </Title>
        {!isMobile && (
          <FolderTabs
            style={styles.tabs}
            values={[
              { id: 0, name: 'Account', content: <ProfileAccountSection /> },
              { id: 1, name: 'Password', content: <ProfilePassSection /> },
              { id: 2, name: 'Setting', content: <ProfileSettingsSection /> },
            ]}
          />
        )}
        {isMobile && (
          <AccordionSections
            style={styles.accordion}
            sections={[
              { id: 0, title: 'Account', content: <ProfileAccountSection /> },
              { id: 1, title: 'Password', content: <ProfilePassSection /> },
              { id: 2, title: 'Setting', content: <ProfileSettingsSection /> },
            ]}
          />
        )}
      </DashboardScreenContainer>
    </>
  );
};

const styles: Styles = {
  tabs: {},
  accordion:{
    color: colors.brownishGrey, 
    borderRadius: 10, 
    minHeight: 60,  
    paddingTop: 7, 
    background: 'linear-gradient(90deg, rgba(242,243,244,1) 0%, rgba(221,223,225,1) 100%)', 
    boxShadow: 'none', 
    fontWeight: 400, 
    marginBottom: 5,
    marginTop: 0
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      [theme.breakpoints.down('sm')]: {
        padding: '25px 10px'
      },
    },
    title: {
      ...mx.font(50, colors.marineBlue),
      marginBottom: 38,
      [theme.breakpoints.down('sm')]: {
        ...mx.font(30, colors.marineBlue),
        marginBottom: 12,
      },

    },
  })();


export type DashboardProfileScreenProps = Props;
export default DashboardProfileScreen;
