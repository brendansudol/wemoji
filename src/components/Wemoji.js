import React from 'react'

const Wemoji = ({ name }) => (
  <div className="aspect-ratio aspect-ratio--1x1 animated">
    {['base', 'medium-light', 'dark', 'medium', 'light', 'medium-dark'].map(
      variant => (
        <img
          key={variant}
          src={`${process.env.PUBLIC_URL}/svg/${name}/${variant}.svg`}
          alt={`${name}-${variant}`}
          className="aspect-ratio--object"
        />
      )
    )}
  </div>
)

export default Wemoji
