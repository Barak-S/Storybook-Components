# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.85] - 2021-06-09
### Fixed
- DO-100: Such labels as Logo, Info should be renamed to "Organization logo" and "Organization Information"
- DO-100: Such placeholder as name should be renamed to "Organization Name"
- DO-100: Labels for such areas as Website, Contact Email + loram ipsum should be added
- DO-100: In mobile version fields are too small
- DO-100: Hint icon should be added for Org Logo label
- DO-100: Format validation should be implemented for Email, Phone Number and validation if any required fields are empty should be implemented too
- DO-103: Label at the left hand should be "Event Settings"
- DO-103: Value of PO/Reference Number is displayed wrong if other elements were switched on/off
- DO-103: In Date picker it's possible to select date only for a few days forward, other dates are disabled
- DO-103: Social Media Account block dropdowns should be longer and closer to text fields
- DO-102: In mobile version hint is not shown after clicking on hint icon (only icon's color is changing)
- Socials: changing social type for default fields fixed
- Events: loading events after login fixed

## [1.0.84] - 2021-06-08
### Fixed
- DO-102: Can not select other color in Color Palette correctly
- DO-102: Color picker field changed to maximum width

## [1.0.83] - 2021-06-08
### Fixed
- DO-101: Error toast should be repalced by alert message above fields
- DO-101: Asterisks for First Name, Last Name, Email fields should be added
- DO-101: If nothing is typed "Invite and add another" button should be disabled
- DO-101: Now all fields have an error alert if empty
- DO-101: Cards on the right hand are too close to fields
- DO-101: Invitation message text area should have a resize icon on the right bottom corner according to design
- DO-101: If text is large in Invitation message text area, then it is displayed incorrectly
- DO-101: In right hand cards "Invite sent" label should be colored green
- DO-101: In right hand cards "Resend Invite" link should be underlined
- DO-101: Top and bottom right hand cards are dispaled incorrectly
- DO-101: Right hand cards should have a grey background color
- DO-101: In mobile label and button are too close to each other
- DO-185: QA Edit Event Dashboard

## [1.0.82] - 2021-06-07
### Added
- DO-187: Edit Event Settings API integration

### Fixed
- DO-102: Arrow icons should behave as described in StyleGuide
- DO-102: Label in a hint of Assign Theme toggle is moving up
- DO-102: Color palette elements have strange shadowin

## [1.0.81] - 2021-06-03
### Added
- DO-186: Max social input fields count added

### Fixed
- DO-102: There’s no Save & Continue Later link near Continue button
- DO-102: Alert toast if Themes page is refreshed in the browser
- DO-102: Incorrect Color palette
- DO-103: Setting start date improoved

## [1.0.80] - 2021-06-03
### Added
- DO-186: Edit Event Profile API integration

### Fixed
- Components: country input autocomplete fixed

## [1.0.79] - 2021-06-02
### Added
- Event: PO number added

## [1.0.78] - 2021-06-01
### Added
- Onboarding: select time zone field added

## [1.0.77] - 2021-05-29
### Added
- DO-164: Account organization tab - API integration
- DO-187: Edit Event Settings UI

### Fixed
- Event: city field fixed

## [1.0.76] - 2021-05-27
### Added
- Onboarding: event setup step functionality added

## [1.0.75] - 2021-05-26
### Fixed
- Events: list item navigation fixed

## [1.0.74] - 2021-05-26
### Added
- Events: items, themes api and store added
- DO-186: Edit Event - Sidebar component and routes
- Paywall: plans and pay screens added
- DO-183: New Dashboard Edit screens after fist event setup

### Fixed
- DO-166: Users Tab invite modal QA
- Paywall: storing products functionality changed

## [1.0.73] - 2021-05-20
### Added
- Onboarding: organization form validation added

### Fixed
- DO-85: Dashboard - Event - after adding dropdown icon fixed

## [1.0.72] - 2021-05-20
### Added
- Support: contact api and functionality added

### Fixed
- DO-131: Profile Account Tab page fixes

### Changed
- API: bio text size changed to 5000

## [1.0.71] - 2021-05-16
### Fixed
- DO-166: QA

## [1.0.70] - 2021-05-12
### Fixed
- QA fixes

## [1.0.69] - 2021-05-10
### Added
- Ability to add socials on frontend to companies socials, with form prcessing disabling logic

## [1.0.68] - 2021-05-07
### Added
- Users tab
- Remove user from organization modal

### Fixed
- Account tabs spacing and shadows

## [1.0.67] - 2021-05-03
### Fixed
- DO-127: QA

## [1.0.66] - 2021-05-02
### Fixed
- DO-164: QA

## [1.0.65] - 2021-04-30
### Added
- Onboarding: sending invites draft functionality added

## [1.0.64] - 2021-04-30
### Added
- Profile: Changing password functionality added

## [1.0.63] - 2021-04-30
### Added
- DO-166: Users Tab Desktop and Mobile UI

## [1.0.62] - 2021-04-29
### Added
- Onboarding: filling organization information functionality added

### Changed
- FormSelect menu & menu items styling

### Fixed
- DO-164: QA Organization Tab
- DO-131: Profile Tab QA

## [1.0.61] - 2021-04-28
### Added
- Changing social media accounts at profile functionality added

### Changed
- Social meda accounts component changed

## [1.0.60] - 2021-04-27
### Fixed
- DO-167: Scroll behaviour changed 

## [1.0.59] - 2021-04-27
### Changed
- CI: CloudFront invalidate step added

## [1.0.58] - 2021-04-27
### Fixed
- DO-87: Click on Copy button - events link should be copied to the clipboard
- DO-127: Contact Us page styling QA with form validations
- DO-128: Accordion Sections fixes
- DO-167: Incorrect displaying of FAQ, Terms and Privacy pages

## [1.0.57] - 2021-04-26
### Changed
- API response format changed to support current back-end

## [1.0.56] - 2021-04-23
### Added
- Uploading profile image

### Fixed
- QA env fixed

## [1.0.55] - 2021-04-22
### Changed
- API: app moved to use new api

### Fixed
- DO-134: Account Profile Desktop and Mobile UI
- DO-164: Account Organization Desktop and Mobile UI

## [1.0.54] - 2021-04-21
### Fixed
- DO-128: AccordionSection QA

## [1.0.53] - 2021-04-21
### Fixed
- Dashboard: event view fixes
- DO-129: Policy Page - margins widths desktop

## [1.0.52] - 2021-04-20
### Fixed
- DO-132: Profile Password
- DO-138: Add FAQ page to Auth and Dash screens

## [1.0.51] - 2021-04-19
### Added
- Onboarding: event setup added

### Fixed
- DO-129: Added fixes to policy page and added email link in terms
- DO-138: QA fixes

## [1.0.50] - 2021-04-16
### Added
- DO-120: Setup Session Demo

### Fixed
- DO-138: Add ScreenFooter to Dashboard

## [1.0.49] - 2021-04-15
### Added
- Onboarding: navigation added

## [1.0.48] - 2021-04-13
### Fixed
- DO-138: Footer styling QA and react-router active link

## [1.0.47] - 2021-04-09
### Added
- DO-120: Setup Session Outer page UI

### Changed
- Onboarding: footer functionality added

## [1.0.46] - 2021-04-08
### Changed
- DO-132: Profile Password Tab
- DO-133: Setting Section UI
- Refactoring

## [1.0.45] - 2021-03-29
### Fixed
- Dashboard: event view and onboarding bugfixes

## [1.0.44] - 2021-03-28
### Fixed
- DO-128 : FAQ qa fixes and rework the accordionSection
- DO-129 : Policy page QA fixes

## [1.0.43] - 2021-03-28
### Added
- DO-95: Event setup profiel added, bugfixes

## [1.0.42] - 2021-03-26
### Changed
- DO-160: Change Digital Oasis to Iris

## [1.0.41] - 2021-03-26
### Changed
- Cognito: QA configs changed

## [1.0.40] - 2021-03-26
### Added
- DO-138: Dashboard Footer added

### Fixed
- DO-127: Contact us page QA fixed

## [1.0.39] - 2021-03-26
### Added
- API support
- Internal state manager
- Profile getting/updating functionality

### Fixed
- DO-128: Accordion fixes
- DO-130: Application Terms of Service fixes

## [1.0.38] - 2021-03-23
### Added
- DO-127: Contact Us Page added

### Fixed
- DO-129: QA fixes
- DO-131: Profile refactoring, responsiveness improvements

## [1.0.37] - 2021-03-22
### Fixed
- DO-130: Terms QA fixes

## [1.0.36] - 2021-03-21
### Fixed
- Components, Screens: general UI fixes
- DO-128: QA fixes

## [1.0.35] - 2021-03-19
### Fixed
- DO-129, DO-130: Application Terms of Service and Privacy Policy fixes

## [1.0.34] - 2021-03-18
### Added
- DO-128: FAQ
- DO-129: Privacy Policy
- DO-130: Application Terms of Service
- DO-131: Profile screen added

## [1.0.33] - 2021-03-18
### Added
- HALO-8: User profile component added

## [1.0.32] - 2021-03-16
### Added
- DO-130: Application Terms of Service

## [1.0.31] - 2021-03-14
### Fixed
- DO-86: Dashboard event view fixes

## [1.0.29] - 2021-03-12
### Changed
- Dashboard event view demo added
- Google Sign In feature enabled

## [1.0.29] - 2021-03-10
### Added
- DO-77: Login with Google funcitonality added, but additional work required. Turned off with a feature flag
- DO-86: Event item view added to the Storybook

## [1.0.28] - 2021-03-09
### Added
- DO-83: Dashboard - Upcoming - Add First Event (stepper added)

## [1.0.27] - 2021-03-07
### Changed
- Dev: url changed, cognito configs changed

## [1.0.26] - 2021-03-04
### Fixed
- DO-72: Error message for the twice used email confirmation URL changed
- DO-82: User dropdown menu icon fixed

## [1.0.25] - 2021-03-04
### Fixed
- DO-82: Makin tabs and buttons active after email confirmation fixed

## [1.0.24] - 2021-03-04
### Added
- DO-72: Email Confirmation functionality added
- DO-82: Resend email confirmation functionality added

### Fixed
- DO-36: Reset password message fixed
- DO-82: Botton user navigation buttons colors fixed

## [1.0.23] - 2021-03-03
### Added
- DO-82: Dashboard - Events - Resend Email Confirmation bottom user navigation implemented

### Changed
- DO-117: Remove Social logins until they work

## [1.0.22] - 2021-03-03
### Changed
- Cognito credentials changed for the DEV

## [1.0.21] - 2021-03-03
### Fixed
- DO-82: Dashboard - Events - Resend Email Confirmation implemented

## [1.0.20] - 2021-03-02
### Fixed
- DO-109: Using apostrophe at the first name and last name fixed

## [1.0.19] - 2021-03-02
### Changed
- Cognito: configs moved to the env file
- DO-75: Dashboard view refactored

### Fixed
- DO-109: Symbol of underscore in Sign up screen

## [1.0.18] - 2021-03-01
### Added
- DO-75: Dashboard view improoved (email not confirmed state)

## [1.0.17] - 2021-02-27
### Changed
- DO-32: Signup without email confirmation allowed

### Fixed
- DO-36: Too close to the bottom on mobile version in Safari

## [1.0.16] - 2021-02-25
### Added
- DO-73: "Keep me logged in" state

## [1.0.15] - 2021-02-25
### Fixed
- DO-32: To close to the top

## [1.0.14] - 2021-02-25
### Fixed
- DO-36: Password reset fileds fixed
- DO-36: Recovery screen email filed verification fixes

## [1.0.13] - 2021-02-24
### Changed
- Signup confirmation message changed

### Fixed
- Email confirmation autofill fixed

## [1.0.12] - 2021-02-23
### Added
- DO-36: Forgot Password functionality implemented

## [1.0.11] - 2021-02-23
### Fixed
- Dashboard: bugfixes

## [1.0.10] - 2021-02-23
### Changed
- DO-32: Email confirmation functionality improoved

## [1.0.9] - 2021-02-23
### Fixes
- Auth: fix logo bug

## [1.0.8] - 2021-02-22
### Fixes
- Dashboard responsivnes and mobile menu added
- Signup screen fixes

## [1.0.7] - 2021-02-22
### Added
- Responsivnes added

### Fixed
- Auth screens bugfixes

## [1.0.6] - 2021-02-19
### Fixed
- [DO-32: SignIn/SignUp form data polishers improoved](https://digitaloasis.atlassian.net/browse/DO-32)
- [DO-32: SignIn/SignUp validators fixed](https://digitaloasis.atlassian.net/browse/DO-32)

## [1.0.5] - 2021-02-19
### Fixed
- [DO-38: Typo fixed](https://digitaloasis.atlassian.net/browse/DO-38)

## [1.0.4] - 2021-02-18
### Added
- [DO-38: Template - Desktop Logged in State](https://digitaloasis.atlassian.net/browse/DO-38)

## [1.0.3] - 2021-02-17
### Added
- CI: storybook and tests coverage upload added
- DO-32, DO-34: Icons font added, zeplins colors updated
- Storybook: knobs addon added

### Changed
- Storybook: version upgraded

### Fixed
- SignIn/SignUp form fixes

## [1.0.2] - 2021-02-16
### Added
- [DO-32: Signup functionality implemented](https://digitaloasis.atlassian.net/browse/DO-32)
- [DO-34: Login functionality implemented](https://digitaloasis.atlassian.net/browse/DO-34)

## [1.0.1] - 2021-02-15
### Added
- [DO-32: Signup screen UI implemented](https://digitaloasis.atlassian.net/browse/DO-32)
- [DO-34: Login screen UI implemented](https://digitaloasis.atlassian.net/browse/DO-34)

### Changed
- CI process improoved

## [1.0.0] - 2021-02-10
### Added
- Basic configuration added
- Testing added
