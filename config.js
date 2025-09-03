/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	clockBold: true,
	units: "imperial",

	modules: [
		{
			module: "MMM-WeatherEffects",
			position: "fullscreen_above"
		},
		{
			module: "clock",
			showSunTimes: true,
			showMoonTimes: "both",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 33.64400,
				lon: -112.10997
			}
		},
		{
			module: "weather",
			position: "top_center",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 33.64400,
				lon: -112.10997
			}
		},
		{	
			module: "calendar",
                        header: "Events",
                        position: "top_left",
			hiddenOnStartup: true,
                        config: {
				defaultSymbolClassName: '',
				useIconify: true,
                                calendars: [
                                        {
                                                fetchInterval: 300000,
						broadcastPastEvents: true,
                                                symbol: "streamline-kameleon-color:pokeball", //symbols found at https://icon-sets.iconify.design/
						url: "https://calendar.google.com/calendar/ical/email%40gmail.com/private-/basic.ics"
                                        },
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                symbol: "flag:us-4x3",
						color: "green",
						broadcastPastEvents: true,
                                                url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					},
                                ]
                        }
                },
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			config:{
				//This block creates a smaller footprint for the monthly calendar, allowing you to add additional mods or save space
				// If you use mode: week, please comment out (double slash //) the mode: "month" below
				//mode: "week",
				//weekIndex: 0,
				//weeksInView: 3
				mode: "month",
			}
		},

	]
};

//*************** DO NOT EDIT THE LINE BELOW ***************//
if (typeof module !== "undefined") { module.exports = config; }
