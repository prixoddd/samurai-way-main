import React from "react"
import s from "./MyPosts.module.css"
import MyPost from "./Post/MyPost"
import { MyPostsPropsType } from "./MyPostsContainer"
import { Field, reduxForm, SubmitHandler } from "redux-form"
import { maxLengthCreator, requiredField } from "utils/validators/validators"
import TextArea from "antd/es/input/TextArea"

const MyPosts = (props: MyPostsPropsType) => {
    let addPost: SubmitHandler<{}, {}, string> = (values: any) => {
        props.addPost(values.NewPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost} />
            <div className={s.posts}>
                {props.posts.map((el, index) => (
                    <MyPost message={el.message} countLikes={el.countLikes} key={index} />
                ))}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

function AddNewPostForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="NewPostText"
                    component={TextArea}
                    validate={[requiredField, maxLength10]}
                    placeholder="your post message"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts
