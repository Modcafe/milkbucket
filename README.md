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

## 2. Install Milkbucket

Install Milkbucket globally from npm:

```bash
npm install -g @modcafe/milkbucket
```

Once installed, the `milkbucket` command is available globally.

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

## `info` (coming soon)

Displays information about the current project and environment.

```bash
milkbucket info
```

---

## `project` (coming soon)

Tools for inspecting and working with the current Minecraft project.

```bash
milkbucket project
```

### `project detect` (coming soon)

Detects the type and configuration of the current project.

```bash
milkbucket project detect
```

### `project validate` (coming soon)

Checks the current project for common configuration problems.

```bash
milkbucket project validate
```

---

## `build` (coming soon)

Builds the current Minecraft project.

```bash
milkbucket build
```

---

## `deps` (coming soon)

Tools for inspecting project dependencies.

```bash
milkbucket deps
```

### `deps list` (coming soon)

Lists the dependencies of the current project.

```bash
milkbucket deps list
```

### `deps check` (coming soon)

Checks whether the project's dependencies are valid.

```bash
milkbucket deps check
```

---

## `logs` (coming soon)

Tools for working with Minecraft logs.

```bash
milkbucket logs
```

### `logs latest` (coming soon)

Displays or analyzes the latest log.

```bash
milkbucket logs latest
```

---

## `crash` (coming soon)

Analyzes the latest Minecraft crash report.

```bash
milkbucket crash
```

---

## `team` (coming soon)

Tools for Modcafe development teams.

```bash
milkbucket team
```

### `team doctor` (coming soon)

Checks the local development environment.

```bash
milkbucket team doctor
```

---

# Updating

Update Milkbucket directly through npm:

```bash
npm update -g @modcafe/milkbucket
```

To install the latest version regardless of the currently installed version:

```bash
npm install -g @modcafe/milkbucket@latest
```

You can verify the installed version afterwards:

```bash
milkbucket --version
```

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
    ├── commandInfo.js
    └── ...
```

New commands should be added to the `commands/` directory and registered in the command metadata.

---

# License

Internal Modcafe tooling. MIT.
