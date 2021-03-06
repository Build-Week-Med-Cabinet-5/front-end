import React, {useEffect, useState} from "react";
import { Col, ListGroup, ListGroupItem, Label } from "reactstrap";
import axiosWithAuth from "../utils/axiosWithAuth";
import StrainRecommender from "./StrainRecommender";

const ProfilePage = (props) => {
    const [profileData, setProfileData] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get(`/strain_recommendations`)// /${id}
            .then(res => {
                console.log(res.data)
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
            <StrainRecommender/>
        </Col>
    );
}

export default ProfilePage;