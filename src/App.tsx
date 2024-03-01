import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import useData from './api/fetch';
import { Page, News, Project, Member, Category } from './types';
import Loading from './components/loading';

export default function App() {
  const { posts: pages, loading: loadingPages } = useData<Page[]>('pages');
  const { posts: news, loading: loadingNews } = useData<News[]>('news');
  const { posts: projects, loading: loadingProjects } =
    useData<Project[]>('project');
  const { posts: members, loading: loadingMembers } = useData<Member[]>('team');
  const { posts: categories, loading: loadingCategories } =
    useData<Category[]>('categories');

  if (
    loadingPages ||
    loadingNews ||
    loadingProjects ||
    loadingMembers ||
    loadingCategories
  ) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className={`absolute top-[52px] px-3 w-full`}>
        <Outlet
          context={{
            pages: pages,
            news: news,
            projects: projects,
            members: members,
            categories: categories,
          }}
        />
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
