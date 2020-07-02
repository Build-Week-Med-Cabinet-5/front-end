import React from "react";
import axios from "axios";
<<<<<<< HEAD
import StrainContext from './../context/StrainContext'
=======
import StrainContext from '../Context/StrainContext'
>>>>>>> 2510ff15d58ec914859f478d8f3d8002726eff0c
import * as yup from 'yup';

import {Card, Form, Label, Input, Button, FormGroup} from "reactstrap";
import axiosWithAuth from "../utils/axiosWithAuth";

export default class StrainRecommender extends React.Component {
    state = {
        sendData:{
            id: 1,
            Effects: ''
        },

        strain:{
            strain: ''
        }
    }

    testData ={
    id: 420,
    Effects:"Happy,Relaxed,Uplifted,Focused,Aroused"

    }

    handleChange = e => {
        this.setState({
            sendData: {
                ...this.state.sendData,
                [e.target.name]:e.target.value
            }
        })
    }

    submitEffects = e => {
        console.log(this.state.sendData)
        e.preventDefault();
        axios
            .post('https://cors-anywhere.herokuapp.com/https://ds-med-cabinet.herokuapp.com/predict', this.state.sendData
            )
            .then(res => {
                console.log(res)
                this.setState({
                    strain:{
                        strain: res.data
                    }
                })
                console.log(this.state.strain)
                axiosWithAuth()
                    .post('/strain_recommendations', this.state.strain)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => console.log(err.response))
            })
            .catch(err => console.log(err.response))
    }

    render() {
        return (

                <Form onSubmit={this.submitEffects}>
                        <Label>
                            Search
                        </Label>
                    <Input
                        type="text"
                        name='Effects'
                        value={this.state.sendData.Effects}
                        onChange={this.handleChange}
                    />
                    <Button>Submit</Button>
                </Form>

        )
    }
}