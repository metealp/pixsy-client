import { useState } from 'react'
import { useParams } from 'react-router-dom';

import { view } from '@risingstack/react-easy-state';

export const TopicPhotos = view(() => {
    const { topicName } = useParams()
    const [count, setCount] = useState(0)

    return (
        <>
            <div>TopicPhotos</div>
            <div>{topicName}</div>

            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
})