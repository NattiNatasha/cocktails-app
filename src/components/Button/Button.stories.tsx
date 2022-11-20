import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      type: 'string',
      description: 'Button size',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'string',
      description: 'Button color',
      options: ['black', 'orange'],
      control: {
        type: 'radio',
      },
    },
    children: {
      type: 'string',
      name: 'label',
      defaultValue: 'Click me',
    },
  },
}

const Template = (args: any) => <Button {...args}></Button>

export const Default: any = Template.bind({})
Default.args = {
  children: 'Click me',
  size: 'medium',
  color: 'dark-gray',
}

export const Orange: any = Template.bind({})
Orange.args = {
  children: 'Click me',
  size: 'medium',
  color: 'orange',
}

export const Large: any = Template.bind({})
Large.args = {
  children: 'Click me',
  size: 'large',
  color: 'orange',
}
