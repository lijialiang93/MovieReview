import React, { Component } from 'react';
class AddReviewInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: sessionStorage.getItem('currentUser'),
            content: "",
            movie: this.props.movie
        };
    }

    onContentChange(e) {
        this.setState({
            content: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        if (this.state.author && this.state.content && this.state.movie) {
            let reviewData = {
                author: this.state.author,
                content: this.state.content,
                movie: this.state.movie
            };
            this.props.onSubmit(reviewData);

        }

    };

    render() {
        return (
            <div className="row">
                <label for='content'>New Review</label>
                <form className="form-horizontal ml-3" onSubmit={(e) => { this.onSubmit(e) }}>
                    <div className="row">
                        <div className="align-items-center">
                            <textarea
                                value={this.state.content}
                                onChange={(e) => { this.onContentChange(e) }}
                                id="content"
                                placeholder="Add your review!"
                                cols="120"
                                rows="3"
                                maxLength="200"
                                placeholder="maximum number of characters allowed: 200">
                            </textarea>
                        </div>
                        <div className="col-sm-1 mt-4">
                            <button type="submit" className="btn btn-primary btn-sm" id="submitBtn">
                                submit
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddReviewInput;
