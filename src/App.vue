<template>
  <div class="grid-container margin-top-1">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-8 medium-offset-2">
        <h1 class="text-center h2">HTTP Server Connect</h1>
        <form>
          <div class="grid-container">
            <div class="grid-x grid-margin-x align-center">
              <div class="medium-6 cell">
                <label>Name
                  <input type="text" placeholder="Enter your Name" v-model="user.name">
                </label>
              </div>
              <div class="medium-6 cell">
                <label>Email Address
                  <input type="text" placeholder="Enter your Email Address" v-model="user.email">
                </label>
              </div>
            </div>
            <div class="grid-x grid-margin-x align-center">
              <div class="medium-5 cell">
                <input type="submit" value="Submit" class="button primary radius expanded" @click.prevent="postFormSubmitted">
              </div>
            </div>
            <div class="grid-x grid-margin-x align-center">
              <div class="medium-12 cell">
                <label> Data Store
                  <input type="text" v-model="node">
                </label>
              </div>
            </div>
            <div class="grid-x grid-margin-x align-center">
              <div class="medium-5 cell">
                <input type="submit" value="Get Data" class="button primary radius hollow expanded" @click.prevent="getFormSubmitted">
              </div>
            </div>
            <div class="grid-x grid-margin-x align-center">
              <div class="medium-7 cell text-center">
                <ul class="list-group" v-if="show">
                  <li class="list-group-item" v-for="u in users">
                    {{ u.name }} - {{ u.email }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss" src="./App.scss"></style>
<style lang="scss" src="./ListGroup.scss"></style>
