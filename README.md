# 🥛 milkbucket

**Milkbucket** is an internal CLI tool by **Modcafe** for tooling, debugging, and managing Minecraft mods and datapacks.

It is built with **Node.js** and **JavaScript**.

---

# Installation

## 1. Install Node.js and npm

Milkbucket requires **Node.js** and **npm**.

### macOS

Using Homebrew:

```bash
brew install node
```

Verify the installation:

```bash
node --version
npm --version
```

### Windows

Using `winget`:

```powershell
winget install OpenJS.NodeJS
```

Verify the installation:

```powershell
node --version
npm --version
```

### Linux

On Debian/Ubuntu-based distributions:

```bash
sudo apt update
sudo apt install nodejs npm
```

Verify the installation:

```bash
node --version
npm --version
```

---

## 2. Clone Milkbucket

Clone the repository and enter its directory:

```bash
git clone https://github.com/Modcafe/milkbucket.git
cd milkbucket
```

Then link Milkbucket as a global CLI:

```bash
npm link
```

### If `npm link` fails

If npm does not have permission to create the global link, configure a user-local npm directory:

```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Then run:

```bash
npm link
```

---

## 3. Verify the installation

Check whether Milkbucket is available:

```bash
milkbucket --version
```

You can also display the available commands:

```bash
milkbucket --help
```

---

# Commands

> This section documents all available Milkbucket commands.

## `help`

Displays a list of available commands and their descriptions.

```bash
milkbucket help
```

Aliases:

```bash
milkbucket -h
milkbucket --help
```

---

## `version`

Displays the installed Milkbucket version.

```bash
milkbucket version
```

Aliases:

```bash
milkbucket -v
milkbucket --version
```

---

## `info` (comming soon)

Displays information about the current project and environment.

```bash
milkbucket info
```

---

## `project` (comming soon)

Tools for inspecting and working with the current Minecraft project.

```bash
milkbucket project
```

### `project detect` (comming soon)

Detects the type and configuration of the current project.

```bash
milkbucket project detect
```

### `project validate` (comming soon)

Checks the current project for common configuration problems.

```bash
milkbucket project validate
```

---

## `build` (comming soon)

Builds the current Minecraft project.

```bash
milkbucket build
```

---

## `deps` (comming soon)

Tools for inspecting project dependencies.

```bash
milkbucket deps
```

### `deps list` (comming soon)

Lists the dependencies of the current project.

```bash
milkbucket deps list
```

### `deps check` (comming soon)

Checks whether the project's dependencies are valid.

```bash
milkbucket deps check
```

---

## `logs` (comming soon)

Tools for working with Minecraft logs.

```bash
milkbucket logs
```

### `logs latest` (comming soon)

Displays or analyzes the latest log.

```bash
milkbucket logs latest
```

---

## `crash` (comming soon)

Analyzes the latest Minecraft crash report.

```bash
milkbucket crash
```

---

## `team` (comming soon)

Tools for Modcafe development teams.

```bash
milkbucket team
```

### `team doctor` (comming soon)

Checks the local development environment.

```bash
milkbucket team doctor
```

---

# Updating

To update your local Milkbucket installation, pull the latest changes from GitHub:

```bash
cd milkbucket
git pull
npm link
```

> [!TIP]
> You only need to configure the npm prefix once. After that, updating Milkbucket only requires `git pull` and `npm link`.

---

# Development

Milkbucket is developed using Node.js and JavaScript.

The repository is structured roughly as follows:

```text
milkbucket/
├── cli.js
├── package.json
├── commands/
│   ├── help.js
│   ├── version.js
│   └── ...
└── lib/
    ├── commandInfo.json
    └── ...
```

New commands should be added to the `commands/` directory and registered in the command metadata.

---

# License

Internal Modcafe tooling.
