<template>
  <div id="tweets">
    <h1>Experience the view with Vue :)!</h1>
    <div class="user">
      <div class="user-information">
        <div class="image-container">
          <img src="https://celfonica.s3-us-west-1.amazonaws.com/Icons/sun.png" alt="profile picture">
        </div>
        <h3>{{ username }}</h3>
      </div>
      <div class="user-bio" v-if="bio">
        <em>Bio: </em> {{ bio }}
      </div>
    </div>
    <div class="tweets">
      <div class="tweet" v-for="tweet in tweets">
        <h3>{{ username }}</h3>
        <p>{{ tweet }}</p>
      </div>
    </div>
    <div class="settings">
      <h2>Settings</h2>
      <label for="username">Username</label>
      <input type="text" value="username" placeholder="Username" v-model="username" />
      <label for="bio">Bio</label>
      <textarea value="bio" placeholder="Bio" v-model="bio"></textarea>
      <label for="tweet">New Tweet</label>
      <div class="new-tweet">
        <input type="text" value="tweet" placeholder="New Tweet"
        v-model="newTweet" />
        <button v-on:click="tweets.push(newTweet)">Add Tweet</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tweets',
  data: () => ({
  username: 'CoderInTraining',
  newTweet: '',
  tweets: [
    'Started learning to code today. Wish me luck!',
    'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.',
    'Today I start learning Vue. I got this.'
  ],
  bio: 'Excited future front-end  engineer.'
}),
}

</script>

<style scoped>

  em {
    font-weight: bold;
  }

  .image-container {
    overflow: hidden;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1 {
    padding: .75rem;
    background: linear-gradient(45deg, #008aff, #00e36973);
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    font-stretch: condensed;
    line-height: 0.87;
    letter-spacing: 1.1px;
    color: #ffffff;
  }

  .user {
    padding: 1.5rem;
    font-size: .875rem;
  }

  .user-information {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .user-information .image-container {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-right: 2rem;
  }

  .user-information h3 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .tweet {
    background-color: #ffffff;
    padding: 1.5rem;
    margin-bottom: 2px;
    font-size: .875rem;
  }

  .tweet h3 {
    font-weight: bold;
  }

  .settings {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    font-size: .875rem;
  }

  .settings h2 {
    padding-bottom: 1.1875rem;
    font-weight: bold;
    line-height: 1.64;
  }

  .settings label {
    font-weight: bold;
    font-size: .75rem;
  }

  .settings input,
  .settings textarea,
  .settings button {
    padding: 1rem;
    border: solid 1px #7098f5;
  }

  .settings input::placeholder,
  .settings textarea::placeholder {
    color: #9b9b9b;
  }

  .settings input,
  .settings textarea {
    margin-bottom: .625rem;
  }

  .new-tweet {
    display: flex;
  }

  .new-tweet input {
    flex-grow: 1;
    margin-right: 2rem;
    margin-bottom: 0;
  }

  .new-tweet button {
    cursor: pointer;
    border-radius: 2px;
    background-color: #5919d973;
    color: #ffffff;
    transition: .25s;
  }

  .new-tweet button:hover {
    background-color: #5919d9;
  }


</style>
