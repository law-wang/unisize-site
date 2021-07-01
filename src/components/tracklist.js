import React, { useEffect, useState } from "react"

const Tracklist = () => {

    const client_id = process.env.GATSBY_TRACKLIST_ID
    const client_secret = process.env.GATSBY_TRACKLIST_SECRET
    var Buffer = require('buffer/').Buffer
    const [tracks, setTrack] = useState([])

    useEffect(async () => {

        let urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");

        let authorize = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
            },
            body: urlencoded,
            redirect: 'follow'
        })
        authorize = await authorize.json()

        const token = authorize.access_token
        let track = await fetch('https://api.spotify.com/v1/playlists/0Jbyjzx2J6nmlHjOwp26hi/tracks', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        track = await track.json()

        setTrack(track.items)
    }, [])

    return (
        <div id="playlist">
            {tracks.slice(0, 10).map((item, index) => (
                <div key={index}>
                    <a href={item.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">{item.track.name}</a>
                </div>
            ))}
        </div>
    )
}

export default Tracklist
