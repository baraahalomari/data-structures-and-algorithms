const Stack = require('./stack-queue-brackets').Stack;
const validateBrackets = require('./stack-queue-brackets').validateBrackets;
describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  describe('Test Brackets Validation', () => {
    it('Test Brackets Validation and return true on happy path case', () => {
      expect(validateBrackets('(){}[]')).toEqual(true);
    });
    it('Test Brackets Validation and return true on another happy path case with text (matching and balanced)', () => {
      expect(validateBrackets('(a){b}[c]{[(Hello)]}')).toEqual(true);
    });
    it('Test Brackets Validation and return false on matching and not balanced', () => {
      expect(validateBrackets('{(})[]')).toEqual(false);
    });
    it('Test Brackets Validation and return false on not matching and not balanced', () => {
      expect(validateBrackets('{})([]')).toEqual(false);
    });
  });
});