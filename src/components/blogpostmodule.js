import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'

// import style from '../styles/blogpost.module.scss'

const Post = ({
    title,
    date,
    path,
    excerpt,
    tag,
    category,
    html,
    previousPost,
    nextPost,
}) => {

    let postNavigation
    if (previousPost==null) {
        postNavigation = <Link to={nextPost.frontmatter.permalink}>{nextPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}  &raquo;</Link>
    } else if (nextPost==null) {
        postNavigation = <Link to={previousPost.frontmatter.permalink}>&laquo; {previousPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
    } else {
        postNavigation = <div><Link to={previousPost.frontmatter.permalink}>&laquo; {previousPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link> <Link to={nextPost.frontmatter.permalink}>{nextPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}  &raquo;</Link></div>
    }

    return (
        <article className="post">
            <div className="postheading">
                <div>{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                <span>{date}</span>
                <span> in </span>
                <span>{category}</span>
            </div>

            <div className="postcontent">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>

            <div className="postnavigation">
                {postNavigation}
            </div>
        </article>
        )
}

export default Post
