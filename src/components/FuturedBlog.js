import React from 'react';
import { Link } from 'gatsby';

const style = {
  time: {
    fontSize: "12px"
  }
};

export default function FeaturedBlog({blog}) {
  const { title, subtitle, date, slug, author } = blog.frontmatter;

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="mt-1 subtitle is-6">{author}</p>
          </div>
        </div>
        <div className="content mb-1">
          {subtitle}
          <br />
          <br />
          <time style={style.time} dateTime={style.time}>{date}</time>
        </div>
        <Link to={`/blogs/${slug}`} className="mt-4 button is-light is-link is-small">
          Открыть
        </Link>
      </div>
    </div>
  )
}
