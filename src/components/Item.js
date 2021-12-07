import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {delItem} from "../hooks/useAPI";

const Item = ({ id, max_water, humidity_pct, lighting_pct, pumps, sensor_location, nozzles_location, timestamp, sensor_id, sensor_type }) => {
    const [editLink, setEditLink] = useState(`edit/${id.S}`);

    return (
        <Card style={{width: '18rem'}} className="book">
            <Card.Body>
                <Card.Title className="book-title">{id.S}</Card.Title>
                <div className="book-details">
                    <div>Вологість: {humidity_pct.S}</div>
                    <div>Освітлення: {lighting_pct.S} </div>
                    <div>Локація датчика: {sensor_location.S} </div>
                    <div>Локація сопел: {nozzles_location.S}</div>
                    <div>Макс. витрата води: {max_water.S}</div>
                    <div>Насоси: {pumps.S}</div>
                    <div>Timestamp: {timestamp.S} </div>
                    <div>Sensor Id: {sensor_id.S}</div>
                    <div>Sensor Type: {sensor_type.S}</div>
                    {/*<div>API KEY: {api.S}</div>*/}
                </div>
                <Link to={editLink} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={() => delItem(id.S)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Item;
