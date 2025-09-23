export const Button = (props) => {
  const { setCurrentIndex, currentIndex, buttonsName, isContinue } = props;
  if (isContinue && currentIndex < 2) {
    return (
      <div className="w-full">
        <button
          className="h-11 border-2 rounded-md py-[10px] w-full bg-[#121316] text-white flex justify-center items-center "
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          <p>{`${buttonsName} ${currentIndex + 1}/3`}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M1.705 0L0.294998 1.41L4.875 6L0.294998 10.59L1.705 12L7.705 6L1.705 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    );
  } else if (!isContinue && currentIndex!==0) {
    return (
        <button
        className="h-11 border-1 rounded-md py-[10px] w-32 border-[#CBD5E1] flex justify-center items-center gap-3  "
        onClick={() => setCurrentIndex(currentIndex - 1)}
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
        <p> {buttonsName}</p>
      </button>
    );
  }else if(isContinue && currentIndex === 2){
    return (
      <div className="w-70">
        <button
          className="h-11 border-2 rounded-md py-[10px] w-full bg-[#121316] text-white flex justify-center items-center "
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          <p>Submit</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M1.705 0L0.294998 1.41L4.875 6L0.294998 10.59L1.705 12L7.705 6L1.705 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
  );
  }
  
};
