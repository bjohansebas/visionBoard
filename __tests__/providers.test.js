const { github, ossf } = require('../src/providers')
const {
  sampleGithubOrg,
  sampleGithubRepository,
  sampleOSSFScorecardResult
} = require('../__fixtures__')

describe('GitHub Provider', () => {
  describe('fetchOrgByLogin', () => {
    it.todo('Should fetch organization by login')
    it.todo('Should throw an error if the organization does not exist')
    it.todo('Should throw an error if there are network issues')
  })

  describe('fetchOrgReposListByLogin', () => {
    it.todo('Should fetch organization repositories by login')
    it.todo('Should throw an error if the organization does not exist')
    it.todo('Should throw an error if there are network issues')
  })

  describe('fetchRepoByFullName', () => {
    it.todo('Should fetch repository by full name')
    it.todo('Should throw an error if the repository does not exist')
    it.todo('Should throw an error if there are network issues')
  })

  describe('mappers', () => {
    it('Should map organization data correctly', () => {
      const mappedData = github.mappers.org(sampleGithubOrg)
      expect(mappedData).toMatchSnapshot()
    })

    it('Should map repository data correctly', () => {
      const mappedData = github.mappers.repo(sampleGithubRepository)
      expect(mappedData).toMatchSnapshot()
    })
  })
})

describe('OSSF Provider', () => {
  describe('performScorecardAnalysis', () => {
    it.todo('Should perform scorecard analysis')
    it.todo('Should throw an error if the repository does not exist')
    it.todo('Should throw an error if there are network issues')
  })
  describe('mappers', () => {
    it('Should map scorecard data correctly', () => {
      const mappedData = ossf.mappers.result({ ...sampleOSSFScorecardResult, analysis_execution_time: 19876 })
      expect(mappedData).toMatchSnapshot()
    })
  })
})
