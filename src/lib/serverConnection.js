export const getBaseUrl = () => {
    let baseUrl = 'http://127.0.0.1:3000/'
    if (process.env.NODE_ENV === 'production') {
        baseUrl = 'https://7w7kt15xva.execute-api.eu-central-1.amazonaws.com/Prod/'
    }
    return baseUrl
}

export const getSharedRequestOptions = () => {
    return {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        }
    }
}