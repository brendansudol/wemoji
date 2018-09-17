/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'

import Wemoji from './Wemoji'

const Hero = ({ emojis }) => (
  <div className="px2 py2 container mx-auto">
    <div className="mb3 center">
      <div className="h1 sm-h0">
        <strong>we</strong>
        moji
      </div>
      <div className="mb1 h3">An animated, inclusive emoji icon pack.</div>
      <div className="h2">
        ✌ ✌🏻 ✌🏼 ✌🏽 ✌🏾 ✌🏿 →{' '}
        <div
          className="inline-block align-bottom"
          style={{ width: 50, height: 50 }}
        >
          <Wemoji name="victory-hand" />
        </div>
      </div>
    </div>
    <div className="flex flex-wrap mb1 mxn1 py1">
      {emojis.map((name, i) => (
        <div key={`${name}-${i}`} className="col-4 sm-col-2 md-col-8th px1 mb2">
          <div className="p1">
            <Wemoji name={name} />
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Hero
