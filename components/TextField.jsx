export const TextField = (props) => {
  const { place, label, type, id, currentIndex } = props;
  console.log(currentIndex);
  return (
    <form className="flex flex-col h-[68px] ">
      <div className="flex gap-[2px]">
        <label className="text-[14px]" htmlFor={id}>
          {label}
        </label>
        <p className="text-start text-[15px] text-red-500">*</p>
      </div>
      <input
        id={id}
        className="h-11 w-fill rounded-lg p-3 border-[1px] border-[#0CA5E9]"
        type={type}
        placeholder={place}
      />
    </form>
  );
};
