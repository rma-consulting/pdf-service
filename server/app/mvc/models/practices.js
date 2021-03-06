const Datastore = require('nedb')

const practicesDB = new Datastore({ filename: process.cwd() + '/.db/practices.db', autoload: true })

const OPTIONS = { returnUpdatedDocs: true }

function practiceViewModel (practice) {
  const { lineManagers, jobTitles } = practice
  lineManagers.sort()
  jobTitles.sort()
  return practice
}

function getAllPractices () {
  return new Promise((resolve, reject) => {
    practicesDB.find({}, (e, practices) => {
      if (e) return reject(e)
      resolve(practices)
    })
  })
}

function setAllPractices (practices) {
  throw Error /*
  return new Promise((resolve, reject) => {
    practicesDB.update(practices, OPTIONS, (e, practices) => {
      if (e) return reject(e)
      resolve(practices)
    })
  }) */
}

function getAllPracticesViewModel () {
  return new Promise((resolve, reject) => {
    practicesDB.find({}).sort({ name: 1 }).exec((e, practices) => {
      if (e) return reject(e)
      resolve(practices)
    })
  })
}

function getPractice (id) {
  return new Promise((resolve, reject) => {
    practicesDB.findOne({ _id: id }, (e, practice) => {
      if (e) return reject(e)
      resolve(practice)
    })
  })
}

function setPractice (id, practice) {
  return new Promise((resolve, reject) => {
    practicesDB.update({ _id: id }, practice, OPTIONS, (e, practice) => {
      if (e) return reject(e)
      resolve(practice)
    })
  })
}

function getPracticeViewModel (id) {
  return new Promise((resolve, reject) => {
    practicesDB.findOne({ _id: id }, (e, practice) => {
      if (e) return reject(e)
      resolve(practiceViewModel(practice))
    })
  })
}

module.exports = {
  getAllPractices,
  setAllPractices,
  getAllPracticesViewModel,
  getPractice,
  setPractice,
  getPracticeViewModel
}
