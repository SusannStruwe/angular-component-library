import { Meta, StoryObj } from '@storybook/angular';
import { ColorPaletteComponent } from './color-palette.component';

const meta: Meta<ColorPaletteComponent> = {
    title: 'Components/ColorPalette',
    component: ColorPaletteComponent,
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<ColorPaletteComponent>;

export const Sample: Story = {
    args: {}
};
