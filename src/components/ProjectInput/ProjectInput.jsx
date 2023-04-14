function ProjectInput({ id, placeholder }) {
  return (
    <div>
      <label htmlFor={id} />
      <input
        type="text"
        className="project-bg-secondary project-color-white"
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default ProjectInput;
