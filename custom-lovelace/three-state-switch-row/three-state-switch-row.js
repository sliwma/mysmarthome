window.customCards = window.customCards || [];
window.customCards.push({
  type: "three-state-switch-row",
  name: "three state switch row",
  description: "A plugin to display your select based three state switch in a button row.",
  preview: false,
});

class CustomThreeStateRow extends Polymer.Element {

	static get template() {
		return Polymer.html`
		<style is="custom-style" include="iron-flex iron-flex-alignment"></style>
		<style>
			:host {
				line-height: inherit;
			}
			.mode {
				margin-left: 2px;
				margin-right: 2px;
				background-color: #759aaa;
				border: 1px solid lightgrey; 
				border-radius: 4px;
				font-size: 10px !important;
				color: inherit;
				text-align: center;
				float: right !important;
				padding: 1px;
				cursor: pointer;
			}
		</style>
		<hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
			<div class='horizontal justified layout' on-click="stopPropagation">
				<button
					class='mode'
					style='[[_leftColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]]'
					toggles name='[[_leftName]]'
					on-click='setMode'
					disabled='[[_leftState]]'>[[_leftText]]</button>
				<button
					class='mode'
					style='[[_midColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]]'
					toggles name='[[_midName]]'
					on-click='setMode'
					disabled='[[_midState]]'>[[_midText]]</button>
				<button
					class='mode'
					style='[[_rightColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]]'
					toggles name='[[_rightName]]'
					on-click='setMode'
					disabled='[[_rightState]]'>[[_rightText]]</button>
			</div>
		</hui-generic-entity-row>
		`;
	}

	static get properties() {
		return {
			hass: {
				type: Object,
				observer: 'hassChanged'
			},
			_config: Object,
			_stateObj: Object,
			_width: String,
			_height: String,
			_stateOff: String,
			_stateAuto: String,
			_stateOn: String,
			_leftColor: String,
			_leftText: String,
			_leftName: String,
			_leftState: Boolean,
			_midColor: String,
			_midText: String,
			_midName: String,
			_midState: Boolean,
			_rightColor: String,
			_rightText: String,
			_rightName: String,
			_rightState: Boolean,
	        }
    	}

	setConfig(config) {
		this._config = config;

		this._config = {
			customTheme: false,
			reverseButtons: false,
			width: '30px',
			height: '30px',
			modeOn: "ON",
			modeAuto: "AUTO",
			modeOff: "OFF",
			isOnColor: '#14af03',
			isAutoColor: '#0099ff',
			isOffColor: '#af1403',
			buttonInactiveColor: '#565656',
			customOffText: 'OFF',
			customAutoText: 'AUTO',
			customOnText: 'ON',
			...config
		};
	}

	hassChanged(hass) {

		const config = this._config;
		const stateObj = hass.states[config.entity];
		const custTheme = config.customTheme;
		const revButtons = config.reverseButtons;
		const buttonWidth = config.width;
		const buttonHeight = config.height;
		const custOnClr = config.isOnColor;
		const custAutoClr = config.isAutoColor;
		const custOffClr = config.isOffColor;
		const custInactiveClr = config.buttonInactiveColor;
		const custOffTxt = config.customOffText;
		const custAutoTxt = config.customAutoText;
		const custOnTxt = config.customOnText;
		const off = config.modeOff;
		const auto = config.modeAuto;
		const on = config.modeOn;
			
		let state;
			if (stateObj) {
				state = stateObj.state;
			}
	
		let onstate;
		let autostate;
		let offstate;
		
		if (stateObj) {
			if (stateObj.state == 'ON') {
				onstate = 'on';
			} else if (stateObj.state == 'AUTO'){
				autostate = 'on';
			} else {
				offstate = 'on';
			}
		}
	
		let oncolor;
		let autocolor;
		let offcolor;
			
		if (custTheme) {
			if (onstate == 'on') {
				oncolor = 'background-color:' + custOnClr;
			} else {
				oncolor = 'background-color:' + custInactiveClr;
			}

			if (autostate == 'on') {
				autocolor = 'background-color:'  + custAutoClr;
			} else {
				autocolor = 'background-color:' + custInactiveClr;
			}

			if (offstate == 'on') {
				offcolor = 'background-color:'  + custOffClr;
			} else {
				offcolor = 'background-color:' + custInactiveClr;
			}
		} else {
			if (onstate == 'on') {
				oncolor = 'background-color: var(--primary-color)';
			} else {
				oncolor = 'background-color: var(--disabled-text-color)';
			}
	
			if (autostate == 'on') {
				autocolor = 'background-color: var(--primary-color)';
			} else {
				oncolor = 'background-color: var(--disabled-text-color)';
			}
	
			if (offstate == 'on') {
				offcolor = 'background-color: var(--primary-color)';
			} else {
				offcolor = 'background-color: var(--disabled-text-color)';
			}
		}
	
		let offtext = custOffTxt;
		let autotext = custAutoTxt;
		let ontext = custOnTxt;
		
		let buttonwidth = buttonWidth;
		let buttonheight = buttonHeight;
	
		let offname = 'offstate';
		let autoname = 'autostate';
		let onname = 'onstate';
	
		if (revButtons) {
			this.setProperties({
				_stateObj: stateObj,
				_rightState: stateObj.state === 'on',
				_midState: stateObj.state === 'auto',
				_leftState: stateObj.state == 'off',
				_stateOn: on,
				_stateAuto: auto,
				_stateOff: off,
				_width: buttonwidth,
				_height: buttonheight,
				_rightName: onname,
				_midName: autoname,
				_leftName: offname,
				_rightColor: oncolor,
				_midColor: autocolor,
				_leftColor: offcolor,
				_rightText: ontext,
				_midText: autotext,
				_leftText: offtext,
			});
		} else {
			this.setProperties({
				_stateObj: stateObj,
				_leftState: stateObj.state === 'on',
				_midState: stateObj.state === 'auto',
				_rightState: stateObj.state == 'off',
				_stateOff: off,
				_stateAuto: auto,
				_stateOn: on,
				_width: buttonwidth,
				_height: buttonheight,
				_leftName: onname,
				_midName: autoname,
				_rightName: offname,
				_leftColor: oncolor,
				_midColor: autocolor,
				_rightColor: offcolor,
				_leftText: ontext,
				_midText: autotext,
				_rightText: offtext,	
			});
		}
    	}


	stopPropagation(e) {
		e.stopPropagation();
	}

	setMode(e) {
		const option = e.currentTarget.getAttribute('name');
		const param = {entity_id: this._config.entity};
		if( option == 'offstate' ){
			param.option = this._stateOff
			this.hass.callService('select', 'select_option', param);
		} else if (option == 'autostate') {
			param.option = this._stateAuto
			this.hass.callService('select', 'select_option', param);
		} else if (option == 'onstate') {
			param.option = this._stateOn
			this.hass.callService('select', 'select_option', param);
		}
	}
}
	
customElements.define('three-state-switch-row', CustomThreeStateRow);