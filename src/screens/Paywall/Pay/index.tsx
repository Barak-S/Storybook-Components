import { AuthFormContainer } from 'components/Auth';
import { TextButton } from 'components/Buttons';
import { Text } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import { ScreenTitle } from 'components/Screen';
import { Log } from 'core';
import { useQuery } from 'core/navigation';
import React, { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useStoreManager } from 'store';
import { colors, sizes, StyleProps, Styles } from 'styles';

import PaymentFormScene from './scenes/PaymentForm';

const log = Log('screens.Paywall.Pay');

type Props = StyleProps;

interface LocationState {
  product?: string;
}

export const PaywallPayScreen: FC<Props> = () => {
  const history = useHistory();
  const location = useLocation<LocationState | undefined>();
  const query = useQuery();
  const manager = useStoreManager();

  const products = useSelector(s => s.paywall.products);
  const user = useSelector(s => s.user.data);

  useEffect(() => {
    manager.paywall.updateProducts();
  }, []);

  const productId: string | undefined = location.state?.product || query.product;
  const product = products.find(itm => itm.id === productId);

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
          {!!user && !!product && <PaymentFormScene style={styles.form} user={user} product={product} />}
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
