import {API} from "aws-amplify";


// GET ALL
export const getAllItems = async () => await API.get('soilsenseapi', '/items')


// GET BY ID
export const getById = async (id) => await API.get('soilsenseapi', `/items/${id}`)


// POST
export const createItem = async (item) => {
    return await API.post('soilsenseapi', '/items', {
        body: {
            max_water: item.max_water,
            humidity_pct: item.humidity_pct,
            lighting_pct: item.lighting_pct,
            pumps: item.pumps,
            sensor_location: item.sensor_location,
            nozzles_location: item.nozzles_location,
            timestamp: item.nozzles_location,
            sensor_id: item.sensor_id,
            sensor_type: item.sensor_type
        }
    })
}


// PUT
export const updateItem = async (id, item) => {
    return await API.put('soilsenseapi', `/items/${id}`, {
        body: {
            max_water: item.max_water,
            humidity_pct: item.humidity_pct,
            lighting_pct: item.lighting_pct,
            pumps: item.pumps,
            sensor_location: item.sensor_location,
            nozzles_location: item.nozzles_location
        }
    })
}

// DELETE
export const delItem = async (id) => await API.del('soilsenseapi', `/items/${id}`)

// delItem()
//     .then(res => console.log(res))
//     .catch(e => console.error(e))
