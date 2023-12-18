import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onValueChange(newValue);
  };

  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        type={type}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
