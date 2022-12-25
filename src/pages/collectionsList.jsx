import { useState } from 'react'
import { Link } from "react-router-dom";

import { view, autoEffect } from '@risingstack/react-easy-state';
import { Spin } from 'antd';

import { appStore } from "../store/appStore";

export default view(() => {
    const [topics, setTopics] = useState([])

    autoEffect(() => {
        console.log('useEffect called')
        appStore.fetchTopics()
        .then(() => {
            setTopics(appStore.topics)
        })
    }, [appStore.topics])

    return (
        appStore.isLoading ?
        <Spin tip="Loading">
            <div className="content" />
        </Spin> :
        <>
            <ul>
                {topics &&
                    topics.map((topic) => (
                        <li>
                            <Link to={`/topic/${topic.display}`} key={topic.display}>{topic.display}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
})