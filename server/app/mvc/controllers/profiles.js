
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const profilesModel = require(path.join(mvcPath, 'models/profiles'))

const getAllProfiles = () => profilesModel.getAllProfiles()
const getAllProfilesViewModel = () => profilesModel.getAllProfilesViewModel()
const getProfile = (id) => profilesModel.getProfile(id)
const getProfileViewModel = (id) => profilesModel.getProfileViewModel(id)

module.exports = {
  getAllProfiles,
  getAllProfilesViewModel,
  getProfile,
  getProfileViewModel
}