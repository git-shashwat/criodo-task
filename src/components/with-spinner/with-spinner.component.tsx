import React from "react";

interface ISpinnerProps {
  isLoading: boolean;
  rest: {
    [x: string]: any;
  };
}

const WithSpinner = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Spinner = ({ isLoading, ...rest }: ISpinnerProps) => {
    return isLoading ? (
      <div>loading...</div>
    ) : (
      <WrappedComponent {...(rest as P)} />
    );
  };

  return Spinner;
};

export default WithSpinner;
