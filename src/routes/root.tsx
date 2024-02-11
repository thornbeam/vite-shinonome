import Loading from '../components/loading';
import { Page } from '../types';
import fetchPostData from '../api/fetch';

export default function Root() {
  const { posts, loading } = fetchPostData<Page[]>('pages');

  if (loading) {
    return <Loading />;
  }

  if (posts) {
    return (
      <>
        {posts.map((post) => (
          <div key={post.id}>{post.title.rendered}</div>
        ))}
      </>
    );
  }
}
