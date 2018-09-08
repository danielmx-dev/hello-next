import Layout from '../components/MyLayout.js'
import { getShowById } from '../services/tv_maze.js';
import ShowDetail from '../components/ShowDetail.js';

const Post =  ({
  show,
}) => (
  <Layout>
    <ShowDetail show={show} />
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const show = await getShowById(id)
  return { show }
}

export default Post