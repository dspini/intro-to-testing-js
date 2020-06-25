// // Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe('Hello, World!');
    });
    it('should never return undefined when called', function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// // Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string "Hello, {name}!" when called with a string', function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
        expect(sayHello('Alex')).toBe("Hello, Alex!");
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when called with a non-string', function () {
        expect(sayHello(null)).toBe("Hello, World!");
        expect(sayHello("")).toBe("Hello, World!");
        expect(sayHello(2.3)).toBe("Hello, World!");
        expect(sayHello([])).toBe("Hello, World!");
        expect(sayHello({})).toBe("Hello, World!");
        expect(sayHello(helloWorld)).toBe("Hello, World!");
    });
});

// // Unit tests for the isFive function
describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when input is 5', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive("5")).toBe(true);
    });
    it('should return false when input is invalid', function () {
        expect(isFive("string")).toBe(false);
        expect(isFive(null)).toBe(false);
        expect(isFive(NaN)).toBe(false);
    });
});

// // Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should never return boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when the input is even', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven("8")).toBe(true);
    });
    it('should return false when input is NOT even', function () {
        expect(isEven(3)).toBe(false);
        expect(isEven("banana")).toBe(false);
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
        expect(isEven()).toBe(false);
    });
});

// Unit tests for the isVowel function
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should never return boolean', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if the input is a vowel', function () {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if the input is NOT a vowel', function () {
        expect(isVowel("y")).toBe(false);
        expect(isVowel(4)).toBe(false);
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
        expect(isVowel("banana")).toBe(false);
        expect(isVowel()).toBe(false);
    });
});

// // Unit tests for the add function
describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number for valid inputs', function () {
        expect(add(2, 3)).toBe(5);
        expect(add(-3, -9)).toBe(-12);
        expect(add("5", 6)).toBe(11);
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN for invalid inputs', function () {
        expect(add("banana", "split")).toBeNaN();
        expect(add(2, "apples")).toBeNaN();
        expect(add()).toBeNaN();
    });
});