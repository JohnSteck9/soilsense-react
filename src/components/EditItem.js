import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Button, Form} from "react-bootstrap";
import {getById, updateItem} from "../hooks/useAPI";

const EditItem = ({ history }) => {
  const params = useParams();

    const [maxWater, setMaxWater] = useState(0);
    const [humidityPct, setHumidityPct] = useState(0);
    const [lightingPct, setLightingPct] = useState(0);
    const [pumps, setPumps] = useState('');
    const [sensorLocation, setSensorLocation] = useState('');
    const [nozzlesLocation, setNozzlesLocation] = useState('');


  useEffect(() => {
    getById(params.id).then(el => {
      const item = {
        max_water: el.data.Item.max_water.S,
        humidity_pct: el.data.Item.humidity_pct.S,
        lighting_pct: el.data.Item.lighting_pct.S,
        pumps: el.data.Item.pumps.S,
        sensor_location: el.data.Item.sensor_location.S,
        nozzles_location: el.data.Item.nozzles_location.S
      }

      setMaxWater(item.max_water)
      setHumidityPct(item.humidity_pct)
      setLightingPct(item.lighting_pct)
      setPumps(item.pumps)
      setSensorLocation(item.sensor_location)
      setNozzlesLocation(item.nozzles_location)
    })

  }, [])


  const editData = () => {
    updateItem(params.id, {
      max_water: maxWater,
      humidity_pct: humidityPct,
      lighting_pct: lightingPct,
      pumps: pumps,
      sensor_location: sensorLocation,
      nozzles_location: nozzlesLocation
    }).then(()=>{
      console.log('updateItem')
    }).catch(e=>{
      console.error('updateItem')
    })
    history.push('/');
  }

  return (
      <div className="main-form">
        <h3>{params.id}</h3>
        <Form onSubmit={editData}>
          <Form.Group controlId="max_water">
            <Form.Label>max_water</Form.Label>
            <Form.Control
                value={maxWater}
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
                value={humidityPct}
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
                value={lightingPct}
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
                value={pumps}
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
                value={sensorLocation}
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
                value={nozzlesLocation}
                className="input-control"
                type="text"
                name="nozzles_location"
                placeholder="Enter nozzles_location"
                onChange={(e) => {
                  setNozzlesLocation(e.target.value);
                }}
            />
          </Form.Group>
          <Button onClick={() => editData()} variant="primary" type="submit" className="submit-btn">
            Edit
          </Button>
        </Form>
      </div>
  )
}

export default EditItem;
