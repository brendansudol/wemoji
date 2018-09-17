import React, { Component } from 'react'

import Categories from './Categories'
import Details from './Details'
import Footer from './Footer'
import Hero from './Hero'
import Modal from './Modal'
import PromoBar from './PromoBar'

class App extends Component {
  state = { showModal: false }

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }))
  }

  render() {
    const { emojisAll, emojisByCat, showPromo } = this.props
    const { showModal } = this.state

    return (
      <div>
        {showPromo && <PromoBar />}
        <Hero emojis={emojisByCat.hero} />
        <Categories {...emojisByCat} />
        <Details toggleModal={this.toggleModal} />
        <Footer />
        <Modal
          emojis={emojisAll}
          isOpen={showModal}
          toggleModal={this.toggleModal}
        />
      </div>
    )
  }
}

export default App
