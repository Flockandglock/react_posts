import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';


const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div>
            <h2>Страница поста с ID ={params.id}</h2>
            {
                isLoading ? 
                <Loader /> :
                <div>{post.id}. {post.title}</div>
            }
            <h2>Комментарии</h2>
            {
                isComLoading ?
                <Loader /> :
                <div>
                    {comments.map(item => 
                        <div key={item.id}>
                            <h3>{item.email}</h3>
                            <div>{item.body}</div>
                        </div>
                    )}
                </div>
            }   
        </div>
    );
};

export default PostIdPage;