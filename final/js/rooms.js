function goToFoyer() {
   // hide all rooms
   $(".room.shown").removeClass("shown")
   // show our selected room
   $(".foyer").addClass("shown")
   $("body").css({"background-image": "url('img/foyer.png')",
                   "background-repeat":"no-repeat",
                   "background-attachment": "fixed",
                   "background-size": "cover",
                   });
 }

function goToKitchen() {
  $(".room.shown").removeClass("shown")
  $(".kitchen").addClass("shown")
  $("body").css({"background-image": "url('img/kitchen.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
}



$("#goto-room2").click(function(){
	$(".room.shown").removeClass("shown");
	$(".foyer").toggleClass("shown");
  console.log("click");
  $("body").css({"background-image": "url('img/foyer.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
    $(".foyer-text").append("<img id='steve' src='steve.png'>");
          $(".foyer-text").append("<p id='second'>I’m surprised this place is even still standing! Most of the wood is severely damaged, and the constant creaking doesn’t quell my fears. Much of the original artwork and decor that wasn’t destroyed is still here. Locals must be too superstitious to steal from this place.</p>");
          $(".foyer-text").append("<button id='player-dialogue'>Continue</button>");
            //make new event listener
            $("#player-dialogue").click(function() {
              //remove dialogue and button
              $("#second").remove();
              $("#player-dialogue").remove();
              $("#steve").remove();
                //add instruction via alert
                alert("Hover over the doors to explore or use the arrow keys to navigate inbetween rooms. You can hear sizzling from the kitchen.");
            });
  });

$("#goto-room3").click(function(){
  $(".room.shown").removeClass("shown");
  $(".kitchen").toggleClass("shown");
  $("body").css({"background-image": "url('img/kitchen.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
                          $("#kitchen-ghost").click(function() {
                            console.log("hi");
                            //remove img button
                            $("#convo").remove();
                            //add conversation
                            $(".kitchen-text").append("<p id='player-1'>Excuse me, miss?</p>");
                            $(".kitchen-text").append("<button id='convo2'>Continue</button>");
                              $("#convo2").click(function() {
                                //remove dialogue
                                $("#player-1").remove();
                                $("#convo2").remove();
                                  //add dialogue
                                  $(".kitchen-text").append("<p id='ghost-1'>???: Oh, my heavens! You really shouldn’t be in here! I thought all the guests had already left.. </p>");
                                  $(".kitchen-text").append("<button id='convo3'>Continue</button>")
                                    $("#convo3").click(function() {
                                      //remove dialogue
                                      $("#convo3").remove();
                                      $("#ghost-1").remove();
                                      //add dialogue
                                        $(".kitchen-text").append("<p id='player-2'>Guests? What do you mean? (I figure it would be best to just move forward with this conversation, as if I wasn’t communicating with the dead right now.)</p>");
                                        $(".kitchen-text").append("<button id='convo4'>Continue</button>");
                                          $("#convo4").click(function() {
                                            //remove dialogue
                                            $("#convo4").remove();
                                            $("#player-2").remove();
                                            //add dialogue
                                            $(".kitchen-text").append("<p id='ghost-2'>???: Why, the guests who came for my lady’s Halloween party of course! Those footmen are going to hear about this!</p>");
                                            $(".kitchen-text").append("<button id='convo5'>Continue</button>");
                                              $("#convo5").click(function() {
                                                //remove dialogue
                                                $("#convo5").remove();
                                                $("#ghost-2").remove();
                                                //add dialogue
                                                $(".kitchen-text").append("<p id='player-3'>Miss-</p>");
                                                $(".kitchen-text").append("<button id='convo6'>Continue</button>");
                                                  $("#convo6").click(function() {
                                                    //remove dialogue
                                                    $("#convo6").remove();
                                                    $("#player-3").remove();
                                                    //add dialogue
                                                    $(".kitchen-text").append("<p id='ghost-3'>???: Oh please dear, call me Ruth!</p>");
                                                    $(".kitchen-text").append("<button id='convo7'>Continue</button>");
                                                      $("#convo7").click(function() {
                                                        //remove dialogue
                                                        $("#convo7").remove();
                                                        $("#ghost-3").remove();
                                                        //add dialogue
                                                        $(".kitchen-text").append("<p id='player-4'>Well, Ruth, you need to understand, there isn’t any party to clean up after.</p>");
                                                        $(".kitchen-text").append("<button id='convo8'>Continue</button>");
                                                          $("#convo8").click(function() {
                                                            //remove dialogue
                                                            $("#convo8").remove();
                                                            $("#player-4").remove();
                                                            //add dialogue
                                                            $(".kitchen-text").append("<p id='ghost-4'>Ruth: Please excuse my rudeness, but what do you mean, there isn’t a party to clean up after?</p>");
                                                            $(".kitchen-text").append("<button id='convo9'>Continue</button>");
                                                              $("#convo9").click(function() {
                                                                //remove dialogue
                                                                $("#convo9").remove();
                                                                $("#ghost-4").remove();
                                                                //add dialogue
                                                                $(".kitchen-text").append("<p id='player-5'>I’m sorry to be the one to tell you this Ruth, but…</p>");
                                                                $(".kitchen-text").append("<button id='convo10'>Continue</button>");
                                                                  $("#convo10").click(function() {
                                                                    //remove dialogue
                                                                    $("#convo10").remove();
                                                                    $("#player-5").remove();
                                                                    //add dialogue
                                                                    $(".kitchen-text").append("<p id='player-mono'>(This was Ruth Mayweather, Lady Moreburn’s maid. Locals in the community reported that she was a soft spoken woman, dedicated to her service. She was fairly young to be a lady’s maid. Official news reports said all they could find of her was her shoes, and a singed scrap of her apron.)</p>");
                                                                    $(".kitchen-text").append("<button id='convo11'>Continue</button>");
                                                                      $("#convo11").click(function() {
                                                                        //remove dialogue
                                                                        $("#convo11").remove();
                                                                        $("#player-mono").remove();
                                                                        //add dialogue
                                                                        $(".kitchen-text").append("<p id='ghost-5'>Ruth: ….</p>");
                                                                        $(".kitchen-text").append("<button id='convo12'>Continue</button>");
                                                                          $("#convo12").click(function() {
                                                                            //remove dialogue
                                                                            $("#convo12").remove();
                                                                            $("#ghost-5").remove();
                                                                            //add dialogue
                                                                            $(".kitchen-text").append("<p id='player-6'>I’m sorry, I know that must be a lot for you to process.</p>");
                                                                            $(".kitchen-text").append("<button id='convo13'>Continue</button>");
                                                                              $("#convo13").click(function() {
                                                                                //remove dialogue
                                                                                $("#convo13").remove();
                                                                                $("#player-6").remove();
                                                                                //add dialogue
                                                                                $(".kitchen-text").append("<p id='ghost-6'>Ruth: Oh really my dear, I’ve had more stressful experiences working for my lady, believe me! I’m surprised I hadn’t noticed it is all. Although perhaps I should have figured something was unusual when my lady never asked for an evening cup of tea…</p>");
                                                                                $(".kitchen-text").append("<button id='convo14'>Continue</button>");
                                                                                  $("#convo14").click(function() {
                                                                                    //remove dialogue
                                                                                    $("#convo14").remove();
                                                                                    $("#ghost-6").remove();
                                                                                    //add dialogue
                                                                                    $(".kitchen-text").append("<p id='player-7'>So, uh, do you feel that you can ‘move on from this mortal realm’?</p>");
                                                                                    $(".kitchen-text").append("<button id='convo15'>Continue</button>");
                                                                                      $("#convo15").click(function() {
                                                                                        //remove dialogue
                                                                                        $("#convo15").remove();
                                                                                        $("#player-7").remove();
                                                                                        //add dialogue
                                                                                        $(".kitchen-text").append("<p id='ghost-7'>Ruth: Not exactly dear. I lost something during the party that means a lot to me, a photograph. Could you find it and bring it to me?</p>");
                                                                                        $(".kitchen-text").append("<button id='convo16'>Continue</button>");
                                                                                          $("#convo16").click(function() {
                                                                                            //remove dialogue
                                                                                            $("#convo16").remove();
                                                                                            $("#ghost-7").remove();
                                                                                            //add dialogue
                                                                                            $(".foyer").append("<img id='img-torn' src='img/torn-pic-kitchen.png'>");
                                                                                            $(".kitchen-text").append("<p id='photo-1'>You recieved a torn photograph of a young man. The edges are slightly burnt.</p>");
                                                                                            $(".kitchen-text").append("<button id='convo17'>Continue</button>");
                                                                                              $("#convo17").click(function() {
                                                                                                //remove dialogue
                                                                                                $("#convo17").remove();
                                                                                                $("#img-torn").remove();
                                                                                                $("#photo-1").remove();
                                                                                                $("#convo17").removeClass("kitchen-dia");
                                                      });
                                                    });
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });

$("#goto-room4").click(function(){
  $(".room.shown").removeClass("shown");
  $(".garden").toggleClass("shown");
  $("body").css({"background-image": "url('img/garden.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
        $("#garden-ghost").click(function() {
          console.log("hi");
          //remove img button
          $("#convo").remove();
          //add conversation
          $(".garden-text").append("<p id='ghost-1'>You! Did you make this mess? Took me a week to plant these rose bushes! You rich lot are all the same…</p>");
          $(".garden-text").append("<button id='convo2'>Continue</button");
            $("#convo2").click(function() {
              $("#convo2").remove();
              $("#ghost-1").remove();
                //add dialogue
                $(".garden-text").append("<p id='player-1'>Uh, I don’t know what you mean. I’ve just arrived here.</p>");
                $(".garden-text").append("<button id='convo3'>Continue</button");
                  $("#convo3").click(function() {
                    $("#convo3").remove();
                    $("#player-1").remove();
                      //add dialogue
                      $(".garden-text").append("<p id='ghost-2'>Someone from her ladyship’s party came through here and ripped up all the English roses I planted! I’ll hear about this for sure. What are you still doing here? Leave me to my work!</p>");
                      $(".garden-text").append("<button id='convo4'>Continue</button");
                        $("#convo4").click(function() {
                          $("#convo4").remove();
                          $("#ghost-2").remove();
                            //add dialogue
                            $(".garden-text").append("<p id='player-2'>Please sir, I really need to talk to you.</p>");
                            $(".garden-text").append("<button id='convo5'>Continue</button");
                              $("#convo5").click(function() {
                                $("#convo5").remove();
                                $("#player-2").remove();
                                  //add dialogue
                                  $(".garden-text").append("<p id='ghost-3'>M’Name’s William.</p>");
                                  $(".garden-text").append("<button id='convo6'>Continue</button");
                                    $("#convo6").click(function() {
                                      $("#convo6").remove();
                                      $("#ghost-3").remove();
                                        //add dialogue
                                        $(".garden-text").append("<p id='player-3'>Then, William, please I need you to listen to me. There isn’t a household for you to tend anymore. You see, there was an accident, a big fire…</p>");
                                        $(".garden-text").append("<button id='convo7'>Continue</button");
                                          $("#convo7").click(function() {
                                            $("#convo7").remove();
                                            $("#player-3").remove();
                                              //add dialogue
                                              $(".garden-text").append("<p id='player-mono'>(This was William O’Brian, the groundskeeper. He apparently was a  gruff, hard-working man, from what the locals tell me. Many thought he had managed to escape the blaze since he was working outside at the time, so authorities were surprised to find his burned remains at the backdoor. Although, based on Ruth’s photograph, I’m not surprised why.)</p>");
                                              $(".garden-text").append("<button id='convo8'>Continue</button");
                                                $("#convo8").click(function() {
                                                  $("#convo8").remove();
                                                  $("#player-mono").remove();
                                                    //add dialogue
                                                    $(".garden-text").append("<p id='ghost-4'>...Did Ruth make it out? I know that she was about to fetch her ladyship’s tea..</p>");
                                                    $(".garden-text").append("<button id='convo9'>Continue</button");
                                                      $("#convo9").click(function() {
                                                        $("#convo9").remove();
                                                        $("#ghost-4").remove();
                                                          //add dialogue
                                                          $(".garden-text").append("<p id='player-4'>I’m sorry, she perished in the fire. But, I did speak to her earlier. I think she’s waiting for you, wherever the next place is. Do you think you’re ready to go?</p>");
                                                          $(".garden-text").append("<button id='convo10'>Continue</button");
                                                            $("#convo10").click(function() {
                                                              $("#convo10").remove();
                                                              $("#player-4").remove();
                                                                //add dialogue
                                                                $(".garden-text").append("<p id='ghost-5'>Not yet, I’ve lost something that’s important to me. Do you think you could find it?</p>");
                                                                $(".garden-text").append("<button id='convo11'>Continue</button");
                                                                  $("#convo11").click(function() {
                                                                    $("#convo11").remove();
                                                                    $("#ghost-5").remove();
                                                                      //add dialogue
                                                                      $("#content").append("<img id='garden-photo' src='img/torn-pic-garden.png'>");
                                                                      $(".garden-text").append("<p id='photo-1'>It’s a torn photograph of a smiling young woman. The edges are blackened from flame, but overall it is intact.</p>");
                                                                      $(".garden-text").append("<button id='convo12'>Continue</button");
                                                                      $("#convo12").click(function() {
                                                                        $("#convo12").remove();
                                                                        $("#garden-photo").remove();
                                                                        $("#photo-1").remove();
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
});

$("#goto-room5").click(function(){
  $(".room.shown").removeClass("shown");
  $(".ballroom").toggleClass("shown");
  $("body").css({"background-image": "url('img/ballroom.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
        //alert player of a item obtained
        alert("You notice a glare in your eye. You step aside and look in the direction, finding a key.");
          //add player dialogue
          $(".ballroom-text").append("<p id='suggestion'>Hmm, the label reads Bedroom key. I should hold on to this.</p>");
          $(".ballroom-text").append("<button id='key'>Continue</button>");
            //remove button and dialogue
            $("#key").click(function() {
              console.log("click");
            $("#key").remove();
            $("#suggestion").remove();
      });
    });

$("#goto-room6").click(function(){
  $(".room.shown").removeClass("shown");
  $(".stair").toggleClass("shown");
  $("body").css({"background-image": "url('img/stairs.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
    function itemSort(str) {
      len = str.length;
        mod = len % 7;

        //here are the conditionals that are assigned to the user. The correct answer is "Bedroom"
        if (mod == 0) {
          return "Looks like you didn't write anything. Stop wasting our time and go look!"
        }
        if (mod > 1) {
          return "Hmm.. That doesn't sound right. The item you are searching for is in <b>the kitchen</b>."
        }
        else if (mod == 1) {
            return "That's correct! You may enter the room with caution."
        }
      }

      var myButton = document.getElementById("#room-enter");
      myButton.addEventListener(function() {
      var name = document.getElementById("input").value;
      var item = itemSort(name);
      newText = "<p>" + item + "</p>";
      document.getElementById(".stair").innerHTML = newText;
      })
});

//set conditional



$("#goto-room7").click(function(){
  $(".room.shown").removeClass("shown");
  $(".bedroom").toggleClass("shown");
  $("body").css({"background-image": "url('img/bedroom.png')",
                  "background-repeat":"no-repeat",
                  "background-attachment": "fixed",
                  "background-size": "cover",
                  });
                        $("#bedroom-ghost").click(function() {
                          alert("You found a necklace! It’s a beautiful gold chain with a ruby cut into a heart shape. The locket opens to reveal a photo of a man, woman, and child. All three are smiling happily.");
                          $("#convo").remove();
                            //add conversation
                            $(".bedroom-text").append("<p id='ghost-1'>You really shouldn’t have come here. The audacity of you to come poking around my home, you should be ashamed!</p>");
                            $(".bedroom-text").append("<button id='convo2'>Continue</button");
                              $("#convo2").click(function() {
                                $("#convo2").remove();
                                $("#ghost-1").remove();
                                  //add dialogue
                                  $(".bedroom-text").append("<p id='player-1'>Really, I’ve seen some weird stuff tonight, but nothing as unbelievable as this. But, maybe you can answer something for me.  Things haven’t been adding up about this place. I think you have some explaining to do.</p>");
                                  $(".bedroom-text").append("<button id='convo3'>Continue</button");
                                    $("#convo3").click(function() {
                                      $("#convo3").remove();
                                      $("#player-1").remove();
                                        //add dialogue
                                        $(".bedroom-text").append("<p id='ghost-2'>Oh, so you’ve come to realize that things aren’t all that they seem? It wasn’t an easy decision. But after Mother and Father decided to remove me from their funding… Well, I had no choice really. They never approved of John. It was a shame what happened to Ruth and William, but I couldn’t let anyone get in my way. What wasn’t supposed to happen was my own demise.</p>");
                                        $(".bedroom-text").append("<button id='convo4'>Continue</button");
                                          $("#convo4").click(function() {
                                            $("#convo4").remove();
                                            $("#ghost-2").remove();
                                              //add dialogue
                                              $(".bedroom-text").append("<p id='player-2'>So you tried for insurance money? Was it really worth the innocent lives that perished? And the hurt you caused your family?</p>");
                                              $(".bedroom-text").append("<button id='convo5'>Continue</button");
                                                $("#convo5").click(function() {
                                                  $("#convo5").remove();
                                                  $("#player-2").remove();
                                                    //add dialogue
                                                    $(".bedroom-text").append("<p id='ghost-3'>Silence! I won’t have you speak to me in this way. You know far too much, and for that, you must die!</p>");
                                                    $(".bedroom-text").append("<button id='convo6'>Continue</button");
                                                      $("#convo6").click(function() {
                                                        $("#convo6").remove();
                                                        $("#ghost-3").remove();
                                                          //add dialogue
                                                          $(".bedroom-text").append("<p id='player-mono1'>(I could feel a deep rumbling through my feet. The whole room was shaking. Dusty knicknacks smashed onto the floor, and the bed quaked violently. Ghostly blue flames began growing in size and moving towards me. But, I couldn’t feel any pain, even as my body was completely engulfed.)</p>");
                                                          $(".bedroom-text").append("<button id='convo7'>Continue</button");
                                                            $("#convo7").click(function() {
                                                              $("#convo7").remove();
                                                              $("#player-mono1").remove();
                                                                //add dialogue
                                                                $(".bedroom-text").append("<p id='ghost-4'>Why won’t you die?! ..Those brats! A protection ward…</p>");
                                                                $(".bedroom-text").append("<button id='convo8'>Continue</button");
                                                                  $("#convo8").click(function() {
                                                                    $("#convo8").remove();
                                                                    $("#ghost-4").remove();
                                                                      //add dialogue
                                                                      $(".bedroom-text").append("<p id='player-4'>It’s over, Moreburn. You need to move on from this place.</p>");
                                                                      $(".bedroom-text").append("<button id='convo9'>Continue</button");
                                                                        $("#convo9").click(function() {
                                                                          $("#convo9").remove();
                                                                          $("#player-4").remove();
                                                                            //add dialogue
                                                                            $(".bedroom").append("<button id='ghost-necklace'><img id='necklace' src='img/necklace.png'></button>")
                                                                            $(".bedroom-text").append("<p id='player-5'>You don’t need to do this anymore, Nora. You had a family that loved you. You didn’t need to throw it away.</p>");
                                                                            $(".bedroom-text").append("<button id='convo10'>Continue</button");
                                                                              $("#convo10").click(function() {
                                                                                $("#convo10").remove();
                                                                                $("#player-5").remove();
                                                                                $("#necklace").remove();
                                                                                $("#ghost-necklace").remove();
                                                                                  //add dialogue
                                                                                  $(".bedroom-text").append("<p id='player-6'>I figured my eyes were playing tricks on me, but it almost looked like the portrait was crying. The blue flames started to die down, and the room stopped shaking.</p>");
                                                                                  $(".bedroom-text").append("<button id='convo11'>Continue</button");
                                                                                    $("#convo11").click(function() {
                                                                                      $("#convo11").remove();
                                                                                      $("#player-6").remove();
                                                                                        //add dialogue
                                                                                        $(".bedroom-text").append("<p id='ghost-5'>Y-you’re right.. Thank you, truly. It is time for me to leave this place, and let this building rest. It’s seen too many years of pain and grief.</p>");
                                                                                        $(".bedroom-text").append("<button id='convo12'>Continue</button");
                                                                                          $("#convo12").click(function() {
                                                                                            $("#convo12").remove();
                                                                                            $("#ghost-5").remove();
                                                                                              //add dialogue
                                                                                              $(".bedroom-text").append("<p id='player-mono3'>Bluish wisps began to rise up from the painting. I could hear a woman’s laughter as the ‘life’ from the painting faded away. It felt like the manor itself had let out a breath of relief.</p>");
                                                                                              $(".bedroom-text").append("<button id='convo13'>Continue</button");
                                                                                                $("#convo13").click(function() {
                                                                                                  $("#convo13").remove();
                                                                                                  $("#player-mono3").remove();
                                                                                                    //add dialogue
                                                                                                    $(".bedroom-text").append("<p id='player-mono4'>As I walked out of the manor, past the dead shrubs and rusted gate, I couldn’t help but feel sadness for Nora. She thought she was doing the best for her and her family, but it was ultimately her downfall. I’m not sure of many things, but one thing I am certain of is this: I’m not paid enough for this job.</p>");
                                                                                                    $(".bedroom-text").append("<button id='convo14'>Continue</button");
                                                                                                      $("#convo14").click(function() {
                                                                                                        $("#convo14").remove();
                                                                                                        $("#player-mono4").remove();
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
});
