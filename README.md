# normalize-api

This function pulls out models from nested object.
And removes model nesing alltogether.
Makes data easy to store in redux store

### Single object

```javascript
import normalize from 'normalize-api'

const input = {
  id: 1,
  title: 'normalize root',
  post: {
    id: 1,
    title: 'My first post',
  },
  users: [
    { id: 1, name: 'Usr 1' },
    { id: 2, name: 'Usr 2' }
  ],
}

const models = normalize(input, 'root')


/* models: {
{
 root: [
   { id: 1, title: 'normalize root' }
 ],
 post: [
   { id: 1, title: 'My first post' }
 ],
 users: [
   { id: 1, name: 'Usr 1' },
   { id: 2, name: 'Usr 2' },
 ]
}
 */
```

### Array of objects

```javascript
import normalize from 'normalize-api'


const input2 = [
 {
   id: 1,
   title: 'normalize root 1',
   post: {
     id: 1,
     title: 'My first post',
   },
   users: [
     { id: 1, name: 'Usr 1' },
     { id: 2, name: 'Usr 2' }
   ],
 },
 {
   id: 1,
   title: 'normalize root 2',
   post: {
     id: 1,
     title: 'My first post',
   },
   users: [
     { id: 1, name: 'Usr 1' },
     { id: 2, name: 'Usr 2' }
   ],
 }
]

const models = normalize(input2, 'root')


/* models: {

 root: [
   { id: 1, title: 'normalize root 1' },
   { id: 1, title: 'normalize root 2' }
 ],
 post: [
   { id: 1, title: 'My first post' }
 ],
 users: [
   { id: 1, name: 'Usr 1' },
   { id: 2, name: 'Usr 2' },
 ]
}

*/

```
