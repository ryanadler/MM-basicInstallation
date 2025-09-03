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
        address: "localhost",   // Address to listen on, can be:
                                                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                                        // - another specific IPv4/6 to listen on a specific interface
                                                        // - "0.0.0.0", "::" to listen on any interface
                                                        // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",  // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
                                                                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],  // Set [] to allow all IP addresses
                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                        // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "en",
        locale: "en-US",   // this variable is provided as a consistent location
                           // it is currently only used by 3rd party modules. no MagicMirror code uses this value
                           // as we have no usage, we  have no constraints on what this field holds
                           // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

        logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
        timeFormat: 24,
        units: "imperial",

		{
                        module: "MMM-WeatherEffects",
                        position: "fullscreen_above"
                },
//                {
//                  module: "MMM-MyScoreboard",
//                  position: "top_left",
//                  config: {
//                    viewStyle: "stackedWithLogos",
//                    showPlayoffStatus: true,
//                    sports: [
//                      {
//                        league: "FIFA_WOMENS_WORLD_CUP",
//                      },
//                            {
//                                    league: "MLB",
//                            },
//                    ]
//
//                  }
//                },
                {
                        module: "clock",
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
                                calendars: [                            
                                        {                               
                                                fetchInterval: 300000,  
                                                symbol: "calendar-check",
                                                color: "#00AEEF",
                                                url: "https://calendar.google.com/calendar/ical/lookhere%40gmail.com/private-asdfionasodfin/basic.ics"
                                        }
                                ]
                        }
                },
		{
                        module: "MMM-CalendarExt3",
                        position: "bottom_bar",
                        title: "test",
                        config:{
                                mode: "month",
                        }
                },

        ]
};

//*************** DO NOT EDIT THE LINE BELOW ***************//
if (typeof module !== "undefined") { module.exports = config; }
