import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

import { view } from '@risingstack/react-easy-state'

import { Menu } from 'antd'

import { appStore } from "../store/appStore"
import { AreaChartOutlined } from '@ant-design/icons'

export default view(() => {
    const items = appStore.topics.map((key) => ({
        key: key.display,
        label: (
            <Link className='sideNavLink' to={`/topic/${key.display}`}>{key.display}</Link>
          ),
    }));

    const { topicName } = useParams()

    return (
        <Menu
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
