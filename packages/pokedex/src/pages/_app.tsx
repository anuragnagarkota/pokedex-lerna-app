import * as React from "react";
import { AppProps } from "next/app";
import { ReduxWrapper } from "../store/store";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = ReduxWrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};
export default App;
