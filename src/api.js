const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean';

function getItems() {
  return fetch(`${BASE_URL}/items`)
}

function createItem(name) {
  let newItem = JSON.stringify({name: name});
  return fetch(`${BASE_URL}/items`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
}

function updateItem(id, updateData) {
  let newItem = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
}

export default {
  getItems,
  createItem,
  updateItem,
};