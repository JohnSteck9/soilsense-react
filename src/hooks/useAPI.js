// import {API} from "aws-amplify";
import axios from "axios";

// GET ALL
// export const getAllItems = async () => await API.get('soilsenseapi', '/items')
export const getAllItems = async () => await axios.get('http://johnsteck.xyz:80/api/')
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(e => console.error(e))


export const getAllItems2 = async () => await axios.get('http://www.johnsteck.xyz:80/api/')
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(e => console.error(e))

// GET BY ID
export const getById = async (id) => await axios.get(`http://www.johnsteck.xyz:80/api/${id}`)
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(e => console.error(e))

// POST
export const createItem = async (item) => {
    return await axios.post(`http://www.johnsteck.xyz/api/`, {
        body: {
            max_water: item.max_water,
            humidity_pct: item.humidity_pct,
            lighting_pct: item.lighting_pct,
            pumps: item.pumps,
            sensor_location: item.sensor_location,
            nozzles_location: item.nozzles_location,
            timestamp: item.nozzles_location,
            sensor_id: item.sensor_id,
            sensor_type: item.sensor_type,
            api_key: item.api_key
        }
    })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => console.error(e))
}

// PUT
export const updateItem = async (id, item) => {
    return await axios.put(`http://www.johnsteck.xyz:80/api/${id}`, {
        body: {
            max_water: item.max_water,
            humidity_pct: item.humidity_pct,
            lighting_pct: item.lighting_pct,
            pumps: item.pumps,
            sensor_location: item.sensor_location,
            nozzles_location: item.nozzles_location,
            timestamp: item.timestamp,
            sensor_id: item.sensor_id,
            sensor_type: item.sensor_type,
            api_key: item.api_key
        }
    })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => console.error(e))
}

// DELETE
export const delItem = async (id) => {

    await axios.delete(`http://johnsteck.xyz:5000/items/${id}`)
        .then(res => {
            console.log(res)
            if (!res) {
                axios.delete(`http://www.johnsteck.xyz:5000/items/${id}`)
                    .then(res2 => console.log(res2))
                    .catch(e2 => console.error(e2))
            }
        })
        .catch(e => console.error(e))


}


// delItem()
//     .then(res => console.log(res))
//     .catch(e => console.error(e))
