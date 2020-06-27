const initialState = {
    brightness: 1,
    play: false,
    video: '',
    videoInfo: {},
    volume: 1
};

const reducer = (state = initialState, action) => {
    if (action.type === 'VIDEO_SRC') {
        return {
            ...state,
            brightness: 1,
            play: true,
            video: action.payload.src,
            videoInfo: {
                ...action.payload.videoInfo
            },
            volume: 1
        };
    }

    if (action.type === 'VIDEO_PLAY') {
        return {
            ...state,
            play: !state.play
        };
    }

    if (action.type === 'VIDEO_VOLUME') {
        return {
            ...state,
            volume: action.payload.volume
        };
    }

    if (action.type === 'VIDEO_BRIGHTNESS') {
        return {
            ...state,
            brightness: action.payload.brightness
        };
    }

    return state;
};

export default reducer;
