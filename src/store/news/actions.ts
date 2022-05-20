import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

import getNews from "services/getNews";
import {IStore} from "./types";

declare module "redux" {
    interface Dispatch<A extends Action = AnyAction> {
      <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
    }
  }

export const setNewsAction = (list: IStore["list"]) => {
    return {
        type: "news/setNews",
        payload: list,
    }
}

export const loadNews = () => async (dispatch: Dispatch) => {
    try {
        const response = await getNews();

        dispatch(setNewsAction(response.data.articles))
    } catch(e) {
        console.log(e, "Is there something wrong");
    }
}