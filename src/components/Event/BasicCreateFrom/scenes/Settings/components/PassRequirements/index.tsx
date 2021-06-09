import { Grid } from '@material-ui/core';
import { FormCheckboxInput, FormControlSection } from 'components/Form';
import { EventSettingsPassRequirement } from 'core/api';
import { uniq } from 'lodash';
import React, { ChangeEvent, FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  title?: string;
  description?: string;
  items?: EventSettingsPassRequirement[];
  onChange?: (items?: EventSettingsPassRequirement[]) => void;
}

export const EventSettingsPassRequirements: FC<Props> = ({ style, title, description, items = [], onChange }) => {
  const isChecked = (val: EventSettingsPassRequirement) => items.includes(val);

  const handleCheckboxChange = (val: EventSettingsPassRequirement) => (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    const newItems = checked ? uniq([...items, val]) : items.filter(itm => itm !== val);
    onChange && onChange(newItems);
  };

  return (
    <FormControlSection style={style} title={title} description={description} borderTop={false}>
      <Grid container>
        <Grid item container md direction="column">
          <Grid item>
            <FormCheckboxInput
              label="Have at least one letter"
              checked={isChecked('one-letter')}
              onChange={handleCheckboxChange('one-letter')}
            />
          </Grid>
          <Grid item>
            <FormCheckboxInput
              label="Have at least one capital letter"
              checked={isChecked('one-capital-letter')}
              onChange={handleCheckboxChange('one-capital-letter')}
            />
          </Grid>
          <Grid item>
            <FormCheckboxInput
              label="Have at least one number"
              checked={isChecked('one-number')}
              onChange={handleCheckboxChange('one-number')}
            />
          </Grid>
        </Grid>
        <Grid item md>
          <Grid item>
            <FormCheckboxInput
              label="Have at least one special character"
              checked={isChecked('one-special-character')}
              onChange={handleCheckboxChange('one-special-character')}
            />
          </Grid>
          <Grid item>
            <FormCheckboxInput
              label="Not be the same as the account name"
              checked={isChecked('not-same-as-account-name')}
              onChange={handleCheckboxChange('not-same-as-account-name')}
            />
          </Grid>
        </Grid>
      </Grid>
    </FormControlSection>
  );
};

export type EventSettingsPassRequirementsProps = Props;
export default EventSettingsPassRequirements;
