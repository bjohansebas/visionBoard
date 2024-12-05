// https://docs.github.com/en/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
const sampleGithubOrg = {
  login: 'github',
  id: 1,
  node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
  url: 'https://api.github.com/orgs/github',
  repos_url: 'https://api.github.com/orgs/github/repos',
  events_url: 'https://api.github.com/orgs/github/events',
  hooks_url: 'https://api.github.com/orgs/github/hooks',
  issues_url: 'https://api.github.com/orgs/github/issues',
  members_url: 'https://api.github.com/orgs/github/members{/member}',
  public_members_url: 'https://api.github.com/orgs/github/public_members{/member}',
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  description: 'A great organization',
  name: 'github',
  company: 'GitHub',
  blog: 'https://github.com/blog',
  location: 'San Francisco',
  email: 'octocat@github.com',
  twitter_username: 'github',
  is_verified: true,
  has_organization_projects: true,
  has_repository_projects: true,
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  html_url: 'https://github.com/octocat',
  created_at: '2008-01-14T04:33:35Z',
  type: 'Organization',
  total_private_repos: 100,
  owned_private_repos: 100,
  private_gists: 81,
  disk_usage: 10000,
  collaborators: 8,
  billing_email: 'mona@github.com',
  plan: {
    name: 'Medium',
    space: 400,
    private_repos: 20,
    filled_seats: 4,
    seats: 5
  },
  default_repository_permission: 'read',
  members_can_create_repositories: true,
  two_factor_requirement_enabled: true,
  members_allowed_repository_creation_type: 'all',
  members_can_create_public_repositories: false,
  members_can_create_private_repositories: false,
  members_can_create_internal_repositories: false,
  members_can_create_pages: true,
  members_can_create_public_pages: true,
  members_can_create_private_pages: true,
  members_can_fork_private_repositories: false,
  web_commit_signoff_required: false,
  updated_at: '2014-03-03T18:58:10Z',
  deploy_keys_enabled_for_repositories: false,
  dependency_graph_enabled_for_new_repositories: false,
  dependabot_alerts_enabled_for_new_repositories: false,
  dependabot_security_updates_enabled_for_new_repositories: false,
  advanced_security_enabled_for_new_repositories: false,
  secret_scanning_enabled_for_new_repositories: false,
  secret_scanning_push_protection_enabled_for_new_repositories: false,
  secret_scanning_push_protection_custom_link: 'https://github.com/octo-org/octo-repo/blob/main/im-blocked.md',
  secret_scanning_push_protection_custom_link_enabled: false
}

// https://docs.github.com/en/rest/reference/repos#list-organization-repositories
const sampleGithubListOrgRepos = [
  {
    id: 1296269,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    owner: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url: 'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url: 'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/octocat/Hello-World',
    description: 'This your first repo!',
    fork: false,
    url: 'https://api.github.com/repos/octocat/Hello-World',
    archive_url: 'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
    assignees_url: 'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
    blobs_url: 'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
    branches_url: 'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
    collaborators_url: 'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
    comments_url: 'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
    commits_url: 'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
    compare_url: 'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
    contents_url: 'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
    contributors_url: 'https://api.github.com/repos/octocat/Hello-World/contributors',
    deployments_url: 'https://api.github.com/repos/octocat/Hello-World/deployments',
    downloads_url: 'https://api.github.com/repos/octocat/Hello-World/downloads',
    events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
    forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
    git_commits_url: 'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
    git_refs_url: 'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
    git_tags_url: 'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
    git_url: 'git:github.com/octocat/Hello-World.git',
    issue_comment_url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
    issue_events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
    issues_url: 'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
    keys_url: 'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
    labels_url: 'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
    languages_url: 'https://api.github.com/repos/octocat/Hello-World/languages',
    merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
    milestones_url: 'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
    pulls_url: 'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
    releases_url: 'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
    ssh_url: 'git@github.com:octocat/Hello-World.git',
    stargazers_url: 'https://api.github.com/repos/octocat/Hello-World/stargazers',
    statuses_url: 'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
    subscribers_url: 'https://api.github.com/repos/octocat/Hello-World/subscribers',
    subscription_url: 'https://api.github.com/repos/octocat/Hello-World/subscription',
    tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
    teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
    trees_url: 'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
    clone_url: 'https://github.com/octocat/Hello-World.git',
    mirror_url: 'git:git.example.com/octocat/Hello-World',
    hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
    svn_url: 'https://svn.github.com/octocat/Hello-World',
    homepage: 'https://github.com',
    language: null,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    is_template: false,
    topics: [
      'octocat',
      'atom',
      'electron',
      'api'
    ],
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    has_downloads: true,
    has_discussions: false,
    archived: false,
    disabled: false,
    visibility: 'public',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    permissions: {
      admin: false,
      push: false,
      pull: true
    },
    security_and_analysis: {
      advanced_security: {
        status: 'enabled'
      },
      secret_scanning: {
        status: 'enabled'
      },
      secret_scanning_push_protection: {
        status: 'disabled'
      },
      secret_scanning_non_provider_patterns: {
        status: 'disabled'
      }
    }
  }
]

// https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
const sampleGithubRepository = {
  id: 1296269,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
  name: 'Hello-World',
  full_name: 'octocat/Hello-World',
  owner: {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url: 'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false
  },
  private: false,
  html_url: 'https://github.com/octocat/Hello-World',
  description: 'This your first repo!',
  fork: false,
  url: 'https://api.github.com/repos/octocat/Hello-World',
  archive_url: 'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
  assignees_url: 'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
  blobs_url: 'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
  branches_url: 'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
  collaborators_url: 'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
  comments_url: 'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
  commits_url: 'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
  compare_url: 'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
  contents_url: 'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
  contributors_url: 'https://api.github.com/repos/octocat/Hello-World/contributors',
  deployments_url: 'https://api.github.com/repos/octocat/Hello-World/deployments',
  downloads_url: 'https://api.github.com/repos/octocat/Hello-World/downloads',
  events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
  forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
  git_commits_url: 'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
  git_refs_url: 'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
  git_tags_url: 'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
  git_url: 'git:github.com/octocat/Hello-World.git',
  issue_comment_url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
  issue_events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
  issues_url: 'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
  keys_url: 'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
  labels_url: 'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
  languages_url: 'https://api.github.com/repos/octocat/Hello-World/languages',
  merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
  milestones_url: 'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
  notifications_url: 'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
  pulls_url: 'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
  releases_url: 'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
  ssh_url: 'git@github.com:octocat/Hello-World.git',
  stargazers_url: 'https://api.github.com/repos/octocat/Hello-World/stargazers',
  statuses_url: 'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
  subscribers_url: 'https://api.github.com/repos/octocat/Hello-World/subscribers',
  subscription_url: 'https://api.github.com/repos/octocat/Hello-World/subscription',
  tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
  teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
  trees_url: 'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
  clone_url: 'https://github.com/octocat/Hello-World.git',
  mirror_url: 'git:git.example.com/octocat/Hello-World',
  hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
  svn_url: 'https://svn.github.com/octocat/Hello-World',
  homepage: 'https://github.com',
  forks_count: 9,
  forks: 9,
  stargazers_count: 80,
  watchers_count: 80,
  watchers: 80,
  size: 108,
  default_branch: 'master',
  open_issues_count: 0,
  open_issues: 0,
  is_template: false,
  topics: [
    'octocat',
    'atom',
    'electron',
    'api'
  ],
  has_issues: true,
  has_projects: true,
  has_wiki: true,
  has_pages: false,
  has_downloads: true,
  has_discussions: false,
  archived: false,
  disabled: false,
  visibility: 'public',
  pushed_at: '2011-01-26T19:06:43Z',
  created_at: '2011-01-26T19:01:12Z',
  updated_at: '2011-01-26T19:14:43Z',
  permissions: {
    pull: true,
    push: false,
    admin: false
  },
  allow_rebase_merge: true,
  template_repository: {
    id: 1296269,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
    name: 'Hello-World-Template',
    full_name: 'octocat/Hello-World-Template',
    owner: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url: 'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url: 'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/octocat/Hello-World-Template',
    description: 'This your first repo!',
    fork: false,
    url: 'https://api.github.com/repos/octocat/Hello-World-Template',
    archive_url: 'https://api.github.com/repos/octocat/Hello-World-Template/{archive_format}{/ref}',
    assignees_url: 'https://api.github.com/repos/octocat/Hello-World-Template/assignees{/user}',
    blobs_url: 'https://api.github.com/repos/octocat/Hello-World-Template/git/blobs{/sha}',
    branches_url: 'https://api.github.com/repos/octocat/Hello-World-Template/branches{/branch}',
    collaborators_url: 'https://api.github.com/repos/octocat/Hello-World-Template/collaborators{/collaborator}',
    comments_url: 'https://api.github.com/repos/octocat/Hello-World-Template/comments{/number}',
    commits_url: 'https://api.github.com/repos/octocat/Hello-World-Template/commits{/sha}',
    compare_url: 'https://api.github.com/repos/octocat/Hello-World-Template/compare/{base}...{head}',
    contents_url: 'https://api.github.com/repos/octocat/Hello-World-Template/contents/{+path}',
    contributors_url: 'https://api.github.com/repos/octocat/Hello-World-Template/contributors',
    deployments_url: 'https://api.github.com/repos/octocat/Hello-World-Template/deployments',
    downloads_url: 'https://api.github.com/repos/octocat/Hello-World-Template/downloads',
    events_url: 'https://api.github.com/repos/octocat/Hello-World-Template/events',
    forks_url: 'https://api.github.com/repos/octocat/Hello-World-Template/forks',
    git_commits_url: 'https://api.github.com/repos/octocat/Hello-World-Template/git/commits{/sha}',
    git_refs_url: 'https://api.github.com/repos/octocat/Hello-World-Template/git/refs{/sha}',
    git_tags_url: 'https://api.github.com/repos/octocat/Hello-World-Template/git/tags{/sha}',
    git_url: 'git:github.com/octocat/Hello-World-Template.git',
    issue_comment_url: 'https://api.github.com/repos/octocat/Hello-World-Template/issues/comments{/number}',
    issue_events_url: 'https://api.github.com/repos/octocat/Hello-World-Template/issues/events{/number}',
    issues_url: 'https://api.github.com/repos/octocat/Hello-World-Template/issues{/number}',
    keys_url: 'https://api.github.com/repos/octocat/Hello-World-Template/keys{/key_id}',
    labels_url: 'https://api.github.com/repos/octocat/Hello-World-Template/labels{/name}',
    languages_url: 'https://api.github.com/repos/octocat/Hello-World-Template/languages',
    merges_url: 'https://api.github.com/repos/octocat/Hello-World-Template/merges',
    milestones_url: 'https://api.github.com/repos/octocat/Hello-World-Template/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/octocat/Hello-World-Template/notifications{?since,all,participating}',
    pulls_url: 'https://api.github.com/repos/octocat/Hello-World-Template/pulls{/number}',
    releases_url: 'https://api.github.com/repos/octocat/Hello-World-Template/releases{/id}',
    ssh_url: 'git@github.com:octocat/Hello-World-Template.git',
    stargazers_url: 'https://api.github.com/repos/octocat/Hello-World-Template/stargazers',
    statuses_url: 'https://api.github.com/repos/octocat/Hello-World-Template/statuses/{sha}',
    subscribers_url: 'https://api.github.com/repos/octocat/Hello-World-Template/subscribers',
    subscription_url: 'https://api.github.com/repos/octocat/Hello-World-Template/subscription',
    tags_url: 'https://api.github.com/repos/octocat/Hello-World-Template/tags',
    teams_url: 'https://api.github.com/repos/octocat/Hello-World-Template/teams',
    trees_url: 'https://api.github.com/repos/octocat/Hello-World-Template/git/trees{/sha}',
    clone_url: 'https://github.com/octocat/Hello-World-Template.git',
    mirror_url: 'git:git.example.com/octocat/Hello-World-Template',
    hooks_url: 'https://api.github.com/repos/octocat/Hello-World-Template/hooks',
    svn_url: 'https://svn.github.com/octocat/Hello-World-Template',
    homepage: 'https://github.com',
    language: null,
    forks: 9,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues: 0,
    open_issues_count: 0,
    is_template: true,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
    topics: [
      'octocat',
      'atom',
      'electron',
      'api'
    ],
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    has_downloads: true,
    archived: false,
    disabled: false,
    visibility: 'public',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    permissions: {
      admin: false,
      push: false,
      pull: true
    },
    allow_rebase_merge: true,
    temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
    allow_squash_merge: true,
    allow_auto_merge: false,
    delete_branch_on_merge: true,
    allow_merge_commit: true,
    subscribers_count: 42,
    network_count: 0
  },
  temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
  allow_squash_merge: true,
  allow_auto_merge: false,
  delete_branch_on_merge: true,
  allow_merge_commit: true,
  allow_forking: true,
  subscribers_count: 42,
  network_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZW1pdA=='
  },
  organization: {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url: 'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'Organization',
    site_admin: false
  },
  parent: {
    id: 1296269,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    owner: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url: 'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url: 'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/octocat/Hello-World',
    description: 'This your first repo!',
    fork: false,
    url: 'https://api.github.com/repos/octocat/Hello-World',
    archive_url: 'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
    assignees_url: 'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
    blobs_url: 'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
    branches_url: 'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
    collaborators_url: 'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
    comments_url: 'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
    commits_url: 'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
    compare_url: 'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
    contents_url: 'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
    contributors_url: 'https://api.github.com/repos/octocat/Hello-World/contributors',
    deployments_url: 'https://api.github.com/repos/octocat/Hello-World/deployments',
    downloads_url: 'https://api.github.com/repos/octocat/Hello-World/downloads',
    events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
    forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
    git_commits_url: 'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
    git_refs_url: 'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
    git_tags_url: 'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
    git_url: 'git:github.com/octocat/Hello-World.git',
    issue_comment_url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
    issue_events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
    issues_url: 'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
    keys_url: 'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
    labels_url: 'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
    languages_url: 'https://api.github.com/repos/octocat/Hello-World/languages',
    merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
    milestones_url: 'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
    pulls_url: 'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
    releases_url: 'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
    ssh_url: 'git@github.com:octocat/Hello-World.git',
    stargazers_url: 'https://api.github.com/repos/octocat/Hello-World/stargazers',
    statuses_url: 'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
    subscribers_url: 'https://api.github.com/repos/octocat/Hello-World/subscribers',
    subscription_url: 'https://api.github.com/repos/octocat/Hello-World/subscription',
    tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
    teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
    trees_url: 'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
    clone_url: 'https://github.com/octocat/Hello-World.git',
    mirror_url: 'git:git.example.com/octocat/Hello-World',
    hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
    svn_url: 'https://svn.github.com/octocat/Hello-World',
    homepage: 'https://github.com',
    language: null,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    is_template: true,
    topics: [
      'octocat',
      'atom',
      'electron',
      'api'
    ],
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    has_downloads: true,
    archived: false,
    disabled: false,
    visibility: 'public',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    permissions: {
      admin: false,
      push: false,
      pull: true
    },
    allow_rebase_merge: true,
    temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
    allow_squash_merge: true,
    allow_auto_merge: false,
    delete_branch_on_merge: true,
    allow_merge_commit: true,
    subscribers_count: 42,
    network_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
    forks: 1,
    open_issues: 1,
    watchers: 1
  },
  source: {
    id: 1296269,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    owner: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url: 'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url: 'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/octocat/Hello-World',
    description: 'This your first repo!',
    fork: false,
    url: 'https://api.github.com/repos/octocat/Hello-World',
    archive_url: 'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
    assignees_url: 'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
    blobs_url: 'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
    branches_url: 'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
    collaborators_url: 'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
    comments_url: 'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
    commits_url: 'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
    compare_url: 'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
    contents_url: 'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
    contributors_url: 'https://api.github.com/repos/octocat/Hello-World/contributors',
    deployments_url: 'https://api.github.com/repos/octocat/Hello-World/deployments',
    downloads_url: 'https://api.github.com/repos/octocat/Hello-World/downloads',
    events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
    forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
    git_commits_url: 'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
    git_refs_url: 'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
    git_tags_url: 'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
    git_url: 'git:github.com/octocat/Hello-World.git',
    issue_comment_url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
    issue_events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
    issues_url: 'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
    keys_url: 'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
    labels_url: 'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
    languages_url: 'https://api.github.com/repos/octocat/Hello-World/languages',
    merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
    milestones_url: 'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
    pulls_url: 'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
    releases_url: 'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
    ssh_url: 'git@github.com:octocat/Hello-World.git',
    stargazers_url: 'https://api.github.com/repos/octocat/Hello-World/stargazers',
    statuses_url: 'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
    subscribers_url: 'https://api.github.com/repos/octocat/Hello-World/subscribers',
    subscription_url: 'https://api.github.com/repos/octocat/Hello-World/subscription',
    tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
    teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
    trees_url: 'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
    clone_url: 'https://github.com/octocat/Hello-World.git',
    mirror_url: 'git:git.example.com/octocat/Hello-World',
    hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
    svn_url: 'https://svn.github.com/octocat/Hello-World',
    homepage: 'https://github.com',
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    is_template: true,
    topics: [
      'octocat',
      'atom',
      'electron',
      'api'
    ],
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    has_downloads: true,
    archived: false,
    disabled: false,
    visibility: 'public',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    permissions: {
      admin: false,
      push: false,
      pull: true
    },
    allow_rebase_merge: true,
    temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
    allow_squash_merge: true,
    allow_auto_merge: false,
    delete_branch_on_merge: true,
    allow_merge_commit: true,
    subscribers_count: 42,
    network_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
    forks: 1,
    open_issues: 1,
    watchers: 1,
    security_and_analysis: {
      advanced_security: {
        status: 'enabled'
      },
      secret_scanning: {
        status: 'enabled'
      },
      secret_scanning_push_protection: {
        status: 'disabled'
      },
      secret_scanning_non_provider_patterns: {
        status: 'disabled'
      }
    }
  }
}

module.exports = {
  sampleGithubOrg,
  sampleGithubListOrgRepos,
  sampleGithubRepository
}
