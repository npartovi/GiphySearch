import React from 'react'

const TrendingListItem = ({ gif }) => {

    let originalImage = gif.images.fixed_height.url

    return(
        <div className="trending-list-item">
            <img alt="oops" src={originalImage} />
        </div>
    )
}

export default TrendingListItem