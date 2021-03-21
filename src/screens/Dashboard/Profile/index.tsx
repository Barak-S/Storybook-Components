import { useMediaQuery, useTheme } from '@material-ui/core';
import { ScreenTitle, Title } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import { AccordionSections, FolderTabs } from 'components/Navigation';
import { ProfileAccountSection, ProfilePassSection, ProfileSettingsSection } from 'components/Profile';
import React, { FC } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const DashboardProfileScreen: FC<Props> = ({ style }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <ScreenTitle title="Profile" />
      <DashboardScreenContainer style={ms(styles.container, style)}>
        <Title style={styles.title} type="h1">
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
            style={styles.tabs}
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
  container: {},
  tabs: {},
  title: {
    ...mx.font(50, colors.marineBlue),
    marginBottom: 38,
  },
};

export type DashboardProfileScreenProps = Props;
export default DashboardProfileScreen;
