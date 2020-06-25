import React, {useEffect, useState} from "react";
import { Col, ListGroup, ListGroupItem, Label } from "reactstrap";
import axiosWithAuth from "../utils/axiosWithAuth";

const ProfilePage = (props) => {
    const [profileData, setProfileData] = useState({})
    useEffect(() => {
        axiosWithAuth()
            .get('/users/${token.id}')
            .then(res => {
                console.log(res)
                setProfileData(res.data)
            })
    }, [])
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