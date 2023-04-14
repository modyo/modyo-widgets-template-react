import './ProjectButton.scss';

const getButtonTypeClass = (buttonType) => {
  const buttonTypes = {
    primary: 'project-button--primary',
    secondary: 'project-button--secondary',
  };
  return buttonTypes[buttonType] || buttonTypes.primary;
};

const getButtonSize = (buttonSize) => {
  const buttonSizes = {
    large: 'project-button--large',
    small: 'project-button--small',
  };
  return buttonSizes[buttonSize] || buttonSizes.medium;
};
function ProjectButton({ label, buttonType, buttonSize }) {
  const getButtonClass = () => {
    return [
      'project-button',
      getButtonTypeClass(buttonType),
      getButtonSize(buttonSize),
    ].join(' ');
  };

  return (
    <button type="button" className={getButtonClass()}>
      {label}
    </button>
  );
}

export default ProjectButton;
