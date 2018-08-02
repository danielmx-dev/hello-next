import Layout from '../components/MyLayout.js'
import ShowList from '../components/ShowList.js';
import SearchBar from '../components/SearchBar.js';
import { searchShows } from '../services/tv_maze.js';

const Index = ({
  shows,
  query,
}) => (
  <Layout>
    <h1>{query} TV Shows</h1>
    <SearchBar query={query} />
    <ShowList shows={shows} />
  </Layout>
)

Index.getInitialProps = async function(context) {
  const query = context.query.q || ''
  const shows = query ? await searchShows(query) : []

  return {
    shows,
    query,
  }
}

export default Index