# three-state-switch-row

Custom Lovelace card based on finity69x2's [binary-control-button-row](https://github.com/finity69x2/binary-control-button-row) custom lovelace card created in order to switch OFF-AUTO-ON select-based switch.

<b>Options:</b>

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| entity | String | Yes | none | select entity_id with three (ON/AUTO/OFF) states |
| type | String | Yes | none | custom:three-state-switch-row |
| name | String | No | none | A custom name for the entity in the row |
| customTheme | Boolean | Yes | false | set to true to use a custom theme - highly recommended for now |
| reverseButtons | Boolean | No | false | set to true to reverse the button order |
| width | String | No | 30px | A custom width for the buttons |
| height | String | No | 30px | A custom height for the buttons |
| isOffColor | String | No | '#af1403' | Sets the color of the 'OFF' button when the selected mode is "off" |
| isAutoColor | String | No | '#0099ff' | Sets the color of the 'AUTO' button when the selected mode is "auto" |
| isOnColor | String | No | '#14af03' | Sets the color of the 'ON' button when the selected mode is "on" |
| buttonInactiveColor | String | No | '#565656' | Sets the color of the the buttons if that selection is not "active" |
| customOffText | String | No | 'OFF' | Sets the text of the "off" button |
| customAutoText | String | No | 'AUTO' | Sets the text of the "auto" speed button |
| customOnText | String | No | 'ON' | Sets the text of the "on" speed button |

![three-state-switch-row along next to binary-control-button-row and light-brightness-preset-row](https://github.com/sliwma/mysmarthome/blob/main/custom-lovelace/three-state-switch-row/example.png?raw=true)