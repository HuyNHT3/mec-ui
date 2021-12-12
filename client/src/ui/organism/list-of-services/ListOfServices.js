import { React } from 'react';
import {
    Container,
    Card,
    Row,
    Col,
    Image
} from 'react-bootstrap'
const ListOfServices = (props) => {
    const {serviceData} = props;
    return (
        <Container>
            <Row sm="2" md="3" xs="1" lg="4" xl="5">
                {serviceData.map((serviceItem,index) => {
                    return (
                        <Col key={index}>
                            <Card className="mb-2" >
                                <Card.Header>{serviceItem.header}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Image style={{height:'50%'}} src={"./service-images/"+serviceItem.image} fluid />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
export default ListOfServices;