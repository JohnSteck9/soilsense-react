import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {createItem} from "../hooks/useAPI";

const AddItem = ({history}) => {
    const [maxWater, setMaxWater] = useState(0);
    const [humidityPct, setHumidityPct] = useState(0);
    const [lightingPct, setLightingPct] = useState(0);
    const [pumps, setPumps] = useState('');
    const [sensorLocation, setSensorLocation] = useState('');
    const [nozzlesLocation, setNozzlesLocation] = useState('');

    const handleOnSubmit = () => {

        const newItem = {
            max_water: maxWater,
            humidity_pct: humidityPct,
            lighting_pct: lightingPct,
            pumps: pumps,
            sensor_location: sensorLocation,
            nozzles_location: nozzlesLocation
        }
        console.log(newItem)
        createItem(newItem).then((i => {
            console.log(i)
        }))
        history.push('/');
    };


    return (
        <React.Fragment>
            <div className="main-form">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="max_water">
                        <Form.Label>max_water</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="number"
                            name="max_water"
                            placeholder="Enter max_water"
                            onChange={(e) => {
                                setMaxWater(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="humidity_pct">
                        <Form.Label>humidity_pct</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="number"
                            name="humidity_pct"
                            placeholder="Enter humidity_pct"
                            onChange={(e) => {
                                setHumidityPct(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="lighting_pct">
                        <Form.Label>lighting_pct</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="number"
                            name="lighting_pct"
                            placeholder="Enter lighting_pct"
                            onChange={(e) => {
                                setLightingPct(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="pumps">
                        <Form.Label>pumps</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="pumps"
                            placeholder="Enter pumps"
                            onChange={(e) => {
                                setPumps(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="sensor_location">
                        <Form.Label>sensor_location</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="sensor_location"
                            placeholder="Enter sensor_location"
                            onChange={(e) => {
                                setSensorLocation(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="nozzles_location">
                        <Form.Label>nozzles_location</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="nozzles_location"
                            placeholder="Enter nozzles_location"
                            onChange={(e) => {
                                setNozzlesLocation(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button onClick={() => handleOnSubmit()} variant="primary" type="submit" className="submit-btn">
                        Submit
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    );
};

export default AddItem;
