import {RouteProp} from '@react-navigation/native';
import {IHotel} from './api';

export type ChildType =
  | JSX.Element
  | boolean
  | undefined
  | (JSX.Element | boolean | undefined)[];
export type ChildrenType = ChildType | ChildType[];
export type IFunction = () => void;
export type IFunctionWith<T> = (item: T) => void;
// @ts-ignore
export type IUseRoute<T> = RouteProp<Record<string, T | undefined>, string>;

export interface IHotelItem extends IHotel {
  onClick: any;
  isFirst: boolean;
}

export interface IInfoBasic extends IHotel {
  icon?: any;
  isFirst: boolean;
}

export interface IStart {
  starts: number;
}
