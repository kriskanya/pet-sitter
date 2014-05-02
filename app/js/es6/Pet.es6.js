/* exported Pet */
/* global _, pets */

//in this file, you don't have to write 'function' in front of functions

class Pet{
  constructor(species, speciesImg, gender, age=3, name='Pet'){    //there are defaults on age and name
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.age = age * 1;
    this.name = name;

    this.health = _.random(10, 100);  //creates an array between 10 and 99 and then samples it
    this.full = _.random(5, 50);
    this.mood = _.random(1, 10);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);  //found the pet in that array; _(pets) is your array, you're chaining it
      //find takes a function;  is your name equal to the name that I just passed into this function?
  }

  eat(){
    this.full += _.random(1,3);  //fullness went up
    if(this.full >= 50){this.full = 50;}
  }

  sleep(){
    this.health += _.random(1,5);
    if(this.health >= 100){this.health = 100;}

    this.mood -= _.random(0,1);
    if(this.mood <= 0){this.mood = 0;}
  }

  play(){
    this.mood += _.random(0,1);
    if(this.mood >= 10){this.mood = 10;}

    this.full -= _.random(1,3);
    if(this.full <= 0){this.full = 0; this.die();}

    this.health -= _.random(1,5);
    if(this.health <= 0){this.health = 0; this.die();}
  }

  die(){
    $(`div[data-name=${this.name}]`).css('background-color','red');
    $(`div[data-name=${this.name}]`).find('.petImage').css('background-image','url(../media/poison.jpg)');
    // $('.pet').css('background-color', 'red');
    alert(`You had some fun, but ${this.name} has died.`);
  }

  update(){
    // $('#pets .pet .petHealth div').css('width','${this.full}');
    $(`div[data-name=${this.name}]`).find('.petHealth > div').css('width', `${this.health}%`);
    $(`div[data-name=${this.name}]`).find('.petHealth > span').text(`Health: ${this.health}`);

    $(`div[data-name=${this.name}]`).find('.full > div').css('width', `${this.full * 2}%`);
    $(`div[data-name=${this.name}]`).find('.full > span').text(`Fullness: ${this.full}`);

    $(`div[data-name=${this.name}]`).find('.mood > div').css('width', `${this.mood * 10}%`);
    $(`div[data-name=${this.name}]`).find('.mood > span').text(`Mood: ${this.mood}`);
  }

  render(){  //this is an instance method
    $('#pets').append(`<div data-name=${this.name} class = pet>
                          <div class='petImage' style='background-image:url("${this.speciesImg}")'>
                          </div>

                            <div class = 'petName'>
                            Name: ${this.name}
                            </div>
                            <div class = 'petSpecies'>
                            Species: ${this.species}
                            </div>
                            <div class = 'petGender'>
                            Gender: ${this.gender}
                            </div>
                            <div class = 'petAge'>
                            Age: ${this.age}
                            </div>

                            <div class = 'petHealth'>
                              <span>Health: ${this.health}</span>
                                <div style= 'background-color:red; height:10px; width:${this.health}%;'>
                                </div>
                            </div>
                            <div class = 'full'>
                              <span>Fullness: ${this.full}</span>
                                <div style= 'background-color:blue; height:10px; width:${this.full * 2}%;'>
                                </div>
                            </div>
                            <div class = 'mood'>
                              <span>Mood: ${this.mood}</span>
                                <div style= 'background-color:yellow; height:10px; width:${this.mood * 10}%;'>
                                </div>
                            </div>


                            <button type="button" class = 'eat'>Eat</button>
                            <button type="button" class = 'play'>Play</button>
                            <button type="button" class = 'sleep'>Sleep</button>

                        </div>`);
  }                           //this refers to whatever called the method
}

// style="background-color:#FFD700;height:200px;width:100px;float:left;">
