export const createThumbnail = (rawUrl) => {
    return rawUrl.split('&q')[0]+'&q=60&w=200&fit=crop&auto=format'
}