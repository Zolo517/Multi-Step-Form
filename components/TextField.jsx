export const TextField = (props) => {
  const { place, label, type } = props;
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type={type} placeholder={place} />
    </div>
  );
};
