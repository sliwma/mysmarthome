# My network

## Devices
### My flat
- MikroTik RB4011iGS+5HacQ2HnD-IN - main router, WLAN AP
- Synology DS1618+ - file server, Virtual Machine host (RouterOS with The Dude, Debian with Zabbix, HassOS with HomeAssistant), reverse proxy for my domain
- Raspberry Pi 3B - PiHole DNS server
### My family house
- MikroTik RB760iGS - main router
- MikroTik RBmAP2nD - WLAN AP
- TP-Link MR3020 - WLAN AP
- Synology DS209j - file server
- Raspberry Pi Zero - PiHole DNS server

## Structure
### VPN:
* site-to-site between both MikroTiks, used for syncing both file servers. As my family house doesn't have a static IP, I'm using a script to fetch current IP from NO-IP service.
  * [Flat router + script to fetch up-to-date IP address](https://github.com/sliwma/mysmarthome/blob/main/Network/MikroTik%20configs/VPN-site-to-site-Router1)
  * [House router](https://github.com/sliwma/mysmarthome/blob/main/Network/MikroTik%20configs/VPN-site-to-site-Router2)