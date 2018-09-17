import React from 'react'

import Wemoji from './Wemoji'

const Category = ({ name, emojis }) => (
  <div className="mb4">
    <h6 className="mt0 mb1 caps">{name}</h6>
    <div className="p2 flex flex-wrap items-center bg-white rounded">
      {emojis.map((name, i) => (
        <div key={`${name}-${i}`} className="p2 col-4 sm-col-2">
          <Wemoji name={name} />
        </div>
      ))}
    </div>
  </div>
)

const Categories = ({ hands, faces, professions, activities, misc }) => (
  <div className="px2 py4 bg-light">
    <div className="container mx-auto">
      <div className="sm-col-8 mx-auto">
        <h2 className="mt0 h1">Better together.</h2>
        <p className="mb4 h2">
          What's a <strong>we</strong>
          moji? It's an animated GIF that’s inclusive of all skin tones. This
          set includes 200+ icons in four different sizes. Here’s a preview...
        </p>
        <Category name="Gestures" emojis={hands} />
        <Category name="Faces" emojis={faces} />
        <Category name="Professions" emojis={professions} />
        <Category name="Activities" emojis={activities} />
        <Category name="Miscellaneous" emojis={misc} />
      </div>
    </div>
  </div>
)

export default Categories
