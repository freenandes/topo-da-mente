---
date: 2023-12-14T16:11
draft: false
title: Connected Home Switches
tags:
  - internet_of_things
  - smart-home
  - lighting
  - zigbee
modified: 2023-12-15T14:41
---
I’ve been on the lookout to connect my home switches to my smart devices, like smartphones, tablets, and computers, but also to other remote devices, like remotes.

## Requirements

I want the commodity of having everything centralized. I want to be able to manipulate lighting and blinders switches, but also cameras, remotely, either in bulk or individually. The advantage would be able to control while in leisure, adjust the room I’m in or while I am away, to be able to bring down the blinders, turn off the lights, and potentially turn the cameras on.

I already have a camera and a door sensor. It would be great to implement them in the same ecosystem.

- About 6 rooms with dimmable sets of LED spotlights (any type) and specifically controllable with a dedicated remote control.
- About 4 rooms/corridors with simple on/off sets of LED spotlights.
- 3 bathrooms with simple on/off sets of LED spotlights.
- About 12 motored blinders switchers.

## Connections

So far, I’ve found [Zigbee](zigbee.md) and Wi-Fi to be advantageous over any other types in the market. Matter also exists, but I won’t bother with it now as it’s just promises at this point (in terms of tech) and apparently Zigbee devices will be supported anyway.

Zigbee has the potential of usage without Wi-Fi. Still not sure if this is a fair advantage. To get the full advantage, Zigbee devices have to be connected to a Zigbee receiving hub so they can synchronize. And to provide some extended functionality, that hub has to connect to Wi-Fi. If I’m away and Wi-Fi is down, I will not be able to connect to my devices anyway.

I guess if the Wi-Fi is down, I can access my devices in sync using a remote and have that connection between devices.

I think it’s just better to guarantee that the Wi-Fi router is in good shape and works for the purpose.
- If electricity is down, no device will work.
- If the Wi-Fi router is down, most smart functionalities will be off.
- If the Zigbee hub is down and Wi-Fi is on, I won’t access my devices.

The single most important connection is having electricity and those switches working with it, independently of other networks, regardless if it’s Zigbee or Wi-Fi.

## Software

- [Home Assistant](home_assistant.md) operating system, FOSS.
- Will be relying on [ZHA](zigbee-home-automation.md) to interface with the Zigbee devices.

## Devices

### Core

- **Hub** — [Home Assistant Green](home_assistant-green.md), about 118 EUR. Using it to host my Home Assistant.
- **Coordinator** — [SkyConnect](skyconnect.md), about 42 EUR. The coordinator I will use to interface the Zigbee mesh with the Green device.

### Lighting

- **Remote light control** — For the ceiling LED spotlights. Options are:
  - [Ikea Styrbar](styrbar.md), about 10 EUR.
  - [Philips Hue Dimmer Switch](hue-dimmer_switch.md), about 20 EUR.
- **ON/OFF Switch** — To orchestrate sets of LED spotlights. Options are:
  - Sonoff ZB Mini L2, about 17 EUR.
- **Dimmer Switch** — To orchestrate sets of dimmable LED spotlights. Options are:
  - LED Trading 9106, about 40 EUR.
  - Gledopto GL-SD-001, about 34 EUR.
  - Sunricher SR-ZG9101SAC-HP, about 38 EUR.

### Shutters

- **Roller Shutter Switch** — To control a shutter up/down remotely. Options are:
  - Moes MS-108ZR, about 25 EUR.
  - LoraTap SC500ZB, about 30 EUR.
  - NodOn SIN-4-RS-20, about 45 EUR.

## Scheme

```mermaid
flowchart TB
subgraph nwb[Network box]
  iro([Router]) --Net---
  hub([Hub]) --USB---
  coo([ZB Coordinator])
end
coo -.ZB.- rem([Light Remote])
subgraph con[Dimmable lighting room]
  dsw([Dimmer Switch]) --E--- ll1([Dim. LED])
  dsw --E--- ll2([Dim. LED])
  wls([Wall Switch])
end
coo -.ZB.- dsw
dsw -.ZB.- rem
wls --E--- dsw
subgraph reg[Regular lighting room]
  oos([ON/OFF Switch]) --E--- ll4([LED])
  oos --E--- ll5([LED])
  rws([Wall Switch])
end
coo -.ZB.- oos
oos -.ZB.- rem
rws --E--- oos
subgraph win[Window]
  shs([Shutter Switch]) --E--- shu([Shutter])
  wss([Wall Switch]) --E--- shs
end
coo -.ZB.- shs
shs -.ZB.- rem
```