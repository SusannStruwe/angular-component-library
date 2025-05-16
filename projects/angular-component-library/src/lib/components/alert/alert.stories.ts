import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AlertType } from '../../model/alert-type.enum';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlertComponent } from './alert.component';
import { fn } from '@storybook/test';

const types: typeof AlertType = AlertType;

const meta: Meta<AlertComponent> = {
    title: 'Components/Alert',
    component: AlertComponent,
    decorators: [
        moduleMetadata({
            imports: [RouterModule],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: new Map([['id', '123']]),
                            data: {}
                        },
                        params: [{ id: '123' }],
                        queryParams: {}
                    } // Mocking der ActivatedRoute, so dass sie params und andere Routen-Daten zurückgibt
                }
            ]
        })
    ],
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text', value: '' },
        message: { control: 'text', value: '' },
        type: {
            control: {
                type: 'select'
            },
            options: Object.values(types),
            mapping: AlertType,
            value: AlertType.SUCCESS
        },
        visibleState: { control: 'boolean', value: false },
        navigationLink: { control: 'text', value: undefined },
        navigationLinkLabel: { control: 'text', value: undefined },
        visibleStateChange: { action: 'changed' }
    },
    args: { visibleStateChange: fn() }
};
export default meta;

type Story = StoryObj<AlertComponent>;

export const InfoAlert: Story = {
    args: {
        title: 'Info Alert',
        message: 'Info  Message',
        type: AlertType.INFO,
        visibleState: true,
        navigationLink: 'pailot.com',
        navigationLinkLabel: 'Further informations under pailto.com '
    }
};

export const ErrorWithLink: Story = {
    args: {
        title: 'Error Alert',
        message: 'Error Message',
        type: AlertType.ERROR,
        visibleState: true
    }
};

export const SuccessAlert: Story = {
    args: {
        title: 'Success Alert',
        message: 'Success Message',
        type: AlertType.SUCCESS,
        visibleState: true
    }
};

export const WarningAlert: Story = {
    args: {
        title: 'Warning Alert',
        message: 'Warning Message',
        type: AlertType.WARNING,
        visibleState: true
    }
};
