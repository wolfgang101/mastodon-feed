<?php

    /*
     * None, any, or all constants can be defined in the
     * config.local.php file to override default settings
     * 
     * default settings apply if file does not exist
     */

    // enable/discable JavaScript console debug output
    define('INCLUDE_MASTODON_FEED_DEBUG', false);

    // set a default instance
    // can still be overriden in shortcode
    // plugin will show a warning if no default is set and instance is omitted in shortcode
    //define('INCLUDE_MASTODON_FEED_DEFAULT_INSTANCE', 'example.org');

    // define background color in light mode
    // (light mode default)
    define('INCLUDE_MASTODON_FEED_STYLE_BG_LIGHT_COLOR', 'rgba(100, 100, 100, 0.15)');

    // define background color in dark mode
    // (dark mode can be set in shortcode)
    define('INCLUDE_MASTODON_FEED_STYLE_BG_DARK_COLOR', 'rgba(155, 155, 155, 0.15)');

    // main accent color
    // (highlighting - button backgrounds and link colors)
    define('INCLUDE_MASTODON_FEED_STYLE_ACCENT_COLOR', 'rgb(99, 100, 255)');

    // font color to use with accent color background
    define('INCLUDE_MASTODON_FEED_STYLE_ACCENT_FONT_COLOR', 'rgb(255, 255, 255)');

    // general border radius on elements
    define('INCLUDE_MASTODON_FEED_STYLE_BORDER_RADIUS', '0.25rem',);


    