import { getBaseUrl } from "../lib/serverConnection";
import { store } from '@risingstack/react-easy-state';

export const appStore = store({
    topics: [],
    collections: [],
    cachedCollectionNames: [], //  search in hydrated collections
    isCollectionLoading: true,
    areTopicsLoading: true,
    hasError: false,
    errorMessage: '',

    async fetchTopics() {
        if (!appStore.topics) { //  skip if there is cached topics
            const response = await fetch(getBaseUrl())
            console.log(response)

            if (response.status >= 200 && response.status < 300) {
                appStore.topics = response.body.topics
            } else {
                appStore.hasError = true
                appStore.errorMessage = response.body.message
            }
        }
    },

    async fetchTheCollection(collectionName) {
        const indexOfCollection = appStore.cachedCollectionNames.indexOf(collectionName)
        if (!(collections && indexOfCollection != -1)) { //  skip if the collection is cached
            const response = await fetch(getBaseUrl() + collectionName)
            if (response.status >= 200 && response.status < 300) {
                appStore.collections.push({
                    topic: collectionName,
                    photos: response.body.photos
                })
                appStore.cachedCollectionNames.push(collectionName)
            } else {
                appStore.hasError = true
                appStore.errorMessage = response.body.message //  all error messages handled on backend
            }

        }
    },

    clearErrorState() {
        collectionStore.hasError = false
        collectionStore.errorMessage = ''
    }

})
