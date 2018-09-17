import React from 'react'
import { render } from 'react-dom'
import 'ace-css/css/ace.min.css'

import App from './components/App'
import { emojisAll, emojisByCat } from './util'
import './index.css'

render(
  <App
    emojisAll={emojisAll}
    emojisByCat={emojisByCat}
    showPromo={window.location.search.includes('ref=producthunt')}
  />,
  document.getElementById('root')
)
