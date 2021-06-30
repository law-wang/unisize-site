// import React, {useEffect, useState} from "react"

// // import "../styles/index.scss"

// const Tracklist = () => {

//     const request = require('request')
//     const client_id = 'fe75f206e45d40dc81c0e21dfba40054'
//     const client_secret = '21068bd3ec2e48d2bc4fa04fdd8d7fba'
//     const [tracks, setTrack] = useState([])
    
//     useEffect(() => {
//         var authOptions = {
//             url: 'https://accounts.spotify.com/api/token',
//             headers: {
//                 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//             },
//             form: {
//                 grant_type: 'client_credentials'
//             },
//             json: true
//         }
//         request.post(authOptions, function(error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 var token = body.access_token
//                 var options = {
//                     url: 'https://api.spotify.com/v1/playlists/0Jbyjzx2J6nmlHjOwp26hi/tracks',
//                     headers: {
//                         'Authorization': 'Bearer ' + token
//                     },
//                     json: true
//                 }
//                 request.get(options, function(error, response, body) {
//                     setTrack(body.items)
//                 })
//             }
//         })
//     })    

//     return (
//         <div id="playlist-container">
//             {tracks.slice(0, 10).map((item, index) => (
//                 <div className="track noselect" key={index}>
//                     <a href={item.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">{item.track.name}</a>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Tracklist
