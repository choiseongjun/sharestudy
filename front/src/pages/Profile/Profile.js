import React,{useState,useCallback} from 'react'
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
    const {userInfo} = useSelector((state) => state.userReducer);
    const [editmode,setEditmode] = useState(false);
    const [editText, setEditText] = useState(userInfo.nickname);
    console.log(userInfo)
    const EditProfile = useCallback(()=>{
        setEditmode(!editmode);
    },[editmode,setEditmode])
    const UpdateProfile = useCallback((text)=>{
        console.log(text)
    },[])
    return (
        <>
        <div className="container">
            <header>
                <section className="profile">
                    <div className="image">
                        <img id="profile-picture" />
                    </div>
                    <div className="info">
                        <div className="top-row">
                        {editmode?
                            (
                                <>
                                    <input type="text" name="nickname" size="20" value={editText} onChange={(e)=>setEditText(e.target.value)} />
                                    <button onClick={()=>UpdateProfile({editText})}>수정하기</button>
                                </>
                            ):
                            (
                                <h2>{userInfo.nickname}</h2>
                            )}
                        <div className="edit-profile">
                            <button id="edit-profile" type="button" onClick={EditProfile}>Edit Profile</button>
                        </div>
                            <div className="settings">
                                <button id="settings" type="button">
                                    <svg aria-label="Options" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                    <path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="stats">
                        <li><b>373</b> posts</li>
                        <li><b>140</b> followers</li>
                        <li><b>235</b> following</li>
                        </ul>
                        <div className="bio">
                        <p>Seattle snapshots && creative coding</p>
                        </div>
                    </div>
                </section>
            </header>
            <div className="posts-container">
                <div className="post">
                    <img src="https://dummyimage.com/200x200/feca57/ffffff.jpg" />
                </div> 
                <div className="post">
                    <img src="https://dummyimage.com/200x200/ff6b6b/ffffff.jpg" />
                </div>
                <div className="post">
                    <img src="https://dummyimage.com/200x200/feca57/ffffff.jpg" />
                </div>
                <div className="post">
                    <img src="https://dummyimage.com/200x200/feca57/ffffff.jpg" />
                </div>
                <div className="post">
                    <img src="https://dummyimage.com/200x200/feca57/ffffff.jpg" />
                </div> 
                <div className="post">
                    <img src="https://dummyimage.com/200x200/3498db/ffffff.jpg" />
                </div> 
                <div className="post">
                    <img src="https://dummyimage.com/200x200/3498db/ffffff.jpg" />
                </div> 
                <div className="post">
                    <img src="https://dummyimage.com/200x200/ff9f43/ffffff.jpg" />
                </div>  
                <div className="post">
                    <img src="https://dummyimage.com/200x200/1dd1a1/ffffff.jpg" />
                </div>  
            </div>
        </div>
        </>
    )
}

export default Profile