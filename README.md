# NSJSA Automation Prototype

This is the source code for the NSJSA Automation prototype
and its documentation site.
It is built using the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs)
and end extended with components frome the [DWP Design System](https://design-system.dwp.gov.uk/index).
This prototype is used to share ideas and to do user research.

## Quickstart Guide

To run the site locally,
clone the repo,
install the npm dependencies
and run the serve command.
Once cloned,
the repository should be self documenting
– if not,
contact a [contributor](/graphs/contributors) for help.

<details>
  <summary>Quickstart steps</summary>

### 1. Clone this repository

```bash
git clone https://github.com/tylensthilaire/nsjsa-automation-beta.git my-fork
```

### 2. Navigate to the directory

```bash
cd my-fork
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run Locally

```bash
npx eleventy --serve
```

</details>

## Conventions

**[Trunk based development](https://trunkbaseddevelopment.com/)** separates the work in progress from work completed.

- `main` is the latest used to preview or QA work in progress.
- `production` a stable, _live_ environment for researching with.
<!--
- If future iterations of a prototype are needed concurrently,
  create 'release' branches for each.
- To revisit an older iteration,
  fork the release branch and pull changes into `main` through it.
  -->
  
  </details>

<details>
  <summary><strong>Date-based versioning</strong> allows us to look at the prototype as it was at a specific point in time.</summary>

- Add tags to commits used for research, show and tells, et al in the format `YYMMDD-Event-Type`.
- Create releases from these tags for archiving as needed.
- ‘Fix forward‘ to keep the commit history traceable

</details>

<details>
  <summary><strong>[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)</strong> keep the project history easy to understand.</summary>

- Each commit should add a whole feature or fix a whole bug.
- Commits should never 'break the build' so that we can test or share at any time.

</details>

<details>
  <summary><strong>Linting</strong> enforces code formatting and conventions consistent

- The GOV.UK Prototype Kit uses [standardJS](https://standardjs.com/) for javascript files.
- Other files use [Prettier](https://prettier.io/)
- Recommended Visual Studio Code settings and extensions are included in the repository.

</details>

<details>
  <summary><strong>Continuous deployment</strong> processes automatically deploy the latest code pushed to Github for each branch with [Render](https://render.com/).</summary>

- When you add a branch (e.g. a release branch) you will need to configure a new app in Render
- `main` is deployed to [nsjsa-automation-staging.onrender.com](https://nsjsa-automation-staging.onrender.com)
- `production` is deployed to [nsjsa-automation-cbkl.onrender.com](https://nsjsa-automation-cbkl.onrender.com)

</details>

<details>
  <summary><strong>Self documenting</strong> code, in the form of comments, ensures the repo is easy for people to pick up and run with.</summary>

- Keep in mind that the GOV.UK Prototyping Kit is designed to require “minimal skills to get started”.
- Use extra README files per directory as required.

</details>

## Project structure

```ascii
.
├─ .vscode                            // Visual Studio Code workspace config files
│  ├─ extensions.json                 // Recommended extensions
│  └─ settings.json                   // Enforced settings
├─ app                                // Where your prototype lives
│  ├─ assets
│  │  ├─ images                       // Where images live
│  │  │  └< …
│  │  ├─ javascripts                  // Where js scripts live
│  │  │  └< …
│  │  └─ sass                         // Where Sass lives
│  │     └< …
│  ├─ data                            // Where data lives
│  │  └─ session-data-defaults.js     // Default data for applications in Service center UI
│  ├─ views                           // Your prototype screens
│  │  └< …
│  ├─ config.js                       // Prototype configuration
│  ├─ filters.js
│  └─ routes.js                       // Main routes file for branched journeys
├─ docs                               // Documentation
│  └< …
├─ lib                                // Makes everything work
│  └< …
├─ .gitignore                         // List of files not to version control
├─ .npmrc                             // NPM config
├─ .nvmrc                             // NVM config
├─ .prettierignore                    // List of ignored filetypes for Prettier
├─ LICENSE.txt
├─ listen-on-port.js
├─ package-lock.json                  // Manages dependencies strictly
├─ package.json                       // Manages dependencies
├─ Procfile                           // Sets Heroku startup commands
├─ README.md                        ☛ // YOU ARE HERE
├─ server.js
├─ start.js
└─ VERSION.txt                        // govuk-prototype-kit version
```

## Support

For help with this prototype,
contact a [contributor](/contributors)
or someone in the DWP Working Age Group.

The GOV.UK Prototype Kit is maintained by the Government Digital Service.
For questions and support regarding the GOV.UK Prototyping Kit, look at the documentation in the [govuk-prototype-kit repository](https://github.com/alphagov/govuk-prototype-kit) for up to date contacts.

## Technologies

This prototype is created using the following technologies:

- HTML / Nunjucks
- CSS / Sass
- Javascript
- JSON
- NodeJS

## Contributing

This prototype is owned by the DWP Working Age team.
Contact a contributor or a member of that team to discuss suggestions or contributions.

The [govuk-prototype-kit repository](https://github.com/alphagov/govuk-prototype-kit) is public
and welcomes contributions from anyone.

## Licence

This prototype inherits its licence (MIT)
and copyright (Crown Copyright)
from the GOV.UK Prototyping Kit.
[Read the licence](/LICENCE.txt).
