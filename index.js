import github from "@actions/github";
import { Octokit } from "@octokit/action";

console.log(JSON.stringify(github.context, null, 2));
console.log(
  "github.context.payload.sender.login:",
  github.context.payload.sender.login
);

const octokit = new Octokit();
// octokit.teams.getMembershipForUserInOrg({
//   org: github.context.repo.owner,
//   team_slug: "tmp",
//   username: github.context.payload.sender.login,
// });
try {
  const result = await octokit.rest.teams.getMembershipForUserInOrg({
    org: github.context.payload.organization.login,
    team_slug: "tmp",
    username: github.context.payload.sender.login,
  });

  console.log("result:", result);
} catch (error) {
  console.error(error)
  console.error(github.context.payload.sender.login, "is not a member of tmp");
}
