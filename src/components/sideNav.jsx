import { view } from '@risingstack/react-easy-state'

import { Menu } from 'antd'

import { appStore } from "../store/appStore"

export default view(() => {
    const items = appStore.topics.map((key) => ({
        key,
        label: key.display,
    }));

    return (
        <Menu
            mode="inline"
            style={{
                height: '100%',
            }}
            items={items}
        />
    )
})
