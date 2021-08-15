const HashTable = require('./hashtable').Hashtable;
const repeatedWord = require('./hashtable').repeatedWord


describe('Hashtable Tests', () => {
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


describe('test repeated word', () => {

  test('Repeated word 1', () => {
    let test = '';

    expect(repeatedWord(test)).toBe('cannot find words in an empty string');

  })
  test('Repeated word 2', () => {

    let test = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    expect(repeatedWord(test)).toBe('it');

  })
  
  test('Repeated word 3', () => {

    let test = 'some string with no repeated words';
    expect(repeatedWord(test)).toBe('cannot find words in an empty string');
    
  })
})