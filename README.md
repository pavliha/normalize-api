# normalize-api

This function pulls out models from nested object.
And removes model nesing alltogether.
Makes data easy to store in redux store

### Single object

```javascript
import normalize from 'normalize-api'


const post = {
  id: 1,
  title: 'My first post',
  user: { id: 4, name: 'Post Writer' },
  comments: [
    {
      id: 1,
      message: 'First comment',
      post_id: 1,
      user: { id: 1, name: 'User 1' }
    },
    {
      id: 2,
      message: 'Second comment',
      post_id: 1,
      user: { id: 2, name: 'User 2' }
    },
    {
      id: 3,
      message: 'Third comment',
      post_id: 1,
      user: { id: 2, name: 'User 2' }
    }
  ]
}

const models = normalize({ post })

/* response of normalize
models = {
  post: [
    { id: 1, title: 'My first post', user_id: 4 },
  ],
  comments: [
    { id: 1, post_id: 1, message: 'First comment', user_id: 1 },
    { id: 2, post_id: 1, message: 'Second comment', user_id: 2 },
    { id: 3, post_id: 1, message: 'Third comment', user_id: 2 }
  ],
  user: [
    { id: 1, name: 'User 1', },
    { id: 2, name: 'User 2' },
    { id: 4, name: 'Post Writer' },
  ]
}
*/

```

### Array of objects

```javascript
import normalize from 'normalize-api'

const posts = [
  {
    id: 1,
    title: 'My first post',
    user: { id: 4, name: 'Post Writer' },
    comments: [
      {
        id: 1,
        message: 'First comment',
        post_id: 1,
        user: { id: 1, name: 'User 1' }
      },
      {
        id: 2,
        message: 'Second comment',
        post_id: 1,
        user: { id: 2, name: 'User 2' }
      },
      {
        id: 3,
        message: 'Third comment',
        post_id: 1,
        user: { id: 2, name: 'User 2' }
      }
    ]
  },
  {
    id: 2,
    title: 'My second post',
    comments: [
      {
        id: 4,
        message: 'Fourth comment',
        post_id: 2,
        user: { id: 1, name: 'User 1' }
      },
      {
        id: 5,
        message: 'Fifth comment',
        post_id: 2,
        user: { id: 2, name: 'User 2' }
      },
      {
        id: 6,
        message: 'Sixth comment',
        post_id: 2,
        user: { id: 2, name: 'User 2' }
      }
    ]
  }
]

const models = normalize({ post })

/* response of normalize
models = {
  posts: [
    { id: 1, title: 'My first post', user_id: 4 },
    { id: 2, title: 'My second post', user_id: 4 }
  ],
  comments: [
    { id: 1, post_id: 1, message: 'First comment', user_id: 1 },
    { id: 2, post_id: 1, message: 'Second comment', user_id: 2 },
    { id: 3, post_id: 1, message: 'Third comment', user_id: 2 },
    { id: 1, post_id: 2, message: 'Fourth comment', user_id: 1 },
    { id: 2, post_id: 2, message: 'Fifth comment', user_id: 2 },
    { id: 3, post_id: 2, message: 'Sixth comment', user_id: 2 }
  ],
  user: [
    { id: 1, name: 'User 1', },
    { id: 2, name: 'User 2' },
    { id: 4, name: 'Post Writer' },
  ]
}
 */

```
