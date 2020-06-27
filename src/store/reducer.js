const initialState = {
    brightness: 1,
    play: false,
    video: '',
    videoInfo: {},
    volume: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VIDEO_SRC':
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

        case 'VIDEO_PLAY':
            return {
                ...state,
                play: !state.play
            };

        case 'VIDEO_VOLUME':
            return {
                ...state,
                volume: action.payload.volume
            };

        case 'VIDEO_BRIGHTNESS':
            return {
                ...state,
                brightness: action.payload.brightness
            };

        default:
            return state;
    }
};

export default reducer;
