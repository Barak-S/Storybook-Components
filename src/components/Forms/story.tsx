import { Button } from '@material-ui/core';
import { View } from 'components/Common';
import React from 'react';
import { Styles } from 'styles';

export default {
  title: 'Forms',
};

export const Basic = () => (
  <View column={true}>
    <h3>Buttons</h3>
    <View row={true}>
      <Button style={styles.btn} variant="contained">
        Default
      </Button>
      <Button style={styles.btn} variant="contained" color="primary">
        Primary
      </Button>
      <Button style={styles.btn} variant="contained" color="secondary">
        Secondary
      </Button>
      <Button style={styles.btn} variant="contained" disabled>
        Disabled
      </Button>
      <Button style={styles.btn} variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </View>
  </View>
);

const styles: Styles = {
  btn: {
    width: 120,
    marginLeft: 5,
    marginRight: 5,
  },
};
