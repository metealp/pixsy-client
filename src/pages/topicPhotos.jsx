import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { view, autoEffect } from '@risingstack/react-easy-state'

import { appStore } from "../store/appStore"

export default view(() => {
    const { topicName } = useParams()
    const [topicPhotos, setTopicPhotos] = useState([])

    autoEffect(() => {
        appStore.fetchTheCollection(topicName)
        .then(() => {
            const indexOfTopic = appStore.findIndexOfTopic(topicName)
            if (indexOfTopic >= 0) {
                setTopicPhotos(appStore.collections[indexOfTopic].photos)
            }
        })
    }, [appStore.collections])

    return (
        <>
            <div>{topicName}</div>
            {topicPhotos &&
                topicPhotos.map((photo) => <img width={"200px"} height={"200px"} key={photo.id} src={photo.url}></img>)
            }
        </>
    )
})