import React from "react"
import s from "./MyPosts.module.css"
import MyPost from "./Post/MyPost"
import { MyPostsPropsType } from "./MyPostsContainer"
import { Field, reduxForm, reset } from "redux-form"
import { maxLengthCreator, requiredField } from "utils/validators/validators"
import { Textarea } from "components/common/FormsControls/FormsControls"
import { AppDispatch } from "redux/redux-store"

const MyPosts = (props: MyPostsPropsType) => {
    console.log("Return YO")
    let addPost: (values: any, dispatch: AppDispatch) => void = (values: any, dispatch: AppDispatch) => {
        props.addPost(values.NewPostText)
        dispatch(reset("ProfileAddNewPostForm"))
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
                    component={Textarea}
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
