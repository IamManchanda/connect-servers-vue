export default {
  data() {
    return {
      show: false,
      user: {
        name: '',
        email: '' 
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    // Sweet and easy Firebase database connection thanks to VueResource!
    postFormSubmitted() {
      this.resource.save({}, this.user);
    },
    getFormSubmitted() {
      this.show = true;
      this.$http.get('data.json')
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
  },
  created() {
    this.resource = this.$resource('data.json');
  }
};