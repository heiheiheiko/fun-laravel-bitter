export default {
  forms: {
    PostForm: {
      fields: {
        message: {
          hint: 'Write a terrifying message or tell the world your evil plans!',
        },
      },
      submit: 'terrify!',
    },
  },
  views: {
    PostIndex: {
      title: 'Terrifying Posts',
    },
  },
};
