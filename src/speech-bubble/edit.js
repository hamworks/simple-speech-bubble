import {
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InnerBlocks,
	RichText,
	PanelColorSettings,
	withColors,
	InspectorControls,
	ContrastChecker,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import { pullLeft, pullRight } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { ToolbarGroup } from '@wordpress/components';

const Edit = ( {
	className,
	attributes: { mediaId, mediaURL, mediaPosition, mediaCaption },
	setAttributes,
	backgroundColor,
	setBackgroundColor,
	borderColor,
	setBorderColor,
	textColor,
	setTextColor,
} ) => {
	const onSelectMedia = ( props ) => {
		const { id, url, caption, alt } = props;
		setAttributes( {
			mediaId: id,
			mediaURL: url,
			mediaCaption: caption || alt || '',
		} );
	};

	const media = ! mediaURL ? (
		<MediaPlaceholder
			onSelect={ onSelectMedia }
			allowedTypes={ [ 'image' ] }
			multiple={ false }
		/>
	) : (
		<img src={ mediaURL } alt="" />
	);

	const toolbarControls = [
		{
			icon: pullLeft,
			title: __( 'Show media on left' ),
			isActive: mediaPosition === 'left',
			onClick: () => setAttributes( { mediaPosition: 'left' } ),
		},
		{
			icon: pullRight,
			title: __( 'Show media on right' ),
			isActive: mediaPosition === 'right',
			onClick: () => setAttributes( { mediaPosition: 'right' } ),
		},
	];

	const newBlockProps = {
		style: {
			'--bubble-bg-color': backgroundColor.color,
			'--bubble-bd-color': borderColor.color,
			color: textColor.color,
		},
		className: classnames( className, {
			[ `has-media-on-the-${ mediaPosition }` ]: mediaPosition,
		} ),
	};

	const commentClassName = classnames(
		`wp-block-simple-speech-bubble-speech-bubble__comment`,
		{
			'has-background-color': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			'has-border-color': borderColor.color,
			[ borderColor.class ]: borderColor.class,
			'has-text-color': textColor.color,
			[ textColor.class ]: textColor.class,
		}
	);

	return (
		<>
			<BlockControls>
				<ToolbarGroup controls={ toolbarControls } />
				<MediaReplaceFlow
					mediaId={ mediaId }
					mediaURL={ mediaURL }
					allowedTypes={ [ 'image' ] }
					accept="image/*"
					onSelect={ onSelectMedia }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color settings' ) }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Background color' ),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Text color' ),
						},
						{
							value: borderColor.color,
							onChange: setBorderColor,
							label: __( 'Border color' ),
						},
					] }
				>
					<ContrastChecker
						{ ...{
							textColor: textColor.color,
							backgroundColor: backgroundColor.color,
						} }
						isLargeText={ false }
					/>
				</PanelColorSettings>
			</InspectorControls>
			<div
				className={ newBlockProps.className }
				style={ newBlockProps.style }
			>
				<figure className="wp-block-simple-speech-bubble-speech-bubble__media">
					{ media }
					<RichText
						tagName="figcaption"
						value={ mediaCaption }
						onChange={ ( content ) =>
							setAttributes( { mediaCaption: content } )
						}
					/>
				</figure>
				<div className={ commentClassName }>
					<InnerBlocks
						template={ [
							[
								'core/paragraph',
								{ placeholder: 'Enter side content...' },
							],
						] }
					/>
				</div>
			</div>
		</>
	);
};

export default withColors( {
	backgroundColor: 'background-color',
	borderColor: 'border-color',
	textColor: 'text-color',
} )( Edit );
