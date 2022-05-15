import { Suspense } from 'react'
import { InstantSearch } from 'react-instantsearch-hooks-web'
import { BrowserRouter as Router } from 'react-router-dom'
import { searchClient } from './api/algolia'
import { AlgoliaConstants } from './constants/algolia'
import routes from '~react-pages'

export default function App() {
  return (
    <Router>
      <InstantSearch searchClient={searchClient} indexName={AlgoliaConstants.searchIndex}>
        <Routes />
      </InstantSearch>
    </Router>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
