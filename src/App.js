export default {
  data() {
    return {
      show: false,
      user: {
        name: '',
        email: '' 
      },
      users: [],
      resource: {},
      node: 'data'
    };
  },
  methods: {
    // Sweet and easy Firebase database connection thanks to VueResource!
    postFormSubmitted() {
      this.resource.saveAlt(this.user);
    },
    getFormSubmitted() {
      this.show = true;
      this.resource.getData({node: this.node})
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
      saveAlt: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET'}
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
};