import { CircularProgress } from '@material-ui/core';
import { Text } from 'components/Common';
import { ContentPlans } from 'components/Content';
import { ScreenTitle } from 'components/Screen';
import { Log } from 'core';
import { StripeProduct } from 'core/api';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { useStoreManager } from 'store';
import { colors, sizes, StyleProps, Styles } from 'styles';

const log = Log('screens.Paywall.Plans');
type Props = StyleProps;

export const PaywallPlansScreen: FC<Props> = () => {
  const history = useHistory();
  const manager = useStoreManager();
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [processing, setProcessing] = useState<boolean>(false);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    try {
      log.debug('updating products list');
      setProcessing(true);
      const { data } = await manager.api.paywall.products();
      setProcessing(false);
      log.debug('updating products list done');
      log.trace(products);
      setProducts(data);
    } catch (err: unknown) {
      setProcessing(false);
      log.err('updating products err=', err);
    }
  };

  const handleSelection = (product: StripeProduct) => {
    log.debug('handle product select=', product);
    history.push({ pathname: routes.paywall.pay, state: { product } });
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
        {processing ? (
          <CircularProgress size="big" />
        ) : (
          <ContentPlans products={products} onSelect={handleSelection} onContactClick={handleContactClick} />
        )}
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
