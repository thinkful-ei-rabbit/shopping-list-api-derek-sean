const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

function findAndUpdate(id, newData){
let changedItem = this.items.find(item => item.id === id);
Object.assign(changedItem, newData);
}



const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  findAndUpdate,
  items,
  hideCheckeditems,
  findById,
  addItem,
  //findAndToggleChecked,
  //findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};