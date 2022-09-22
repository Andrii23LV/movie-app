import React from 'react'
import Youtube from 'react-youtube'
import { findTrailer } from '../../pages/searchMoviePage/api/findTrailer';

export const Trailer = ({id}) => {
    return (
        <div>
            <Youtube
                videoId={id}
                className={"trailer"}
                containerClassName={"youtube-container amru"}
                opts = {
                    {
                        width: '100%',
                        height: '100%',
                        playerVars: {
                            autoplay: 1,
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
