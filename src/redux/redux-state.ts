import Immutable from "immutable";
import { ITypeReduxPendingState } from "./redux-type-saga";
import { IImmutableMap } from "../utils/interface";

// Store
export interface IStore extends ITypeReduxPendingState {
  appState: IImmutableAppState;
  authenState: IImutableAuthenState;
}
export type IImmutableStore = Immutable.Record<IStore> & Readonly<IStore>;
export type IImmutableAppState = IImmutableMap<IAppState>;
export type IImutableAuthenState = IImmutableMap<IAuthenState>;

// AppState
export enum AppStatus {
  Unload,
  Loading,
  Ready,
}

export interface IAuthenState {
  isLogin: IImmutableMap<IAuthenLogin>;
  product: Immutable.List<IImmutableMap<any>>;
  user: Immutable.List<IImmutableMap<any>>;
  registry: IImmutableMap<any>;
}

export interface ItemBalance {
  acount: string;
  money: number;
}
export interface IAppState {
  status: AppStatus;
  loading: boolean;
  language: number;
}


export interface IAuthenLogin {
  token: string;
  user: IImmutableMap<any>;
}
