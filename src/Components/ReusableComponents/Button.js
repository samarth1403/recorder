import classNames from 'classnames'
import React from 'react'

const Button = ({children,className , ...rest}) => {
    const finalClass = classNames(
      className,
      "bg-[#fff] min-[320px]:h-[60px]  sm:h-[50px] min-[320px]:w-[240px] sm:w-[300px] font-roboto font-bold text-xl rounded-[20px] px-4 mx-4 mt-4 mb-4"
    );
  return (
    <button
      className={finalClass}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button