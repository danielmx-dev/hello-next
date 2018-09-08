import Layout from '../components/MyLayout.js'
import ShowList from '../components/ShowList.js';
import { searchShows } from '../services/tv_maze.js';

const Genre = ({
  shows,
  genre,
}) => (
  <Layout>
    <h1>{genre} TV Shows</h1>
    <ShowList shows={shows} />
  </Layout>
)

Genre.getInitialProps = async function(context) {
  const { genre } = context.query
  const shows = genre ? await searchShows(genre) : []

  return {
    shows,
    genre,
  }
}

export default Genre