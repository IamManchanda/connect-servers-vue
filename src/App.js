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
      this.resource.saveAlt(this.user);
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
    const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'}
    };
    this.resource = this.$resource('data.json', {}, customActions);
  }
};