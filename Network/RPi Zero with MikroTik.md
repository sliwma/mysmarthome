# Raspberry Pi Zero as PiHole

## How-to
* Download and install Raspbian.
* Enter boot partition on a PC.
* Edit config.txt file and add `dtoverlay=dwc2` at the bottom of the file.
* Edit cmdline.txt file and add `modules-load=dwc2,g_ether` after `rootwait`.
* Connect RPi to a computer with USB port (not the PWR IN).
* Try connecting to the Pi with SSH. Hostname: pi@raspberrypi.local, password: raspberry.
* If you are getting error like `Unable to open connection`, check Device Manager, probably you need to install RNDIS drivers.
* Now set a shared network connection so RPI can download&install PiHole.
* When connected to the RPi create file `/etc/modprobe.d/g_ether.conf` with following content (in one line):
* `options g_ether idVendor=0x05ac idProduct=0x1402 iProduct=Pi0 iManufacturer=Raspberry`
* Now shutdown both RPi and MikroTik router, connect them and boot MikroTik.
* RPi should show up in /interfaces as lte1.
* Now add an IP address to lte1 interface - same subnet as on the Pi. After that, you should be able to connect to PiHole using its IP.