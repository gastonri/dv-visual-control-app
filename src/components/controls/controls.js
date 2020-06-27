import './controls.scss';
import { Button, Slider } from '@material-ui/core';
import { connect } from 'react-redux';
import React from 'react';
import VideoDropdown from '../video-dropdown/video-dropdown';
import {
    Brightness4,
    Brightness5,
    PlayArrow,
    Pause,
    VolumeDown,
    VolumeUp
} from '@material-ui/icons';

const Controls = (props) => {
    const handleVolumeChange = (event, newVolume) => {
        props.setVideoVolume(newVolume);
    };

    const handleBrightnessChange = (event, newBrightness) => {
        props.setVideoBrightness(newBrightness);
    };

    return (
        <div className="controls" id="video-controls">
            <div className="controls__controls">
                <Button
                    className="controls__play-pause"
                    color="primary"
                    disabled={!props.video}
                    id="play-pause"
                    size="small"
                    variant="contained"
                    onClick={() => {
                        props.setVideoPlayPause();
                    }}
                >
                    {props.play ? <Pause /> : <PlayArrow />}
                </Button>
                <div className="controls__volume">
                    <VolumeDown />
                    <Slider
                        className="controls__volume__slider"
                        defaultValue={1}
                        disabled={!props.video}
                        id="volume-bar"
                        max={1}
                        min={0}
                        onChange={handleVolumeChange}
                        step={0.01}
                        value={props.volume}
                    />
                    <VolumeUp />
                </div>
                <div className="controls__brightness">
                    <Brightness4 />
                    <Slider
                        className="controls__brightness__slider"
                        defaultValue={1}
                        disabled={!props.video}
                        id="volume-bar"
                        max={1}
                        min={0}
                        onChange={handleBrightnessChange}
                        step={0.01}
                        value={props.brightness}
                    />
                    <Brightness5 />
                </div>
            </div>
            <VideoDropdown />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        brightness: state.brightness,
        play: state.play,
        video: state.video,
        volume: state.volume
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setVideoPlayPause: () => {
            dispatch({
                type: 'VIDEO_PLAY'
            });
        },
        setVideoVolume: (volume) => {
            dispatch({
                type: 'VIDEO_VOLUME',
                payload: {
                    volume
                }
            });
        },
        setVideoBrightness: (brightness) => {
            dispatch({
                type: 'VIDEO_BRIGHTNESS',
                payload: {
                    brightness
                }
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
