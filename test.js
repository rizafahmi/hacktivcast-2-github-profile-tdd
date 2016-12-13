const assert = require('chai').assert
const profile = require('./profile.js')

describe('First test', () => {
  it('is to check whether one is equal to one', () => {
    assert.equal(1, 1)
  })
})

describe('A simple way to look at GitHub profile', () => {

  it('Connect to the GitHub API and return a string', (done) => {
    profile.get('rizafahmi22', (error, profile) => {
      if (!error) {
        assert.equal(profile.name, 'Riza Fahmi')
        assert.isNull(error)
      } else {
        // TODO: buat test case terpisah
        assert.isNotNull(error)
      }
      done()
    })
  })
  it('Read the data')
  it('Parse the data')
  it('Print the data out')
})
