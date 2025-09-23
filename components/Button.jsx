export const Button = (props) => {
  const { setCurrentIndex, currentIndex, buttonsName, isContinue } = props;
  if (isContinue) {
    return (
      <button
        className="h-11 border-2 rounded-md py-[10px] w-70 bg-[#121316] text-white "
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        {buttonsName}
      </button>
    );
  }
  return (
    <button
      className="h-11 border-1 rounded-md py-[10px] w-32 border-[#CBD5E1]   "
      onClick={() => setCurrentIndex(currentIndex + 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          d="M7.70501 1.41L6.29501 0L0.295013 6L6.29501 12L7.70501 10.59L3.12501 6L7.70501 1.41Z"
          fill="#202124"
        />
      </svg>
      {buttonsName}
    </button>
  );
};
