import { useState, useEffect } from 'react';
import { url } from "./host_url"
import { Page, News, Project, Member } from '../types';
export function fetchPostData<T>(
  PostType: string
  //Category?: number
) {
  const slug = 'wp-json/wp/v2/';
  const endpoint = url + slug;

  const [PostData, setPostData] = useState<
    Page[] | Project[] | News[] | Member[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint + PostType + '/?per_page=100');
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching ' + PostType + ' data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { posts: PostData as T, loading: loading };
}
