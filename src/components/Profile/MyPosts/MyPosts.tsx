import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import { MyPostsPropsType } from './MyPostsContainer';
import {Field, reduxForm, SubmitHandler} from 'redux-form';

const MyPosts = (props: MyPostsPropsType) => {


    let addPost: SubmitHandler<{}, {}, string> = (values:any) => {
        props.addPost(values.NewPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {props.posts.map((el, index) => <MyPost message={el.message} countLikes={el.countLikes} key={index}/>)}
            </div>
        </div>


    );
};
function AddNewPostForm(props: any) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='NewPostText' component='textarea'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;