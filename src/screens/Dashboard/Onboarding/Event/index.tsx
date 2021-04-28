import { Grid, makeStyles } from '@material-ui/core';
import { Text } from 'components/Common';
import {
  FormChipInput,
  FormControlSection,
  FormDateInput,
  FormNumberInput,
  FormSelect,
  FormSocialsInput,
  FormTextArea,
  FormTextInput,
  FormTimeZoneInput,
  FormToggle,
} from 'components/Form';
import SelectFileBtn from 'components/Form/SelectFileBtn';
import { LineAwesomeIcon } from 'components/Icons';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import { Social } from 'core/api';
import React, { FC, useState } from 'react';
import { ms, StyleProps, Styles, useScreenSizes } from 'styles';

import EventColorPalette from './components/ColorPalette';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
  data?: FormData;
  onChange?: (data: FormData) => void;
}

interface EventScreen {
  eventType: string;
}

type FormData = Partial<EventScreen>;

interface EventType {
  value: string;
}

interface StyleConfig {
  isDesktop: boolean;
}

export const OnboardingEventScreen: FC<Props> = ({ steps, data = {}, onCloseClick, onChange }) => {
  const [socialItems, setSocialItems] = useState<Social[]>([]);

  const { eventType } = data;

  const eventTypes: EventType[] = [
    {
      value: 'birthday',
    },
    {
      value: 'concert',
    },
  ];

  const handleEventTypeChange = (key: keyof FormData) => (val: EventType) => {
    onChange && onChange({ ...data, [key]: val.value });
  };

  const { isDesktop } = useScreenSizes();

  const styleConfig: StyleConfig = {
    isDesktop,
  };

  const styles = getStyles(styleConfig);
  const classes = useStyles();

  return (
    <>
      <ScreenTitle title="Onboarding Event" />
      <SetupContainer title="Setup your awesome event" steps={steps} curStepIndex={3} onCloseClick={onCloseClick}>
        <Grid component="form">
          <FormControlSection
            title="Event Type"
            hint="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
            borderTop={false}
            style={styles.topSection}
          >
            <Grid style={styles.eventTypeSelectWrapper}>
              <FormSelect<EventType>
                label="event type"
                options={eventTypes}
                name="eventType"
                value={eventType ? eventTypes.find(itm => itm.value === eventType) : undefined}
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
                onChange={handleEventTypeChange('eventType')}
              />
            </Grid>
          </FormControlSection>
          <FormControlSection
            title="Event Headline & Description"
            hint="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
          >
            <Grid style={styles.formSectionBody}>
              <FormTextInput label="Event Headline" style={styles.headLineField} />
              <FormTextArea label="Event Description" style={styles.headLineField} />
              <Grid style={styles.datesRow}>
                <Grid style={styles.period}>
                  <Grid style={styles.dateWrapper}>
                    <FormDateInput />
                  </Grid>
                  <Grid style={styles.datesArrow}>
                    <LineAwesomeIcon type="arrow-right" />
                  </Grid>
                  <Grid style={styles.dateWrapper}>
                    <FormDateInput />
                  </Grid>
                </Grid>
                <Grid style={styles.timeZoneWrapper}>
                  <FormTimeZoneInput
                    classes={{
                      root: classes.timeZoneInput,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </FormControlSection>
          <FormControlSection title="Number of Sessions">
            <Grid style={styles.sessionsSection}>
              <Grid style={ms(styles.sessionsSectionBlock, { ...(isDesktop ? { marginRight: 30 } : { marginBottom: 30 }) })}>
                <Text style={styles.sessionsSectionText}>{'Does your event include multiple sessions?'}</Text>
                <FormToggle title="Yes" />
              </Grid>
              <Grid style={{ display: 'flex', alignItems: 'center' }}>
                <Text style={styles.sessionsSectionText}>{'if so how many?'}</Text>
                <FormNumberInput />
              </Grid>
            </Grid>
          </FormControlSection>
          <FormControlSection title="Color Palette" description="Adjust the below colors to align to your event branding.">
            <EventColorPalette />
          </FormControlSection>
          <FormControlSection
            title="Fonts"
            description="Select from the below font listing and choose the font that is closest to your event branding."
          >
            <Grid style={styles.fontFieldWrapper}>
              <FormSelect<EventType>
                label=""
                options={eventTypes}
                name="fontFamily"
                value={eventType ? eventTypes.find(itm => itm.value === eventType) : undefined}
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
                onChange={handleEventTypeChange('eventType')}
              />
            </Grid>
          </FormControlSection>
          <FormControlSection
            title="Contact Email"
            description="This email will be for ipsum dolor sit amet, consectetur adipiscing elitsed."
          >
            <Grid style={styles.fontFieldWrapper}>
              <FormTextInput label="Email" />
            </Grid>
          </FormControlSection>
          <FormControlSection
            title="Social Media Accounts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
          >
            <FormSocialsInput items={socialItems} onChange={setSocialItems} />
          </FormControlSection>
          <FormControlSection
            title="Assign SEO Event Tags"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
          >
            <Grid style={styles.tagsFieldWrapper}>
              <FormChipInput items={[]} label="Add Tags" />
            </Grid>
          </FormControlSection>
          <FormControlSection
            title="CSV Document Upload"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
          >
            <Grid style={styles.uploadWrapper}>
              <Grid style={styles.csvFieldWrapper}>
                <FormTextInput label="Select CSV file to upload" />
              </Grid>
              <SelectFileBtn
                btnStyle={styles.uploadBtn}
                title="upload"
                //   onFileSelect={() => { }}
              />
            </Grid>
          </FormControlSection>
          <FormControlSection
            title="PO/Reference Number"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
          >
            <Grid style={styles.poFieldWrapper}>
              <FormTextInput label="PO/Reference Number" />
            </Grid>
          </FormControlSection>
        </Grid>
      </SetupContainer>
    </>
  );
};

const getStyles = ({ isDesktop }: StyleConfig): Styles => ({
  eventTypeSelectWrapper: {
    maxWidth: isDesktop ? 276 : '100%',
    paddingTop: 10,
  },
  formSectionContent: {
    paddingTop: 10,
  },
  topSection: {
    paddingBottom: 50,
  },
  formSectionBody: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
  },
  headLineField: {
    marginBottom: 30,
  },
  datesRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: isDesktop ? 'row' : 'column',
    flexWrap: 'wrap',
  },
  period: {
    display: 'flex',
    alignItems: 'center',
    width: isDesktop ? 'auto' : '100%',
    flexDirection: isDesktop ? 'row' : 'column',
    marginRight: isDesktop ? 30 : 0,
    marginBottom: 30,
  },
  datesArrow: {
    padding: isDesktop ? '0 10px' : '10px 0',
  },
  dateWrapper: {
    width: '100%',
    maxWidth: isDesktop ? 180 : '100%',
  },
  timeZoneWrapper: {
    width: '100%',
    maxWidth: isDesktop ? 354 : '100%',
    marginBottom: 30,
  },
  sessionsSection: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: isDesktop ? 'row' : 'column',
  },
  sessionsSectionBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  sessionsSectionText: {
    marginRight: 21,
  },
  fontFieldWrapper: {
    maxWidth: isDesktop ? 424 : '100%',
  },
  emailfieldWrapper: {
    maxWidth: isDesktop ? 424 : '100%',
  },
  tagsFieldWrapper: {
    maxWidth: isDesktop ? 530 : '100%',
  },
  poFieldWrapper: {
    maxWidth: isDesktop ? 424 : '100%',
  },
  uploadWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
  },
  csvFieldWrapper: {
    width: '100%',
    maxWidth: isDesktop ? 424 : '100%',
    margin: isDesktop ? '0 17px 0 0' : '0 0 30 0',
  },
  uploadBtn: {
    height: 52,
    letterSpacing: 2.25,
  },
});

const useStyles = () =>
  makeStyles({
    timeZoneInput: {
      fontSize: 16,
    },
  })();

export default OnboardingEventScreen;
