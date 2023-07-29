import { configureStore, combineReducers, bindActionCreators } from "@reduxjs/toolkit";
import { yandexApi } from "./api";
import { fileSlice } from "./fileSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { yandexDiskApi } from "./diskApi";
import { listenerMiddleware } from "./middleware";

const reducer = combineReducers({
    [yandexApi.reducerPath]: yandexApi.reducer,
    [fileSlice.name]: fileSlice.reducer,
    [yandexDiskApi.reducerPath]: yandexDiskApi.reducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({serializableCheck: false}).prepend(listenerMiddleware.middleware).concat(yandexApi.middleware).concat(yandexDiskApi.middleware)
    )
})

export type RootState = ReturnType<typeof store['getState']>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const actions = {
    ...fileSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch<typeof store['dispatch']>();

    return bindActionCreators(actions, dispatch);
}