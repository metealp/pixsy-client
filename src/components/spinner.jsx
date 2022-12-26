import { view } from "@risingstack/react-easy-state";
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 96 }} spin />;

    return (
        <div className='spinContainer'><Spin indicator={antIcon} /></div>
    )
}
