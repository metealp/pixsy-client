import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { view, autoEffect } from '@risingstack/react-easy-state'
import { Menu } from 'antd'

import { appStore } from "../store/appStore"
import LoadingSpinner from "../components/spinner";

export default view(() => {
    const [topics, setTopics] = useState([])

    autoEffect(() => {
        appStore.fetchTopics()
        .then(() => {
            setTopics(appStore.topics)
        })
    }, [appStore.topics])

    const { topicName } = useParams()

    const items = topics.map((key) => ({
        key: key.display,
        label: (
            <Link className='sideNavLink' to={`/topic/${key.display}`}>{key.display}</Link>
          ),
    }));

    return (
        appStore.areTopicsLoading
            ? <LoadingSpinner />
            : <Menu
                mode="inline"
                style={{
                    height: '100%',
                }}
                items={items}
                selectedKeys={[topicName]}
                className='sideNavMenu'
            />
    )
})
