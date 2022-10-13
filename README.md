# BetterDiscord Plugin Template in TypeScript
A starter template for creating plugins for BetterDiscord in Typescript. An updated version from [tqwewe's](https://github.com/tqwewe/betterdiscord-typescript-template) Typescript template.

# **Currently supports BetterDiscord version: `v1.8.0`!**

## Introduction
This plugin template should be a folder inside your BetterDiscord plugins directory.
*Typically `C:\Users\<username>\AppData\Roaming\BetterDiscord\plugins`*

The file structure should be (at minimal) as so:

```
plugins/                           # BetterDiscord plugins dir
├── helloworld.plugin.js           # Generated as output file
└── helloworld/
    └── src/                       # TypeScript source code
        └── helloworld.plugin.ts   # Main entry file for plugin
```

## Getting Started

1. CD into BetterDiscord plugins directory

   `cd C:\Users\<username>\AppData\Roaming\BetterDiscord\plugins`

2. Clone directory

   `git clone https://github.com/mattie078/betterdiscord-typescript-template`

3. Build project to generate `helloworld.plugin.js` file in the plugins directory

   `yarn run build`
