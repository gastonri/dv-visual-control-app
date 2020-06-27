import './video-dropdown.scss';
import { Card, CardActionArea, CardContent, CardMedia, List, ListItem } from '@material-ui/core';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

const VideoDropdown = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data.videos);
        });
    }, []);

    return (
        <div className="video__wrapper">
            <List className="video__list">
                {movies.map((movie, i) => {
                    return (
                        <ListItem className="video__list__item" key={i}>
                            <Card className="video__card">
                                <CardActionArea
                                    onClick={() => {
                                        props.setVideoSrc(movie);
                                    }}
                                >
                                    <div className="video__card2">
                                        <CardMedia
                                            className="video__media"
                                            image={movie.thumb}
                                            title={movie.title}
                                        />
                                        <CardContent className="vide__card-content">
                                            <div className="video__title">
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="h2"
                                                >
                                                    {movie.title}
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="subtitle2"
                                                    component="h3"
                                                >
                                                    {movie.subtitle}
                                                </Typography>
                                            </div>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                                className="video__description"
                                            >
                                                {movie.description}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

const getMovies = async () => {
    const data = await fetch('https://api.jsonbin.io/b/5ef6965097cb753b4d188f19/1'); // ('https://api.jsonbin.io/b/5ef409df2406353b2e0c4068');
    const {
        categories: [movies]
    } = await data.json();

    return movies;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setVideoSrc: (movie) => {
            dispatch({
                type: 'VIDEO_SRC',
                payload: {
                    src: movie.sources[0],
                    videoInfo: {
                        description: movie.description,
                        title: movie.title
                    }
                }
            });
        }
    };
};

export default connect(null, mapDispatchToProps)(VideoDropdown);
