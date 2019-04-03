const { MemoryDatabase } = require('../lib/index.js');

describe('create memory class', () => {
  it('create empty storage', () => {
    const memory = new MemoryDatabase();
    expect(memory.store).toEqual({});
  });

  it('adds an name obj to the store', () => {
    const memory = new MemoryDatabase();
    const obj = { name: 'Superman' };
    const copy = memory.create(obj);
    expect(copy.name).toEqual('Superman');
  });

  it('find by id', () => {
    const memory = new MemoryDatabase();
    const obj = { name: 'Superman' };
    const copy = memory.create(obj);
    const id = copy._id;
    expect(memory.findById(id)).toEqual({ ...copy });
  });

  it('find by id', () => {
    const memory = new MemoryDatabase();
    const obj = { name: 'Superman' };
    memory.create(obj);
    expect(memory.findById(222)).toEqual(null);
  });

  it('find', () => {
    const memory = new MemoryDatabase();
    const dog = memory.create({ name: 'bob', age: 5 });
    const cat = memory.create({ name: 'kitty', age: 24 });
    expect(memory.find()).toEqual([{ ...dog }, { ...cat }]);
  });
  
  it('updates object by id', () => {
    const memory = new MemoryDatabase();
    const dog = memory.create({ name: 'bob', age: 5 });
    const dogId = dog._id;
    const newDog = ({ name: 'kitty', age: 24 });
    expect(memory.findByIdAndUpdate(dogId, newDog)).toEqual({ ...newDog, _id: dogId });
  });

  it('find by id and delete', () => {
    const memory = new MemoryDatabase();
    const dog = memory.create({ name: 'bob', age: 5 });
    const dogId = dog._id;
    expect(memory.findByIdAndDelete(dogId)).toEqual({ ...dog });
    expect(memory.findById(dogId)).toEqual(null);
  });

  it('delete all keys', () => {
    const memory = new MemoryDatabase();
    const dog = memory.create({ name: 'bob', age: 5 });
    const dogId = dog._id;
    expect(memory.findByIdAndDelete(dogId)).toEqual({ ...dog });
    expect(memory.findById(dogId)).toEqual(null);
  });

  it('deletes everything in this.store', () => {
    const memory = new MemoryDatabase();
    memory.create({ name: 'bob', age: 5 });
    memory.drop();
    expect(memory.store).toEqual({});
  });


});
