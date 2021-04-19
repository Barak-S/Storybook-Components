import { Grid, makeStyles } from '@material-ui/core';
import { Title, View } from 'components/Common';
import { FormControlSection, FormSocialSelect, FormTextInput, FormToggle } from 'components/Form';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles, useScreenSizes } from 'styles';

type Props = StyleProps;

export const SocialMediaAccounts: FC<Props> = () => {
  const { isDesktop } = useScreenSizes();
  const styles = getStyles(isDesktop);
  const classes = useStyles();

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  return (
    <FormControlSection title="Social Media Accounts" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.">
      <Grid>
        {isDesktop && (
          <Grid style={styles.row}>
            <View style={ms(styles.socialSelectHolder, styles.holder, { marginBottom: 9 })}>
              <Title style={styles.title} type="h4">
                {'Social Media'}
              </Title>
            </View>
            <View style={ms(styles.profileAddressHolder, styles.holder, { marginBottom: 9 })}>
              <Title style={styles.title} type="h4">
                {'Profile Address'}
              </Title>
            </View>
            <View style={ms(styles.toggleHolder, styles.holder, { marginBottom: 0 })} />
          </Grid>
        )}
        <Grid style={styles.row}>
          <View style={ms(styles.socialSelectHolder, styles.holder)}>
            <FormSocialSelect
              classes={socialSelectClasses}
              style={styles.select}
              label={isDesktop ? '' : 'social media'}
              value="twitter"
              iconStart
            />
          </View>
          <View style={ms(styles.profileAddressHolder, styles.holder, { marginBottom: 0 })}>
            <FormTextInput label={isDesktop ? '' : 'profile address'} />
          </View>
          <View style={ms(styles.toggleHolder, styles.holder)}>
            <FormToggle title="Global Account" />
          </View>
        </Grid>
        <Grid style={styles.row}>
          <View style={ms(styles.socialSelectHolder, styles.holder)}>
            <FormSocialSelect
              classes={socialSelectClasses}
              style={styles.select}
              label={isDesktop ? '' : 'social media'}
              value="facebook"
              iconStart
            />
          </View>
          <View style={ms(styles.profileAddressHolder, styles.holder, { marginBottom: 0 })}>
            <FormTextInput label={isDesktop ? '' : 'profile address'} />
          </View>
          <View style={ms(styles.toggleHolder, styles.holder)}>
            <FormToggle title="Global Account" />
          </View>
        </Grid>
        <Grid style={styles.row}>
          <View style={ms(styles.socialSelectHolder, styles.holder)}>
            <FormSocialSelect
              classes={socialSelectClasses}
              style={styles.select}
              label={isDesktop ? '' : 'social media'}
              value="youtube"
              iconStart
            />
          </View>
          <View style={ms(styles.profileAddressHolder, styles.holder, { marginBottom: 0 })}>
            <FormTextInput label={isDesktop ? '' : 'profile address'} />
          </View>
          <View style={ms(styles.toggleHolder, styles.holder)}>
            <FormToggle title="Global Account" />
          </View>
        </Grid>
        <Grid style={styles.row}>
          <View style={ms(styles.socialSelectHolder, styles.holder)}>
            <FormSocialSelect
              classes={socialSelectClasses}
              style={styles.select}
              label={isDesktop ? '' : 'social media'}
              value="instagram"
              iconStart
            />
          </View>
          <View style={ms(styles.profileAddressHolder, styles.holder, { marginBottom: 0 })}>
            <FormTextInput label={isDesktop ? '' : 'profile address'} />
          </View>
          <View style={ms(styles.toggleHolder, styles.holder)}>
            <FormToggle title="Global Account" />
          </View>
        </Grid>
        <Grid style={styles.row}>
          <View style={ms(styles.socialSelectHolder, styles.holder)}>
            <FormSocialSelect
              classes={socialSelectClasses}
              style={styles.select}
              label={isDesktop ? '' : 'social media'}
              value="another"
            />
          </View>
          <View style={ms(styles.profileAddressHolder, styles.holder, { marginBottom: 0 })}>
            <FormTextInput label={isDesktop ? '' : 'profile address'} />
          </View>
          <View style={ms(styles.toggleHolder, styles.holder)}>
            <FormToggle style={styles.toggle} title="Global Account" />
          </View>
        </Grid>
      </Grid>
    </FormControlSection>
  );
};

const getStyles = (isDesktop: boolean): Styles => ({
  container: {},
  title: {
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    color: colors.coolBlue,
  },
  row: {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    justifyContent: 'space-between',
    maxWidth: 806,
    flexWrap: 'wrap',
    marginBottom: isDesktop ? 0 : 20,
  },
  holder: {
    width: '100%',
    marginRight: 10,
    marginBottom: 21,
  },
  socialSelectHolder: {
    maxWidth: 200,
  },
  profileAddressHolder: {
    maxWidth: 386,
  },
  toggleHolder: {
    maxWidth: 155,
  },
  select: {
    color: colors.brownishGrey,
  },
  toggle: {
    color: colors.coolGrey,
  },
});

const useStyles = () =>
  makeStyles({
    selectAdornment: {
      '&.MuiButtonBase-root': {
        background: colors.veryLightPinkThree,
      },
    },
    selectRoot: {
      fontSize: 16,
      textTransform: 'capitalize',
    },
  })();

export default SocialMediaAccounts;
