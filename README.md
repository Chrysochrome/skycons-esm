Skycons-ESM
=======

> This Project is a fork of the original with the only difference being that it is an ESM module.
> The original project can be found [here](https://github.com/darkskyapp/skycons).

Skycons-ESM is a set of ten animated weather glyphs, procedurally generated by
JavaScript using the HTML5 canvas tag. They're easy to use, and pretty
lightweight, so they shouldn't rain on your parade:

    <canvas id="icon1" width="128" height="128"></canvas>
    <canvas id="icon2" width="128" height="128"></canvas>

    <script type='module'>
      import { Skycons } from 'skycons-esm';
      // or from CDN
      // import { Skycons } from "https://cdn.jsdelivr.net/npm/skycons-esm@latest/dist/skycons-esm.js";

      var skycons = new Skycons({"color": "pink"});
      // on Android, a nasty hack is needed: {"resizeClear": true}

      // you can add a canvas by it's ID...
      skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

      // ...or by the canvas DOM element itself.
      skycons.add(document.getElementById("icon2"), Skycons.RAIN);

      // if you're using the Forecast API, you can also supply
      // strings: "partly-cloudy-day" or "rain".

      // start animation!
      skycons.play();

      // you can also halt animation with skycons.pause()

      // want to change the icon? no problem:
      skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

      // want to remove one altogether? no problem:
      skycons.remove("icon2");
    </script>

Skycons were designed for [Forecast](http://forecast.io/) by those wacky folks
at The Dark Sky Company, and were heavily inspired by Adam Whitcroft's
excellent [Climacons](http://adamwhitcroft.com/climacons/). The source code has
been [released into the public domain][cc0], so please do with it as you see
fit! ♡

[cc0]: http://creativecommons.org/publicdomain/zero/1.0/
