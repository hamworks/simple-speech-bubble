import { registerBlockType } from '@wordpress/blocks';
import './index.css';

import edit from './edit';
import save from './save';

import metadata from './block.json';

export const settings = {
	...metadata,
	edit,
	save,
};
registerBlockType( metadata.name, settings );
