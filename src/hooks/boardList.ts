
import * as React from "react";

import { useRouter, NextRouter } from "next/router";

import { useLocalStore } from "mobx-react-lite";
import { AppContext } from "../components/App/context";
import { IBoardListProps } from "../components/Board/List";

export type TBoardList = typeof useBoardList extends (...args: any[]) => infer R ? R : never;

export interface IBoardListState {
  loading: boolean;
  list: {}[];
}

const initializer = (props: IBoardListProps): IBoardListState => {
  return {
    loading: false,
    list: [],
  };
};

const action = (props: IBoardListProps, $: { state: IBoardListState }) => {
  const router = useRouter();
  const app = React.useContext(AppContext);

  return {};
};

const useBoardList = (props: IBoardListProps) => {
  const app = React.useContext(AppContext);
  const router = useRouter();

  const $ = useLocalStore(() => ({ state: initializer(props) }));
  const dispatch = action(props, $);

  return { state: $.state, dispatch };
}

export default useBoardList;