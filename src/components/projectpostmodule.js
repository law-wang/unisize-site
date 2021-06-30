import React from 'react'
// import Img from 'gatsby-image'
// import '../styles/projectpost.scss'

const Post = ({
    title,
    date,
    path,
    excerpt,
    html,
    link,
}) => {

    return (
        <article className="project">
            <div className="projectarea">
                <div className="projectheading">
                    <div className="projecttitle">{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                </div>

                <div className="projectcontent">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
            <div className="projectlinkto">
                <a href={link} target="_blank" rel="noreferrer">See It in Action</a>
            </div>
        </article>
    )

}

export default Post
