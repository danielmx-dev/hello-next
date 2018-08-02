import Layout from '../components/MyLayout.js'
import { getShowById } from '../services/tv_maze.js';

const Post =  ({
  show: {
    name,
    summary,
    image,
    genres,
  }
}) => (
  <Layout>
    <h1>{name}</h1>
    <img src={image.medium}/>
    <div dangerouslySetInnerHTML={{ __html: summary }} />
    <div className='details'>
      <h2>Details</h2>
      {genres}
    </div>
    <style jsx>{`
      img {
        float: right;
      }
      .details {
        margin-top: 3rem;
        clear: both;
      }
    `}</style>
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const show = await getShowById(id)
  return { show }
}

export default Post