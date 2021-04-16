import { Grid } from '@material-ui/core';
import { Accordion } from 'components/Navigation';
import React, { FC, useEffect, useState } from 'react';
import { scrollToTop, StyleProps } from 'styles';

import OnboardingThemeForm from '../ThemeForm';
import OnboardingThemeSwitcher from '../ThemeSwitcher';

export const ThemeAccordion: FC<StyleProps> = () => {
  const [expanded, setExpanded] = useState<string | undefined>('theme1');

  useEffect(() => {
    scrollToTop();
  }, [expanded]);

  const handleChange = (panel: string) => (newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : undefined);
  };

  return (
    <Grid>
      <Accordion id="theme1" title="Event Theme Name One" expanded={expanded === 'theme1'} onChange={handleChange('theme1')}>
        <OnboardingThemeSwitcher picture="https://via.placeholder.com/360x184">
          {
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore explicabo perferendis aliquid repudiandae aperiam incidunt a libero similique cupiditate nemo, expedita quas unde ab dicta porro at, laudantium velit? Unde aut laudantium adipisci corporis a sed dolores, cupiditate molestias, odit ab exercitationem. Natus dignissimos eveniet praesentium molestias asperiores sit?'
          }
        </OnboardingThemeSwitcher>
        <OnboardingThemeForm />
      </Accordion>
      <Accordion id="theme2" title="Event Theme Name Two" expanded={expanded === 'theme2'} onChange={handleChange('theme2')}>
        <OnboardingThemeSwitcher picture="https://via.placeholder.com/360x184">
          {
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore explicabo perferendis aliquid repudiandae aperiam incidunt a libero similique cupiditate nemo, expedita quas unde ab dicta porro at, laudantium velit? Unde aut laudantium adipisci corporis a sed dolores, cupiditate molestias, odit ab exercitationem. Natus dignissimos eveniet praesentium molestias asperiores sit?'
          }
        </OnboardingThemeSwitcher>
        <OnboardingThemeForm />
      </Accordion>
      <Accordion id="theme3" title="Event Theme Name Three" expanded={expanded === 'theme3'} onChange={handleChange('theme3')}>
        <OnboardingThemeSwitcher picture="https://via.placeholder.com/360x184">
          {
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore explicabo perferendis aliquid repudiandae aperiam incidunt a libero similique cupiditate nemo, expedita quas unde ab dicta porro at, laudantium velit? Unde aut laudantium adipisci corporis a sed dolores, cupiditate molestias, odit ab exercitationem. Natus dignissimos eveniet praesentium molestias asperiores sit?'
          }
        </OnboardingThemeSwitcher>
        <OnboardingThemeForm />
      </Accordion>
    </Grid>
  );
};

export default ThemeAccordion;
