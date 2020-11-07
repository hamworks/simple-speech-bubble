import {
	InnerBlocks,
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';
import classnames from 'classnames';

const Save = ( {
	attributes: {
		mediaURL,
		mediaPosition,
		mediaCaption,
		backgroundColor,
		customBackgroundColor,
		borderColor,
		customBorderColor,
		textColor,
		customTextColor,
	},
} ) => {
	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const borderColorClass = getColorClassName( 'border-color', borderColor );
	const textColorClass = getColorClassName( 'text-color', textColor );

	const styleProps = {
		'--bubble-bg-color': customBackgroundColor,
		'--bubble-bd-color': customBorderColor,
		color: customTextColor,
	};

	const commentClassName = classnames(
		`wp-block-simple-speech-bubble-speech-bubble__comment`,
		{
			'has-background': backgroundClass || customBackgroundColor,
			[ backgroundClass ]: backgroundClass,
			'has-border-color': borderColorClass || customBorderColor,
			[ borderColorClass ]: borderColorClass,
			'has-text-color': textColorClass || customTextColor,
			[ textColorClass ]: textColorClass,
		}
	);

	return (
		<div
			className={ classnames( {
				[ `has-media-on-the-${ mediaPosition }` ]: mediaPosition,
			} ) }
		>
			<figure className="wp-block-simple-speech-bubble-speech-bubble__media">
				<img src={ mediaURL } alt="" />
				{ mediaCaption ? (
					<RichText.Content
						tagName="figcaption"
						value={ mediaCaption }
					/>
				) : null }
			</figure>
			<div className={ commentClassName } style={ styleProps }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
