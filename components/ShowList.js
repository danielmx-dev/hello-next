import Link from 'next/link'
import ShowItem from './ShowItem';

const ShowList = ({
  shows,
}) => (
  <ul>
    {shows.map(({show}) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>
            <ShowItem show={show} />
          </a>
        </Link>
      </li>
    ))}
    <style jsx>{`
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 1rem 0 0 0.5rem;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </ul>
)

export default ShowList