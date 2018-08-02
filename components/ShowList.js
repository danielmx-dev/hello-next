import Link from 'next/link'

const ShowList = ({
  shows,
}) => (
  <ul>
    {shows.map(({show}) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>{show.name}</a>
        </Link>
      </li>
    ))}
    <style jsx>{`
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </ul>
)

export default ShowList