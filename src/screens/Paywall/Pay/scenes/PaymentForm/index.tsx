import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentMethod, StripeCardElementChangeEvent, StripeCardElementOptions } from '@stripe/stripe-js';
import { ContainedButton } from 'components/Buttons';
import { Text, View } from 'components/Common';
import { FormTextInput } from 'components/Form';
import { appConfig, Log } from 'core';
import { StripeProduct, User } from 'core/api';
import React, { FC, useState } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { errToStr } from 'utils';

const log = Log('components.PaywallPayPaymentFormScene');

interface Props extends StyleProps {
  user: User;
  product: StripeProduct;
}

const options: StripeCardElementOptions = {
  iconStyle: 'solid',
  style: {
    base: {
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
    },
    invalid: {
      iconColor: '#ef2961',
      color: '#ef2961',
    },
  },
};

interface BillingDetails {
  email: string;
  name: string;
}

export const PaywallPayPaymentFormScene: FC<Props> = ({ style, user }) => {
  const [details, setDetails] = useState<BillingDetails>({
    email: user.email,
    name: `${user.firstName} ${user.lastName}`,
  });

  const [complete, setComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardChange = (e: StripeCardElementChangeEvent) => {
    if (e.error) {
      setError(e.error.message);
    } else {
      setError(undefined);
    }
    setComplete(e.complete);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e =>
    setDetails({
      ...details,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = async () => {
    if (error || !stripe || !elements) {
      return;
    }
    setError(undefined);
    setPaymentMethod(undefined);
    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        return log.err('Card element not found');
      }
      setProcessing(true);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: details,
      });
      setProcessing(false);

      if (error) {
        setError(error.message);
        log.err(error);
      } else {
        setPaymentMethod(paymentMethod);
        log.debug('payment method selected', paymentMethod);
      }
    } catch (err: unknown) {
      log.err(err);
      setError(errToStr(err));
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <form style={style}>
      <FormTextInput
        className={classes.inputFull}
        inputStyle={styles.input}
        label="Your email"
        name="email"
        value={details.email}
        onChange={handleInputChange}
        required
      />
      <FormTextInput
        className={classes.inputFull}
        inputStyle={styles.input}
        label="Name on card"
        name="name"
        value={details.name}
        onChange={handleInputChange}
        required
      />
      <View
        style={{
          marginBottom: 24,
          padding: 16,
          backgroundColor: colors.white,
          borderRadius: 12,
          border: `solid 1px ${colors.coolBlue}`,
        }}
      >
        <CardElement options={options} onChange={handleCardChange} />
      </View>
      {appConfig.env !== 'prd' && (
        <View style={styles.devHint}>
          <Text block>
            <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">
              {'Stripe test cards'}
            </a>
            {', e.g.'}{' '}
          </Text>
          <Text block>{'4242 4242 4242 4242'}</Text>
        </View>
      )}
      <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ContainedButton
          style={{ padding: '0 24px', width: 'auto' }}
          size="small"
          processing={processing}
          onClick={handleSubmit}
          disabled={!details.name || !stripe}
        >
          {'Purchase'}
        </ContainedButton>
      </View>
      <View style={{ marginTop: 8 }}>{!!error && <Text color={colors.error}>{error}</Text>}</View>
    </form>
  );
};

const styles: Styles = {
  input: {
    fontSize: 16,
  },
  devHint: {
    margin: '8px 0',
    fontSize: '12px',
    textAlign: 'center',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    inputFull: {
      maxWidth: 675,
      marginBottom: 24,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
  })();

export type PaywallPayPaymentFormSceneProps = Props;
export default PaywallPayPaymentFormScene;
