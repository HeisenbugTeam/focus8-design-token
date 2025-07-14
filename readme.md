# Focus8 Design Tokens

A comprehensive design token package for Focus8, built to work seamlessly with Shopify's Restyle library. This package provides consistent theming, spacing, and color systems across the Focus8 application ecosystem.

## Installation

```bash
npm install design-token
```

## Usage

### Quickstart

```typescript
import { baseTheme, darkTheme, Theme } from 'design-token';
import { ThemeProvider } from '@shopify/restyle';

// Use in your app
function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : baseTheme;

  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Theme Structure

The package exports two main themes and includes a text variant system:

- **`baseTheme`** - Light theme variant
- **`darkTheme`** - Dark theme variant
- **`Theme`** - TypeScript type for theme objects

### Text Variants

The `textVariants` system provides predefined styles for text components, ensuring consistency across the application. Each variant includes properties like `fontSize`, `lineHeight`, and `fontFamily`, with support for responsive design (e.g., tablet-specific sizes).

#### Default Variant
- `fontFamily`: RobotoFlex_400Regular
- `fontSize`: 16
- `lineHeight`: 24
- `color`: plannerForeground

#### Available Variants
- `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`

Some sizes also have variations to provide flexibility:
- **`l`**: Standard large text
- **`lBold`**: Large text with bold font weight
- **`lNarrow`**: Large text with reduced width

Each variant can define responsive properties, such as:
```typescript
{
  fontSize: {
    tablet: 12,
  },
  lineHeight: {
    tablet: 16,
  },
}
```

### Color System

The theme includes semantic color tokens organized by component areas:

#### Planner Colors
- `plannerBackground`, `plannerForeground`
- `plannerMutedForeground`, `plannerBorder`
- `plannerToday`, `plannerTime`
- `plannerButtonBackground`, `plannerButtonForeground`, `plannerButtonIcon`
- `plannerPrimaryButtonBackground`, `plannerPrimaryButtonForeground`, `plannerPrimaryButtonIcon`

#### Calendar Colors
- `calendarBackground`, `calendarForeground`
- `calendarMutedBackground`, `calendarMutedForeground`
- `calendarCellBorder`
- `calendarTodayBackground`, `calendarTodayForeground`

#### Timer Colors
- `timerPrimary`, `timerRingBackground`
- `timerBackground`, `timerForeground`
- `timerMutedForeground`, `timerBorder`
- `timerTintedBackground`

#### Event Colors
Comprehensive event color system with full spectrum support:
- **Available colors**: neutral, rose, pink, fuchsia, purple, violet, indigo, blue, sky, cyan, teal, emerald, green, lime, yellow, amber, orange, red

Each event color includes:
- `event[Color]Background` - Background color
- `event[Color]Foreground` - Primary text color
- `event[Color]Details` - Secondary text color
- `event[Color]Primary` - Accent color
- `event[Color]ButtonBackground` - Button background
- `event[Color]ButtonForeground` - Button text color

Example:
```typescript
// Event color tokens
eventBlueBackground
eventBlueForeground
eventBlueDetails
eventBluePrimary
eventBlueButtonBackground
eventBlueButtonForeground
```

### Spacing Scale

```typescript
const spacing = {
  0: 0,
  xxs: 2,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
};
```

### Using with Restyle Components

```typescript
import { createBox, createText } from '@shopify/restyle';
import { Theme } from 'design-token';

const Box = createBox<Theme>();
const Text = createText<Theme>();

// Usage example
<Box backgroundColor="plannerBackground" padding="md">
  <Text color="plannerForeground" variant="body">
    Hello Focus8!
  </Text>
</Box>
```



## Theme Switching

Both themes maintain the same structure and token names, making it easy to switch between light and dark modes:

```typescript
const currentTheme = isDarkMode ? darkTheme : baseTheme;

<ThemeProvider theme={currentTheme}>
  {/* Your components will automatically adapt */}
</ThemeProvider>
```

## TypeScript Support

Full TypeScript support is included with proper type definitions. The `Theme` type ensures type safety when creating custom components or extending the theme system.

## License

MIT
