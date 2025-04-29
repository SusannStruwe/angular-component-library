import { Meta, StoryObj } from '@storybook/angular';
import { accentColors } from './utility';

type ColorToken = { name: string; value: string };

const getColorTokens = (): ColorToken[] => {
    const styles = window.getComputedStyle(document.documentElement);

    return accentColors.map((name) => ({
        name,
        value: styles.getPropertyValue(name) || 'transparent'
    }));
};

const meta: Meta = {
    title: 'Design/Colors',
    parameters: {
        docs: {
            description: {
                component: 'Colors overview'
            }
        }
    }
};

export default meta;

type Story = StoryObj;

export const Colors: StoryObj = {
    render: () => {
        const tokens = getColorTokens();
        return {
            props: { tokens },
            template: `
		  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;">
			<div *ngFor="let token of tokens">
			  <div [style.background]="token.value" style="height: 60px; border-radius: 6px; border: 1px solid #ccc;"></div>
			  <div style="font-size: 12px; margin-top: 4px;">{{ token.name }}</div>
			  <div style="font-size: 12px;">{{ token.value }}</div>
			</div>
		  </div>
		`
        };
    }
};
