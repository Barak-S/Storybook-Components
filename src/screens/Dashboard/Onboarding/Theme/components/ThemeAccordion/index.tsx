import { Grid } from '@material-ui/core';
import { Accordion } from 'components/Navigation';
import React, { FC, useEffect, useState } from 'react';
import { scrollToTop, StyleProps } from 'styles';
import { FormData } from '../..';
import OnboardingThemeForm from '../ThemeForm';
import OnboardingThemeSwitcher from '../ThemeSwitcher';

interface Props extends StyleProps {
  formData: FormData[];
}

export const ThemeAccordion: FC<Props> = ({ formData }) => {
  const [expanded, setExpanded] = useState<string | undefined>(formData[0].id);

  useEffect(() => {
    scrollToTop();
  }, [expanded]);

  const handleChange = (panel: string) => (newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : undefined);
  };

  return (
    <Grid>
      {formData.map(({ id, picture, title, description, active }) => (
        <Accordion key={id} id={id} title={title} expanded={expanded === id} onChange={handleChange(id)}>
          <OnboardingThemeSwitcher picture={picture} active={active}>
            {description}
          </OnboardingThemeSwitcher>
          <OnboardingThemeForm />
        </Accordion>
      ))}
    </Grid>
  );
};

export default ThemeAccordion;
