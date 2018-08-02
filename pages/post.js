import Layout from '../components/MyLayout.js'
import { getShowById } from '../services/tv_maze.js';

const Post =  ({
  show: {
    name,
    summary,
    image,
  }
}) => (
    <Layout>
       <h1>{name}</h1>
       {/* <p dangerouslySetInnerHTML={{ __html: summary }} /> */}
       <p>{summary.replace(/<[/]?p>/g, '')}</p>
       <img src={image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const show = await getShowById(id)
  return { show }
}

export default Post