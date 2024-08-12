import type { Decorator, Parameters, Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';

import './style.css'

export const decorators: Decorator[] = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

export default {
  decorators,
  parameters,
};
