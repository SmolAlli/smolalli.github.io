---
layout: '../../layouts/RMGLayout.astro'
title: "Rosalie's Mupen GUI Setup Guide - Plugins"
og_title: "Rosalie's Mupen GUI Setup Guide - Plugins"
og_desc: "A basic guide on what input plugins to use in Rosalie's Mupen GUI (RMG)"
---

[← Back to setup page](./)

# Plugins

The input plugin that you want to use with RMG depends on the input type.

The emulator comes with 3 input plugins included, those being:

• raphnetraw (Mupen64Plus) for the Raphnet N64 adapter

• GC Adapter for Gamecube adapters in Wii U/Switch mode

• Rosalie's Mupen GUI input plugin for XInput devices (e.g. Xbox, Playstation, Switch Pro Controller) and keyboards

<div style="text-align: center;">

![Screenshot of the input plugin options included in RMG](/img/rmg-settings-input-plugins.png)

</div>

_Although I have not personally tested the raphnet plugin, I would assume it to be plug-and-play. The GameCube plugin is plug-and-play._

For the other input plugin, it is not plug and play. To use it, connect/insert the preferred method of play, and then go to input settings (`ctrl` + `i` or settings → input). You should then select the device from the dropdown at the top, then map the buttons as preferred.

<div style="text-align: center;">

![Input configuration page](/img/rmg-input.png)

</div>

For any other device that is not listed, you can _probably_ use a plugin designed for Mupen64Plus, however compatibility is not guaranteed.
