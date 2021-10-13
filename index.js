import { test } from './test.js';
import PincodeInput from 'pincode-input';
import 'pincode-input/dist/pincode-input.min.css';

new PincodeInput('#demo', {
	count: 4,
	secure: false,
	previewDuration: 200,
	onInput: (value) => {
		if (value !== '1234') {
			console.error('не верный пин');
		} else {
			console.log('верный пин');
		}
	},
});

test();
