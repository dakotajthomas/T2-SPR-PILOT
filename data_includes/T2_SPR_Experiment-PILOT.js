var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false,
        as: ["Yes", "No"]
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var equalGroupSizes = false;

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "SPR_Introduction-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
                           "Form", {html: 'Was that sentence dashed? <p><input type="text" name="SentenceType"></p>'}],],
    ["practice", "DashedSentence", {s: "This is another practice sentence with a practice question following it."},
                           "Form", {html: 'What type of sentence was that? <p><input type="text" name="SentenceType"></p>'}],    
    ["practice", "DashedSentence", {s: "This is the last practice item before the experiment begins."},
    		  	   "Form", {html: 'Are you ready to begin? <p><input type="text" name="Begin"></p>'}],
    
    ["sep", "Separator", { }], 
    
  //Uncountable Substance//
    //rice//
    ["ms7-ns", "DashedSentence", {s: "I saw there was rice on sale at the store today."},
    		         "Form", {html: 'What was on sale? <p><input type="text" name="Answer"></p>'}],
    ["ms7-np", "DashedSentence", {s: "I was upset when I saw rices all over the floor."},
    		         "Form", {html: 'Was was all over the floor? <p><input type="text" name="Answer"></p>'}],
    ["ms7-i",  "DashedSentence", {s: "Jen said that a rice was found in the dishwasher."},
    		         "Form", {html: 'What was found in the dishwasher? <p><input type="text" name="Answer"></p>'}],
    ["ms7-ds", "DashedSentence", {s: "Forget what they said, we need the rice in order to make this dish."},
    		         "Form", {html: 'What do we need? <p><input type="text" name="Answer"></p>'}],
    ["ms7-dp", "DashedSentence", {s: "Tim wants the rices to be put on the table for everyone to share."},
    		         "Form", {html: 'What needs put on the table? <p><input type="text" name="Answer"></p>'}],
    //cinnamon//
    ["ms8-ns", "DashedSentence", {s: "I think that cinnamon is a great addition to any dessert."},
    		         "Form", {html: 'What is a great addition to dessert? <p><input type="text" name="Answer"></p>'}],
    ["ms8-np", "DashedSentence", {s: "What are your thoughts on adding cinnamons to the cookie recipe?"},
    		         "Form", {html: 'What are we adding to the cookies? <p><input type="text" name="Answer"></p>'}],
    ["ms8-i",  "DashedSentence", {s: "My sister said that a cinnamon is usually too much flavor for her."},
    		         "Form", {html: 'What is too much flavor for her? <p><input type="text" name="Answer"></p>'}],
    ["ms8-ds", "DashedSentence", {s: "Mother said that the cinnamon was the main ingredient."},
    		         "Form", {html: 'What was the main ingredient? <p><input type="text" name="Answer"></p>'}],
    ["ms8-dp", "DashedSentence", {s: "Did you see the cinnamons on the counter when you were in the kitchen?"},
    		         "Form", {html: 'What was on the counter? <p><input type="text" name="Answer"></p>'}],
    //ice//
    ["ms9-ns", "DashedSentence", {s: "Do we have ice for the party tonight?"},
    		         "Form", {html: 'What do we need for the party tonight? <p><input type="text" name="Answer"></p>'}],
    ["ms9-np", "DashedSentence", {s: "Tanner said ices are in the freezer if any wants some."},
    		         "Form", {html: 'What is in the freezer? <p><input type="text" name="Answer"></p>'}],
    ["ms9-i",  "DashedSentence", {s: "He said that his drink was warm and that he wanted an ice to put in it."},
    		         "Form", {html: 'What did he want to put in his drink? <p><input type="text" name="Answer"></p>'}],
    ["ms9-ds", "DashedSentence", {s: "Do you think that we can get the ice at another store?"},
    		         "Form", {html: 'What do we need to get from another store? <p><input type="text" name="Answer"></p>'}],
    ["ms9-dp", "DashedSentence", {s: "They have the ices that we like at the store down the street."},
    		         "Form", {html: 'What do they have at the store down the street? <p><input type="text" name="Answer"></p>'}],
  //Uncountable Object//
    //fruit//
    ["mo7-ns", "DashedSentence", {s: "I often prefer to have fruit as a dessert, rather than a side dish."},
    		         "Form", {html: 'What do I prefer to have as dessert? <p><input type="text" name="Answer"></p>'}],
    ["mo7-np", "DashedSentence", {s: "Tanner does not like to have fruits with his yogurt."},
    		         "Form", {html: 'What dose Tanner not like with his yogurt? <p><input type="text" name="Answer"></p>'}],
    ["mo7-i",  "DashedSentence", {s: "I think there is a fruit on the counter for you."},
    		         "Form", {html: 'What is on the counter for you? <p><input type="text" name="Answer"></p>'}],
    ["mo7-ds", "DashedSentence", {s: "Did you buy the fruit that we put in the shopping cart?"},
    		         "Form", {html: 'What did we put in the shopping cart? <p><input type="text" name="Answer"></p>'}],
    ["mo7-dp", "DashedSentence", {s: "Can you believe the fruits are so expensive."},
    		         "Form", {html: 'What are so expensive? <p><input type="text" name="Answer"></p>'}],
    //money//
    ["mo8-ns", "DashedSentence", {s: "I think there is money in the bank that is for you."},
    		         "Form", {html: 'What is in the bank for you? <p><input type="text" name="Answer"></p>'}],
    ["mo8-np", "DashedSentence", {s: "They said that monies are supposed to be saved for 80 years."},
    		         "Form", {html: 'What are supposed to be saved for 80 years? <p><input type="text" name="Answer"></p>'}],
    ["mo8-i",  "DashedSentence", {s: "Debbie is looking for a money that she dropped on the floor."},
    		         "Form", {html: 'What is Debbie looking for? <p><input type="text" name="Answer"></p>'}],
    ["mo8-ds", "DashedSentence", {s: "You are supposed to put the money in the bank for your college fund."},
    		         "Form", {html: 'what are you supposed to put in the bank? <p><input type="text" name="Answer"></p>'}],
    ["mo8-dp", "DashedSentence", {s: "Where do you consider to be a safe place for the monies that I gave you?"},
    		         "Form", {html: 'What did I give you? <p><input type="text" name="Answer"></p>'}],
    //clothing//
    ["mo9-ns", "DashedSentence", {s: "Do you ever wash your clothing after wearing it?"},
    		         "Form", {html: 'What do you wear? <p><input type="text" name="Answer"></p>'}],
    ["mo9-np", "DashedSentence", {s: "Tanner is looking for clothings that he left here the other day."},
    		         "Form", {html: 'What is Tanner looking for? <p><input type="text" name="Answer"></p>'}],
    ["mo9-i",  "DashedSentence", {s: "They said they had a clothing for the party, but I do not believe them."},
    		         "Form", {html: 'What did they say they had for the party? <p><input type="text" name="Answer"></p>'}],
    ["mo9-ds", "DashedSentence", {s: "I think the clothing is going to look really good on the runway."},
    		         "Form", {html: 'What is going to look good on the runway? <p><input type="text" name="Answer"></p>'}],
    ["mo9-dp", "DashedSentence", {s: "It is unbelievable that the clothings over there are not for me."},
    		         "Form", {html: 'What are not for me? <p><input type="text" name="Answer"></p>'}],
  //Countable [+prototypical]//
    //girl//
    ["c7-ns", "DashedSentence", {s: "I was upset when I noticed girl on the floor in the living room."},
    		        "Form", {html: 'What was on the floor in the living room? <p><input type="text" name="Answer"></p>'}],
    ["c7-np", "DashedSentence", {s: "We think that girls are a central part of this company."},
    		        "Form", {html: 'What is a central part of this company? <p><input type="text" name="Answer"></p>'}],
    ["c7-i",  "DashedSentence", {s: "I tried my best to offer some help to a girl, but she was not interested."},
    		        "Form", {html: 'Who was not interested in my help? <p><input type="text" name="Answer"></p>'}],
    ["c7-ds", "DashedSentence", {s: "Do you think the girl was looking for her mother?"},
    		        "Form", {html: 'Who was looking for her mother? <p><input type="text" name="Answer"></p>'}],
    ["c7-dp", "DashedSentence", {s: "Chad asked if the girls wanted anything to eat for lunch."},
    		        "Form", {html: 'Who did Chad ask about lunch? <p><input type="text" name="Answer"></p>'}],
    //cat//
    ["c8-ns", "DashedSentence", {s: "Do you think cat is something we should have in the house?"},
    		        "Form", {html: 'What is something we should not have in the house? <p><input type="text" name="Answer"></p>'}],
    ["c8-np", "DashedSentence", {s: "I think cats are great companions for people of all ages."},
    		        "Form", {html: 'What are great companions for people? <p><input type="text" name="Answer"></p>'}],
    ["c8-i",  "DashedSentence", {s: "What if we get a cat that likes to play in the house?"},
    		        "Form", {html: 'What likes to play in the house? <p><input type="text" name="Answer"></p>'}],
    ["c8-ds", "DashedSentence", {s: "I thought that the cat was supposed to be in the other room."},
    		        "Form", {html: 'What was supposed to be in the other room? <p><input type="text" name="Answer"></p>'}],
    ["c8-dp", "DashedSentence", {s: "Tanner said that he wants the cats from the animal shelter."},
    		        "Form", {html: 'What does Tanner want from the animal shelter? <p><input type="text" name="Answer"></p>'}],
    //computer//
    ["c9-ns", "DashedSentence", {s: "Would you be happy if you had computer to play with?"},
    		        "Form", {html: 'What would you be happy to play with? <p><input type="text" name="Answer"></p>'}],
    ["c9-np", "DashedSentence", {s: "The principal said that computers were very useful inside the classroom."},
    		        "Form", {html: 'What were very useful in the classroom? <p><input type="text" name="Answer"></p>'}],
    ["c9-i",  "DashedSentence", {s: "Do you like to use a computer when working from home?"},
    		        "Form", {html: 'What do you like to use when you work from home? <p><input type="text" name="Answer"></p>'}],
    ["c9-ds", "DashedSentence", {s: "Jeff does not like the computer that they have given him."},
    		        "Form", {html: 'What dose Jeff not like? <p><input type="text" name="Answer"></p>'}],
    ["c9-dp", "DashedSentence", {s: "He liked the computers that had been available on campus."},
    		        "Form", {html: 'What was available on campus? <p><input type="text" name="Answer"></p>'}],
  //Countable [-prototypical]//
    //explosion//
    ["cnp7-ns", "DashedSentence", {s: "Did you see explosion on the other side of the house?"},
    		          "Form", {html: 'What was on the other side of the door? <p><input type="text" name="Answer"></p>'}],
    ["cnp7-np", "DashedSentence", {s: "I think explosions should be contained to a small area of land?"},
    		          "Form", {html: 'What should be contained to a small area of land? <p><input type="text" name="Answer"></p>'}],
    ["cnp7-i",  "DashedSentence", {s: "I saw an explosion on the southern coast this morning."},
    		          "Form", {html: 'What was on the southern coast this morning? <p><input type="text" name="Answer"></p>'}],
    ["cnp7-ds", "DashedSentence", {s: "What if the explosion destroys our house?"},
    		          "Form", {html: 'What could destroy our house? <p><input type="text" name="Answer"></p>'}],
    ["cnp7-dp", "DashedSentence", {s: "I wish the war were over so the explosions would stop."},
    		          "Form", {html: 'What would stop if the war were over? <p><input type="text" name="Answer"></p>'}],
    //NOUN//
    ["cnp8-ns", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp8-np", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp8-i",  "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp8-ds", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp8-dp", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    //NOUN//
    ["cnp9-ns", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp9-np", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp9-i",  "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp9-ds", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
    ["cnp9-dp", "DashedSentence", {s: "SENTENCE"},
    		          "Form", {html: 'QUESTION <p><input type="text" name="Answer"></p>'}],
  //Flexible//
    //hamburger//
    ["f7-ns", "DashedSentence", {s: "Skye does not like hamburger that is undercooked."},
    		        "Form", {html: 'What is undercooked? <p><input type="text" name="Answer"></p>'}],
    ["f7-np", "DashedSentence", {s: "Jeff said that hamburgers are not very healthy."},
    		        "Form", {html: 'What does Jeff say is not very healthy? <p><input type="text" name="Answer"></p>'}],
    ["f7-i",  "DashedSentence", {s: "I think hamburger is a good option for this meal."},
    		        "Form", {html: 'What is a good option for this meal? <p><input type="text" name="Answer"></p>'}],
    ["f7-ds", "DashedSentence", {s: "Do you like the taste of the hamburger that we bought?"},
    		        "Form", {html: 'What did we buy? <p><input type="text" name="Answer"></p>'}],
    ["f7-dp", "DashedSentence", {s: "Debbie said the hamburgers were in the refrigerator."},
    		        "Form", {html: 'What did Debbie say was in the refrigerator? <p><input type="text" name="Answer"></p>'}],
    //glass//
    ["f8-ns", "DashedSentence", {s: "Did you put glass in the trash today?"},
    		        "Form", {html: 'What was put in the trash today? <p><input type="text" name="Answer"></p>'}],
    ["f8-np", "DashedSentence", {s: "She said glasses full of water should be left on the table."},
    		        "Form", {html: 'What should be left on the table? <p><input type="text" name="Answer"></p>'}],
    ["f8-i",  "DashedSentence", {s: "Have you seen a glass that I may have left in here?"},
    		        "Form", {html: 'What did I leave in here? <p><input type="text" name="Answer"></p>'}],
    ["f8-ds", "DashedSentence", {s: "she said the glass was full of water when she dropped it on the ground."},
    		        "Form", {html: 'What was full of water when she dropped it? <p><input type="text" name="Answer"></p>'}],
    ["f8-dp", "DashedSentence", {s: "Why are the glasses sitting on the table like this?"},
    		        "Form", {html: 'What is sitting on the table? <p><input type="text" name="Answer"></p>'}],
    //hair//
    ["f9-ns", "DashedSentence", {s: "Did you see hair all over the floor?"},
    		        "Form", {html: 'What was all over the floor? <p><input type="text" name="Answer"></p>'}],
    ["f9-np", "DashedSentence", {s: "There had been hairs on the clothes before I cleaned them."},
    		        "Form", {html: 'What was on the clothes? <p><input type="text" name="Answer"></p>'}],
    ["f9-i",  "DashedSentence", {s: "I heard that you found a hair in your food earlier."},
    		        "Form", {html: 'What did you find in your food? <p><input type="text" name="Answer"></p>'}],
    ["f9-ds", "DashedSentence", {s: "Do you think we could use the hair to make a nice wig?"},
    		        "Form", {html: 'What can we use to make a wig? <p><input type="text" name="Answer"></p>'}],
    ["f9-dp", "DashedSentence", {s: "If you see the hairs fall down, please let me know."},
    		        "Form", {html: 'What might fall down? <p><input type="text" name="Answer"></p>'}],
];