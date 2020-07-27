import React from 'react';
import parse from 'html-react-parser';
import './style.scss';
import { accountUrl, sitePath } from '../../repositories/clients/config/modyo.config';

// eslint-disable-next-line react/prop-types
export default function ExampleComponent({ post }) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    image, imageAlt, title, description, slug,
  } = post;
  const linkFull = `${accountUrl}/${sitePath}/${slug}`;

  return (
    <div className="col-md-4 text-center">
      <img
        src={image}
        alt={imageAlt}
      />
      <h3 className="h4 mt-3">
        { title }
      </h3>
      <div className="content-description text-muted">{parse(description)}</div>
      <a
        className="btn btn-outline-primary"
        href={linkFull}
      >
        Learn more
      </a>
    </div>
  );
}
