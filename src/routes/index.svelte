<script lang="ts">
  import HelpButton from "$lib/components/HelpButton.svelte";
  import { InputGroup, InputGroupText } from "sveltestrap";


  import App from "$lib/components/App";
  import Group from "$lib/components/Group";
  import Input from "$lib/components/Input";
  import InputPage from "$lib/components/InputPage";
  import InputSection from "$lib/components/InputSection";

  /*
  const app = new App([]);


  //create the app here



  function submitForm() {

    //json obj to store data
    let data: { [key: string]: any } = {};

    //go through all the pages in the app
    app.pages.forEach(page => {

      //for each page, go through each section inside
      page.sections.forEach(section => {

        //for each section, go through each element inside (each can either be a group or an input)
        section.elements.forEach(element => {

          //if its a group, go through each input inside
          if (element instanceof Group) {
            (element as Group).inputs.forEach(input => {
              data[input.id] = input.value;//use css id (.id) as header, and .value as value
            });
          } else if (element instanceof Input) {
            data[(element as Input).id] = (element as Input).value;
          }

        });

      });
      
    });

    console.log(data);

  }
*/




</script>

<ion-header translucent="true">
  
  <ion-toolbar class="toolbar">

    <!-- left side of header - TODO: add ability to make this side customizable and update with input update -->
  <div slot="start" class="view-left">
    <div class="header-item">
      <span class="header-item-text-desc">Match #</span>
      <span class="header-item-text-val">1</span>
    </div>

    <div class="header-item">
      <span class="header-item-text-desc">Team #</span>
      <span class="header-item-text-val">1676</span>
    </div>

    <div class="header-item">
      <span class="header-item-text-val" style="color: red;">RED</span>
      -
      <span class="header-item-text-val">CLOSE</span>
    </div>

  </div>
  
  <!-- center of header -->
  <div class="pfp-container"> <img src="https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg" alt="profile" class="pfp-image"/> </div>
  

  <!-- right of header -->
  <div slot="end">
      <div class="header-item">
        <span class="header-item-text-val">Dylan Barrett</span>
      </div>
      <div class="header-item">
        <span class="header-item-text-val">uid-1808</span>
      </div>
      <div class="header-item" style="display:flex; gap: 0.5rem;">
            <span class="blink"></span>
          <span class="header-item-text-val" style="color: #2f9c4e;">Connected</span>

      </div>
  </div>
  
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true" class="ion-padding">
  <div class="main-content">
    
    
    
    <!-- <button on:click={submitForm}>Submit</button> -->



  </div>
</ion-content>


<style>

  * {
    font-family: sans-serif;
  }

  /* HEADER STYLES */

  .header-item {
    height: 1.5rem;
  }

  ion-toolbar > * {
    margin-top: 1rem;
  }

  ion-toolbar > *:first-child {
    margin-left: 1rem;
  }

  ion-toolbar > *:last-child {
    margin-right: 1rem;
  } 
  
  .header-item-text-desc {
    font-size: 1rem;
    font-weight: lighter;
  }

  .header-item-text-val {
    font-size: 1rem;
  }

  .pfp-image {
    width: 3.75rem;
    border-radius: 50%;
  }

  .pfp-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }

  @keyframes blink {
    100% { 
      transform: scale(2, 2); 
      opacity: 0;
    }
  }

  .blink {
    display: block;
    width: 15px;
    height: 15px;
    background-color: #2f9c4e;
    opacity: 0.7;
    border-radius: 50%;
    animation: blink 1s linear infinite;
  }

/* BODY STYLES */

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-bottom: 0.9rem;
    padding: 0.75rem;
    width: 100%;
    max-width: 50rem;
  }

  
</style>