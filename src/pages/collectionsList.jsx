import { useState } from 'react'
import { Link } from "react-router-dom"

import { view, autoEffect } from '@risingstack/react-easy-state'

import Layout from "../components/layout"
import Grid from "../components/grid"
import { appStore } from "../store/appStore"
import LoadingSpinner from "../components/spinner"
import CollectionCover from "../components/collectionCover";

export default view(() => {
    const [topics, setTopics] = useState([])

    autoEffect(() => {
        appStore.fetchTopics()
        .then(() => {
            setTopics(appStore.topics)
        })
    }, [appStore.topics])
    
    const items = appStore.areTopicsLoading
        ? <LoadingSpinner />
        : (topics &&
            topics.map((topic) => {
                return (
                    <Link to={`/topic/${topic.display}`} key={topic.display}>
                        <CollectionCover thumbnails={topic.thumbnails} />
                        <div className='topicInfoContainer'>
                            <span className='topicDisplayInfo'>{topic.display}</span>
                            <span className='topicMatchInfo'>{topic.len} Matches</span>
                        </div>
                    </Link>
                )
            })
        )

    return <Layout main={<Grid items={items} isLoading={appStore.areTopicsLoading}/>}/>
})