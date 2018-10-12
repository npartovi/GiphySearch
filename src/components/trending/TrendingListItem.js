import React from 'react'

const TrendingListItem = ({ gif }) => {

    let originalImage = gif.images.fixed_width.url


    return(
        <img src={originalImage} />
    )
}

export default TrendingListItem