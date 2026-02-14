const LINE_HEIGHT_FACTOR = 1.35;

function calcLineHeigthFromFontSize(fontSize: {
  tablet: number;
  phone: number;
}): { tablet: number; phone: number } {
  return {
    tablet: Math.ceil(fontSize.tablet * LINE_HEIGHT_FACTOR),
    phone: Math.ceil(fontSize.phone * LINE_HEIGHT_FACTOR),
  };
}

type TextVariant = {
  fontFamily?: string;
  fontWeight?: number;
  color?: string;
  fontSize: {
    tablet: number;
    phone: number;
  };
  lineHeight: {
    tablet: number;
    phone: number;
  };
};

const baseTextVariants = {
  defaults: {
    fontFamily: 'RobotoFlex_400Regular',
    fontWeight: 400,
    color: 'plannerForeground',
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
  xs: {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 14,
      phone: 12,
    },
  },
  xsNarrow: {
    fontFamily: 'RobotoFlex_400Narrow',
    fontSize: {
      tablet: 14,
      phone: 12,
    },
  },
  s: {
    fontSize: {
      tablet: 18,
      phone: 14,
    },
  },
  sNarrow: {
    fontFamily: 'RobotoFlex_400Narrow',
    fontSize: {
      tablet: 18,
      phone: 14,
    },
  },
  m: {
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
  mNarrow: {
    fontFamily: 'RobotoFlex_400Narrow',
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
  mBold: {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
  l: {
    fontSize: {
      tablet: 22,
      phone: 18,
    },
  },
  lNarrow: {
    fontFamily: 'RobotoFlex_400Narrow',
    fontSize: {
      tablet: 22,
      phone: 18,
    },
  },
  lBold: {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 22,
      phone: 18,
    },
  },
  xl: {
    fontSize: {
      tablet: 24,
      phone: 20,
    },
  },
  '2xl': {
    fontSize: {
      tablet: 28,
      phone: 22,
    },
  },
  '2xlNarrow': {
    fontFamily: 'RobotoFlex_400Narrow',
    fontSize: {
      tablet: 28,
      phone: 22,
    },
  },
  '2xlWide': {
    fontFamily: 'RobotoFlex_500Wide',
    fontWeight: 500,
    fontSize: {
      tablet: 28,
      phone: 22,
    },
  },
  '2xlBold': {
    fontFamily: 'RobotoFlex_500Regular',
    fontWeight: 500,
    fontSize: {
      tablet: 28,
      phone: 22,
    },
  },
  '3xl': {
    fontSize: {
      tablet: 32,
      phone: 24,
    },
  },
  '3xlWide': {
    fontFamily: 'RobotoFlex_500Wide',
    fontWeight: 500,
    fontSize: {
      tablet: 32,
      phone: 24,
    },
  },
  '4xl': {
    fontSize: {
      tablet: 36,
      phone: 28,
    },
  },
  '4xlWide': {
    fontFamily: 'RobotoFlex_500Wide',
    fontWeight: 500,
    fontSize: {
      tablet: 36,
      phone: 28,
    },
  },
  '5xl': {
    fontSize: {
      tablet: 48,
      phone: 32,
    },
  },
  '6xl': {
    fontSize: {
      tablet: 64,
      phone: 36,
    },
  },
  '7xl': {
    fontSize: {
      tablet: 72,
      phone: 40,
    },
  },
  '8xl': {
    fontSize: {
      tablet: 96,
      phone: 48,
    },
  },
  '9xl': {
    fontFamily: 'RobotoFlex_500Wide',
    fontSize: {
      tablet: 128,
      phone: 56,
    },
  },
  // Chronological calendar mode
  mLight: {
    fontFamily: 'GoogleSansFlex_400',
    fontWeight: 400,
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
  cMMedium: {
    fontFamily: 'GoogleSansFlex_500',
    fontWeight: 500,
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
  cBold: {
    fontFamily: 'GoogleSansFlex_500',
    fontWeight: 500,
    fontSize: {
      tablet: 20,
      phone: 16,
    },
  },
} as const;

type TextVariantName = keyof typeof baseTextVariants;

const textVariants = Object.fromEntries(
  Object.entries(baseTextVariants).map(([key, variant]) => {
    if (variant.fontSize) {
      return [
        key,
        {
          ...variant,
          lineHeight: calcLineHeigthFromFontSize(variant.fontSize),
        },
      ];
    }
    return [key, variant];
  })
) as Record<TextVariantName, TextVariant>;

export { textVariants };

export type { TextVariant };
