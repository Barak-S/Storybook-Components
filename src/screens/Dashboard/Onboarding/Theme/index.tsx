import { Grid } from '@material-ui/core';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { scrollToTop, StyleProps, Styles } from 'styles';
import ThemeAccordion from './components/ThemeAccordion';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export interface FormData {
  id: string;
  picture: string;
  active: boolean;
  title: string;
  description: string;
  registrationTypes: RegistrationType[];
}

const initialFormData: FormData[] = [
  {
    id: 'theme1',
    picture: 'https://picsum.photos/id/1/360/184',
    active: true,
    title: 'Event Theme Name One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore explicabo perferendis aliquid repudiandae aperiam incidunt a libero similique cupiditate nemo, expedita quas unde ab dicta porro at, laudantium velit? Unde aut laudantium adipisci corporis a sed dolores, cupiditate molestias, odit ab exercitationem. Natus dignissimos eveniet praesentium molestias asperiores sit?',
    registrationTypes: [
      {
        value: 'Public with Registration',
      },
      {
        value: 'Public without Registration',
      },
    ],
  },
  {
    id: 'theme2',
    picture: 'https://picsum.photos/id/2/360/184',
    active: false,
    title: 'Event Theme Name Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore explicabo perferendis aliquid repudiandae aperiam incidunt a libero similique cupiditate nemo, expedita quas unde ab dicta porro at, laudantium velit? Unde aut laudantium adipisci corporis a sed dolores, cupiditate molestias, odit ab exercitationem. Natus dignissimos eveniet praesentium molestias asperiores sit?',
    registrationTypes: [
      {
        value: 'Public with Registration',
      },
      {
        value: 'Public without Registration',
      },
    ],
  },
  {
    id: 'theme3',
    picture: 'https://picsum.photos/id/3/360/184',
    active: false,
    title: 'Event Theme Name Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore explicabo perferendis aliquid repudiandae aperiam incidunt a libero similique cupiditate nemo, expedita quas unde ab dicta porro at, laudantium velit? Unde aut laudantium adipisci corporis a sed dolores, cupiditate molestias, odit ab exercitationem. Natus dignissimos eveniet praesentium molestias asperiores sit?',
    registrationTypes: [
      {
        value: 'Public with Registration',
      },
      {
        value: 'Public without Registration',
      },
    ],
  },
];

export interface RegistrationType {
  value: string;
}

export const OnboardingThemeScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const styles = getStyles();
  const history = useHistory();
  // const [formData, setformData] = useState<FormData[]>(initialFormData);

  const handleFooterBtnClick = () => {
    history.push(routes.dashboard.onboarding.event);
    scrollToTop();
  };

  return (
    <>
      <ScreenTitle title="Onboarding Theme" />
      <SetupContainer
        title="add theme of your event"
        steps={steps}
        curStepIndex={2}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <Grid style={styles.container}>
          <ThemeAccordion formData={initialFormData} />
        </Grid>
      </SetupContainer>
    </>
  );
};

const getStyles = (): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 0 33px',
  },
});

export default OnboardingThemeScreen;
