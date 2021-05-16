import React from "react";
import Loader from "../loader/loader.component";

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
    return isLoading ? <Loader /> : <WrappedComponent {...(rest as P)} />;
  };

  return Spinner;
};

export default WithSpinner;
