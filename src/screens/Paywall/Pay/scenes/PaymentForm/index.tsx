import { makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentMethod, StripeCardElementChangeEvent, StripeCardElementOptions, StripeError } from '@stripe/stripe-js';
import { ContainedButton } from 'components/Buttons';
import { Text } from 'components/Common';
import { FormTextInput } from 'components/Form';
import { Log } from 'core';
import { User } from 'core/api';
import React, { FC, useState } from 'react';
import { colors, StyleProps, Styles } from 'styles';

const log = Log('components.PaywallPayPaymentFormScene');

interface Props extends StyleProps {
  user: User;
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

interface PMDProps {
  // eslint-disable-next-line react/require-default-props
  paymentMethod?: PaymentMethod;
}

const PaymentMethodDisplay = ({ paymentMethod }: PMDProps) => {
  log.debug('METHOD', paymentMethod);
  if (!paymentMethod) {
    return <div />;
  }
  return <Typography style={{ maxWidth: 500 }}>{JSON.stringify(paymentMethod)}</Typography>;
};

export const PaywallPayPaymentFormScene: FC<Props> = ({ style, user }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [billingDetails, setBillingDetails] = useState({
    email: user.email,
    name: '',
  });

  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<StripeError>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();

  const stripe = useStripe();
  const elements = useElements();

  const handleCardChange = (e: StripeCardElementChangeEvent) => {
    if (e.error) {
      setError(e.error);
    } else {
      setError(undefined);
    }
    setCardComplete(e.complete);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e =>
    setBillingDetails({
      ...billingDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = async () => {
    if (error || !stripe || !elements) {
      return;
    }
    if (cardComplete) {
      setProcessing(true);
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });

      if (error) {
        setError(error);
        setPaymentMethod(undefined);
        log.err(error);
      } else {
        setError(undefined);
        setPaymentMethod(paymentMethod);
        log.debug('[PaymentMethod]', paymentMethod);
      }
    } else {
      log.err('Card element not found');
    }
    setProcessing(false);
  };

  return (
    <form style={style}>
      <FormTextInput
        className={classes.inputFull}
        inputStyle={styles.input}
        label="Your email"
        name="email"
        value={billingDetails.email}
        onChange={handleInputChange}
        required
      />
      <FormTextInput
        className={classes.inputFull}
        inputStyle={styles.input}
        label="Name on card"
        name="name"
        value={billingDetails.name}
        onChange={handleInputChange}
        required
      />
      <div style={{ margin: '8px 0' }}>
        <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">
          {'Stripe test cards'}
        </a>
        {', e.g.'}{' '}
        <div className="card-number">
          {'4242'}
          <span />
          {'4242'}
          <span />
          {'4242'}
          <span />
          {'4242'}
        </div>
      </div>
      <div
        style={{
          marginBottom: 24,
          padding: 16,
          backgroundColor: '#FFF',
          borderRadius: 12,
          border: `solid 1px ${colors.coolBlue}`,
        }}
      >
        <CardElement options={options} onChange={handleCardChange} />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ContainedButton
          style={{ padding: '0 24px', width: 'auto' }}
          size="small"
          processing={processing}
          onClick={handleSubmit}
          disabled={!billingDetails.name || !stripe}
        >
          {'Purchase'}
        </ContainedButton>
      </div>
      <div style={{ marginTop: 8 }}>
        <Text color={colors.error}>{error && error.message}</Text>
      </div>
      <PaymentMethodDisplay paymentMethod={paymentMethod} />
    </form>
  );
};

const styles: Styles = {
  input: {
    fontSize: 16,
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
