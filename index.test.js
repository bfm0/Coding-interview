const getLengthLongestSubstring = require('./index');

test('asserts that the biggest substring length was found', () => {
    expect(getLengthLongestSubstring("ABDEFGABEF")).toBe(6);
    expect(getLengthLongestSubstring("BBBB")).toBe(1);
    expect(getLengthLongestSubstring("GEEKSFORGEEKS")).toBe(7);
});