import { useState } from 'react'
import { Link } from "react-router-dom";

import { view } from '@risingstack/react-easy-state';

// import { appStore } from "../store";

export const CollectionsList = view(() => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     appStore.fetchTopics()
    // }, [])

    return (
        <>
            <div>CollectionsList</div>
            <Link to="architecture">architecture</Link>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
})