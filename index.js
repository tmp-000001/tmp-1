import github from '@actions/github'
import { Octokit } from '@octokit/action'

console.log(github.context.payload.sender.login)

const octokit = new Octokit()
octokit.teams.getMembershipForUserInOrg({
  org: context.repo.owner,
  team_slug: 'tmp',
  username: github.context.payload.sender.login
 })

const result = await github.rest.teams.getMembershipForUserInOrg({
  org: context.repo.owner,
  team_slug: 'tmp',
  username: github.context.payload.sender.login
})

console.log(result)
