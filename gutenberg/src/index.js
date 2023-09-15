/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


import edit from './edit';
import save from './save';
import metadata from './block.json';

// Register the block
registerBlockType( metadata.name, {
    icon: {
        src: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                <path d="M 1.0400927e-5,70.871546 H 85.418757 V 98.585148 H 33.028592 V 410.64833 h 52.390165 v 27.71359 H 1.0400927e-5 Z" />
                <path d="m 511.99999,441.12845 h -85.41877 v -27.7136 h 52.39024 V 101.35167 H 426.58122 V 73.638069 h 85.41877 z" />
                <path d="m 255.51432,94.286664 c -7.38797,0.06033 -14.7196,0.258353 -21.92629,0.589306 47.49315,25.13136 79.85373,75.03627 79.85373,132.51612 h -27.2479 c 0,-67.71982 -54.87038,-122.59021 -122.59021,-122.59021 v -0.0207 c -5.263,1.55806 -10.08496,3.3021 -14.33974,5.25613 0,0 -46.82888,20.94761 -46.82888,92.41961 0,16.36627 -0.31893,35.93682 0.19942,56.6893 1.70055,69.8957 12.81329,138.78122 77.437,155.88591 29.79656,7.88667 55.38117,9.53753 75.98456,8.40504 37.36375,-2.0715 58.33817,-13.33376 58.33817,-13.33376 L 313.162,382.9924 c 0,0 -26.70281,8.41909 -56.6893,7.39311 -29.70959,-1.01891 -61.07195,-3.20366 -65.8771,-39.67985 -0.44375,-3.20404 -0.66669,-6.6284 -0.66669,-10.22651 0,0 29.1663,7.1283 66.1271,8.82171 22.60037,1.03665 43.79409,-1.32443 65.32052,-3.89298 41.28137,-4.92942 77.22608,-30.3647 81.74368,-53.60588 7.11806,-36.61112 6.52998,-89.3451 6.52998,-89.3451 0,-71.472 -46.82888,-92.41961 -46.82888,-92.41961 C 339.21093,99.193256 298.66806,94.631206 256.54711,94.286783 Z M 163.60365,132.0468 c 52.64817,0 95.34531,42.66785 95.34531,95.34529 h -27.24492 c 0,-37.60584 -30.49454,-68.10037 -68.10039,-68.10037 z m 17.03032,61.28171 c 9.39413,0 17.03327,7.60982 17.03327,17.03328 0,9.4234 -7.63914,17.0303 -17.03327,17.0303 -9.42341,0 -17.03032,-7.63615 -17.03032,-17.0303 0,-9.39419 7.60691,-17.03328 17.03032,-17.03328 z" />
            </svg>
    },
    attributes: {
		instance: {
			type: "string",
			default: ""
		},
		account: {
			type: "string",
			default: ""
		},
		limit: {
			type: "integer",
			default: 20
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: edit,
	/**
	 * @see ./save.js
	 */
	save: save,
} );