import React from "react";
import { Col, ListGroup, ListGroupItem, Label } from "reactstrap";

const ProfilePage = (props) => {
    return (
        <Col md={{ size: 6, offset: 3}}>
            <ListGroup>
                <ListGroupItem>
                    <Label for="name">Name</Label>
                    <p>
                        Lipsium
                    </p>
                </ListGroupItem>
                <ListGroupItem>
                    <Label for='email'>
                        Email
                    </Label>
                    <p>
                        Lipsium
                    </p>
                </ListGroupItem>
                <ListGroupItem>
                    <Label for='location'>
                        Location
                    </Label>
                    <p>
                        Lipsium
                    </p>
                </ListGroupItem>
            </ListGroup>
        </Col>
    );
}

export default ProfilePage;