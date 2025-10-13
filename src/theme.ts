import { createTheme } from '@shopify/restyle';
import palette from './palette';

const spacing = {
  0: 0,
  '3xs': 2,
  '2xs': 4,
  xs: 6,
  s: 8,
  sm: 10,
  m: 12,
  l: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 36,
  '6xl': 48,
  '7xl': 56,
  '8xl': 64,
  '9xl': 72,
  '10xl': 80,
};

const rounding = {
  '2xs': 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  'pill': 999,
}

const stroke = {
  xs: 1,
  s: 1.5,
  m: 2,
  l: 2.5,
};

const textVariants = {
  defaults: {
    fontFamily: 'RobotoFlex_400Regular',
    color: 'plannerForeground',
    fontWeight: 400,
    fontSize: {
      tablet: 16,
      phone: 14,
    },
    lineHeight: {
      tablet: 24,
      phone: 16,
    },
  },
  xs: {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 12,
      phone: 10,
    },
    lineHeight: {
      tablet: 16,
      phone: 12,
    },
  },
  s: {
    fontSize: {
      tablet: 14,
      phone: 12,
    },
    lineHeight: {
      tablet: 20,
      phone: 14,
    },
  },
  m: {
    fontSize: {
      tablet: 16,
      phone: 14,
    },
    lineHeight: {
      tablet: 24,
      phone: 16,
    },
  },
  mBold: {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 16,
      phone: 14,
    },
    lineHeight: {
      tablet: 24,
      phone: 16,
    },
  },
  l: {
    fontSize: {
      tablet: 18,
      phone: 16,
    },
    lineHeight: {
      tablet: 28,
      phone: 18,
    },
  },
  lNarrow: {
    fontFamily: 'RobotoFlex_400Narrow',
    fontSize: {
      tablet: 18,
      phone: 16,
    },
    lineHeight: {
      tablet: 28,
      phone: 18,
    },
  },
  lBold: {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 18,
      phone: 16,
    },
    lineHeight: {
      tablet: 28,
      phone: 18,
    },
  },
  xl: {
    fontSize: {
      tablet: 20,
      phone: 18,
    },
    lineHeight: {
      tablet: 28,
      phone: 20,
    },
  },
  '2xl': {
    fontFamily: 'RobotoFlex_400Regular',
    fontSize: {
      tablet: 24,
      phone: 20,
    },
    lineHeight: {
      tablet: 32,
      phone: 24,
    },
  },
  '2xlBold': {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 24,
      phone: 20,
    },
    lineHeight: {
      tablet: 32,
      phone: 24,
    },
  },
  '3xl': {
    fontFamily: 'RobotoFlex_500Wide',
    fontWeight: 500,
    fontSize: {
      tablet: 30,
      phone: 24,
    },
    lineHeight: {
      tablet: 36,
      phone: 30,
    },
  },
  '4xl': {
    fontSize: {
      tablet: 36,
      phone: 30,
    },
    lineHeight: {
      tablet: 42,
      phone: 36,
    },
  },
  '5xl': {
    fontSize: {
      tablet: 48,
      phone: 36,
    },
    lineHeight: {
      tablet: 56,
      phone: 42,
    },
  },
  '6xl': {
    fontSize: {
      tablet: 60,
      phone: 48,
    },
    lineHeight: {
      tablet: 68,
      phone: 56,
    },
  },
  '7xl': {
    fontSize: {
      tablet: 72,
      phone: 56,
    },
    lineHeight: {
      tablet: 88,
      phone: 64,
    },
  },
  '8xl': {
    fontSize: {
      tablet: 96,
      phone: 64,
    },
    lineHeight: {
      tablet: 108,
      phone: 72,
    },
  },
  '9xl': {
    fontFamily: 'RobotoFlex_500Wide',
    fontSize: {
      tablet: 128,
      phone: 72,
    },
    lineHeight: {
      tablet: 144,
      phone: 88,
    },
  },
};

// Create the base theme using createTheme to get type validation
const baseTheme = createTheme({
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  spacing,
  stroke,
  textVariants,
  colors: {
    // Planner colors
    plannerBackground: palette.neutral[200],
    plannerForeground: palette.black,
    plannerMutedForeground: palette.neutral[600],
    plannerBorder: palette.neutral[300],
    plannerToday: palette.rose[600],
    plannerTime: palette.black,
    plannerButtonBackground: palette.neutral[100],
    plannerButtonForeground: palette.black,
    plannerButtonIcon: palette.neutral[600],
    plannerButtonRipple: palette.neutral[300],
    plannerPrimaryButtonBackground: palette.blue[600],
    plannerPrimaryButtonForeground: palette.white,
    plannerPrimaryButtonIcon: palette.blue[300],
    plannerPrimaryButtonRipple: palette.blue[400],

    plannerErrorBackground: palette.red[100],
    plannerErrorForeground: palette.black,
    plannerErrorIcon: palette.red[500],
    plannerErrorRipple: palette.red[300],

    plannerWarningBackground: palette.yellow[100],
    plannerWarningForeground: palette.black,
    plannerWarningIcon: palette.yellow[500],
    plannerWarningRipple: palette.yellow[300],

    plannerSuccessBackground: palette.green[100],
    plannerSuccessForeground: palette.black,
    plannerSuccessIcon: palette.green[500],
    plannerSuccessRipple: palette.green[300],

    calendarBackground: palette.white,
    calendarForeground: palette.black,
    calendarMutedBackground: palette.neutral[100],
    calendarMutedForeground: palette.neutral[700],
    calendarCellBorder: palette.neutral[300],
    calendarTodayBackground: palette.rose[600],
    calendarTodayForeground: palette.white,

    timerPrimary: palette.yellow[500],
    timerRingBackground: palette.neutral[300],
    timerBackground: palette.neutral[50],
    timerForeground: palette.black,
    timerMutedForeground: palette.neutral[600],
    timerBorder: palette.neutral[300],
    timerTintedBackground: '#FAFAFA80',

    eventNeutralBackground: palette.neutral[100],
    eventNeutralForeground: palette.neutral[950],
    eventNeutralDetails: palette.neutral[700],
    eventNeutralPrimary: palette.neutral[500],
    eventNeutralButtonBackground: palette.neutral[200],
    eventNeutralButtonForeground: palette.neutral[950],

    eventRoseBackground: palette.rose[100],
    eventRoseForeground: palette.rose[950],
    eventRoseDetails: palette.rose[300],
    eventRosePrimary: palette.rose[500],
    eventRoseButtonBackground: palette.rose[200],
    eventRoseButtonForeground: palette.rose[950],

    eventPinkBackground: palette.pink[100],
    eventPinkForeground: palette.pink[950],
    eventPinkDetails: palette.pink[700],
    eventPinkPrimary: palette.pink[500],
    eventPinkButtonBackground: palette.pink[200],
    eventPinkButtonForeground: palette.pink[950],

    eventFuchsiaBackground: palette.fuchsia[100],
    eventFuchsiaForeground: palette.fuchsia[950],
    eventFuchsiaDetails: palette.fuchsia[700],
    eventFuchsiaPrimary: palette.fuchsia[500],
    eventFuchsiaButtonBackground: palette.fuchsia[200],
    eventFuchsiaButtonForeground: palette.fuchsia[50],

    eventPurpleBackground: palette.purple[100],
    eventPurpleForeground: palette.purple[950],
    eventPurpleDetails: palette.purple[700],
    eventPurplePrimary: palette.purple[500],
    eventPurpleButtonBackground: palette.purple[200],
    eventPurpleButtonForeground: palette.purple[950],

    eventVioletBackground: palette.violet[100],
    eventVioletForeground: palette.violet[950],
    eventVioletDetails: palette.violet[700],
    eventVioletPrimary: palette.violet[500],
    eventVioletButtonBackground: palette.violet[200],
    eventVioletButtonForeground: palette.violet[950],

    eventIndigoBackground: palette.indigo[100],
    eventIndigoForeground: palette.indigo[950],
    eventIndigoDetails: palette.indigo[700],
    eventIndigoPrimary: palette.indigo[500],
    eventIndigoButtonBackground: palette.indigo[200],
    eventIndigoButtonForeground: palette.indigo[950],

    eventBlueBackground: palette.blue[100],
    eventBlueForeground: palette.blue[950],
    eventBlueDetails: palette.blue[700],
    eventBluePrimary: palette.blue[500],
    eventBlueButtonBackground: palette.blue[200],
    eventBlueButtonForeground: palette.blue[950],

    eventSkyBackground: palette.sky[100],
    eventSkyForeground: palette.sky[950],
    eventSkyDetails: palette.sky[700],
    eventSkyPrimary: palette.sky[500],
    eventSkyButtonBackground: palette.sky[200],
    eventSkyButtonForeground: palette.sky[950],

    eventCyanBackground: palette.cyan[100],
    eventCyanForeground: palette.cyan[950],
    eventCyanDetails: palette.cyan[700],
    eventCyanPrimary: palette.cyan[500],
    eventCyanButtonBackground: palette.cyan[200],
    eventCyanButtonForeground: palette.cyan[950],

    eventTealBackground: palette.teal[100],
    eventTealForeground: palette.teal[950],
    eventTealDetails: palette.teal[700],
    eventTealPrimary: palette.teal[500],
    eventTealButtonBackground: palette.teal[200],
    eventTealButtonForeground: palette.teal[950],

    eventEmeraldBackground: palette.emerald[100],
    eventEmeraldForeground: palette.emerald[950],
    eventEmeraldDetails: palette.emerald[700],
    eventEmeraldPrimary: palette.emerald[500],
    eventEmeraldButtonBackground: palette.emerald[200],
    eventEmeraldButtonForeground: palette.emerald[950],

    eventGreenBackground: palette.green[100],
    eventGreenForeground: palette.green[950],
    eventGreenDetails: palette.green[700],
    eventGreenPrimary: palette.green[500],
    eventGreenButtonBackground: palette.green[200],
    eventGreenButtonForeground: palette.green[950],

    eventLimeBackground: palette.lime[100],
    eventLimeForeground: palette.lime[950],
    eventLimeDetails: palette.lime[700],
    eventLimePrimary: palette.lime[500],
    eventLimeButtonBackground: palette.lime[200],
    eventLimeButtonForeground: palette.lime[950],

    eventYellowBackground: palette.yellow[100],
    eventYellowForeground: palette.yellow[950],
    eventYellowDetails: palette.yellow[700],
    eventYellowPrimary: palette.yellow[500],
    eventYellowButtonBackground: palette.yellow[200],
    eventYellowButtonForeground: palette.yellow[950],

    eventAmberBackground: palette.amber[100],
    eventAmberForeground: palette.amber[950],
    eventAmberDetails: palette.amber[700],
    eventAmberPrimary: palette.amber[500],
    eventAmberButtonBackground: palette.amber[200],
    eventAmberButtonForeground: palette.amber[950],

    eventOrangeBackground: palette.orange[100],
    eventOrangeForeground: palette.orange[950],
    eventOrangeDetails: palette.orange[700],
    eventOrangePrimary: palette.orange[500],
    eventOrangeButtonBackground: palette.orange[200],
    eventOrangeButtonForeground: palette.orange[950],

    eventRedBackground: palette.red[100],
    eventRedForeground: palette.red[950],
    eventRedDetails: palette.red[700],
    eventRedPrimary: palette.red[500],
    eventRedButtonBackground: palette.red[200],
    eventRedButtonForeground: palette.red[950],
  },
});

// Extract the validated type
export type Theme = typeof baseTheme;

// Create dark theme with the same structure - TypeScript will enforce compatibility
const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    // Dark overrides - TypeScript ensures these keys exist in the base theme
    plannerBackground: palette.neutral[900],
    plannerForeground: palette.white,
    plannerMutedForeground: palette.neutral[400],
    plannerBorder: palette.neutral[700],
    plannerToday: palette.rose[600],
    plannerTime: palette.white,
    plannerButtonBackground: palette.neutral[800],
    plannerButtonForeground: palette.white,
    plannerButtonIcon: palette.neutral[400],
    plannerButtonRipple: palette.neutral[600],
    plannerPrimaryButtonBackground: palette.blue[600],
    plannerPrimaryButtonForeground: palette.white,
    plannerPrimaryButtonIcon: palette.blue[300],
    plannerPrimaryButtonRipple: palette.blue[400],

    plannerErrorBackground: palette.red[950],
    plannerErrorForeground: palette.white,
    plannerErrorIcon: palette.red[500],
    plannerErrorRipple: palette.red[800],

    plannerWarningBackground: palette.yellow[950],
    plannerWarningForeground: palette.white,
    plannerWarningIcon: palette.yellow[500],
    plannerWarningRipple: palette.yellow[800],

    plannerSuccessBackground: palette.green[950],
    plannerSuccessForeground: palette.white,
    plannerSuccessIcon: palette.green[500],
    plannerSuccessRipple: palette.green[800],

    calendarBackground: palette.neutral[950],
    calendarForeground: palette.white,
    calendarMutedBackground: '#17171780',
    calendarMutedForeground: palette.neutral[400],
    calendarCellBorder: palette.neutral[700],
    calendarTodayBackground: palette.rose[600],
    calendarTodayForeground: palette.white,

    timerPrimary: palette.yellow[500],
    timerRingBackground: palette.neutral[700],
    timerBackground: palette.neutral[800],
    timerForeground: palette.white,
    timerMutedForeground: palette.neutral[400],
    timerBorder: palette.neutral[700],
    timerTintedBackground: '#26262680',

    eventNeutralBackground: palette.neutral[100],
    eventNeutralForeground: palette.neutral[950],
    eventNeutralDetails: palette.neutral[700],
    eventNeutralPrimary: palette.neutral[500],
    eventNeutralButtonBackground: palette.neutral[200],
    eventNeutralButtonForeground: palette.neutral[950],

    eventRoseBackground: palette.rose[950],
    eventRoseForeground: palette.rose[50],
    eventRoseDetails: palette.rose[300],
    eventRosePrimary: palette.rose[500],
    eventRoseButtonBackground: palette.rose[900],
    eventRoseButtonForeground: palette.rose[50],

    eventPinkBackground: palette.pink[950],
    eventPinkForeground: palette.pink[50],
    eventPinkDetails: palette.pink[300],
    eventPinkPrimary: palette.pink[500],
    eventPinkButtonBackground: palette.pink[900],
    eventPinkButtonForeground: palette.pink[50],

    eventFuchsiaBackground: palette.fuchsia[950],
    eventFuchsiaForeground: palette.fuchsia[50],
    eventFuchsiaDetails: palette.fuchsia[300],
    eventFuchsiaPrimary: palette.fuchsia[500],
    eventFuchsiaButtonBackground: palette.fuchsia[900],
    eventFuchsiaButtonForeground: palette.fuchsia[50],

    eventPurpleBackground: palette.purple[950],
    eventPurpleForeground: palette.purple[50],
    eventPurpleDetails: palette.purple[300],
    eventPurplePrimary: palette.purple[500],
    eventPurpleButtonBackground: palette.purple[900],
    eventPurpleButtonForeground: palette.purple[50],

    eventVioletBackground: palette.violet[950],
    eventVioletForeground: palette.violet[50],
    eventVioletDetails: palette.violet[300],
    eventVioletPrimary: palette.violet[500],
    eventVioletButtonBackground: palette.violet[900],
    eventVioletButtonForeground: palette.violet[50],

    eventIndigoBackground: palette.indigo[950],
    eventIndigoForeground: palette.indigo[50],
    eventIndigoDetails: palette.indigo[300],
    eventIndigoPrimary: palette.indigo[500],
    eventIndigoButtonBackground: palette.indigo[900],
    eventIndigoButtonForeground: palette.indigo[50],

    eventBlueBackground: palette.blue[950],
    eventBlueForeground: palette.blue[50],
    eventBlueDetails: palette.blue[300],
    eventBluePrimary: palette.blue[500],
    eventBlueButtonBackground: palette.blue[900],
    eventBlueButtonForeground: palette.blue[50],

    eventSkyBackground: palette.sky[950],
    eventSkyForeground: palette.sky[50],
    eventSkyDetails: palette.sky[300],
    eventSkyPrimary: palette.sky[500],
    eventSkyButtonBackground: palette.sky[900],
    eventSkyButtonForeground: palette.sky[50],

    eventCyanBackground: palette.cyan[950],
    eventCyanForeground: palette.cyan[50],
    eventCyanDetails: palette.cyan[300],
    eventCyanPrimary: palette.cyan[500],
    eventCyanButtonBackground: palette.cyan[900],
    eventCyanButtonForeground: palette.cyan[50],

    eventTealBackground: palette.teal[950],
    eventTealForeground: palette.teal[50],
    eventTealDetails: palette.teal[300],
    eventTealPrimary: palette.teal[500],
    eventTealButtonBackground: palette.teal[900],
    eventTealButtonForeground: palette.teal[50],

    eventEmeraldBackground: palette.emerald[950],
    eventEmeraldForeground: palette.emerald[50],
    eventEmeraldDetails: palette.emerald[300],
    eventEmeraldPrimary: palette.emerald[500],
    eventEmeraldButtonBackground: palette.emerald[900],
    eventEmeraldButtonForeground: palette.emerald[50],

    eventGreenBackground: palette.green[950],
    eventGreenForeground: palette.green[50],
    eventGreenDetails: palette.green[300],
    eventGreenPrimary: palette.green[500],
    eventGreenButtonBackground: palette.green[900],
    eventGreenButtonForeground: palette.green[50],

    eventLimeBackground: palette.lime[950],
    eventLimeForeground: palette.lime[50],
    eventLimeDetails: palette.lime[300],
    eventLimePrimary: palette.lime[500],
    eventLimeButtonBackground: palette.lime[900],
    eventLimeButtonForeground: palette.lime[50],

    eventYellowBackground: palette.yellow[950],
    eventYellowForeground: palette.yellow[50],
    eventYellowDetails: palette.yellow[300],
    eventYellowPrimary: palette.yellow[500],
    eventYellowButtonBackground: palette.yellow[900],
    eventYellowButtonForeground: palette.yellow[50],

    eventAmberBackground: palette.amber[950],
    eventAmberForeground: palette.amber[50],
    eventAmberDetails: palette.amber[300],
    eventAmberPrimary: palette.amber[500],
    eventAmberButtonBackground: palette.amber[900],
    eventAmberButtonForeground: palette.amber[50],

    eventOrangeBackground: palette.orange[950],
    eventOrangeForeground: palette.orange[50],
    eventOrangeDetails: palette.orange[300],
    eventOrangePrimary: palette.orange[500],
    eventOrangeButtonBackground: palette.orange[900],
    eventOrangeButtonForeground: palette.orange[50],

    eventRedBackground: palette.red[950],
    eventRedForeground: palette.red[50],
    eventRedDetails: palette.red[300],
    eventRedPrimary: palette.red[500],
    eventRedButtonBackground: palette.red[900],
    eventRedButtonForeground: palette.red[50],
  },
};

// Export the config objects (not the createTheme results)
// This way apps can call createTheme themselves
export { baseTheme, darkTheme };
