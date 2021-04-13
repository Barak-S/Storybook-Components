import { Grid } from '@material-ui/core';
import {
  FormControlSection,
  // FormSelect,
  FormTextInput,
  FormToggle,
} from 'components/Form';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const SocialMediaAccounts: FC<Props> = () => {
  return (
    <FormControlSection title="Social Media Accounts" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.">
      <Grid>
        <Grid>
          {/* <FormSelect<>
                        label=""
                        options={{eventTypes}}
                        name="fontFamily"
                        value={''}
                        keyExtractor={itm => itm.value}
                        titleExtractor={itm => itm.value}
                        onChange={handleEventTypeChange('socialType')}
                    /> */}
          <FormTextInput />
          <FormToggle title="Global Account" />
        </Grid>
      </Grid>
    </FormControlSection>
  );
};

export default SocialMediaAccounts;
