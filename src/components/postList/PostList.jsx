import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from "../postItem/PostItem";

const PostList = ({posts, deletePost}) => {

    

    const renderPosts = (arr) => {

        // if (!arr.length) {
        //     return (
        //         <h4>не найдены</h4>
        //     )
        // }

        const newArr = arr.map((item, index) => {
            return (
                <CSSTransition 
                    key={item.id}
                    timeout={500}
                    classNames='post'
                >
                    <PostItem  post={item} number={index + 1} deletePost={deletePost}/>
                </CSSTransition>
            )
        })
        return newArr;
    };

    const element = renderPosts(posts);

    return(
        <div>
            <h3 style={{textAlign: "center"}}>Список постов</h3>
            <TransitionGroup>
                {element}
            </TransitionGroup>
            
        </div>
    )
};

export default PostList