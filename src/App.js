export default {
  data() {
    return {
      show: false,
      user: {
        name: '',
        email: '' 
      },
      users: []
    };
  },
  methods: {
    // Sweet and easy Firebase database connection thanks to VueResource!
    postFormSubmitted() {
      this.$http.post('', this.user)
                .then(response => { 
                  console.log(response); 
                });
    },
    getFormSubmitted() {
      this.show = true;
      this.$http.get('')
                .then(response => { 
                  return response.json(); 
                })
                .then(data => {
                  const resultArray = [];
                  for (let key in data) {
                    resultArray.push(data[key]);
                  }
                  this.users = resultArray;
                  console.log(this.users);
                });
    }
  }
};