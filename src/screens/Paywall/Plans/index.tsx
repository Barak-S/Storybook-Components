import { Text } from 'components/Common';
import { PaywallPlans } from 'components/Paywall';
import { ScreenTitle } from 'components/Screen';
import { Log } from 'core';
import { StripeProduct } from 'core/api';
import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { useSelector, useStoreManager } from 'store';
import { colors, sizes, StyleProps, Styles } from 'styles';

const log = Log('screens.Paywall.Plans');
type Props = StyleProps;

export const PaywallPlansScreen: FC<Props> = () => {
  const history = useHistory();
  const manager = useStoreManager();
  const products = useSelector(s => s.paywall.products);

  useEffect(() => {
    manager.paywall.updateProducts();
  }, []);

  const handleSelection = (product: StripeProduct) => {
    log.debug('handle product select=', product);
    history.push({ pathname: routes.paywall.pay, state: { product: product.id } });
  };

  const handleContactClick = () => {
    log.info('handle contact click');
  };

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
        <PaywallPlans products={products} onSelect={handleSelection} onContactClick={handleContactClick} />
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
};

export type PaywallPlansScreenProps = Props;
export default PaywallPlansScreen;
