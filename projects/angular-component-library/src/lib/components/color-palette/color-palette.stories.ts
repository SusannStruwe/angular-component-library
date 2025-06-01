import { Meta, StoryObj } from '@storybook/angular';
import { ColorPaletteComponent } from './color-palette.component';

const meta: Meta<ColorPaletteComponent> = {
    title: 'Components/ColorPalette',
    component: ColorPaletteComponent,
    tags: ['autodocs', 'test-only']
};
export default meta;

type Story = StoryObj<ColorPaletteComponent>;

export const Sample: Story = {
    args: {}
};
