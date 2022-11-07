// Write your tests here!
const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius",()=>{
  
  it("should encode a message by translating each letter to number pairs",()=>{
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  })
  it("should translate both 'i' and 'j' to 42",()=>{
    const expected = "424222221351";
    const actual = polybius("jiggle");
    expect(actual).to.equal(expected);
  })
  it("should leave spaces as is",()=>{
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  })
  it("should decode a message by translating each pair of numbers into a letter",()=>{
    const expected = "message";
    const actual = polybius("23513434112251",false);
    expect(actual).to.equal(expected);
  })
  it("should return false if the length of all numbers is odd",()=>{
    const actual = polybius("3251131343 254324134",false)
    expect(actual).to.be.false
  })
})