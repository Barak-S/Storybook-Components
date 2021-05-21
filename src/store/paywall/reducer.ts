import { StripeProduct } from 'core/api';
import { StoreAction } from 'store/actions';

export interface PaywallState {
  products: StripeProduct[];
}

const initial: PaywallState = { products: [] };

export const reducer = (state: PaywallState = initial, action: StoreAction): PaywallState => {
  switch (action.type) {
    case 'paywall/prodcuts/Set': {
      return { ...state, products: action.data };
    }
    default:
      return state;
  }
};
