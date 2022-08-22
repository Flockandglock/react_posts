import { useState, useEffect } from 'react';
import PostList from '../components/postList/PostList';
import PostForm from '../components/postForm/PostForm';
import {usePosts} from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';


import PostFilter from '../components/postFilter/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/loader/Loader';



function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query );
    const [totalPages, setTotalPages] = useState();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    

    const [fetchPost, isLoading, error] = useFetching( async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    });


    useEffect(() => {
        fetchPost()
    }, [page])


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const changePage = (page) => {
        setPage(page);
    };


    return (
        <div className="App">
            
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Добавиь пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {error && 
                <h3>`Произошла ошибка ${error}`</h3>
            }
            {
                isLoading 
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><Loader /></div>
                : <PostList posts={sortedAndSearchedPost} deletePost={deletePost} /> 
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
            
        </div>
    );
}

export default Posts;
