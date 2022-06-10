import axios from 'axios';

const getAllPokemons = async (nextResult = '') => {
  try {
    const { data } = await axios.get(`${nextResult || 'https://pokeapi.co/api/v2/pokemon'}`);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};

export default {
  getAllPokemons,
};
