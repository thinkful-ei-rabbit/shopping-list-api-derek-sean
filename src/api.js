const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean';

function getItems() {
  return fetch(`${BASE_URL}/items`)
}

export default {
  getItems,
};