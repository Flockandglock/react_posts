import { useState } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';

import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({createPost}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: v4(),
            title,
            body
        };
        createPost(newPost);

        setTitle('');
        setBody('');
    };

    return(
        <form action="">
            <MyInput type="text"
                placeholder='Введите заголовок поста'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <MyInput type="text"
                placeholder='Введите описание поста'
                value={body}
                onChange={e => setBody(e.target.value)}
            />
            <MyButton onClick={addNewPost} >Добавить пост</MyButton>
        </form>
    )
};

export default PostForm;