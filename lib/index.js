const uuid = require('uuid/v4');

class MemoryDatabase {
  constructor(){

    this.store = {
    };
  }
   
  create(obj){
    const id = uuid();
    this.store[id] = { ...obj, _id: id };
    return this.store[id];
  }

  findById(id) {
    return this.store[id] || null;
  }

  find() {
    return Object.values(this.store);
  }

  findByIdAndUpdate(id, newObject) {
    if(this.findById(id)) {
      this.store[id] = { ...newObject, _id: id };
      return this.store[id];
    } else {
      return null;
    }
  }

  

}
module.exports = {
  MemoryDatabase };
