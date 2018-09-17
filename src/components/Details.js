import React from 'react'

import Wemoji from './Wemoji'

const Bullet = () => (
  <div
    className="mr1 inline-block align-middle flex-none"
    style={{ width: 20, height: 20 }}
  >
    <Wemoji name="white-right-pointing-backhand-index" />
  </div>
)

const Details = ({ toggleModal }) => (
  <div className="px2 py4">
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className="sm-col-6">
          <h2 className="mt0 h1">Get them today.</h2>
          <p className="mb2 h3 sm-col-10">
            Perfect for a website, mobile app, slide deck, or as Slack custom
            emojis.
          </p>
          <div className="mb2 sm-col-11">
            <div className="py1 flex">
              <Bullet />
              <div>
                230 total icons (
                <button
                  type="button"
                  className="btn btn-link p0"
                  onClick={toggleModal}
                >
                  full list
                </button>
                )
              </div>
            </div>
            <div className="py1 flex">
              <Bullet />
              <div>Four unique sizes (32, 64, 100, & 200px)</div>
            </div>
            <div className="py1 flex">
              <Bullet />
              <div>
                <code>.gif</code> file format
              </div>
            </div>
          </div>
          <a
            className="gumroad-button"
            href="https://gum.co/wemoji"
            target="_blank"
            rel="noopener noreferrer"
            data-gumroad-single-product="true"
          >
            Purchase - $14
          </a>
        </div>
        <div className="sm-col-4 xs-hide">
          <Wemoji name="thumbs-up-sign" />
        </div>
      </div>
    </div>
  </div>
)

export default Details
