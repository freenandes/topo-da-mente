---
date: 2023-12-14T16:11
draft: true
title: Connected Home Switches
tags:
  - internet_of_things
  - smart_home
  - lighting
---
I’ve been on the lookout for a while into connecting my home switches to my smart devices, like smartphones, tablets and computers, but also to other remote devices, like remotes.

## Need

I want the commodity of having everything centralized. I want to be able to manipulate lighting and blinders switches, but also cameras, remotely, either in bulk, or individually. The advantage would be able to control while in leisure, adjust the room I’m in or while I am away, to be able to bring down the blinders, turn off the lights and potentially turn the cameras on.

I already have a camera and a door sensor. Would be great to be able to implement them in the same ecosystem.

### Expansion requirements

- About 6 rooms with dimmable sets of LED lights (any focus-type format) and specifically controllable with dedicated remote control.
- About 4 rooms/corridors with simple on/off sets of LED lights.
- 3 bathrooms with simple on/off sets of LED lights.
- About 12 motored blinders switchers.

## Connection Technologies

So far, I’ve found Zigbee and Wi-Fi to be advantageous over any other types in the market.

### Connection down

Zigbee has the potential of usage without Wi-Fi. Still not sure if this is a fair advantage. To get the full advantage, Zigbee devices have to be connected to a Zigbee receiving hub, so they can synchronize. And to be able to provide some extended functionality, that hub has to connect to Wi-Fi. If I’m away and Wi-Fi is down, I will not be able to connect to my devices anyway.

I guess if the Wi-Fi is down, I will be able to access my devices in sync using a remote, and have that connection between devices.

I think it’s just better to guarantee that the Wi-Fi router is in good shape, and it works for the purpose.
- If electricity is down, no device will work.
- If the Wi-Fi router is down, most smart functionalities will be off.
- If the Zigbee hub is down, and Wi-Fi is on, I won’t access my devices.

### Basics

The single most important connection is having electricity and those switches working with it, independently of other networks, regardless if it’s Zigbee or Wi-Fi.

## Sourcing

### Zigbee2MQTT

To find Zigbee devices that will work with each other using MQTT, then this a very comprehensive catalog to find specific devices, like a Zigbee remote!

[Zigbee2MQTT’s supported devices](https://www.zigbee2mqtt.io/supported-devices/)

## Setup, a draft

### Home Assistant

A software ecosystem tailored to run and manage all your interconnected devices.

[Home Assistant main site](https://www.home-assistant.io/)

![Image of a smartphone device with Home Assistant app open, where you can see the users, room temperatures and buttons to turn on and off some lights](../attachment/vsc-paste/connected-home-switches-231214172743.png)

#### Green device

To run it, and therefore own an instance of it that I can use, I need to host it in a computer. For a more streamlined operation, they already package a computer with Home Assistant that is plug-and-play out of the box.
- [Green’s main site](https://www.home-assistant.io/green/)
- [Green’s documentation site](https://green.home-assistant.io/)

![Image of Green device amidst IoT devices](../attachment/vsc-paste/connected-home-switches-231214172556.png)

But to be able to get Zigbee devices connected to Green, you need to add the ability of it receiving Zigbee. To do that, there is also a simple USB stick made by Home Assistant, that does that, called SkyConnect.

[SkyConnect main site](https://www.home-assistant.io/skyconnect)

![Image of the Zigbee USB stick hovering in the air with IoT devices behind it](../attachment/vsc-paste/connected-home-switches-231214172524.png)