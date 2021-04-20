import {
  makeStyles,
  Paper,
  Theme,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Title } from 'components/Common';
import React, { FC } from 'react';
import { colors, mc, Style } from 'styles';

interface Props {
  style?: Style;
  className?: string;
}

export const ContentPolicy: FC<Props> = ({ style, className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Paper className={mc(classes.container, className)} elevation={2} style={style}>
      <Title type="h3" className={classes.primaryHeader}>
        {'IRIS PRIVACY POLICY'}
      </Title>

      <p className={classes.secondaryText}>
        {
          'WorldStage, having a place of business as 259 West 30th Street, 12th Floor New York, NY 10001 (also referred to as “Company”, “our”, “us” or “we”) operates an online platform in the name and style of “WorldStage” that enables its partners in the Live Event marketplace to provide a digital event platform to their customers.'
        }
      </p>
      <p className={classes.secondaryText}>
        {
          'Your privacy is very important to us. This Privacy Policy covers: (i) the types of information collected from the users through WorldStage including sensitive personal data or information; (ii) the purpose, means and modes of usage of such information; (iii) your rights as a user of WorldStage; and (iv) how and to whom such information which has been collected will be disclosed.'
        }
      </p>
      <p className={classes.secondaryText}>
        {
          'For the purpose of this Privacy Policy, wherever the context so requires “you”, “your” or “user” shall mean any natural person who uses WorldStage.'
        }
      </p>
      <p className={classes.boldText}>{'Additional terms related to data privacy laws in certain countries:'}</p>
      <p className={classes.secondaryText}>
        {
          'For the purposes of interpreting data privacy laws and regulations in certain countries (including the European Union General Data Protection Regulation or “GDPR”, and the United Kingdom 2018 Data Protection Act), we are considered to be a “data processor” of the Personal Information that is collected and processed through WorldStage. We process your personal data on behalf of your Live Event Provider, who is the “data controller” of that Personal Information. We provide more information in the section titled '
        }
        <strong className={classes.boldParagpraphText}>
          {'“Information for Users Located in the European Union or United Kingdom”'}
        </strong>
        {', about how we protect the rights granted to you under these laws, and how you can exercise those rights.'}
      </p>
      <p className={classes.secondaryText}>
        {
          'To the extent allowed by law, we reserve the right to make changes to this Privacy Policy at any time. Any such modifications will become effective immediately upon posting on WorldStage’s application and your continued use of WorldStage and/or the Services (as defined in the Terms of Use) constitutes your agreement to such modifications. You agree to periodically review the current version of the Privacy Policy as posted on WorldStage’s application. If you do not agree with the terms of this Privacy Policy, please do not use WorldStage and/or the Services.'
        }
      </p>

      <Title type="h3" className={classes.secondaryHeader}>
        {'Information that we collect'}
      </Title>
      <p className={classes.secondaryText}>
        {'Information that is collected as you use WorldStage is summarized in the following table:'}
      </p>
      <br />
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell colSpan={2} key={1} className={classes.hiddenTableHeader}>
                {''}
              </TableCell>
              <TableCell colSpan={3} key={1} className={classes.tableHeaderCell}>
                {'collected from'}
              </TableCell>
            </TableRow>
            <TableRow className={classes.headerRow}>
              <TableCell key={2} className={classes.headerCell}>
                {'type of information'}
              </TableCell>
              <TableCell key={3} className={classes.headerCell}>
                {'when it is collected'}
              </TableCell>
              <TableCell key={4} className={classes.headerCell}>
                {'you '}
              </TableCell>
              <TableCell key={5} className={classes.headerCell}>
                {'live event provider'}
              </TableCell>
              <TableCell key={5} className={classes.headerCell}>
                {'automated means'}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Personal Information'}
              </TableCell>
              <TableCell className={classes.dataCell1} component="td" scope="row" style={{ maxWidth: 308 }}>
                {'Collected from you at registration or provided to us by your Live Event Provider'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'No'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Sensitive Personal Information'}
              </TableCell>
              <TableCell className={classes.dataCell1} component="td" scope="row" style={{ maxWidth: 308 }}>
                {'When you submit any information in our app'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'No'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Chat Messages'}
              </TableCell>
              <TableCell className={classes.dataCell1} component="td" scope="row" style={{ maxWidth: 308 }}>
                {'When you use the chat functionality in our app'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'No'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Activity Information'}
              </TableCell>
              <TableCell className={classes.dataCell1} component="td" scope="row" style={{ maxWidth: 308 }}>
                {'When you access or use WorldStage'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'No'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'No'}
              </TableCell>
              <TableCell className={classes.dataCell2} component="td" scope="row">
                {'Yes'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <div className={classes.indentRightSection}>
        <Title type="h3" className={classes.secondaryHeader}>
          {'Your Personal Information'}
        </Title>
        <p className={classes.secondaryText}>
          {
            'When you sign up and register with us through WorldStage, we ask you for your Personal Information. “Personal Information” means information that would allow someone to identify or contact you, such as your first and last name, date of birth, e-mail address, and phone number. However, Personal Information does not include aggregated information that, by itself, does not permit the identification of individual persons and does not include Activity Information (defined below).'
          }
        </p>
        <Title type="h3" className={classes.secondaryHeader}>
          {'Your Sensitive Personal Information'}
        </Title>
        <p className={classes.secondaryText}>
          {
            'In order for your Live Event Provider to provide you the Services on WorldStage, we collect the following sensitive personal information: (a) details such as your user ID, Live Event Provider Name, name and type of your scheduled event, date of event, date of your attendance to the event; (b) in the event you use any of our connected devices, we also collect and store details such as location and usage data.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'One special category of Sensitive Personal Information are chat messages. Chat messages are generated by you and your Live Event Provider when you use WorldStage’s chat functionality. We chose to specifically highlight chat messages in this Privacy Policy, because we use a compliant third-party messaging platform to process and deliver those messages.'
          }
        </p>
        <Title type="h3" className={classes.secondaryHeader}>
          {'Cookie Policy'}
        </Title>
        <p className={classes.secondaryText}>
          {
            'When you use WorldStage through a web browser, our servers may automatically record certain information that your device sends (“Activity Information”). Cookies are required for WorldStage to function properly in a web browser. In order to collect these cookies, we leverage the service Lucky Orange.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'Lucky Orange processes Personal Information collected from the Service on behalf of WorldStage. As a visitor of our site(s), WorldStage may collect the following categories of Personal Information through the Lucky Orange service:'
          }
        </p>

        <ul className={classes.primaryList}>
          <li className={classes.listItemHeader}>
            <p className={classes.listItemHeader}>{'1. TRAFFIC DATA'}</p>
            <p className={classes.listText}>
              {
                'As part of the Service, Lucky Orange collects information relating to traffic on the WorldStage website(s), such as; pages visited, the visitor’s mouse movements and clicks, keystroke data, HTML data on a page visited by a visitor if such HTML data includes Personal Information (collectively, “Traffic Data”). Lucky Orange uses Traffic Data to provide Customers with real-time analytics and uptime monitoring.'
              }
            </p>
          </li>
          <li className={classes.listItemHeader}>
            <p className={classes.listItemHeader}>{'2. IP ADDRESS AND HEADER INFORMATION:'}</p>
            <p className={classes.listText}>
              {
                'Through the Service, WorldStage collects and uses IP address and Header Information from visitors when they browse our website(s). Lucky Orange processes your IP address to help WorldStage identify your internet service provider and the geolocation from which You are accessing the Customer website. Lucky Orange processes Header Information on behalf of WorldStage to determine which websites originated traffic into WorldStage’s website, the type of browser You are using, and information about your device and operating system. These details are useful to WorldStage to help us identify issues with and improve our websites. To help protect your privacy, Lucky Orange allows WorldStage to enable IP address masking, which is a feature that removes the last three digits of your IP address before storing it on the Lucky Orange servers.'
              }
            </p>
          </li>
          <li className={classes.listItemHeader}>
            <p className={classes.listItemHeader}>{'3. DERIVED DATA:'}</p>
            <p className={classes.listText}>
              {
                'All of the data Lucky Orange collects through the Service, including Personal Information, relates to a visitor’s use of a WorldStage’s website solely. Lucky Orange does not track visitors across other Customer websites. However, Lucky Orange does aggregate (i.e., combine your data with the data of others to create a statistical summary that removes all personally identifiable information) Traffic Data to further our legitimate interests in providing statistical benchmarking data and vertical-driven insights to Lucky Orange Customers. This data, when stripped of all personally identifiable information in combination with the data of others to create a statistical summary, is identified as Derived Data (as defined in the Lucky Orange Terms of Service).'
              }
            </p>
            <p className={classes.subText}>
              {
                'We may occasionally update this Cookie Policy to reflect changes in our practices and services. When we bring changes to this Cookie Policy, the same shall be updated on WorldStage. We therefore recommend that you check this page from time to time to inform yourself of any changes in this Cookie Policy.'
              }{' '}
            </p>
          </li>
        </ul>

        <Title type="h3" className={classes.secondaryHeader}>
          {'HOW WE USE THE INFORMATION'}
        </Title>
        <p className={classes.secondaryText}>
          {
            'We will use your name and user ID number in order to synchronize your user account with your registered account/records of your Live Event Provider.'
          }
        </p>
        <p className={classes.secondaryText}>{'We use your name to customize messaging in the service.'}</p>
        <p className={classes.secondaryText}>
          {
            'Your date of birth is collected and will be used to support 2 (Two) factor authentication to verify your identity. We also use your date of birth to ensure that we are complying with laws protecting children in the countries where we offer our app for download.'
          }
        </p>
        <p className={classes.secondaryText}>
          {'Your email address and Phone Number will be used to communicate the following:'}
        </p>

        <ul className={classes.secondaryList}>
          <li>
            <p className={classes.listTextTwo}>
              {'A. a one-time registration code and instructions for registering your account;'}
            </p>
          </li>
          <li>
            <p className={classes.listTextTwo}>
              {'B. any forgotten password(s) in order to help you access your User Account, upon a request; and'}
            </p>
          </li>
          <li>
            <p className={classes.listTextTwo}>
              {'C. any other communication that we wish to send to you in relation to the Services made available on WorldStage.'}
            </p>
          </li>
        </ul>

        <p className={classes.secondaryText}>
          {
            'In order to improve the quality of WorldStage and/or the Services we may ask you to provide us with information regarding your experiences on Day to Day on a periodic basis. Customers have the option of choosing not to provide us with this information;'
          }
        </p>
        <p className={classes.secondaryText}>
          {'We will use the information that we collect for the following purposes related to the Services:'}
        </p>
        <ul className={classes.secondaryList}>
          <li>
            <p className={classes.listTextTwo}>{'A. To track your usage of the Services;'}</p>
          </li>
          <li>
            <p className={classes.listTextTwo}>{'B. To improve the quality, features and functionality of the Services;'}</p>
          </li>
          <li>
            <p className={classes.listTextTwo}>{'C. To improve the security of the Services;'}</p>
          </li>
          <li>
            <p className={classes.listTextTwo}>{'D. To back up our systems and allow for disaster recovery; and'}</p>
          </li>
          <li>
            <p className={classes.listTextTwo}>
              {'E. As may be necessary to enforce the terms of this Policy or your Terms of Use.'}
            </p>
          </li>
        </ul>
        <br />
        <Title type="h3" className={classes.secondaryHeader}>
          {'INFORMATION FOR USERS LOCATED IN THE EUROPEAN UNION OR UNITED KINGDOM'}
        </Title>

        <p className={classes.secondaryText}>
          {
            'Individuals who reside in the European Union (“EU”) or the United Kingdom (“UK”) have “data subject” rights which may be subject to limitations and/or restrictions. You can exercise your privacy rights or send privacy related queries to us at any time by sending us an email at '
          }
          <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
            {'Info@meetiris.com'}
          </a>
          {'.'}
        </p>
        <p className={classes.secondaryText}>
          {
            'If you do not live in a country where you are legally entitled to these rights, we will still respect a request from you to exercise any of these rights to the extent that we are able.'
          }
        </p>

        <Title type="h3" className={classes.secondaryHeader}>
          {'LEGAL BASIS FOR PROCESSING PERSONAL DATA'}
        </Title>

        <p className={classes.secondaryText}>{'We process personal data based on one or more of the following:'}</p>
        <div className={classes.bulletList}>
          <ul className={classes.secondaryList}>
            <li>
              <p className={classes.listTextTwo}>
                {
                  '● As a “data processor” we rely primarily on the fact that your Live Event Provider (the “data controller”) is legally entitled to collect information through our app, and that we have a legal obligation to process your Personal Information and Sensitive Personal Information on your Live Event Provider’s behalf. Because we want to make sure we are respecting your rights, we are happy to provide more details about those rights here. Please note that as a data processor, we may have a limited ability to respond to your requests directly. If we are unable to act on your request ourselves, we will let you know, and promptly forward your request to your Live Event Provider.'
                }
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {
                  ' ● In other instances, we may process your Personal Information and/or Sensitive Personal Information based on either our legitimate interests, or the legitimate interests of your Live Event Provider.'
                }
                <br />
                {
                  'o Some examples of your Live Event Provider’s legitimate interests are that your Live Event Provider is using our app as a part of your care experience, and that the information you are providing is a part of the medical record your Live Event Provider is keeping about you.'
                }
                <br />
                {
                  'o Some examples of our legitimate interests are that we may need to use personal data if we’re troubleshooting issues with, or testing improvements to our app. Depending on those purposes, you may have the right to opt-out of such processing. You may do so by contacting us as described in the “How to Reach Us” section'
                }
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {
                  ' ● A note about automated processing: Some functionality of WorldStage will automatically notify your Live Event Provider to reach out to you through WorldStage’s chat functionality based on certain information that you may provide through questionnaires. This processing is an essential function of WorldStage, and we and your Live Event Provider believe that we have “compelling, legitimate grounds” to process your Personal Information in this way. If you have concerns about our use of automated processing, you are welcome to contact us, or you can raise those concerns with your Live Event Provider.'
                }
              </p>
            </li>
          </ul>
        </div>
        <Title type="h3" className={classes.secondaryHeader}>
          {'YOUR PRIVACY RIGHTS AND HOW TO CONTACT US '}
        </Title>
        <p className={classes.secondaryText}>
          {
            'Users of WorldStage are considered to be “data subjects” under applicable data protection laws (including the European Union General Data Protection Regulation or “GDPR” and the United Kingdom 2018 Data Protection Act). You can exercise your privacy rights or send privacy related queries to us at any time by sending us an email at '
          }
          <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
            {'Info@meetiris.com'}
          </a>
          {'.'}
        </p>
        <p className={classes.secondaryText}>
          {
            'This section discusses what those rights are, and what you may request from us. As discussed elsewhere in this Privacy Policy, we are considered a “data processor” of your Live Event Provider (who is the “data controller” of your Personal Information and Sensitive Personal Information). As such, we may have a limited ability to respond to your requests directly. However, if we are unable to act on your request ourselves, we will let you know, and promptly forward your request to your Live Event Provider.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'Right to access your information – Information that you provide, and information that we derive from what you provide (such as answers to questionnaires or chat messages between you and your Live Event Provider) are generally available for you to view. However, you may also ask us to provide supplementary information about:'
          }
        </p>
        <div className={classes.bulletList}>
          <ul className={classes.secondaryList}>
            <li>
              <p className={classes.listTextTwo}>
                {'● Information about you stored in our databases that is not visible to you through our app'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'● The categories of data that we are processing'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'● The purposes of data processing'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'● The categories of third-parties who we disclose data to'}</p>
            </li>
            <li>
              <p className={classes.listTextTwo}>
                {'● How long we will store data, and the criteria that we use to determine how long data will be stored'}
              </p>
            </li>
            <li>
              <p className={classes.listTextTwo}>{'● Your other rights regarding our use of data'}</p>
            </li>
          </ul>
        </div>
        <p className={classes.secondaryText}>
          {
            'We will provide you with the information that you have requested within 30 days of receiving your request. If providing you with any piece of information that you have requested would affect the rights and freedoms of another person, we won’t be able to share that piece of information. If we can’t provide a complete response to your request for information based on that reason, we will inform you. We will still provide you with all of the other information that you have requested that we are able to share.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'Right to correct your information – In the event that you provide, or that we collect any inaccurate information about'
          }
          {
            'you, we forward your request to your Live Event Provider. If you have a concern about the accuracy of your information, you also have a right to ask us to temporarily restrict the processing of your Personal Information, while its accuracy is verified. To ask us to restrict processing, you may contact our privacy team at '
          }
          <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
            {'Info@meetiris.com'}
          </a>
          {'.'}
        </p>
        <p className={classes.secondaryText}>
          {
            'Right to object to certain kinds data processing - In certain circumstances, such as if you believe your Personal Information has been recorded inaccurately, you may object to us processing your data, either temporarily, or for those purposes. To object to processing, you can contact our privacy team at '
          }
          <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
            {'Info@meetiris.com'}
          </a>
          {'. While we evaluate your objection, you may also ask us to temporarily restrict processing of your data. '}
          <strong className={classes.boldSecondaryText}>
            {
              'WorldStage does not use any personal data that we collect, either from you or from your Live Event Provider, for marketing purposes.'
            }
          </strong>
        </p>
        <p className={classes.secondaryText}>
          <strong className={classes.boldItalicText}>{'Right to your data in a portable format – '}</strong>
          {
            'With agreement from, and at the direction of your Live Event Provider, we will give you an extract of your data so that you can provide it to another service. If you ask us and it is technically possible, we will directly transfer the data to the other service for you. We will not provide any information to the extent that this involves disclosing data about any other individual.'
          }
        </p>
        <p className={classes.secondaryText}>
          <strong className={classes.boldItalicText}>{'Right to erasure - '}</strong>
          {'You can contact our privacy team at '}
          <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
            {'Info@meetiris.com'}
          </a>
          {
            ' to request erasure of any Personal Information that we hold about you. You understand that because your personal data has been collected on behalf of your Live Event Provider, we will likely need to forward any such request to your Live Event Provider for review and approval, before we can act on a request to erase data.'
          }
        </p>
        <p className={classes.secondaryText}>
          <strong className={classes.boldItalicText}>{'Right to lodge a complaint – '}</strong>
          {
            'If you have any concerns about how we are handling your Personal Information, you have a right to file a complaint with the data protection authority, or other relevant regulator, in your country. However, we are dedicated to protecting your personal data and we want to make sure you feel safe when you process it, and if you have any concerns about how we are processing your Personal Information, we would appreciate the opportunity to resolve the issue before you contact the data protection authority. You can contact our privacy team at '
          }
          <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
            {'Info@meetiris.com'}
          </a>
          {'.'}
        </p>
        <p className={classes.secondaryText}>
          <strong className={classes.boldItalicText}>{'Right to withdraw your consent – '}</strong>
          {
            'At any point, you may contact us to withdraw your consent for us to collect or process your Personal Information. Because we process your Personal Information on behalf of your Live Event Provider, we will forward any such request that we receive to your Live Event Provider for review. Withdrawing your consent will require us to delete your account and suspend your access to our app.'
          }
        </p>

        <Title type="h3" className={classes.secondaryHeader}>
          {'DISCLOSURE OF THE INFORMATION'}
        </Title>

        <p className={classes.secondaryText}>
          {
            'We do not sell, trade, or rent your Personal Information or your Sensitive Personal Information to any third party, and we only disclose your Personal Information and your Sensitive Personal Information to third-parties as described in the section '
          }
          <strong className={classes.boldSecondaryText}>{'“Third Party Service Providers”. '}</strong>
          {
            'However, we cannot completely ensure that such information will not be disclosed to third parties. For example, we may be legally obliged to disclose information to the government or third parties under certain circumstances, third parties may circumvent our security measures to unlawfully intercept or access transmissions or private communications, or an error may occur in the administration of WorldStage. In the unlikely event that we need to investigate or resolve possible problems or inquiries, we may, and you authorize us to, disclose any information about you to government officials as permitted by applicable law.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'We reserve the right to disclose any Personal Information and/or Sensitive Personal Information as required by applicable law and when we believe, at our sole discretion that disclosure is necessary to protect our rights, protect someone from injury and/or to comply with a judicial proceeding, court order, or legal process served on WorldStage.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'If we become involved in a merger, acquisition, or any form of sale of some or all of its assets, Personal Information and Sensitive Personal Information will be transferred to the new entity to continue providing WorldStage.'
          }
        </p>

        <Title type="h3" className={classes.secondaryHeader}>
          {'INFORMATION RETENTION'}
        </Title>

        <p className={classes.secondaryText}>
          {
            'Once we receive a request to deactivate your User Account, we will forward that request to your Live Event Provider for processing. Once complete, we will deactivate your User Account. We will destroy your Personal Information and Sensitive Personal Information, if we are able to do so, however, because that information may be a part of your medical record, we may be required by your Live Event Provider to maintain certain information indefinitely for their purposes. Data that was already de-identified and/or aggregated at the time that we received your request will not be deleted, however we will render it impossible to re-identify you as the subject of that data.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'We keep database backups of your Personal Information and Sensitive Personal Information for the purposes of recovering from an outage. On deactivation of your User Account, those backup records will be deleted after 7 (seven) days from the date of deactivation of your User Account.'
          }
        </p>

        <Title type="h3" className={classes.secondaryHeader}>
          {'THIRD PARTY SERVICE PROVIDERS'}
        </Title>
        <p className={classes.secondaryText}>
          {
            'You acknowledge that your personal information and/or sensitive personal information may be shared with our third party service providers for monitoring your WorldStage usage patterns, enabling your chat/text/message communications through WorldStage. Some of these third parties may be located outside of your home country. We will ensure that all adequate safeguards are in place and that all applicable laws and regulations are complied with in connection with such transfers.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'We share information with these third parties to the minimum extent necessary for the functioning of our app. Any time we share data, it is done according to the safeguards and practices described in this Privacy Policy.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'This table lists the types of activities we use service providers for, where they process the data that they receive and why they need it:'
          }
        </p>
      </div>
      <br />
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell key={2} className={classes.headerCell2}>
                {'activity'}
              </TableCell>
              <TableCell key={3} className={classes.headerCell2}>
                {'purpose'}
              </TableCell>
              <TableCell key={4} className={classes.headerCell2}>
                {'user location'}
              </TableCell>
              <TableCell key={5} className={classes.headerCell2}>
                {'place of processing'}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.headerRow}>
              <TableCell key={2} className={classes.dataCell3}>
                {'Application or Website Hosting'}
              </TableCell>
              <TableCell key={3} className={classes.dataCell4}>
                {
                  'We work with third-party cloud hosting providers to host our app and our website, and to help us manage our cloud infrastructure in a secure and compliant manner.'
                }
              </TableCell>
              <TableCell key={5} className={classes.dataCell3}>
                {'Global (other than the UK or EU)'}
                <br />
                <br />
                {'UK or EU'}
              </TableCell>
              <TableCell key={5} className={classes.dataCell3}>
                {'United States'}
                <br />
                <br />
                {'UK and Germany'}
              </TableCell>
            </TableRow>
            <TableRow className={classes.headerRow}>
              <TableCell key={2} className={classes.dataCell3}>
                {'Chat Functionality'}
              </TableCell>
              <TableCell key={3} className={classes.dataCell4}>
                {'We work with a compliant, third-party chat platform provider to enable WorldStage’s chat functionality.'}
              </TableCell>
              <TableCell key={5} className={classes.dataCell3}>
                {'Global (other than the UK or EU)'}
                <br />
                <br />
                {'UK or EU'}
              </TableCell>
              <TableCell key={5} className={classes.dataCell3}>
                {'United States'}
                <br />
                <br />
                {'UK and Germany'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div className={classes.indentRightSection}>
        <Title type="h3" className={classes.secondaryHeader}>
          {'SECURITY PROCEDURES'}
        </Title>

        <p className={classes.secondaryText}>
          {
            'We follow cloud and technology industry best practices to implement technical safeguards to protect your personal data, consistent with all applicable data protection laws. We review the effectiveness of these safeguards on a regular basis to evaluate our compliance with applicable laws and regulations. We take these precautions in an effort to protect your personal data. However, we do not guarantee that personal data may not be accessed, disclosed, altered, or destroyed as a result of a security breach. By using our app, you understand the risks of providing your personal data.'
          }
        </p>
        <p className={classes.secondaryText}>
          {
            'In the event of a security breach, we commit to complying with all local, state and national laws to notify you and any relevant data protection authorities, to the extent required under applicable laws.'
          }
        </p>
        <div className={classes.closing}>
          <Title type="h3" className={classes.secondaryHeader}>
            {'PRIVACY TEAM'}
          </Title>
          <p className={classes.secondaryText}>{'The contact details of our privacy team are provided below:'}</p>
          <p className={classes.secondaryText}>
            {'E-mail Address:'}{' '}
            <a href="mailto:Info@meetiris.com" className={classes.linkTo}>
              {'Info@meetiris.com'}
            </a>
          </p>
          <p className={classes.secondaryText}>{'Postal Address: 259 West 30th Street, 12th Floor New York, NY 10001'}</p>
          <p className={classes.endText}>
            <a href="#" className={classes.endText}>
              {'Please check cookie '}
              <strong className={classes.boldParagpraphText}>{'Mention Here'}</strong>
            </a>
          </p>
        </div>
      </div>
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      padding: '88px 123px',
      borderRadius: 20,
      margin: '55px 105px',
      maxWidth: '95%',
      alignItems: 'center',
      position: 'relative',
      lineHeight: 1.5,
      [theme.breakpoints.down('md')]: {
        margin: '35px 20px',
        padding: '45px 24px',
        borderRadius: 30,
      },
      [theme.breakpoints.down('sm')]: {
        margin: '35px 10px',
        padding: '16px 20px',
        paddingBottom: 39,
      },
    },
    primaryHeader: {
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 36,
      marginBottom: 1,
      lineHeight: 1.2,
      [theme.breakpoints.down('md')]: {
        marginBottom: 20,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 9,
      },
    },
    secondaryHeader: {
      fontWeight: 500,
      color: colors.marineBlue,
      fontSize: 30,
      paddingTop: 8,
      lineHeight: 1.2,
    },
    secondaryText: {
      color: colors.brownishGrey,
      paddingTop: 15,
      marginBottom: 8,
    },
    boldText: {
      color: colors.brownishGrey,
      paddingTop: 10,
      marginBottom: 8,
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    boldSecondaryText: {
      color: colors.brownishGrey,
      fontWeight: 500,
    },
    boldItalicText: {
      color: colors.brownishGrey,
      fontWeight: 500,
      fontStyle: 'italic',
    },
    primaryList: {
      listStyle: 'none',
      marginTop: 50,
      [theme.breakpoints.up('lg')]: {
        marginLeft: 150,
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: 68,
        marginTop: 35,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    secondaryList: {
      listStyle: 'none',
      lineHeight: 1.5,
      marginTop: 16,
      marginBottom: 9,
      color: colors.blackTwo,
      [theme.breakpoints.up('lg')]: {
        marginLeft: 150,
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: 68,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    bulletList: {
      marginTop: 50,
      marginBottom: 42,
      [theme.breakpoints.down('md')]: {
        marginTop: 35,
        marginBottom: 27,
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
      fontWeight: 400,
    },
    listTextTwo: {
      color: colors.blackTwo,
    },
    subText: {
      color: colors.brownGrey,
      fontSize: 14,
      fontWeight: 400,
      marginTop: '-5px',
      marginBottom: 66,
      [theme.breakpoints.down('md')]: {
        marginBottom: 35,
      },
    },
    linkTo: {
      color: colors.marineBlue,
      textDecoration: 'none',
    },
    endText: {
      fontSize: 19,
      color: colors.marineBlue,
      textDecoration: 'none',
      fontWeight: 400,
      marginTop: 24,
    },
    indentRightSection: {
      maxWidth: 952,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    tableHeaderCell: {
      color: colors.marineBlue,
      backgroundColor: colors.lightPeriwinkle,
      textTransform: 'uppercase',
      fontWeight: 500,
      justifyContent: 'center',
      alignItems: 'center',
      height: 42,
      textAlign: 'center',
      fontSize: 19,
      padding: 0,
    },
    hiddenTableHeader: {
      background: '#fff',
      border: 'none',
    },
    closing: {
      fontWeight: 500,
      marginTop: 35,
    },
    table: {
      fontSize: 16,
      minWidth: 320,
      width: '100%',
    },
    headerRow: {
      backgroundColor: colors.paleGrey,
    },
    headerCell: {
      color: colors.coolBlue,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 18,
      padding: 0,
      height: 47,
      letterSpacing: 1.44,
    },
    headerCell2: {
      color: colors.coolBlue,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 18,
      padding: 0,
      height: 47,
      width: '25%',
      borderBottom: `20px solid ${colors.white}`,
      letterSpacing: 1.44,
    },
    dataCell1: {
      fontSize: 16,
      backgroundColor: colors.whiteTwo,
      borderLeft: `3px solid ${colors.white}`,
      borderRight: `3px solid ${colors.white}`,
      borderTop: `6px solid ${colors.white}`,
      borderBottom: `6px solid ${colors.white}`,
      color: colors.brownishGrey,
      height: 129,
      textAlign: 'left',
    },
    dataCell4: {
      fontSize: 16,
      backgroundColor: colors.whiteTwo,
      borderTop: `12px solid ${colors.white}`,
      borderBottom: `6px solid ${colors.white}`,
      color: colors.brownishGrey,
      height: 129,
      textAlign: 'left',
    },
    dataCell2: {
      fontSize: 16,
      textAlign: 'center',
      backgroundColor: colors.whiteTwo,
      borderLeft: `3px solid ${colors.white}`,
      borderRight: `3px solid ${colors.white}`,
      borderTop: `6px solid ${colors.white}`,
      borderBottom: `6px solid ${colors.white}`,
      color: colors.brownishGrey,
      padding: '0px 40px',
      height: 129,
    },
    dataCell3: {
      fontSize: 16,
      textAlign: 'left',
      backgroundColor: colors.whiteTwo,
      borderTop: `12px solid ${colors.white}`,
      color: colors.brownishGrey,
      padding: '0px 40px',
      height: 129,
      borderBottom: 'none',
    },
    boldParagpraphText: {
      fontWeight: 500,
    },
  })();

export type ContentPolicyProps = Props;
export default ContentPolicy;
