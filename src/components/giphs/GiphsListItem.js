import React, {Component} from 'react'
import Moment from 'react-moment'

class GiphsListItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            modal: false
        }
    }

    // Opens modal by changing component state
    openModal = () => this.setState({modal: true})

    // Closes modal by changing component state
    closeModal = () => this.setState({modal: false})

    // When user clicks on the add to favorite button, it will send this to the function in the GiphsList to be added
    // to local storage. It will then close the modal
    favoriteAdded = (gif) => {
        this.props.updateFavorites(gif)
        this.closeModal()
    }

    
    render(){
        
        // Creating variables to be displayed in the modal
        const {gif} = this.props
        const { modal } = this.state
        const source = gif.source || "no source available"
        const title = gif.title || "no title available"
        const url = gif.url || "no url available"
        const trending_datetime = gif.trending_datetime || "no trending_datetime available"
        const username = gif.username || "no username available"
        const rating = gif.rating || "no rating available"
        const originalImage = gif.images.fixed_height.url

        return(
            <div className="giphs-list-item">
                <img onClick={this.openModal} alt="oops" src={originalImage} />
                <div className="modal" style={modal ? {display: "block"} : {display: "none"}}>
                    <div className="modal-content">
                        <div className="left-modal-container">
                            <img src={originalImage} alt="" />
                        </div>
                        <div className="right-modal-container">
                            <div className="list-wrap">
                                <ul className="list">
                                    <li><span>Title:</span> {title}</li>
                                    <li><span>Username:</span> {username}</li>
                                    <li><span>Rating:</span> {rating}</li>
                                    <li><span>URL: </span><a rel="noopener noreferrer" target="_blank" href={url}>{url}</a></li>
                                    <li><span>Time of Trending:</span> <Moment format="MMM D YYYY HH:mm">{trending_datetime}</Moment></li>
                                    <li><span>Source: </span><a rel="noopener noreferrer" target="_blank" href={source}>{source}</a></li>
                                </ul>
                            </div>
                            <button className="close-modal-button" onClick={this.closeModal}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                            <button className="favorite-button" onClick={() => this.favoriteAdded(gif)}>{this.props.text}<i className="fa fa-heart" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GiphsListItem