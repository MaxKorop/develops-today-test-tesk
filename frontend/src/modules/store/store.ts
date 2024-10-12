import {
  configureStore,
  ThunkMiddleware,
  Tuple,
  UnknownAction,
} from '@reduxjs/toolkit';
import { reducer as appReducer } from '../app/slices/app.slice';
import { appApi } from '../app/app';

type RootReducer = {
  app: ReturnType<typeof appReducer>;
};

type ExtraArguments = {
  appApi: typeof appApi;
};

class Store {
  public instance: ReturnType<
    typeof configureStore<
      RootReducer,
      UnknownAction,
      Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
    >
  >;

  public constructor() {
    this.instance = configureStore({
      devTools: true,
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        });
      },
      reducer: {
        app: appReducer,
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      appApi,
    };
  }
}

const store = new Store();

type AsyncThunkConfig = {
  dispatch: typeof store.instance.dispatch;
  extra: typeof store.extraArguments;
  state: ReturnType<typeof store.instance.getState>;
};

export { store, type AsyncThunkConfig };
