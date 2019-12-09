// eslint-env jest
import normalize from '../src'

describe('normalize', () => {
  test('normalizes entities  with nested objects', () => {

    const post = {
      id: 1,
      title: 'My first post',
      user: { id: 4, name: 'Post Writer' },
    }

    const entities = normalize(post, 'post')
    expect(entities).toMatchSnapshot()
  })

  test('normalizes entities arrays of objects', () => {

    const post = {
      id: 1,
      comments: [
        {
          id: 1,
          message: 'First comment',
          post_id: 1,
        },
        {
          id: 2,
          message: 'Second comment',
          post_id: 1,
        },
        {
          id: 3,
          message: 'Third comment',
          post_id: 1,
        }
      ]
    }

    const entities = normalize(post, 'post')
    expect(entities).toMatchSnapshot()
  })

  test('normalizes entity with arrays of objects inside and nested objects inside of array of objects', () => {

    const post = {
      id: 1,
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

    const entities = normalize(post, 'post')
    expect(entities).toMatchSnapshot()
  })

  test('normalizes entities arrays of objects', () => {

    const posts = [
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

    const entities = normalize(posts, 'post')
    expect(entities).toMatchSnapshot()
  })
})


