import { createListenerMiddleware } from "@reduxjs/toolkit";
import { fileSlice } from "./fileSlice";
import { yandexDiskApi } from "./diskApi";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: fileSlice.actions.pushAFile,
    effect: async (action, listenerApi) => {
        const result = await listenerApi.dispatch(yandexDiskApi.endpoints.getQuery.initiate(action.payload.name));
        
        if (result.isSuccess && result.data) {
            await fetch(result.data.href, {method: result.data.method, body: action.payload})
        }
    }
})