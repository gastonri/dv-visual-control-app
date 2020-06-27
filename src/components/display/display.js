import './display.scss';
import { connect } from 'react-redux';
import React, { useRef } from 'react';
import Typography from '@material-ui/core/Typography';

const Display = (props) => {
    const vidRef = useRef();

    if (vidRef.current) {
        props.play ? vidRef.current.play() : vidRef.current.pause();
        vidRef.current.volume = props.volume;
        vidRef.current.style.filter = `brightness(${props.brightness})`;
    }

    const renderVideo = (source) => {
        let video = <div className="display__video"></div>;

        if (source) {
            video = (
                <div className="display__video">
                    <video className="display__video__image" autoPlay ref={vidRef} key={source}>
                        <source src={source} type="video/mp4"></source>
                    </video>
                    <div className="display__video__info">
                        <Typography color="primary" component="h1" variant="h3">
                            {props.videoInfo.title}
                        </Typography>
                        <Typography color="textSecondary" component="p" variant="body2">
                            {props.videoInfo.description}
                        </Typography>
                    </div>
                </div>
            );
        }

        return video;
    };

    return <div className="display">{renderVideo(props.videoSrc)}</div>;
};

const mapStateToProps = (state) => {
    return {
        brightness: state.brightness,
        play: state.play,
        videoSrc: state.video,
        videoInfo: state.videoInfo,
        volume: state.volume
    };
};

export default connect(mapStateToProps)(Display);
