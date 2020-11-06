import { InnerBlocks } from '@wordpress/block-editor';

const Save = ( { attributes: { mediaURL, mediaPosition } } ) => {
	const newClassName = `wp-block-simple-speech-bubble-speech-bubble has-media-on-the-${ mediaPosition }`;

	return (
		<div className={ newClassName }>
			<figure className="wp-block-simple-speech-bubble-speech-bubble__media">
				<img src={ mediaURL } alt="" />
			</figure>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
