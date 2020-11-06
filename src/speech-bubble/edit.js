import {
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InnerBlocks,
} from '@wordpress/block-editor';
import { pullLeft, pullRight } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { ToolbarGroup } from '@wordpress/components';

const Edit = ( {
	className,
	attributes: { mediaId, mediaURL, mediaPosition },
	setAttributes,
} ) => {
	const onSelectMedia = ( { id, url } ) => {
		setAttributes( {
			mediaId: id,
			mediaURL: url,
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

	const newClassName = `${ className } has-media-on-the-${ mediaPosition }`;

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
			<div className={ newClassName }>
				<div className="wp-block-simple-speech-bubble-speech-bubble__media">
					{ media }
				</div>
				<div className="wp-block-simple-speech-bubble-speech-bubble__comment">
					<InnerBlocks />
				</div>
			</div>
		</>
	);
};

export default Edit;
