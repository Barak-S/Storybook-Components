import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, useTheme } from '@material-ui/core';
import { AuthFormContainer } from 'components/Auth';
import { ContainedButton } from 'components/Buttons';
import { Text, View } from 'components/Common';
import { StripeProduct } from 'core/api';
import { sortBy } from 'lodash';
import React, { FC, useMemo } from 'react';
import { colors, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  products: StripeProduct[];
  onSelect?: (item: StripeProduct) => void;
  onContactClick?: () => void;
}

interface CustomProduct {
  id: string;
  name: string;
}

const productToMonthlyFees = (product: StripeProduct): number | undefined => {
  const price = product.prices.find(itm => itm.recurring.interval === 'month' && itm.recurring.interval_count === 1);
  return price?.unit_amount;
};

const productToAnualFees = (product: StripeProduct): number | undefined => {
  const price = product.prices.find(itm => itm.recurring.interval === 'year' && itm.recurring.interval_count === 1);
  return price?.unit_amount ? price.unit_amount / 12 : undefined;
};

const unitAmountToStr = (val: number | undefined) => {
  return val ? `$${(val / 100).toFixed(2)} / month` : 'Not available';
};

const sortProducts = (items: StripeProduct[]) =>
  sortBy(items, itm => {
    if (itm.name.toLocaleLowerCase().indexOf('basic') === 0) {
      return 1;
    }
    if (itm.name.toLocaleLowerCase().indexOf('business') === 0) {
      return 2;
    }
    return 3;
  });

export const PaywallPlans: FC<Props> = ({ products: rawProducts, onSelect, onContactClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const products = useMemo(() => sortProducts(rawProducts), [rawProducts]);
  const custom: CustomProduct[] = [
    {
      id: 'agency',
      name: 'Agency',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
    },
  ];

  const MockRows = () => (
    <>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature Name'}
        </TableCell>
        {products.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
        {custom.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
      </TableRow>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature 2'}
        </TableCell>
        {products.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
        {custom.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
      </TableRow>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature 3'}
        </TableCell>
        {products.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
        {custom.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
      </TableRow>
      <TableRow className={classes.featureRow}>
        <TableCell className={classes.featureName} component="td" scope="row">
          {'Feature 4'}
        </TableCell>
        {products.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
        {custom.map(itm => (
          <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
            {'$99'}
          </TableCell>
        ))}
      </TableRow>
    </>
  );

  return (
    <AuthFormContainer style={styles.container}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell colSpan={1} className={classes.hiddenTableHeader}>
                {''}
              </TableCell>
              {products.map(itm => (
                <TableCell key={itm.id} colSpan={1} className={classes.tableHeaderCell}>
                  <View>
                    <Text>{itm.name}</Text>
                    <ContainedButton onClick={() => onSelect && onSelect(itm)} style={styles.tableHeaderButton} size="small">
                      {'Purchase'}
                    </ContainedButton>
                  </View>
                </TableCell>
              ))}
              {custom.map(itm => (
                <TableCell key={itm.id} colSpan={1} className={classes.tableHeaderCell}>
                  <View>
                    <Text>{itm.name}</Text>
                    <ContainedButton onClick={onContactClick} style={styles.tableHeaderButton} size="small">
                      {'Contact Us'}
                    </ContainedButton>
                  </View>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Fees'}
              </TableCell>
            </TableRow>

            <TableRow className={classes.featureRow}>
              <TableCell className={classes.featureName} component="td" scope="row">
                {'Anual'}
              </TableCell>
              {products.map(itm => (
                <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
                  {unitAmountToStr(productToAnualFees(itm))}
                </TableCell>
              ))}
              {custom.map(itm => (
                <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
                  {'-'}
                </TableCell>
              ))}
            </TableRow>

            <TableRow className={classes.featureRow}>
              <TableCell className={classes.featureName} component="td" scope="row">
                {'Monthly'}
              </TableCell>
              {products.map(itm => (
                <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
                  {unitAmountToStr(productToMonthlyFees(itm))}
                </TableCell>
              ))}
              {custom.map(itm => (
                <TableCell key={itm.id} className={classes.featureValue} component="td" scope="row">
                  {'-'}
                </TableCell>
              ))}
            </TableRow>

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 2'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 3'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 4'}
              </TableCell>
            </TableRow>
            <MockRows />

            <TableRow className={classes.categoryRow}>
              <TableCell colSpan={5} className={classes.categoryCell}>
                {'Category 5'}
              </TableCell>
            </TableRow>
            <MockRows />
          </TableBody>
        </Table>
      </TableContainer>
    </AuthFormContainer>
  );
};

const styles: Styles = {
  container: {
    padding: '32px 80px',
    borderRadius: 20,
    margin: '32px 16px',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 'none',
    // [theme.breakpoints.down('md')]: {
    //   padding: '33px 43px',
    //   borderRadius: 30,
    //   margin: '55px 75px',
    // },
    // [theme.breakpoints.down('sm')]: {
    //   margin: '35px 15px',
    //   padding: '40px 20px',
    // },
  },
  tableHeaderButton: {
    padding: '0 24px',
    width: 'auto',
    marginTop: 8,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    table: {
      fontSize: 16,
      minWidth: 320,
      width: '100%',
    },
    tableHeaderCell: {
      color: colors.coolBlue,
      fontWeight: 500,
      fontSize: 19,
      padding: '16px 28px',
      borderBottom: 'none',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    },

    hiddenTableHeader: {
      background: '#fff',
      border: 'none',
    },
    headerRow: {},
    categoryRow: {
      backgroundColor: colors.paleGrey,
    },
    categoryCell: {
      color: colors.coolBlue,
      fontSize: 16,
      padding: theme.spacing(1, 2),
      borderBottom: 'none',
    },
    featureRow: {
      backgroundColor: colors.white,
      color: colors.brownishGrey,
      flexWrap: 'nowrap',
    },
    featureName: {
      fontSize: 14,
      textAlign: 'left',
      borderColor: colors.paleGrey,
    },
    featureValue: {
      fontSize: 14,
      textAlign: 'center',
      borderColor: colors.paleGrey,
    },
  })();

export type PaywallPlansProps = Props;
export default PaywallPlans;
