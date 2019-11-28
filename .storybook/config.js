import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import { ThemeProvider } from '@tecsinapse/ui-kit';

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'TecSinapse Text Editor',
  url: 'https://github.com/tecsinapse/text-editor',
});

const withThemeProvider = storyFn => (
  <ThemeProvider variant="orange">{storyFn()}</ThemeProvider>
);
const req = require.context('../src', true, /\.story\.js$/);
// Sets the info addon's options.
setDefaults({
  header: false,
});

function loadStories() {
  addDecorator(withThemeProvider);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
