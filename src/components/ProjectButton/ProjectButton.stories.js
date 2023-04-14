import ProjectButton from './ProjectButton';

export default {
  title: 'Project/ProjectButton',
  component: ProjectButton,
  tags: ['autodocs'],
};
export const Primary = {
  args: {
    label: 'Button',
  },
};
export const PrimaryLarge = {
  args: {
    label: 'Button',
    buttonType: 'primary',
    buttonSize: 'large',
  },
};
export const PrimarySmall = {
  args: {
    label: 'Button',
    buttonType: 'primary',
    buttonSize: 'small',
  },
};
export const Secondary = {
  args: {
    label: 'Button',
    buttonType: 'secondary',
  },
};

export const SecondaryLarge = {
  args: {
    label: 'Button',
    buttonType: 'secondary',
    buttonSize: 'large',
  },
};
export const SecondarySmall = {
  args: {
    label: 'Button',
    buttonType: 'secondary',
    buttonSize: 'small',
  },
};
