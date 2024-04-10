import axios from 'axios';

const characters = async (state) => {
    try {
        const request = await axios.get('https://rickandmortyapi.com/api/character');
        state(request.data.results);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

export { characters };