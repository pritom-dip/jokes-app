import styles from "./Input.module.scss";

const Input = ({
  name,
  value,
  handleChange,
  icon,
  type = "text",
  placeholder = "Text",
}) => {
  const onChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {icon && <img src={icon} className={styles.icon} />}
    </div>
  );
};

export default Input;
