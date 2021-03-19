import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { Title } from 'components/Common';
import React, { FC } from 'react';
import { colors, mc, Style } from 'styles';

interface Props {
  style?: Style;
  className?: string;
}

export const ContentTerms: FC<Props> = ({ style, className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Paper className={mc(classes.container, className)} elevation={2} style={style}>
      <Title type="h3" className={classes.primaryHeader}>
        {'APPLICATION TERMS OF SERVICE'}
      </Title>
      <h5 className={classes.subtextHeader}>
        <strong>{'Effective Date: '}</strong>
        {'7/20/2020'}
      </h5>
      <p className={classes.secondaryText}>
        {'The creators of Digital Oasis (referred to here as “Digital Oasis,” “we,” “us,” or “our”) are offering this '}
        {'application as a service which connects end users with their Event Producer(s) who have been licensed to offer our '}
        {'Services to their customers.'}
      </p>
      <p className={classes.secondaryText}>
        {'These Terms of Use (the “Terms”) govern your use of the Digital Oasis application and its related contents and '}
        {'services (collectively, the "Services"). Please read these Terms and our corresponding '}
        <a href="/privacy" className={classes.linkTo}>
          {'Privacy Policy'}
        </a>
        {', which discusses how we collect, process, and disclose personal information through these Services.'}
      </p>
      <p className={classes.boldSecondaryText}>
        {'PLEASE NOTE THAT THESE TERMS CONTAIN AN ARBITRATION CLAUSE, WHICH REQUIRES YOU TO ARBITRATE MOST DISPUTES BETWEEN '}
        {'DIGITAL OASIS AND YOU. IF YOU DO NOT AGREE TO THIS CLAUSE, DO NOT USE THE SERVICES.'}
      </p>

      <ul className={classes.primaryList}>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'1. ACCEPTANCE OF TERMS'}</p>
          <p className={classes.listText}>
            {'By using the Services, you agree to comply with and be legally bound by these Terms, whether or not you become a '}
            {'registered user of the Services. These Terms govern your access to and use of the Services and constitute a '}
            {'binding legal agreement between you and Digital Oasis. If there is a conflict between these Terms and any terms '}
            {'and conditions posted for any additional Digital Oasis services separate and apart from these Services, the latter '}
            {'terms and conditions will take precedence with respect to your use of those services.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'2. MODIFICATIONS'}</p>
          <p className={classes.listText}>
            {'By using the Services, you agree to comply with and be legally bound by these Terms, whether or not you become a'}
            {'registered user of the Services. These Terms govern your access to and use of the Services and constitute a'}
            {'binding legal agreement between you and Digital Oasis. If there is a conflict between these Terms and any terms'}
            {'and conditions posted for any additional Digital Oasis services separate and apart from these Services, the latter'}
            {'terms and conditions will take precedence with respect to your use of those services.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'3. HOW OUR SERVICES WORK'}</p>
          <p className={classes.listText}>
            {'WorldStage has always been known as an innovator in the live event marketplace. COVID-19 has changed the face of '}
            {'the events landscape. WorldStage has risen to meet that challenge with Digital Oasis. A platform that has been '}
            {'designed and built for the event market. Digital Oasis Service consists of multiple parts: The At-Home experience '}
            {'for presenters will provide night quality video transmission and real-time bi-directional communication with the '}
            {'production team as well as the attendees. The video control experience which will be similar to a “backstage” '}
            {'environment at a show where the production team will have access to monitoring the live event and well as the '}
            {'control gear to put on the show. Finally we have the attendee experience as a customizable website that will act '}
            {'as the “venue” for the live event or conference.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'4. ACCOUNT REGISTRATION'}</p>
          <p className={classes.listText}>
            {'In order to access the Services, you must register for an account. To register manually, you must provide your '}
            {'name, your email address, your mailing address and any other information specified in the registration form. '}
          </p>
          <p className={classes.listText}>
            {'Your Digital Oasis Account will be created for your use of the Services based upon the information you provide to '}
            {'us. You represent and warrant:'}
          </p>
          <ul className={classes.secondaryList}>
            <li>
              <p className={classes.listTextTwo}>
                {'1. The information you provide or connect to the Services is true, accurate, current, and complete; '}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'2. you have been authorized by your Event Producer to use the Services; and 3. you will maintain and promptly '}
                {'update the information you provide to keep it at all times true, accurate, current, and complete.'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'3. you will maintain and promptly update the information you provide to keep it at all times true, accurate,'}
                {'current, and complete.'}
              </p>
            </li>
          </ul>

          <br />

          <p className={classes.listText}>
            {'You are solely responsible for maintaining the strict confidentiality of your account, and for any and all damages'}
            {'or losses that may be incurred or suffered as a result of any activities on your account. You agree not to allow'}
            {'another person to use your account to access the Services.'}
          </p>
          <p className={classes.listText}>
            {'If a parent or guardian becomes aware that his or her child has provided us with information about their consent,'}
            {'he or she should contact us at [[CONTACT EMAIL]] so we can promptly delete that information.'}
          </p>
        </li>

        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'5. USER CONDUCT'}</p>
          <p className={classes.listText}>
            {'You understand and agree that you are solely responsible for compliance with any and all laws, rules, and'}
            {'regulations that may apply to your use of the Services. You further agree that you will not:'}
          </p>

          <ul className={classes.secondaryList}>
            <li>
              <p className={classes.listTextTwo}>{'1. violate these Terms;'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'2. access or use our Services to use, expose, or allow to be used or exposed, any content that Digital Oasis'}
                {'does not make available through the Services, including any content licensed from a third party that is not'}
                {'already publicly displayed by Digital Oasis, that in any way is inconsistent with these Terms or our Privacy'}
                {'Policy, or that in any way that violates the privacy rights or any other rights of any users or third party;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'3. use the Services in a manner that falsely implies Digital Oasis’ endorsement, partnership, or otherwise'}
                {'misleads others as to your affiliation with Digital Oasis;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'4. interfere with or damage our Services;'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'5. use our Services to transmit any information concerning any other person or entity, including without'}
                {'limitation, photographs of others, without their permission;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'6. register for more than one Account or register for an Account on behalf of an individual other than'}
                {'yourself;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'7. impersonate any person or entity, submit information to the Services that are false or misleading, or'}
                {'falsify or otherwise misrepresent yourself or your affiliation with any person or entity.'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'8. Copy, distribute, perform, or display any Services content.'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'9. Derive specifications from, reverse engineer, reverse compile, disassemble, translate, record, or create'}
                {'derivative works based on the Services or any Services content.'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'10. Use the Services, or any Services content, in a way that is abusive, deceptive, or unlawful.'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'11. Re-identify Services content.'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'12. Reveal or attempt to reveal to anyone, for any reason, the identity of any user or any individual who is'}
                {'the subject of any Services content.'}
              </p>
            </li>
          </ul>
        </li>
        <br />
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'6. COLLECTION AND USE OF DATA'}</p>
          <p className={classes.listText}>
            {'As you use the Services, Digital Oasis will gather and use information about you for a variety of lawful purposes,'}
            {'including to provide, support and improve the Services, to integrate the Services with third-party service'}
            {'providers, and to create anonymized data that may be used for lawful business purposes. Digital Oasis’ collection'}
            {'and use of data through the Services is governed by, and described in more detail in our corresponding Privacy'}
            {'Policy. By using the Services, you agree to be bound by the terms of our Privacy Policy.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'7. INTELLECTUAL PROPERTY'}</p>
          <p className={classes.listText}>
            {'The Services are protected by copyright, trademark, and other laws of the United States. You acknowledge and agree'}
            {'that the Services, including all associated intellectual property rights, are the exclusive property of Digital'}
            {'Oasis and its licensors, and as such are used for identification purposes only. You will not remove, alter or'}
            {'obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying'}
            {'the Services.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'8. COPYRIGHT POLICY'}</p>
          <p className={classes.listText}>
            {'Digital Oasis respects copyright law and expects its users to do the same. In accordance with the Digital'}
            {
              'Millennium Copyright Act (“DMCA”) of 1998, the text of which may be found on the U.S. Copyright Office website at'
            }{' '}
            <a href="https://www.copyright.gov/legislation/dmca.pdf" className={classes.linkTo}>
              {'https://www.copyright.gov/legislation/dmca.pdf'}
            </a>{' '}
            {'Digital Oasis will respond expeditiously to claims of copyright infringement committed using the Diagnosis'}
            {'Services that are reported to us, provided they meet the criteria below.'}
          </p>
          <p className={classes.listText}>
            {'If you are a copyright owner, or a designated agent thereof, please report alleged copyright infringements taking'}
            {'place on or through the Services by providing us the following information:'}
          </p>

          <ul className={classes.secondaryList}>
            <li>
              <p className={classes.listTextTwo}>
                {'1. the identity of the copyrighted work that you claim has been infringed, or, if multiple copyrighted works'}
                {'are covered by this Notice, a comprehensive list of the copyrighted works that you claim have been infringed;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'2. the material that you claim is infringing, and information reasonably sufficient to permit us to locate the'}
                {'material, including at a minimum, the URL of the link shown on the Services where such material may be found;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'3. your mailing address, telephone number, and, if available, email address;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'4. a statement that you have a good faith belief that the disputed use of the copyrighted material is not'}
                {'authorized by the copyright owner, its agent, or the law;'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'5. a statement that the information in this Notice is accurate and, under penalty of perjury, that you are the'}
                {'owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the'}
                {'copyright that is allegedly infringed; and'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'6. your full legal name and your electronic or physical signature.'}</p>
            </li>
          </ul>

          <br />
          <p className={classes.listText}>{'You may deliver this notice, with all items completed, to us:'}</p>
          <p className={classes.boldText}>{'Copyright Agent Digital Oasis'}</p>

          <p className={classes.listText}>
            {'Upon receipt of the Notice as described below, Digital Oasis will take whatever action, in its sole discretion, it'}
            {'deems appropriate, including removal of the challenged material from the Services.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'9. FEEDBACK'}</p>
          <p className={classes.listText}>
            {'We encourage you to provide feedback, comments, and suggestions for improvements to the Services (“Feedback”). You'}
            {'may submit Feedback by emailing us or by filling out a form on our website. You acknowledge and agree that if you'}
            {'submit any Feedback to us, you hereby grant to us a non-exclusive, perpetual, irrevocable, royalty-free,'}
            {'sub-licensable and transferable license under any and all intellectual property rights that you own or control in'}
            {'relation to the Feedback that allows us to use and exploit the Feedback for any purpose.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'10. DISCLAIMER'}</p>
          <p className={classes.boldText}>
            {'DO NOT USE OUR SERVICES IN THE EVENT OF A MEDICAL EMERGENCY. IN AN EMERGENCY, IF WITHIN THE UNITED STATES, CALL'}
            {'911 OR YOUR LOCAL EMERGENCY ASSISTANCE NUMBER.'}
          </p>
          <p className={classes.listText}>
            {'Digital Oasis is a live event platform, and is not intended to serve the following needs: medical emergencies or'}
            {'urgent situations, for use in hazardous circumstances or for uses requiring fail-safe performance; or in'}
            {'situations where failure could lead to death or personal injury (collectively, “Unauthorized Purposes”). You'}
            {'should not use the Services for such Unauthorized Purposes or under similar circumstances.'}
          </p>
          <p className={classes.boldText}>
            {'THE SERVICES ARE PROVIDED “AS IS” AND WITH ALL FAULTS. WORLDSTAGE HEREBY DISCLAIMS ANY AND ALL WARRANTIES EXPRESS'}
            {'AND IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,'}
            {'NON-INFRINGEMENT, OR ANY OTHER WARRANTY, CONDITION, OR GUARANTEE, WHETHER ORAL OR IN WRITING. NO ADVICE OR'}
            {'INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM WORLDSTAGE OR THROUGH THE SERVICES WILL CREATE ANY WARRANTY.'}
          </p>
        </li>

        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'11. LIMITATION OF LIABILITY'}</p>
          <p className={classes.boldSecondaryText}>
            {'WORLDSTAGE’S ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO ANY DISPUTE WITH DIGITAL OASIS (INCLUDING'}
            {'WITHOUT LIMITATION YOUR USE OF THE SERVICES) IS TO DISCONTINUE YOUR USE OF THE SERVICES WITHIN THE LIMITATIONS SET'}
            {'OUT BY STATUTORY LAW. WORLDSTAGE AND ITS VENDORS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,'}
            {'CONSEQUENTIAL OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF THE SERVICES OR FOR ANY OTHER CLAIM RELATED IN ANY WAY'}
            {'TO YOUR USE OR REGISTRATION WITH DIGITAL OASIS. THESE EXCLUSIONS FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL,'}
            {'CONSEQUENTIAL OR EXEMPLARY DAMAGES INCLUDE, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOST DATA, LOSS OF'}
            {'GOODWILL, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, EVEN IF'}
            {'WORLDSTAGE HAD BEEN ADVISED OF THE POSSIBILITY OF THEM AND REGARDLESS OF THE LEGAL OR EQUITABLE THEORY UPON WHICH'}
            {'THE CLAIM IS BASED. WORLDSTAGE DOES NOT ENDORSE, WARRANT OR GUARANTEE ANY PRODUCT OR SERVICE OFFERED THROUGH THE'}
            {'SERVICES AND WILL NOT BE A PARTY TO, OR IN ANY WAY BE RESPONSIBLE FOR, MONITORING ANY TRANSACTION BETWEEN YOU AND'}
            {'THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. IN ANY EVENT, IF ANY OF THE ABOVE PROVISIONS IN THIS SECTION ARE'}
            {'NOT ENFORCEABLE IN AN APPLICABLE JURISDICTION, THE MAXIMUM LIABILITY OF WORLDSTAGE WILL BE LIMITED TO, AT THE SOLE'}
            {'DISCRETION OF WORLDSTAGE, EITHER THE (1) CORRECTION OR DELETION OF ANY INACCURATE CONTENT OR LINK; OR (2) REFUND'}
            {'OF ANY FEES FOR THE SERVICES RECEIVED BY WORLDSTAGE FROM YOU.'}
          </p>
        </li>

        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'12. INDEMNITY'}</p>
          <p className={classes.listText}>
            {'You agree to defend, indemnify, and hold WorldStage and its officers, directors, employees and agents, harmless '}
            {'from and against any claims, liabilities, damages, losses, and expenses, proceedings or demands including, without '}
            {'limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or '}
            {'use of the Services or your violation of these Terms.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'13. TERMS AND TERMINATION'}</p>
          <p className={classes.listText}>
            {'These Terms are effective and binding on you when you begin using the Services, and will remain in effect for as '}
            {'long as you continue to use the Services or until they are amended or modified by Digital Oasis, or terminated by '}
            {'WorldStage according to this section. WorldStage may immediately, without notice, terminate these Terms and '}
            {'disable your access to the Services if WorldStage, in its sole discretion, determines that (i) you have breached '}
            {'these Terms; (ii) you have provided inaccurate, fraudulent, outdated or incomplete information during account '}
            {'registration; (iii) you have violated applicable laws, regulations or third party rights; or (iv) WorldStage '}
            {'believes in good faith that such action is reasonably necessary to protect the safety or property of other users,'}
            {'WorldStage, or third parties. WorldStage may, at any time, and for any reason or no reason whatsoever, choose to'}
            {'cease providing the Services.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'14. NO WAIVER; SEVERABILITY'}</p>
          <p className={classes.listText}>
            {'The failure of Digital Oasis to enforce any right or provision of these Terms will not constitute a waiver of '}
            {'future enforcement of that right or provision. The waiver of any such right or provision will be effective only if '}
            {'in writing and signed by a duly authorized representative of Digital Oasis. If for any reason a court of competent '}
            {'jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the '}
            {'maximum extent permissible and the other provisions of these Terms will remain in full force and effect.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'15. GOVERNING LAW'}</p>
          <p className={classes.listText}>
            {'These Terms (and any further rules, policies, or guidelines incorporated by reference) shall be governed and '}
            {'construed in accordance with the laws of New York. Except where such claims are barred by the Binding Arbitration'}
            {'section below, any action based on, relating to, or alleging breach of these Terms must be brought in state or '}
            {'federal courts in New York, New York. You agree to submit to the personal jurisdiction the state and federal '}
            {'courts for New York for any actions for which the parties retain the right to seek injunctive or other equitable '}
            {'relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or '}
            {'violation of a party’s copyrights, trademarks, trade secrets, or patents.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'16. DISPUTE RESOLUTION'}</p>
          <p className={classes.listText}>
            {'Under these Terms, you agree that any dispute, claim, or controversy arising out of or relating to these Terms'}
            {'shall be resolved by confidential binding arbitration administered by the American Arbitration Association (AAA) '}
            {'in New York, New York, or another forum mutually agreed upon by you and Digital Oasis, pursuant to the  '}
            {'Arbitration Rules of the AAA by a sole arbitrator nominated by agreement of you and Digital Oasis and confirmed in'}
            {'accordance with the Rules. If AAA is not hearing consumer commercial disputes at the time, Digital Oasis may'}
            {'select another arbitral body at its sole discretion. The arbitrator’s award will be binding and may be entered as'}
            {'a judgment in a court of competent jurisdiction. This clause shall not preclude WorldStage from seeking'}
            {'provisional remedies in aid of arbitration from a court of appropriate jurisdiction, or to seek injunctive relief '}
            {'in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or'}
            {'violation of our copyrights, trademarks, trade secrets, or patents.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'17. ENTIRE AGREEMENT'}</p>
          <p className={classes.listText}>
            {'These Terms constitute the entire agreement between you and Digital Oasis regarding your use of the Services.'}
          </p>
        </li>
        <li className={classes.listItemHeader}>
          <p className={classes.listItemHeader}>{'18. CONTACT US'}</p>
          <p className={classes.listText}>
            {'If you have any questions about Digital Oasis or these Terms, you can contact us at contact'}
            {'oasis.help@worldstage.com'}
          </p>
        </li>
      </ul>
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: '45px 20px',
      borderRadius: 20,
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      maxWidth: '82.5%',
      lineHeight: 1.3,

      [theme.breakpoints.up('lg')]: {
        padding: '70px 100px',
      },
    },
    primaryHeader: {
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 36,
      marginBottom: 5,
    },
    subtextHeader: {
      color: colors.brownishGrey,
      fontSize: 18,
      paddingTop: 6,
      fontWeight: 400,
    },
    secondaryText: {
      color: colors.brownishGrey,
      paddingTop: 20,
      paddinBottom: 8,
    },
    boldSecondaryText: {
      color: colors.brownishGrey,
      paddingTop: 20,
      marginBottom: 20,
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    boldText: {
      color: colors.brownishGrey,
      paddingTop: 10,
      marginBottom: 8,
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    linkTo: {
      color: colors.marineBlue,
      textDecoration: 'none',
    },
    primaryList: {
      listStyle: 'none',
      marginTop: 25,
      marginLeft: 25,
      [theme.breakpoints.up('sm')]: {
        marginLeft: '112px',
      },
    },
    secondaryList: {
      listStyle: 'none',
      lineHeight: 1.5,
      marginTop: 12,
      marginLeft: 25,
      color: colors.blackTwo,
      [theme.breakpoints.up('sm')]: {
        marginLeft: '112px',
      },
    },
    listItemHeader: {
      color: colors.coolBlue,
      paddingTop: 3,
      fontWeight: 500,
    },
    listText: {
      color: colors.brownishGrey,
      paddingBottom: 10,
      paddingTop: 10,
      wordWrap: 'break-word'
    },
    listTextTwo: {
      color: colors.blackTwo,
    },
  })();

export type ContentTermsProps = Props;
export default ContentTerms;
