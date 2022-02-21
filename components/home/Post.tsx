import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';
import { Feather, Ionicons } from '@expo/vector-icons';

import { POSTS } from '../../data/posts';

// const postFooterIcons = [
//     {
//         name: 'Like',
//         imageUrl: ''
//     },
//     {
//         name: 'Comment',
//         imageUrl: ''
//     },
//     {
//         name: 'Share',
//         imageUrl: ''
//     },
// ] 

// const heartColor = () => {
//     return (

//     );
// }

const Post = ({ post }: {post:any}) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical'  />
            <PostHeader  post={post}/>
            <PostImage post={post} />
            <PostFooter post={post} />
            <Likes post={post} />
            <Caption post={post} />
            <CommentsSection post={post} />
            <Comments post={post} />
            {/* <Comments post={post} /> */}
        </View>
    );
}

const PostHeader = ({ post }: {post:any}) => (
    <View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center'
        }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{uri : post.profile_picture }} style={styles.story}/>
                <Text style={{ marginLeft: 5, fontWeight: '400' }}>{post.user}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: '900' }}>...</Text>
            </TouchableOpacity>
        </View>
        {/* <View>
            <Image  source={{ uri: post.imageUrl }} style={{ height: 760, width: '100%', resizeMode: 'contain'}}/>
        </View> */}
    </View>

);

const PostImage = ({ post }: {post:any}) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>
        <Image
            source={{ uri: post.imageUrl }} 
            style={{ height: '100%', resizeMode: 'cover' }} 
        />
    </View>
);

const PostFooter = ({ post }: {post:any}) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop: 12 }}>
        <View style={{ flexDirection: 'row', marginLeft: 12 }}>
            <TouchableOpacity>
                <Feather name='heart' size={30} color='black' style={{ marginRight: 12 }} /> 
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name='message-circle' size={30} color='black' style={{ marginRight: 12, transform: [{ rotate: '265deg' }]  }}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name='ios-paper-plane-outline' size={30} color='black' style={{ marginRight: 12, transform: [{ rotate: '10deg' }] }}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginRight: 12 }}>
            <Feather name='bookmark' size={30} color='black' />
        </TouchableOpacity>
    </View>
); 

// Featherのbookmark入れ替えるか？？？？https://img.icons8.com/external-bearicons-detailed-outline-bearicons/452/external-Save-social-media-bearicons-detailed-outline-bearicons.png

const Likes = ({post}: {post: any}) => (
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginTop: 4, }}>
        <Text style={{ marginLeft: 9, marginRight: 5, fontSize: 14, fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
    </TouchableOpacity>
);

const Caption = ({post}: {post: any}) => (
    <View style={{ marginTop: 5, marginLeft: 9 }}>
        <Text>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
);

const CommentsSection = ({ post }: {post: any}) => (
    <View style={{ marginTop:5, marginLeft: 9 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'grey' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{'  '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>
);

const Comments = ({post}: {post: any}) => (
    <View>
        {post.comments.map((comment: any, index: any) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </View>
);

// what does !! mean in react native??? you gotta search it!!!

// 0 comments 
// 1comments
// greater than 2 comments

{/* // const Comments = ({post}: {post: any}) => (
//     <View>
//         {POSTS.map((post, index) => (
//             <TouchableOpacity key={index}>
//                 <Text>{post.comments.user}{post.comments.comment}</Text>
//             </TouchableOpacity>
//         ))}
//     </View>
// ); */}


const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft:10,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
});

export default Post

// transform: [{ rotate: '265deg' }] >>>こいつを使えば時計回りに角度が変わる