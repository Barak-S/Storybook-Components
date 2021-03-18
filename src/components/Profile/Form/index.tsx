import { useMediaQuery, useTheme } from '@material-ui/core';
import { View } from 'components/Common';
import { AccordionSections, FolderTabs } from 'components/Navigation';
import React, { FC } from 'react';
import { ms, Style, Styles } from 'styles';

import AccountSection from './components/AccountSection';
import PasswordSection from './components/PasswordSection';
import SettingsSection from './components/SettingsSection';

interface Props {
  style?: Style;
}

export const ProfileForm: FC<Props> = ({ style }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <View style={ms(styles.container, style)}>
      {!isMobile && (
        <FolderTabs
          style={styles.tabs}
          values={[
            { id: 0, name: 'Account', content: <AccountSection /> },
            { id: 1, name: 'Password', content: <PasswordSection /> },
            { id: 2, name: 'Setting', content: <SettingsSection /> },
          ]}
        />
      )}
      {isMobile && (
        <AccordionSections
          style={styles.tabs}
          sections={[
            { id: 0, title: 'Account', content: <AccountSection /> },
            { id: 1, title: 'Password', content: <PasswordSection /> },
            { id: 2, title: 'Setting', content: <SettingsSection /> },
          ]}
        />
      )}
    </View>
  );
};

const styles: Styles = {
  container: {},
  tabs: {},
};

export type ProfileFormProps = Props;
export default ProfileForm;
