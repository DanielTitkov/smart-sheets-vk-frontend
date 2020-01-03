import { configure, addDecorator } from '@storybook/react'
import { withProvider } from './decorators'

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addDecorator(withProvider)