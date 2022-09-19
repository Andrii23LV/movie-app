import React from 'react'
import Youtube from 'react-youtube'
import { findTrailer } from '../../pages/searchMoviePage/api/findTrailer'

export const Trailer = ({id}) => {
    const videoId = toString(findTrailer(id));
    return (
        <div>
            <Youtube
                videoId={videoId}
                className={"trailer"}
                containerClassName={"youtube-container amru"}
                opts = {
                    {
                        width: '300px',
                        height: '150px',
                        playerVars: {
                            autoplay: 0,
                            controls: 1,
                            cc_load_policy: 0,
                            fs: 0,
                            iv_load_policy: 0,
                            modestbranding: 0,
                            rel: 0,
                            showinfo: 1,
                        },
                    }
                }
            />
        </div>
    )
}
