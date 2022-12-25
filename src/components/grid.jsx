import { Row, Col } from 'antd';

export default (props) => {
    const items = props.items.map(item => <Col className='photoGridCol' xs={24} md={12} l={8} xl= {6}>{item}</Col>)

    return (
        <Row gutter={[16, 24]}>{items}</Row>
    )
}
