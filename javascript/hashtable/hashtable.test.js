const HashTable = require('./hashtable').Hashtable;



describe ('Hashtable Tests', () => {
  const hashmap = new HashTable(4000);

  test('add', () => {

    hashmap.add('name', 'Baraah');
    hashmap.add('one', 'test');
    hashmap.add('neo', 'test1');

    expect(hashmap.contains('bbb')).toEqual(false);
    expect(hashmap.contains('one')).toEqual(true);

  })

  test('Returns the value stored', () => {
    expect(hashmap.get('name')).toEqual(['Baraah'])

  })

  test('Returns null for a key that does not exist in the hashtable', () => {
    expect(hashmap.get('bbb')).toBe(null)

  })

  test('Handle a collision within the hashtable', () => {
    expect(hashmap.add('name', 'toto')).toBe("toto")
  })

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashmap.add('mane', 'toto')
    expect(hashmap.get('mane')).toEqual(["toto"])
  })

  test('Successfully hash a key to an in-range value', () => {
    expect(hashmap.hash('foo')).toBe(2156)
  })

})