// services/allAPI.js
import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// POST - Add new donor
export const addDonorAPI = async (donorData) => {
    return await commonAPI('POST', `${serverURL}/donors`, donorData)
}

// GET - Get all donors
export const getDonorAPI = async () => {
    return await commonAPI('GET', `${serverURL}/donors`, {})
}

// DELETE - Delete donor by id
export const deleteDonorAPI = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/donors/${id}`, {})
}

// GET - Get a specific donor by id
export const getADonorAPI = async (id) => {
    return await commonAPI('GET', `${serverURL}/donors/${id}`, {})
}

// PUT - Update donor by id
export const updateDonorAPI = async (id, editData) => {
    return await commonAPI('PUT', `${serverURL}/donors/${id}`, editData)
}