import { useMemo } from "react";


// Сортирует посты
export const useSortedPost = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        console.log('отработала getSortedPost')
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts
};

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPost(posts, sort);

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query))
    }, [query, sortedPosts]);

    return sortedAndSearchedPost

};