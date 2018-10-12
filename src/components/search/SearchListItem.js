import React from 'react'

const SearchListItem = ({gif}) => {

    let originalImage = gif.images.fixed_height.url

    return(
        <img alt="oops" src={originalImage} />
    )
}

export default SearchListItem