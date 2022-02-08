# Clatronic ProfiCook PC WKS 1167G
Might not be elegant and efficient, but works without external automations.

## Entities
This setup works for me:
#### switch:
* (optional) Boil/turn off - instant boiling.
#### button:
* (optional) Instant Standby mode - as kettle has to be in standby mode to enable any other mode (MCU limitation)
#### select:
* List of presets corresponding to buttons on the kettle's base
#### number:
* Custom temperature from 35°C to 100°C
#### sensors:
* Current temperature
* Error - empty by default, will inform if the kettle was overheated, and when overheated for long time, it'll inform that the kettle is empty (and buzzer will constantly beep)
* Status - standby/heating/cooling
* Time remaining - how much time left to get to desired temperature - shows "5 min" when in standby, probably could be changed later
* (optional) WiFi Signal

![Home Assistant entities](https://github.com/sliwma/mysmarthome/blob/main/ESPHome%20configs/Clatronic-ProfiCook-PC-WKS-1167G/entities.png?raw=true)
