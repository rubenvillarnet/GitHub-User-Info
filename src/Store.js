import { types } from "mobx-state-tree"
import { values } from "mobx"

const User = types
  .model({
    username: types.string,
    name: types.string,
    avatar: types.string,
    url: types.string,
    location: types.string
  })
  .actions(self => ({
    setUser(payload) {
      self.username = payload.username
      self.name = payload.name
      self.avatar = payload.avatar
      self.url = payload.url
      self.location = payload.location
    }
  }))

const Repo = types
  .model({
    name: types.string,
    url: types.string,
    language: types.string
  })

const Org = types
  .model({
    name: types.string,
    url: types.string,
    repos: types.number
  })

const Loaded = types
  .model({
    userData: types.boolean,
    repos: types.boolean,
    orgs: types.boolean
  })

const RootStore = types
  .model({
    loaded: Loaded,
    user: User,
    repos: types.array(Repo),
    orgs: types.array(Org),
  })
  .views(self => ({
    get reposCount() {
      return values(self.repos).length
    },
    get orgsCount() {
      return values(self.orgs).length
    }
  }))
  .actions(self => ({
    addRepo(repo) {
      self.repos.push(repo)
    },
    clearAll() {
      self.repos = []
      self.orgs = []
    },
    addOrg(org) {
      self.orgs.push(org)
    },
    setLoadStatus(data, status) {
      self.loaded[data] = status
    }
  }))


export { RootStore }