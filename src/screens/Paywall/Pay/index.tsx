import { ScreenTitle } from 'components/Screen';
import { useQuery } from 'core/navigation';
import { Log } from 'core';
import React, { FC } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { colors, Styles, StyleProps, sizes } from 'styles';
import { Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import { TextButton } from 'components/Buttons';
import PaymentFormScene from './scenes/PaymentForm';
import { useSelector } from 'store';
import { AuthFormContainer } from 'components/Auth';
import { StripeProduct } from 'core/api';

const log = Log('screens.Paywall.Pay');

type Props = StyleProps;

interface LocationState {
  product?: StripeProduct;
}

export const PaywallPayScreen: FC<Props> = () => {
  const history = useHistory();
  const location = useLocation<LocationState | undefined>();
  const user = useSelector(s => s.user.data);

  const { product } = location.state || {};

  return (
    <>
      <ScreenTitle title="Payment" />
      <div style={{ paddingTop: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Text style={styles.title}>{`${product?.name} Plan Payment`}</Text>
        <Text style={styles.subtitle}>
          {
            'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Nostrum, vero, modi. Reprehenderit, nihil. Ab praesentium ipsum doloremque maxime, adipisci, obcaecati!'
          }
        </Text>
        <AuthFormContainer style={styles.content}>
          {!!user && <PaymentFormScene style={styles.form} user={user} />}
        </AuthFormContainer>
      </div>
      <div style={{ position: 'fixed', top: 160, left: 80 }}>
        <TextButton style={styles.backBtn} onClick={() => history.goBack()}>
          <LineAwesomeIcon style={{ marginRight: 4 }} color={colors.coolBlueTwo} type="arrow-circle-left" />
          {'BACK'}
        </TextButton>
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
    maxWidth: 600,
  },
  backBtn: {
    flexDirection: 'row',
    letterSpacing: 1.5,
    textDecoration: 'none',
  },
  content: {
    padding: '60px 80px 32px 80px',
    borderRadius: 20,
    margin: '32px 16px',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 'none',
  },
  form: {
    width: '100%',
  },
};

export type PaywallPayScreenProps = Props;
export default PaywallPayScreen;
