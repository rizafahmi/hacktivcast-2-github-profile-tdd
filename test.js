const assert = require('chai').assert
const app = require('./app.js')

describe("First test", () => {
  it("is to check whether one is equal to one", () => {
    assert.equal(1, 1)
  })
})


describe("A simple way to look at GitHub profile", () => {

  it("Connect to the GitHub API and return a string", (done) => {
    app.getProfile('rizafahmi', (error, profile) => {
      if (!error){
        assert.equal(profile.name, "Riza Fahmi")
      } else {
        assert.isNull(error)
      }
      done()
    })
  })
  it("Read the data")
  it("Parse the data")
  it("Print the data out")

})
