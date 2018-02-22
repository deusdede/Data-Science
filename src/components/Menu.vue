<template>
<div>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div id="preview" class="col-md-6">
    <div class = "well well-sm pre-scrollable"  v-html='previewText' ></div>
  </div>
</div>
</template>

<script>
let marked = require("marked");

import axios from "axios";

axios.defaults.baseURL = 'http://localhost:9000/';

export default {
  name: "Menu",
  data() {
    return {
      msg: "Science - DSJ",
      /*
      md_text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line."+
               "\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, "+
               "~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. "+
               "oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n"+
               "*[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
      */
      md_text: ""
    };
  },
  computed: {
    previewText() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });
      return marked(this.md_text);
    }
  },
  mounted() {
    axios.get('teste.json').then(response => {
      this.mdText = response.data;
    }).catch((error) => {
        // Error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
