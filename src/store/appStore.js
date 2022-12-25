import { getBaseUrl, getSharedRequestOptions } from "../lib/serverConnection";
import { store } from '@risingstack/react-easy-state';

export const appStore = store({
    topics: [],
    collections: [],
    cachedCollectionNames: [], //  search in hydrated collections
    isLoading: true,
    hasError: false,
    errorMessage: '',

    async fetchTopics() {
        if (!appStore.topics.length) { //  skip if there is cached topics
            appStore.isLoading = true
            const options = getSharedRequestOptions()
            fetch(getBaseUrl(), options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response);
            })
            .then(data => {
                appStore.topics = data.topics
            })
            .catch(response => {
                response.json().then(json => {
                    appStore.hasError = true
                    appStore.errorMessage = json.message
                })
            })
            .finally(() => {
                appStore.isLoading = false
            })
        }
    },

    async fetchTheCollection(collectionName) {
        const indexOfCollection = appStore.findIndexOfTopic(collectionName)
        if (!(appStore.collections && indexOfCollection != -1)) { //  skip if the collection is cached
            appStore.isLoading = true
            const options = getSharedRequestOptions()
            fetch(getBaseUrl() + 'topic/' + collectionName, options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response);
            })
            .then(data => {
                appStore.collections.push({
                    topic: collectionName,
                    photos: data.photos
                })
                appStore.cachedCollectionNames.push(collectionName)
            })
            .catch(response => {
                response.json().then(json => {
                    appStore.hasError = true
                    appStore.errorMessage = json.message
                })
            })
            .finally(() => {
                appStore.isLoading = false
            })
        }
    },

    clearErrorState() {
        appStore.hasError = false
        appStore.errorMessage = ''
    },

    findIndexOfTopic(collectionName) {
        return appStore.cachedCollectionNames.indexOf(collectionName)
    }

})
