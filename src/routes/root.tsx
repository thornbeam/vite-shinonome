import { Page } from '../types';
import { useOutletContext } from 'react-router-dom';

export default function Root() {
  const { pages } = useOutletContext<{ pages: Page[] }>();

  if (pages) {
    return (
      <>
        {pages.map((post) => (
          <div key={post.id}>{post.title.rendered}</div>
        ))}
      </>
    );
  }
}
