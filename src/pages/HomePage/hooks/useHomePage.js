import axios from "axios"
import { useState } from "react";
export const useHomePageContent = () => {
    const [contentData, setContentData] = useState([])

    const fetchGeo = async () => {
        try {
            const response = await axios.get(`https://private-f5cb41-pruebafrontend2024.apiary-mock.com/geolocalizacion`, {
                headers: {
                    "Content-Type": "application/json", 
                }
            });
            let data = response;
        } catch (error) {
            
        }
    }

    const fetchContent = async () => {
        try {
            const response = await axios.get(`https://private-f5cb41-pruebafrontend2024.apiary-mock.com/principal`, {
                headers: {
                    "Content-Type": "application/json", 
                }
            });
            let data = response.data;
            setContentData(data)
            console.log('EO', data)
        } catch (error) {
            
        }
    }

    return {
        contentData,
        fetchGeo,
        fetchContent
    }
}