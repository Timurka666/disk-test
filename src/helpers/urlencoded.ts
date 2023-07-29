function toURLEncoded(params: Object) {
    let formBody = Object.entries(params).map(([key, value]: [string, string]) => (
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ))

    return formBody.join('&')
}

export default toURLEncoded;