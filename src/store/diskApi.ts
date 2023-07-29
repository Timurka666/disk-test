import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react" 
import { IUploadQuery } from "./types"
import Cookies from "js-cookie";

export const yandexDiskApi = createApi({
    reducerPath: 'yandexDisk/api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://cloud-api.yandex.net/v1/disk'}),
    endpoints: (build) => ({
        getQuery: build.query<IUploadQuery, string>({
            query: (fileName) => ({
                url: '/resources/upload',
                params: {
                    path: fileName
                },
                headers: {
                    'Authorization': `OAuth ${Cookies.get('access')}`
                }
            })
        })
    })
})

export const {} = yandexDiskApi;