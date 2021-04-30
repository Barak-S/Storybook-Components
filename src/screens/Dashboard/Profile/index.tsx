import { makeStyles, Theme, useTheme, useMediaQuery } from '@material-ui/core';
import { Title } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import { useSnackbar } from 'components/Feedback';
import { AccordionSections, FolderTabs } from 'components/Navigation';
import {
  ProfileAccountSection,
  ProfilePassSection,
  ProfileSettingsSection,
  ProfileOrganizationSection,
  ProfileUsersSection,
} from 'components/Profile';
import { ScreenTitle, ScreenFooter } from 'components/Screen';
import { Log } from 'core';
import { UserUpdate, userToUpdate, UserSettings } from 'core/api';
import React, { FC, useEffect, useState } from 'react';
import { useSelector, useStoreManager } from 'store';
import { colors, mx, StyleProps, Styles } from 'styles';

type Props = StyleProps;

const log = Log('screens.DashboardProfile');

export const DashboardProfileScreen: FC<Props> = ({ style }) => {
  const manager = useStoreManager();
  const curData = useSelector(s => s.user.data);
  const curSettings = useSelector(s => s.user.settings);
  const [data, setUserData] = useState<UserUpdate>(userToUpdate(curData));
  const [settings, setSettings] = useState<UserSettings>(curSettings);

  const [processing, setProcessing] = useState<boolean>(false);
  const [thumbProcessing, setThumbProcessing] = useState<boolean>(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const { showSnackbar } = useSnackbar();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    manager.user.updateData();
    manager.user.updateSettings();
  }, []);

  /**
   * Handlers
   */

  const handleUserChange = (newData: UserUpdate) => {
    setUserData({ ...data, ...newData });
  };

  const handleSettingsChange = (newSettings: UserSettings) => {
    setSettings({ ...settings, ...newSettings });
  };

  const handleThumbFileSelect = async (file: File) => {
    log.info('thumb file selected');
    try {
      setThumbProcessing(true);
      log.info('uploading thumb');
      const res = await manager.api.assets.uploadImage(file, 'profile');
      log.info('uploading thumb done');
      log.info('saving user data');
      await manager.user.modifyData({ ...data, thumbnail: res.data.url });
      setUserData({ ...data, thumbnail: res.data.url });
      log.info('submiting user data onde');
      setThumbProcessing(false);
      showSnackbar('Profile picture has been updated!', 'success');
    } catch (err: unknown) {
      setThumbProcessing(false);
      log.err('uploading thumb err=', err);
      showSnackbar('Uploading profile picture error', 'error');
    }
  };

  const handleSubmit = async () => {
    try {
      setProcessing(true);
      log.info('submiting user data');
      await manager.user.modifyData(data);
      log.info('submiting user data onde');
      log.info('submiting settings data');
      await manager.user.modifySettings(settings);
      log.info('submiting settings data onde');
      setProcessing(false);
      showSnackbar('Profile has been updated!', 'success');
    } catch (err: unknown) {
      log.err('submiting data err=', err);
      setProcessing(false);
      showSnackbar('Saving data error', 'error');
    }
  };

  if (!curData) return null;

  return (
    <>
      <ScreenTitle title="Account" />
      <DashboardScreenContainer style={style} className={classes.container}>
        <Title className={classes.title} type="h1">
          {'Account'}
        </Title>
        {!isMobile ? (
          <FolderTabs
            style={styles.tabs}
            values={[
              {
                id: 0,
                name: 'Profile',
                content: (
                  <ProfileAccountSection
                    profile={curData}
                    data={data}
                    processing={processing}
                    thumbProcessing={thumbProcessing}
                    onChange={handleUserChange}
                    onThumbFileSelect={handleThumbFileSelect}
                    onSubmit={handleSubmit}
                  />
                ),
              },
              { id: 1, name: 'Organization', content: <ProfileOrganizationSection /> },
              { id: 2, name: 'Password', content: <ProfilePassSection /> },
              {
                id: 3,
                name: 'Settings',
                content: (
                  <ProfileSettingsSection
                    data={settings}
                    processing={processing}
                    onChange={handleSettingsChange}
                    onSubmit={handleSubmit}
                  />
                ),
              },
              { id: 4, name: 'Users', content: <ProfileUsersSection /> },
            ]}
          />
        ) : (
          <AccordionSections
            style={styles.accordion}
            className={classes.accordion}
            sections={[
              {
                id: 0,
                title: 'Profile',
                content: (
                  <ProfileAccountSection
                    profile={curData}
                    data={data}
                    processing={processing}
                    thumbProcessing={thumbProcessing}
                    onChange={handleUserChange}
                    onThumbFileSelect={handleThumbFileSelect}
                    onSubmit={handleSubmit}
                  />
                ),
              },
              { id: 1, title: 'Organization', content: <ProfileOrganizationSection /> },
              { id: 2, title: 'Password', content: <ProfilePassSection /> },
              {
                id: 3,
                title: 'Settings',
                content: (
                  <ProfileSettingsSection
                    data={settings}
                    processing={processing}
                    onChange={handleSettingsChange}
                    onSubmit={handleSubmit}
                  />
                ),
              },
              { id: 4, title: 'Users', content: <ProfileUsersSection /> },
            ]}
          />
        )}
      </DashboardScreenContainer>
      <ScreenFooter theme="light" />
    </>
  );
};

const styles: Styles = {
  tabs: {},
  accordion: {
    minHeight: 76,
    boxShadow: 'none',
    fontWeight: 400,
    marginBottom: 13,
    marginTop: 0,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      backgroundColor: colors.whiteTwo,
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        padding: '27.5px 17px',
      },
      '& .MuiAccordionDetails-root': {
        [theme.breakpoints.down('sm')]: {
          padding: '0px 10px',
        },
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        color: colors.windowsBlue,
        border: 'none',
        borderTop: `1px solid ${colors.greyish}`,
        borderRadius: 0,
        height: 75,
      },
    },
    title: {
      ...mx.font(50, colors.marineBlue),
      fontWeight: 500,
      marginBottom: 38,
      [theme.breakpoints.down('sm')]: {
        ...mx.font(30, colors.marineBlue),
        marginBottom: 12,
      },
    },
    accordion: {
      height: 76,
      [theme.breakpoints.down('sm')]: {
        padding: '0px 10px',
      },
    },
  })();

export type DashboardProfileScreenProps = Props;
export default DashboardProfileScreen;
