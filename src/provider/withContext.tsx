import React, { FC, ComponentType } from 'react';
import { AppContext, IContext } from '../provider/AppProvider';

const withContext = (Component: ComponentType): FC => {
  const WrapperComponent = (props: any) => {
    return (
      <AppContext.Consumer>
        {({ state, dispatch }) => (
          <Component state={state} dispatch={dispatch} {...props} />
        )}
      </AppContext.Consumer>
    )
  }

  return WrapperComponent;
}

export default withContext;