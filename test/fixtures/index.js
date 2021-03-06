export default {
  getImage () {
    return {
      id: 'e8fa88c0-5b6f-4842-bb15-2febb834345c',
      publicId: '2PkD0R5Y2AI4tNFvvm1WdG',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/2PkD0R5Y2AI4tNFvvm1WdG.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: 'e8fa88c0-5b6f-4842-bb15-2febb834345c',
      avatar: '//www.gravatar.com/avatar/762e139d10e38724b63bec46da9b7dd5',
      name: 'Freddy Vega',
      username: 'freddier',
      email: 'f@platzi.test',
      password: 'pl4tzi',
      createdAt: new Date().toString()
    }
  }
}
