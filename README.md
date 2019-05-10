<p align="center">
  <a href="https://cloudfinder.io/">
    <img src="/img/finder-logo.png" alt="Cloud Finder logo" width="70" height="70">
  </a>
</p>

<p align="center">
  Sleek, intuitive, and simple website for a fast and easy cloud comparison.
  <br>
  <a href="https://cloudfinder.io"><strong>Discover Cloud Finder »</strong></a>
  <br>
  <br>
  <a href="https://github.com/plcpinho/versus/issues/new?template=bug.md" target="_blank">Report bug</a>
  ·
  <a href="https://github.com/plcpinho/versus/issues/new?template=feature.md&labels=feature">Request feature</a>
</p>


## Table of contents

- [Quick start](#quick-start) :seedling:
- [Contributing for the Website](#contributing-for-the-website) :hammer:
- [What's included](#whats-included) :gift:
- [Bugs and feature requests](#bugs-and-feature-requests) :beetle:
- [Community](#community) :family:
- [Creators](#creators) :space_invader:
- [Thanks](#thanks) :raised_hands:


## Quick start

1. Fork the project;
2. Clone the repository on your local machine:
- `git clone https://github.com/plcpinho/versus.git`

Read the Contributing section for a collaboration page quick guide.

<!--- ## Status
[![Slack](https://bootstrap-slack.herokuapp.com/badge.svg)](https://bootstrap-slack.herokuapp.com/)
[![Build Status](https://img.shields.io/travis/twbs/bootstrap/master.svg)](https://travis-ci.org/twbs/bootstrap)
[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![Gem version](https://img.shields.io/gem/v/bootstrap.svg)](https://rubygems.org/gems/bootstrap)
[![Meteor Atmosphere](https://img.shields.io/badge/meteor-twbs%3Abootstrap-blue.svg)](https://atmospherejs.com/twbs/bootstrap)
[![Packagist Prerelease](https://img.shields.io/packagist/vpre/twbs/bootstrap.svg)](https://packagist.org/packages/twbs/bootstrap)
[![NuGet](https://img.shields.io/nuget/vpre/bootstrap.svg)](https://www.nuget.org/packages/bootstrap/absoluteLatest)
[![peerDependencies Status](https://img.shields.io/david/peer/twbs/bootstrap.svg)](https://david-dm.org/twbs/bootstrap?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/twbs/bootstrap.svg)](https://david-dm.org/twbs/bootstrap?type=dev)
[![Coverage Status](https://img.shields.io/coveralls/github/twbs/bootstrap/master.svg)](https://coveralls.io/github/twbs/bootstrap?branch=master)
[![CSS gzip size](https://img.badgesize.io/twbs/bootstrap/master/dist/css/bootstrap.min.css?compression=gzip&label=CSS+gzip+size)] (https://github.com/twbs/bootstrap/tree/master/dist/css/bootstrap.min.css)
[![JS gzip size](https://img.badgesize.io/twbs/bootstrap/master/dist/js/bootstrap.min.js?compression=gzip&label=JS+gzip+size)] https://github.com/twbs/bootstrap/tree/master/dist/js/bootstrap.min.js)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=SkxZcStBeExEdVJqQ2hWYnlWckpkNmNEY213SFp6WHFETWk2bGFuY3pCbz0tLXhqbHJsVlZhQnRBdEpod3NLSDMzaHc9PQ==--3d0b75245708616eb93113221beece33e680b229)](https://www.browserstack.com/automate/public-build/SkxZcStBeExEdVJqQ2hWYnlWckpkNmNEY213SFp6WHFETWk2bGFuY3pCbz0tLXhqbHJsVlZhQnRBdEpod3NLSDMzaHc9PQ==--3d0b75245708616eb93113221beece33e680b229)
[![Backers on Open Collective](https://img.shields.io/opencollective/backers/bootstrap.svg?style=flat)](#backers)
[![Sponsors on Open Collective](https://img.shields.io/opencollective/sponsors/bootstrap.svg?style=flat)](#sponsors) --->

## Contributing for the website

1. Open `versus` directory with your favorite code editor;
2. Once all table data are stored in JSON files, inside `data` folder, open the specific JSON file that you would like to update;
3. Each cloud provider is treated as an object. And for each object, there are three keys:
- "name" - representing the name of the service proposed;
- "ref" - indicating the reference link for the service website;
- "icon" - containing the service icon (which is stored inside `img > icons > cloudproviders` folder);
- "Properties" - containing service data properties.
4. Manipulate and update services data based on recurrent changes, commit the updates and push them to GitHub;
5. Create a Pull Request describing with a title and a quick summary of your changes;
6. Wait for a couple of days, and if the data are approved by the website administrators, the official website will be updated;
7. Thank you for joining Versus team, you are now, officially, a contributor! :clap::trophy::rainbow:


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
versus/
├── css/
│   ├── creative.css
│   └── stylish-portfolio.css
├── data/
│   ├── ai.json
│   ├── application-service.json
│   ├── bd-analytics.json
│   ├── compute.json
│   ├── db.json
│   ├── dev.json
│   ├── iot.json
│   ├── location.json
│   ├── management.json
│   ├── migration.json
│   ├── mobile.json
│   ├── network-cd.json
│   ├── other.json
│   ├── prod.json
│   ├── security.json
│   └── storage.json
├── img/
├── js/
│   ├── app.js
│   ├── create-table.js
│   ├── main.js
│   ├── searcher.js
│   ├── stylish-portfolio.js
│   └── table.js
└── index.html
```

## Bugs and feature requests

Have a bug or a feature request? Please first read and contact us (Community Section) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/plcpinho/versus/issues/new).

<!--- ### Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.3/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/). --->

## Community (in development)

<!--- Get updates on Versus's content, news about Cloud Computing and chat with specialists and enthusiasts.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog](https://blog.getbootstrap.com/).
- Join [the official Slack room](https://bootstrap-slack.herokuapp.com/).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability. --->

## Creators

**Gerson Itiro**
- <https://www.linkedin.com/in/itirohidaka>
- <https://github.com/itirohidaka>

**Paulo Coronado**
- <https://www.linkedin.com/in/paulo-coronado-994ab2127>
- <https://github.com/plcpinho>

**Lucas Souza**
- <https://www.linkedin.com/in/lucas-souza-38196b156>

## Thanks

<p align="center">
  <a href="https://versus.mybluemix.net/">
     <img src="/img/logos/ibm-cloud-horizontal.png" alt="IBM Logo" width="200" height="70">
  </a>
</p>

Thanks to IBM Cloud for providing the infrastructure that allows us to test and deploy the application on real environments!

<!--- ## Sponsors
Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/bootstrap#sponsor)]

[![](https://opencollective.com/bootstrap/sponsor/0/avatar.svg)](https://opencollective.com/bootstrap/sponsor/0/website)


## Copyright and license

Code and documentation copyright 2011-2019 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE). --->
