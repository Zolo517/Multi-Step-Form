export const TextField = (props) => {
  const { place, label, type, id, name, errors, title, setErrors } = props;

  return (
    <div>
      <div className="flex gap-[2px]">
        <label className="text-[14px]" htmlFor={id}>
          {label}
        </label>
        <p className="text-start text-[15px] text-[#E14942]">*</p>
      </div>
      <input
        id={id}
        onChange={() => setErrors({ ...errors, email: "" })}
        name={name}
        className={
          id === "img"
            ? "flex flex-col h-[180px] w-full rounded-lg p-3 border-[1px] focus:outline-none border-[#CBD5E1] focus:border-[#0CA5E9]"
            : "flex flex-col h-11 w-full rounded-lg p-3 border-[1px] focus:outline-none border-[#CBD5E1] focus:border-[#0CA5E9]"
        }
        type={type}
        placeholder={place}
        title=" "
      />
      
    </div>
  );
};
