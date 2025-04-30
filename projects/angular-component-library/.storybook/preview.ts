import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        designToken: {
            defaultTab: 'Colors',
            tokens: {
              color: ['../assets/styles.scss'],
            },
          },
    }
};

export default preview;
