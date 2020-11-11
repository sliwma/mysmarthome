# My network

## Devices
### My flat:
- MikroTik RB4011iGS+5HacQ2HnD-IN - main router, WLAN AP
- Synology DS1618+ - file server, Virtual Machine host (RouterOS with The Dude, Debian with Zabbix, HassOS with HomeAssistant), reverse proxy for my domain
- Raspberry Pi 3B - PiHole DNS server
- APC SmartUPS 750 w/AP9619 management card
### My family house:
- MikroTik RB760iGS - main router
- MikroTik RBmAP2nD - WLAN AP
- TP-Link MR3020 w/OpenWRT - WLAN AP
- Synology DS209j - file server
- Raspberry Pi Zero - PiHole DNS server

## How it works?
### VPN:
* site-to-site between both MikroTiks, used for syncing both file servers. As my family house doesn't have a static IP, I'm using a script to fetch current IP from NO-IP service.
  * [Flat router + script to fetch up-to-date IP address](https://github.com/sliwma/mysmarthome/blob/main/Network/MikroTik%20configs/VPN-site-to-site-Router1)
  * [House router](https://github.com/sliwma/mysmarthome/blob/main/Network/MikroTik%20configs/VPN-site-to-site-Router2)

### PiHole DNS server
* nothing special about Pi 3B
* Pi Zero is connected to RB760iGS using USB cable. 
  * [HowTo](https://github.com/sliwma/mysmarthome/blob/main/Network/RPi%20Zero%20with%20MikroTik.md)