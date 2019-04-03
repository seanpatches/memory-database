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
});
