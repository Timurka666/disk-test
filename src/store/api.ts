import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react" 
import { ITokensRes } from "./types"
import toURLEncoded from "../helpers/urlencoded"

export const yandexApi = createApi({
    reducerPath: 'yandex/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://oauth.yandex.ru'}),
    endpoints: (build) => ({
        receiveCode: build.mutation<ITokensRes, string>({
            query: (code) => {
                let details = {
                    'grant_type': 'authorization_code',
                    'code': code,
                    'client_id': '248ca1bfe86f4a14aca2244e9be96371',
                    'client_secret': 'cd16d3c3da404365bbdf05b334e76720'
                }

                return {
                url: '/token',
                params: {
                    /*
                    grant_type: encodeURIComponent('authorization_code'),
                    code: encodeURIComponent(code),
                    client_id: encodeURIComponent('248ca1bfe86f4a14aca2244e9be96371'),
                    client_secret: encodeURIComponent('cd16d3c3da404365bbdf05b334e76720')*/
                },
                method: 'POST',
                headers: {
                   'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: toURLEncoded(details),
                //mode: 'no-cors',

            }}
        })
    })
})

export const {useReceiveCodeMutation} = yandexApi;