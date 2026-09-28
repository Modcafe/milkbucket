# 🥛 milkbucket
Milkbucket is an internal CLI-tool by Modcafe to tool and debug Mods and Datapacks.
It is built using Node.JS and JavaScript.


# Installation
## 1. Install npm and NodeJS
### on macOS
Using Homebrew:
```bash
brew install node
```
After the Installation, try
```bash
node --version
npm --version
```

### on Windows
Using winget:
```bash
winget install OpenJS.NodeJS
```
After the Installation, try
```bash
node --version
npm --version
```

### on Linux
Using sudo:
```bash
sudo apt update
sudo apt install nodejs npm
```
After the Installation, try
```bash
node --version
npm --version
```

## 2. Clone the Repository locally
```bash
git clone https://github.com/Modcafe/milkbucket.git
cd milkbucket
npm link
```

#### If `npm link` doesn't work:
Run the following command once:
```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```
Then, run npm link again:
```bash
npm link
```

## 3. Test if it works
If everything worked, you should be able to run:
```bash
milkbucket --version
```

> [!TIP]
> To update milkbucket, use
> ```bash
> cd milkbucket
> git pull
> npm link
> ```
