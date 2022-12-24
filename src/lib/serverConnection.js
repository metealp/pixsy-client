export const getBaseUrl = () => {
    let baseUrl = 'http://127.0.0.1:3000/'
    if (process.env.NODE_ENV === 'production') {
        baseUrl = 'https://p9f9f8jjkk.execute-api.eu-central-1.amazonaws.com/Prod/'
    }
    return baseUrl
}