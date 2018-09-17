import React from 'react'
import ModalWrapper from 'react-modal'

ModalWrapper.setAppElement('#root')

const Modal = ({ emojis, isOpen, toggleModal }) => (
  <ModalWrapper
    isOpen={isOpen}
    contentLabel="wemoji list"
    style={{ overlay: { zIndex: 100 } }}
  >
    <button
      type="button"
      className="btn p0 absolute top-0 right-0 h5"
      style={{ margin: 12 }}
      onClick={toggleModal}
    >
      ✕
    </button>
    {emojis.map(([name, svgId]) => (
      <a
        key={name}
        href={`https://twitter.github.io/twemoji/2/svg/${svgId}.svg`}
        className="mr1 sm-mr2 sm-mb1 inline-block h6 sm-h5 black"
        target="_blank"
      >
        {name}
      </a>
    ))}
  </ModalWrapper>
)

export default Modal
