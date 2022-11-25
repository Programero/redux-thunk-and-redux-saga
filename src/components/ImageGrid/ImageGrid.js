import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { fetchImagesThunk } from '../../redux/thunk-action-creators';
import './styles.css';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    // state = {
    //     images: [],
    // };

    componentDidMount() {
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     });
        this.props.fetchImages(2);
    }

    render() {
        const { images, loading, fetchImages } = this.props;

        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                <Button
                    onClick={e => {
                        !loading && fetchImages(2);
                    }}
                >
                    Load More Images
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.images,
    loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
    fetchImages: (numOfImages = 10) => dispatch(fetchImagesThunk(numOfImages)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
