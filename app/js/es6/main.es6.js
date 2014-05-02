/* global Pet, pets */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.play', play);
    $('#pets').on('click', '.sleep', sleep);
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');  //closest finds the closest 'pet' class element, pulls out the item with data('name')
    let pet = Pet.find(name);  //'class method'
    pet.eat();
    pet.update();  //updates the bar for his fullness
    console.log(pet);
  }

  function play(){
    let name = $(this).closest('.pet').data('name');  //closest finds the closest 'pet' class element, pulls out the item with data('name')
    let pet = Pet.find(name);  //'class method'
    pet.play();
    pet.update();  //updates the bar for his play
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');  //closest finds the closest 'pet' class element, pulls out the item with data('name')
    let pet = Pet.find(name);  //'class method'
    pet.sleep();
    pet.update();  //updates the bar for his sleep
  }

  function add(){
    let gender = $('#gender').val();
    let speciesImg = $('#species').val();  //this gets the value of the img src
    let species = $('#species option:selected').text();  //this gets the text
    let name = $('#name').val() || undefined;  //the only way the defaults work is if you add an undefined value for an empty string
    let age = $('#age').val() || undefined;

    let pet = new Pet(species, speciesImg, gender, age, name);  //need to pass in the information that will go into the constructor
    pets.push(pet);
    pet.render();
    console.log(pet);
  }



})();
