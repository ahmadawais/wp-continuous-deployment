# WP Continuous Deployment

[![DOWNLOADS](https://img.shields.io/npm/dt/wp-continuous-deployment?label=DOWNLOADS%20%20❯&colorA=6A788D&colorB=6A788D&style=flat)](https://www.npmjs.com/package/wp-continuous-deployment) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro%20%E2%86%92-gray.svg?colorB=6A788D&style=flat)](https://VSCode.pro/?utm_source=GitHubFOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=6A788D&colorB=6A788D&style=flat)](https://twitter.com/mrahmadawais/)

> Continuous-Deployment for WordPress plugins with GitHub actions

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npx wp-continuous-deployment
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

### ❯ BEFORE

1. Make sure your plugin is on WordPress.org
2. Put your WordPress plugin on GitHub
3. Clone the GitHub repo in your PC and browse it with command line
4. Run `npx wp-console-deployment` in the root directory of the cloned GitHub repo

```sh
npx wp-continuous-deployment
```

### ❯ ONE-TIME SETUP

- Follow the instructions, set the slug of your plugin which is the last part of the URL, e.g., for my plugin wordpress.org/plugins/cf7-customizer/ the slug is `cf7-customizer`
- Add you WordPress.org SVN username/password (it's the same credentials you use for login.WordPress.org) in your plugin's GitHub repository settings.
- Go to `https://github.com/owner/repo/settings/secrets` make sure to change the `owner/repo` part.


![secrets](https://on.ahmda.ws/3a3b87/c)

### ❯ AFTER

1. All your plugin assets must have been downloaded in the `.wordpress-org` directory
2. Now for each commit/push to master your assets & readme will get deployed (provided there are no other files modified. If other files are changed the build will be canceled)
3. And for each new tag/push, a new version of the plugin will be deployed
4. So, go ahead, make changes, git commit, and then run: `git tag 2.0.0 && git push --tags` — considering 2.0.0 is the new version

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `✅ TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- [Code of Conduct](code-of-conduct.md)
- Thank you, 10up & Helen for the awesome GitHub Actions

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

<div align="left">
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&colorA=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&colorA=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/AhmadAwais"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&colorA=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&colorA=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&colorA=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

<br>

[![👌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/sponsor.png)](./../../)

## Sponsor

Me ([Ahmad Awais](https://twitter.com/mrahmadawais/)) and my incredible wife ([Maedah Batool](https://twitter.com/MaedahBatool/)) are two engineers who fell in love with open source and then with each other. You can read more [about me here](https://ahmadawais.com/about). If you or your company use any of my projects or like what I’m doing then consider backing me. I'm in this for the long run. An open-source developer advocate.

- 🌟  **$9.99/month (recommended)** ❯ [Two cups of Caffè latte (coffee) every month →](https://pay.paddle.com/checkout/540217)
- 🚀  **$99.99 (one-time sponsor)** ❯ [Support an hour of open-source code →](https://pay.paddle.com/checkout/515568)
- 🔰  **$49.99 (one-time sponsor)** ❯ [Support an hour of maintenance →](https://pay.paddle.com/checkout/527253)
- ☕️  **$9.99 (one-time sponsor)** ❯ [Lunch/coffee →](https://pay.paddle.com/checkout/527254)

<br>

Or you can back me by checking out my super fun video course. As developers, we spend over 200 Hrs/month with our code editors — it's only fair to learn your next editor deeply. This course will save you 15-20 hours every month.  <a href="https://vscode.pro/?utm_source=GitHubFOSS" target="_blank">Become a VSCode Power User</a> →</p>

<a href="https://vscode.pro/?utm_source=GitHubFOSS" target="_blank"><img src="https://raw.githubusercontent.com/ahmadawais/stuff/master/images/vscodepro/VSCode.jpeg" /><br><strong>VSCODE</strong></a>

<br>

[![VSCode](https://img.shields.io/badge/-VSCode.pro%20%E2%86%92-gray.svg?colorB=4D2AFF&style=flat)](https://VSCode.pro/?utm_source=GitHubFOSS)
[![Ahmad on Twitter](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Follow%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)
