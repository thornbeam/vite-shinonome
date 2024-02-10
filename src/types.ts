interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
}

export interface Page extends Post {
  type: 'page';
}

export interface Project extends Post {
  type: 'project';
  categories: number[];
}

export interface News extends Post {
  type: 'news';
  categories: number[];
}

export interface Member extends Post {
  type: 'team';
  categories: number[];
}
