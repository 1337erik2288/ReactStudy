import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Жопа Антона', body: '15 рублей/0.30$'},
        {id: 2, title: 'Мнение Антона', body: '0 рублей/0.00$'},
    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
    <div className="App">
        <form>
            <MyInput
                value = {title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Название товара"
            />
            <MyInput
                value = {body}
                onChange={e => setBody(e.target.value)}
                type="text"
                placeholder="Цена товара"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Барахолка"/>
    </div>
  );
}

export default App;
