import { ContentPlans } from 'components/Content';
import { ScreenTitle } from 'components/Screen';

import React, { FC } from 'react';
import { colors, Styles, StyleProps, sizes } from 'styles';
import { Text } from 'components/Common';

type Props = StyleProps;

export const RegisterSubscribeScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Subscribe" />
      <div style={{ paddingTop: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Text style={styles.title}>{`Subscription Level`}</Text>
        <Text style={styles.subtitle}>
          {
            'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Nostrum, vero, modi. Reprehenderit, nihil. Ab praesentium ipsum doloremque maxime, adipisci, obcaecati!'
          }
        </Text>
        <ContentPlans />
      </div>
    </>
  );
};

export const styles: Styles = {
  title: {
    display: 'block',
    textAlign: 'center',
    color: colors.primary,
    fontSize: sizes.h2,
    marginBottom: 10,
  },
  subtitle: {
    display: 'block',
    textAlign: 'center',
    color: colors.gray,
    fontSize: 14,
    maxWidth: '70%',
  },
};

export type RegisterSubscribeScreenProps = Props;
export default RegisterSubscribeScreen;
