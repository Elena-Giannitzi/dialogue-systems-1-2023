import { MachineConfig, send, Action, assign, StatesConfig, EventObject, BaseActionObject } from "xstate";
import { createMachine } from 'xstate';

function say(text: string): Action<SDSContext, SDSEvent> {
  return send((_context: SDSContext) => ({ type: "SPEAK", value: text }));
}

interface Grammar {
  [index: string]: {
    intent: string;
    entities: {
      [index: string]: string;
    };
  };
}

const grammar: Grammar = {
    "how do I find the correct numbers?": {
        intent: "None",
        entities: { how: "number combination" },
    },
    "how do I find the numbers?": {
        intent: "None",
        entities: { how: "number combination" },
    },
    "how can I find the correct numbers?": {
        intent: "None",
        entities: { how: "number combination" },
    },
    "how can I find the numbers?": {
        intent: "None",
        entities: { how: "number combination" },
    },
    "how will I know the right room?": {
        intent: "None",
        entities: { how: "number combination" },
    },
    "How will I know which lock is the correct one?": {
        intent: "None",
        entities: { how: "number combination" },
    },
    "who are you?": {
        intent: "None",
        entities: { who: "identity" },
    },
    "what do you want?": {
        intent: "None",
        entities: { who: "do" },
    },
    "have you been watching me?": {
        intent: "None",
        entities: { who: "do" },
    },
    "were you watching me?": {
        intent: "None",
        entities: { who: "do" },
    },
    "why were you watching me?": {
        intent: "None",
        entities: { who: "do" },
    },
    "why am I here?": {
        intent: "None",
        entities: { who: "identity" },
    },
    "what do you want from me?": {
        intent: "None",
        entities: { who: "identity" },
    },
    "what is your name?": {
        intent: "None",
        entities: { who: "identity" },
    },
    "who is she?": {
        intent: "None",
        entities: { who: "identity" },
    },
    "what do you mean she?": {
        intent: "None",
        entities: { who: "identity" },
    },
  "yes": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "uh-huh": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "uh, huh": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "uh huh": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "precisely": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "that's right": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "maybe": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "uh, maybe": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "uh maybe": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "perfect": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "excellent": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "yeah whatever": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "whatever": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "yes, please": {
    intent: "None",
    entities: { confirm: "yes" },
  },
  "yep": {
    intent: "None",
    entities: { confirm: "yep" },
  },
  "of course": {
    intent: "None",
    entities: { confirm: "of course" },
  },
  "no": {
    intent: "None",
    entities: { reject: "no" },
  },
  "no thank you": {
    intent: "None",
    entities: { reject: "no" },
  },
  "no that's not right": {
    intent: "None",
    entities: { reject: "no that's not right" },
  },
  "no way": {
    intent: "None",
    entities: { reject: "no" },
  },
  "nah": {
    intent: "None",
    entities: { reject: "no" },
  },
  "nope": {
    intent: "None",
    entities: { reject: "no" },
  },
  "nah ah": {
    intent: "None",
    entities: { reject: "no" },
  },
  "nah-ah": {
    intent: "None",
    entities: { reject: "no" },
  },
  "nah, ah": {
    intent: "None",
    entities: { reject: "no" },
  },
  "stop": {
    intent: "None",
    entities: { shutDown: "stop" },
  },
  "shut down": {
    intent: "None",
    entities: { shutDown: "stop" },
  },
  "pause": {
    intent: "None",
    entities: { shutDown: "stop" },
  },
  "end": {
    intent: "None",
    entities: { shutDown: "stop" },
  },
  "stop it": {
    intent: "None",
    entities: { shutDown: "stop" },
  },
  "room #1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "i choose room #1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "#1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "room 1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "first room": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "the first room": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "i choose the first room": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "i'll go with room #1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "i will go with room #1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "i'll go with the first room": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "i will go with the first room": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "1": {
    intent: "None",
    entities: { first: "room 1" },
  },
  "room #2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "i choose room #2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "#2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "room 2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "second room": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "the second room": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "i choose the second room": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "i'll go with room #2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "i will go with room #2": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "i'll go with the second room": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "i will go with the second room": {
    intent: "None",
    entities: { second: "room 2" },
  },
  "room #3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "#3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "i choose room #3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "number 3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "room 3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "third room": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "the third room": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "i choose the third room": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "i'll go with room #3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "i will go with room #3": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "i'll go with the third room": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "i will go with the third room": {
    intent: "None",
    entities: { third: "room 3" },
  },
  "room #4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "#4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "i choose room #4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "number 4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "room 4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "fourth room": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "the fourth room": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "i choose the fourth room": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "i'll go with room #4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "i will go with room #4": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "i'll go with the fourth room": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  "i will go with the fourth room": {
    intent: "None",
    entities: { fourth: "room 4" },
  },
  //storage room
  "i want to start with the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "i would like to start with the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "i choose the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "i want to go with the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "i'll go with the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "i will go with the tv": {
    intent: "None",
    entities: { tv: "tv" },
  },
  "i want to start with the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "i would like to start with the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "i choose the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "i want to go with the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "i'll go with the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "i will go with the portrait": {
    intent: "None",
    entities: { portrait: "portrait" },
  },
  "i want to start with the family photo": {
    intent: "None",
    entities: { familyphoto: "familyphoto" },
  },
  "i would like to start with the family photo": {
    intent: "None",
    entities: { familyphoto: "family photo" },
  },
  "i choose the family photo": {
    intent: "None",
    entities: { familyphoto: "family photo" },
  },
  "i want to go with the family photo": {
    intent: "None",
    entities: { familyphoto: "family photo" },
  },
  "the family photo": {
    intent: "None",
    entities: { familyphoto: "family photo" },
  },
  "family photo": {
    intent: "None",
    entities: { familyphoto: "family photo" },
  },
  "i'll go with the family photo": {
    intent: "None",
    entities: { familyphoto: "familyphoto" },
  },
  "i will go with the family photo": {
    intent: "None",
    entities: { familyphoto: "family photo" },
  },
  "melissa": {
    intent: "None",
    entities: { keyword: "Melissa"}
  },
  "up": {
    intent: "None",
    entities: { up: "up"}
  },
  "go up": {
    intent: "None",
    entities: { up: "up"}
  },
  "down": {
    intent: "None",
    entities: { down: "down"}
  },
  "go down": {
    intent: "None",
    entities: { down: "down"}
  },
  "right": {
    intent: "None",
    entities: { right: "right"}
  },
  "go right": {
    intent: "None",
    entities: { right: "right"}
  },
  "left": {
    intent: "None",
    entities: { left: "left"}
  },
  "go left": {
    intent: "None",
    entities: { left: "left"}
  },
  "move on": {
    intent: "None",
    entities: { moveon: "move on"}
  },
  "go back": {
    intent: "None",
    entities: { moveon: "move on"}
  },
  //basement room
  "i want to start with the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "i would like to start with the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "i choose the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "i want to go with the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "i'll go with the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "i will go with the tool rack": {
    intent: "None",
    entities: { toolrack: "tool rack" },
  },
  "i want to start with the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "i would like to start with the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "i choose the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "i want to go with the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "i'll go with the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "i will go with the bottles": {
    intent: "None",
    entities: { bottles: "bottles" },
  },
  "i want to start with the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  "i would like to start with the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  "i choose the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  "i want to go with the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  "the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  "washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  "i'll go with the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine"},
  },
  "i will go with the washing machine": {
    intent: "None",
    entities: { washingmachine: "washing machine" },
  },
  //library room
  "i want to start with the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier" },
  },
  "i would like to start with the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier" },
  },
  "i choose the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier"  },
  },
  "i want to go with the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier" },
  },
  "the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier"  },
  },
  "chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier"  },
  },
  "i'll go with the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier" },
  },
  "i will go with the chandelier": {
    intent: "None",
    entities: { chandelier: "chandelier" },
  },
  "i want to start with the landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "i would like to start with the landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "i choose the landscape": {
    intent: "None",
    entities: { landscape: "landscape"},
  },
  "i want to go with the landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "the landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "i'll go with the landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "i will go with the landscape": {
    intent: "None",
    entities: { landscape: "landscape" },
  },
  "i want to start with the man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "i would like to start with the man's portraitr": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "i choose the man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "i want to go with the man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "the man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "i'll go with the man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  "i will go with the man's portrait": {
    intent: "None",
    entities: { manportrait: "man's portrait" },
  },
  //bedroom room
  "i want to start with the bed": {
    intent: "None",
    entities: { bed: "bed" },
  },
  "i would like to start with the bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "i choose the bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "i want to go with the bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "the bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "i'll go with the bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "i will go with the bed": {
    intent: "None",
    entities: { bed: "bed"  },
  },
  "i want to start with the closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "i would like to start with the closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "i choose the closet": {
    intent: "None",
    entities: { closet: "closet"},
  },
  "i want to go with the closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "the closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "i'll go with the closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "i will go with the closet": {
    intent: "None",
    entities: { closet: "closet" },
  },
  "i want to start with the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "i would like to start with the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "i choose the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "i want to go with the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "i'll go with the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "i will go with the computer": {
    intent: "None",
    entities: { computer: "computer" },
  },
  "the lion eats the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "lion eats the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "the lion with the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "lion with the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "the lion matches with the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "the lion hunts the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "the lion and the sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "lion and sheep": {
    intent: "None",
    entities: { lion: "lion and sheep" },
  },
  "the snake eats the frog": {
    intent: "None",
    entities: { snake: "snake and frog" },
  },
  "the snake with the frog": {
    intent: "None",
    entities: { snake: "snake and frog" },
  },
  "the snake matches with the frog": {
    intent: "None",
    entities: { snake: "snake and frog" },
  },
  "the snake hunts the frog": {
    intent: "None",
    entities: { snake: "snake and frog" },
  },
  "the snake and the frog": {
    intent: "None",
    entities: { snake: "snake and frog" },
  },
  "snake and frog": {
    intent: "None",
    entities: { snake: "snake and frog" },
  },
  "the spider eats the butterfly": {
    intent: "None",
    entities: { spider: "spider and butterfly" },
  },
  "the spider with the butterfly": {
    intent: "None",
    entities: { spider: "spider and butterfly" },
  },
  "the spider matches with the butterfly": {
    intent: "None",
    entities: { spider: "spider and butterfly" },
  },
  "the spider hunts the butterfly": {
    intent: "None",
    entities: { spider: "spider and butterfly" },
  },
  "the spider and the butterfly": {
    intent: "None",
    entities: { spider: "spider and butterfly" },
  },
  "spider and butterfly": {
    intent: "None",
    entities: { spider: "spider and butterfly" },
  },
  //riddle answers
  "the answer is tomorrow": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "tomorrow": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "the tomorrow": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "the next day": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "you are tomorrow": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "you're tomorrow": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "your name is tomorrow": {
    intent: "None",
    entities: { riddleTomorrow: "Tomorrow"}
  },
  "the answer is paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "the paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "you are paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "you're paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "you're the paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "you are the paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "your name is paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "your name is the paper": {
    intent: "None",
    entities: { riddlePaper: "paper"}
  },
  "the answer is pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "the answer is the pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "the pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "you are pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "you are the pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "you're the pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "you're pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "your name is pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "your name is the pen": {
    intent: "None",
    entities: { riddlePen: "pen"}
  },
  "the answer is time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "the answer is the time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "the time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "you are time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "you are the time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "you're the time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "you're time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "your name is time": {
    intent: "None",
    entities: { riddleTime: "time"}
  },
  "the answer is their breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  "their breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  "breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  "they had to hold their breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  "the breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  "the answer is breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  "the answer is the breath": {
    intent: "None",
    entities: { riddleBreath: "breath"}
  },
  //clock game
  "i choose the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  "i want the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  "i select the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  "i want to go with the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  "the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  "silver key": {
    intent: "None",
    entities: { silver: "silver key" },
  },
  "i'll go with the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  "i will go with the silver key": {
    intent: "None",
    entities: { silver: "silver key"  },
  },
  //unlock the door
  "i will go with the silver lock": {
    intent: "None",
    entities: { silverlock: "silver lock"  },
  },
  "the silver lock": {
    intent: "None",
    entities: { silverlock: "silver lock"  },
  },
  "silver lock": {
    intent: "None",
    entities: { silverlock: "silver lock"  },
  },
  "silver": {
    intent: "None",
    entities: { silverlock: "silver lock"  },
  },
  "i'll try the silver lock": {
    intent: "None",
    entities: { silverlock: "silver lock"  },
  },
  "i will try the silver lock": {
    intent: "None",
    entities: { silverlock: "silver lock"  },
  },
  "the number combination is 7162": {
    intent: "None",
    entities: { silverlockcombo: "7162"  },
  },
  "the combination is 7162": {
    intent: "None",
    entities: { silverlockcombo: "7162"  },
  },
  "the password is 7162": {
    intent: "None",
    entities: { silverlockcombo: "7162"  },
  },
  "7162": {
    intent: "None",
    entities: { silverlockcombo: "7162"  },
  },
  "7 1 6 2": {
    intent: "None",
    entities: { silverlockcombo: "7162"  },
  },
  //bedroom lock => 7162 grey lock
  //basement lock => 5817 blue lock
  "i will go with the blue lock": {
    intent: "None",
    entities: { bluelock: "blue lock"  },
  },
  "the blue lock": {
    intent: "None",
    entities: { bluelock: "blue lock"   },
  },
  "blue lock": {
    intent: "None",
    entities: { bluelock: "blue lock"   },
  },
  "blue": {
    intent: "None",
    entities: { bluelock: "blue lock"   },
  },
  "i'll try the blue lock": {
    intent: "None",
    entities: { bluelock: "blue lock"  },
  },
  "i will try the blue lock": {
    intent: "None",
    entities: { bluelock: "blue lock"  },
  },
  "the number combination is 5817": {
    intent: "None",
    entities: { bluelockcombo: "5817"  },
  },
  "the combination is 5817": {
    intent: "None",
    entities: { bluelockcombo: "5817"  },
  },
  "the password is 5817": {
    intent: "None",
    entities: { bluelockcombo: "5817"  },
  },
  "5817": {
    intent: "None",
    entities: { bluelockcombo: "5817"  },
  },
  "5 8 1 7": {
    intent: "None",
    entities: { bluelockcombo: "5817"  },
  },
  //library lock => 94715 green lock
  "i will go with the green lock": {
    intent: "None",
    entities: { greenlock: "green lock"  },
  },
  "the green lock": {
    intent: "None",
    entities: { greenlock: "green lock"  },
  },
  "green lock": {
    intent: "None",
    entities: { greenlock: "green lock"   },
  },
  "green": {
    intent: "None",
    entities: { greenlock: "green lock"   },
  },
  "i'll try the green lock": {
    intent: "None",
    entities: { greenlock: "green lock"  },
  },
  "i will try the green lock": {
    intent: "None",
    entities: { greenlock: "green lock" },
  },
  "the number combination is 94715": {
    intent: "None",
    entities: { greenlockcombo: "94715"  },
  },
  "the combination is 94715": {
    intent: "None",
    entities: { greenlockcombo: "94715"  },
  },
  "the password is 94715": {
    intent: "None",
    entities: { greenlockcombo: "94715"  },
  },
  "94715": {
    intent: "None",
    entities: { greenlockcombo: "94715"  },
  },
  "9 4 7 1 5": {
    intent: "None",
    entities: { greenlockcombo: "94715"  },
  },
  //storage lock => 3625 red lock
  "i will go with the red lock": {
    intent: "None",
    entities: { redlock: "red lock"  },
  },
  "the red lock": {
    intent: "None",
    entities: {redlock: "red lock"  },
  },
  "red lock": {
    intent: "None",
    entities: { redlock: "red lock"  },
  },
  "red": {
    intent: "None",
    entities: { redlock: "red lock"  },
  },
  "i'll try the red lock": {
    intent: "None",
    entities: { redlock: "red lock"  },
  },
  "i will try the red lock": {
    intent: "None",
    entities: { redlock: "red lock" },
  },
  "the number combination is 3625": {
    intent: "None",
    entities: { redlockcombo: "3625"  },
  },
  "the combination is 3625": {
    intent: "None",
    entities: { redlockcombo: "3625" },
  },
  "the password is 3625": {
    intent: "None",
    entities: { redlockcombo: "3625" },
  },
  "3625": {
    intent: "None",
    entities: { redlockcombo: "3625" },
  },
  "3 6 2 5": {
    intent: "None",
    entities: { redlockcombo: "3625" },
  },
  "unlock the door": {
    intent: "None",
    entities: { unlock: "unlock" },
  },
  "i have the passwords": {
    intent: "None",
    entities: { unlock: "unlock" },
  },
  "i know the passwords": {
    intent: "None",
    entities: { unlock: "unlock" },
  },
  "unlock door": {
    intent: "None",
    entities: { unlock: "unlock" },
  },
  "i have the codes": {
    intent: "None",
    entities: { unlock: "unlock" },
  },
  "i know the codes": {
    intent: "None",
    entities: { unlock: "unlock" },
  },
  "can you remind me of the codes": {
    intent: "None",
    entities: { remindme: "remind" },
  },
  "can you remind me the codes": {
    intent: "None",
    entities: { remindme: "remind" },
  },
  "remind me the codes": {
    intent: "None",
    entities: { remindme: "remind" },
  },
  "remind me": {
    intent: "None",
    entities: { remindme: "remind" },
  },
  "remind": {
    intent: "None",
    entities: { remindme: "remind" },
  },
  "reminder": {
    intent: "None",
    entities: { remindme: "remind" },
  },
};

// asking for user's name not needed

const getHelp = (context: SDSContext) => {
  let u = context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "") === 'sos' || context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "") === 'help' || context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "") === 'help me' || context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "") === 'help me please' || context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "") === 'i need help'
  return u;
};

const getIntent = (context: SDSContext) => {
  let u = context.nluResult.prediction.topIntent.toLowerCase().replace(/\.$/g, "");
  return u;
};

const getEntity = (context: SDSContext, entity: string) => {
  // lowercase the utterance and remove tailing "."
  let u = context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "");
  if (u in grammar) {
    if (entity in grammar[u].entities) {
      return grammar[u].entities[entity];}
  }
  return false;
};

const promptFunction = (pr1: any,pr2:any,pr3:any): StatesConfig<SDSContext, any, EventObject, BaseActionObject> => ({
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: pr1
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: pr2
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: pr3
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: "I was really hoping we could get along. I'm sorry! I'm so so sorry! Now it will come out and there is nothing I can do."
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
});

function getImage(pictureBackground: any) {
  const elem = document.getElementById("image");
  if (elem) {
    const img = elem.innerHTML = `<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-image: url('/img/${pictureBackground}.jpg'); background-size: cover; width: 100%; height: 100%;">
    <img src="/img/${pictureBackground}.jpg" style="opacity: 0;"/>
  </div>`;
    return img;
  }
};

export const dmMachine: MachineConfig<SDSContext, any, SDSEvent> = {
  initial: 'idle',
    on: {
    },
    states: {
        idle: {
            on: {
                CLICK: 'init'
            }
        },
        init: {
          id: "init",
            on: {
                TTS_READY: 'Assistant',
                CLICK: 'Assistant'
          }
      },
    //history state
    //help state here beig accessed by all other states. 
    helpIntro: {
      id:"helpIntro",
      entry: say('We haven\'t even started yet! I can\'t help now! Ask later!'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory1: {
      id:"backstory1",
      entry: say('I told you, my name is Evelyn! Did you know I\'ve been here for so long! I thing I met 100 people so far. Nobody wanted to be my friend though. You can be my friend!'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory2: {
      id:"backstory2",
      entry: say('You know the locks are colored. Try to focus on the color of the walls in each room or maybe the lighting. That will tell you what lock to pick.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory3: {
      id:"backstory3",
      entry: say('She is scary sometimes. She made this room so you can\'t get out! You can call her name to make her go away.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory4: {
      id:"backstory4",
      entry: say('Her name is Melissa'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory5: {
      id:"backstory5",
      entry: say('I try not to be too scared. But she\'s a liar you know. She told me the games would be fun. She does that a lot.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory6: {
      id:"backstory6",
      entry: say('Mom always said Melissa was the oldest by 5 minutes.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory7: {
      id:"backstory7",
      entry: say('One day Melissa pushed me in the lake near the house. I don\'t know how to swim. Mom wasn\'t happy.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory8: {
      id:"backstory8",
      entry: say('I\'m scared of the dark. Are you? Mom says it\'s normal for kids my age.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory9: {
      id:"backstory9",
      entry: say('Do you like games? I like to play the games with you. You are not mean to me.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory10: {
      id:"backstory10",
      entry: say('You know, there is lake near by. She loves the lake'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory11: {
      id:"backstory11",
      entry: say('She loves to win games. She hates when other people win. That\'s why she built these games. To make sure no one else will win. But I will help you. You are my friend.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory12: {
      id:"backstory12",
      entry: say('Did you know the numbers each room gives you have to be in the order of the objects number? For example tv gives you the number 36 and it\'s object number 1. So 36 will be the first number in the password.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory13: {
      id:"backstory13",
      entry: say('She loves to win games. She hates when other people win. That\'s why she built these games. To make sure no one else will win. But I will help you. You are my friend.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory14: {
      id:"backstory14",
      entry: say('I love playing with dolls. One day mom got me a new doll from her job. Melissa never liked dolls. She destroyed mine. I cried a lot that day. But I\'m okay now!'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory15: {
      id:"backstory15",
      entry: say('Melissa scared me the other day. She loves to do that.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory16: {
      id:"backstory16",
      entry: say('My mom said that in 2 years I will go to school. But how long is 2 years? I\'ve been waiting forever. Maybe, mommy was wrong.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory17: {
      id:"backstory17",
      entry: say('Melissa says there is a prize at the end. I think she\'s lying though.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory18: {
      id:"backstory18",
      entry: say('Is it nice outside where you live? I would like to go outside too.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory19: {
      id:"backstory19",
      entry: say('Did you know there is a secret to the door? The first lock you will have to open is the silver one'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory20: {
      id:"backstory20",
      entry: say('I love playing with you. It\'s like the stories mom would read me. I want to help more. The green lock has 5 numbers instead of 4. It ends with 715.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory21: {
      id:"backstory21",
      entry: say('The answer to one of the riddles is the word "time". I hope that helps.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    backstory22: {
      id:"backstory22",
      entry: say('Did you know that some people can hold their breath for a long time? I can\'t.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    repeatriddleTime: {
      id:"repeatriddleTime",
      entry: say(`Of course. Listen carefully. When I'm visible to you, you can never see me, but when I'm invisible you wish you could. 
      I am plenty enough if you are a person who is patient, but all the more scarce if you're someone who is hasty. 
      I am greater than anything else in the world, but still, I am within the control of you who value my existence. Who am I?`),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    repeatriddleTomorrow: {
      id:"repeatriddleTomorrow",
      entry: say(`Of course. Listen carefully. Often talked of but never seen, I'm ever coming but never been. Daily looked for but never here, 
      I'm still approaching and coming near. Thousands wait upon its visit, but somehow they never reach it. They expect me 
      to appear but alas they'll never find me here. What am I?`),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    repeatriddlePaper: {
      id:"repeatriddlePaper",
      entry: say(`Of course. Listen carefully. I have been the beginning of ideas for all time, yet I am just one simple small object, 
      the things that you can use me for can be frustrating and also I can be pretty. 
      I have some of the most valuable thing in the world on me, yet almost everyone owns me. With me you can make anything. What am I?`),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    repeatriddlePen: {
      id:"repeatriddlePen",
      entry: say(`Of course. Listen carefully. Silently I drink and dive in fluids dark as night.
      I beat the mighty warrior but never in fight.
      The black blood in my veins your thirst for knowledge slakes.
      My spittle is more venomous than that of poison snakes. What am I?`),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    repeatriddleBreath: {
      id:"repeatriddleBreath",
      entry: say(`Listen carefully. There was a competition where the contestants had to hold something. 
      At the end of the event, the winner was a person who had no hands or feet. What was it that the contestants had to hold?`),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    monster: {
      id: "monster",
      entry: send((context) => ({
        type: "SPEAK",
        value: `Game Over! You can start again by clicking the button! Thank you for playing! ${getImage("monster")}`
      })),
      on: { ENDSPEECH: "#init"}, 
    },
    ShutDown: {
        id: "ShutDown",
        entry: say("Shutting down!"),
        on: { ENDSPEECH: "#init" },
    },
    instructions: {
      id:"instructions",
      entry: say(`Hello again! In order to escape of the building and win the game, you will need to go through 4 different rooms. 
      Each room includes 3 riddles. If you manage to solve them you'll get a series of numbers which you will leter use 
      in order to unlock the main door. Be careful! Some items are traps and will triger the monster inside the room. 
      Evelyn can guide you and help you through the game. You can ask questions to unlock sides of her backstory. 
      Note that you can ask to repeat the riddles but no further help will be provided once you pick an object. 
      You can go back to the main corridor at any point. However if you haven't solved the riddle the code won't be saved. Have fun and I wish you the best of luck!`),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    Assistant: {
      initial: 'introduction',
      states: {
          hist: {
              type: 'history',
              history: 'deep'
          },
          introduction: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Hello and welcome to No way Out! In this game every choice you make matters and will either help or subotage your progress. Be careful, even the tiniest mistake can be deadly. More instructions will be provided during each step of the game. For now, all you have to remember is to make smart choices and the fact that you can say "help" in times of need. Note that the help you will be getting also depends on your choices. ${getImage("LS1")}`
            })),
            on: { ENDSPEECH: "GiveInfo"},
        },
        GiveInfo: { 
          id:"GiveInfo",
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "#NoInfo",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#giveInstructions",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: ".nomatch",
              },
            ],
            TIMEOUT: ".noinput",
          },
          states:{
            noinput:{
              id: "noinput",
              entry: [say(
                "I'm afraid I don't hear you."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `Would you like to hear more information on how to play?`
              })),
              on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt" },
            },
            },
        },
        giveInstructions: {
          id: "giveInstructions",
          entry: send((context) => ({
            type: "SPEAK",
            value: `In order to escape of the building and win the game, you will need to go through 4 different rooms. 
            Each room includes 3 riddles. If you manage to solve them you'll get a series of numbers which you will leter use 
            in order to unlock the main door. Be careful! Some items are traps and will triger the monster inside the room. 
            Evelyn can guide you and help you through the game. You can ask questions to unlock sides of her backstory. 
            Note that you can ask to repeat the riddles but no further help will be provided once you pick an object. 
            You can go back to the main corridor at any point. However if you haven't solved the riddle the code won't be saved. Have fun and I wish you the best of luck!${getImage("Note")}`
          })),
          on: { ENDSPEECH: "Phase0"},
      },
      NoInfo: {
        id: "NoInfo",
        entry: send((context) => ({
          type: "SPEAK",
          value: `Let the game begin then. I wish you the best of luck!`
        })),
        on: { ENDSPEECH: "Phase0"},
    },
      Phase0: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `Wake up! Hey wake up! Finally you're awake. I've been waiting for hours! I thought you were dead! But then I said "Evelyn, 
          dead people don't snore!". You have to get up! ${getImage("PlayerRoom")}`
        })),
        on: { ENDSPEECH: "enterGame"},
      },
        enterGame: {      //1st og state => ask for name
          entry: [assign({ count: 1 })],  //reseting context.count back to 1 => prompt1. Otherwise a semantic errors appears. State 1 = prompt 1, state 2 = prompt 2, state 3 = prompt 3, state 4 = can't no longer answer and system shuts down.Also, you're not able to replay. If you try it starts from prompt 4.
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "#helpIntro",
                cond: (context) => !!getHelp(context),
                actions: assign({
                  helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
                }),
              },
              {
                target: "phase01",
                cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, ""),
                actions: assign({
                  name: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
                }),
              },
              {
                target: ".nomatch",
              },
            ],
            TIMEOUT: ".prompt",
          },
          states:{
          noinput:{
            id: "noinput",
            entry: [say(
              "I didn't hear you speaking."
            )],
            on: { ENDSPEECH: "prompt" },
          },
          prompt: {
            initial: "choice",
            states: {
              choice: {
                always: [{
                  target: "prompt2",
                  cond: (context) => context.count === 2
                  },
                  {target: "prompt3",
                  cond: (context) => context.count === 3
                  },
                  {
                  target: "prompt4",
                  cond: (context) => context.count > 3
                  },
                  "prompt1",
              ]
              },
            prompt1: {
              entry: [assign({ count: 2 })],
                    initial: "prompt",
                    states: {
                      prompt: {
                      entry: send((context) => ({
                        type: "SPEAK",
                        value: `That's it! Wow! You're taller than you look. I want to be that tall too. What's your name? My name is Evelyn.`
                      })),
                      on: { ENDSPEECH: "ask" },
                },
                ask: {
                  entry: send("LISTEN"),
                },
              },
            },
            prompt2: {
              entry: [assign({ count: 3 })],
                    initial: "prompt",
                    states: {
                      prompt: {
                      entry: send((context) => ({
                        type: "SPEAK",
                        value: "Hello? Didn't you hear me? What's your name? I'm Evelyn!"
                      })),
                      on: { ENDSPEECH: "ask" },
                },
                ask: {
                  entry: send("LISTEN"),
                },
              },
            },
            prompt3: {
              entry: [assign({ count: 4 })],
                    initial: "prompt",
                    states: {
                      prompt: {
                      entry: send((context) => ({
                        type: "SPEAK",
                        value: "Why are you just staring at me? Mom says it's not nice to stare or to not answer either. Won't you tell me your name?"
                      })),
                      on: { ENDSPEECH: "ask" },
                },
                ask: {
                  entry: send("LISTEN"),
                },
              },
            },
            prompt4: {
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: "You're mean. I don't want to be your friend now."
                  })),
                  on: { ENDSPEECH: "#noname" },
                },
              },
            },
        },},
          nomatch: {
            id: "nomatch",
            entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
            on: { ENDSPEECH: "prompt" },
          },
          },},
        noname: {
          id: "noname",
            entry: [
              say('Fine, Don\'t tell me your name then. I will call you "Long Legs", because you\'re so tall.'),
              assign((context) => ({name: `Long Legs`}))
            ],
            on: { ENDSPEECH: "Phase1" },
        },
        phase01: {
          id: "Phase1",
          entry: send((context) => ({
            type: "SPEAK",
            value: `Nice to meet you ${context.name}. You can be my friend now. And friends always help each other. That's what mom says at least!`
          })),
          on: { ENDSPEECH: "Phase1" },
      },
      Phase1: {    
        entry: [assign({ count: 1 })], 
        initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            {
              target: "StorageRoom",
              cond: (context) => !!getEntity(context, "first"),
          },
          {
            target: "LibraryRoom",
            cond: (context) => !!getEntity(context, "second"),
          },
          {
            target: "BasementRoom",
            cond: (context) => !!getEntity(context, "third"),
          },
          {
            target: "BedroomRoom",
            cond: (context) => !!getEntity(context, "fourth"),
          },
          {
            target: "#instructions",
            cond: (context) => !!getHelp(context),
            actions: assign({
              helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
            }),
          },
          {
            target: "#backstory1",
            cond: (context) => getIntent(context) === "backstory",
          },
            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name},look! These are the doors! The middle one is locked you need the password to open it. You need 4 different passwords in fact! Each of the 4 door hides a room and each room has the passwords. Pick a room! ${getImage("roomCorridor")} `
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: "You can start with room number 1 or 2 or 3 or room 4. It doesn't matter really! Go on! Pick a room!"
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: "If you keep on staring at me, she will know you don't want to play her game! That's not good. Please, please pick a room!"
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Oh no! You made a teribble choice! She knows! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
          on: { ENDSPEECH: "prompt" },
        },
        },},
        questionPhase1: {
            id: "questionPhase1",
            entry: send((context) => ({
                type: "SPEAK",
                value: `Don't worry about that yet. I will help however I can to get us out of here. Each door hides a room. In each room you will have to solve some riddles in order to get the codes. Pay attention to the colors of each room. That will tell you the color of the lock. Good luck.`
            })),
            on: { ENDSPEECH: "#init"}, 
        },
        
        StorageRoom: {
          entry: [assign({ count: 1 })], 
          initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            {
              target: "Moveon",
              cond: (context) => !!getEntity(context, "moveon"),
          },
            {
              target: "TV",
              cond: (context) => !!getEntity(context, "tv"),
          },
          {
            target: "Portrait",
            cond: (context) => !!getEntity(context, "portrait"),
          },
          {
            target: "FamilyPhoto",
            cond: (context) => !!getEntity(context, "familyphoto"),
          },
          {
            target: "remindRed",
            cond: (context) => !!getEntity(context, "remindme"),
          },
          {
            target: "#instructions",
            cond: (context) => !!getHelp(context),
            actions: assign({
              helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
            }),
          },
          {
            target: "#backstory3",
            cond: (context) => getIntent(context) === "backstory",
          },

            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `You picked the storage room. You have to solve three riddles here. You can choose between the TV, the portrait or the family photo. Be careful ${context.name}, one of them is a trap. What do you choose first? Please note that if you already played this room say "Move on". ${getImage("Storage")}`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `You have to pick an object! Quick ${context.name}!`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: "If you keep on staring at me, she will know you don't want to play her game! That's not good. Please, please pick an object!"
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Oh no! You made a teribble choice! She knows! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
          on: { ENDSPEECH: "prompt" },
        },
        },
        },

        TV: {
          //maze game here with images
          entry: [assign({ count: 1 })], 
          initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            {
              target: "Moveon",
              cond: (context) => !!getEntity(context, "moveon"),
          },
            {
              target: "level1",
              cond: (context) => !!getEntity(context, "up"),
          },
          {
            target: "#instructions",
            cond: (context) => !!getHelp(context),
            actions: assign({
              helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
            }),
          },
          {
            target: "#backstory13",
            cond: (context) => getIntent(context) === "backstory",
        },
            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `I love the Tv riddle, you know! It's one of my favourite games. All you havr to do is give directions so that the little alien can escape. Go on try saying "up". Be careful you only have 3 trys to pick the right direction.${getImage("maze")}`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, you can give one of the 4 directions: "up", "down", "left" and "right". Go on give it a try! You only have 2 trys left.`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, this is your last try! Please don't waste it. Say something! She will come, if you don't!`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Oh no! You made a teribble choice! She's coming! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("That is not correct. Focus!"),
          on: { ENDSPEECH: "prompt" },
        },
        },
        },
        level1: {
          //maze game here with images
          entry: [assign({ count: 1 })], 
          initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            {
              target: "Moveon",
              cond: (context) => !!getEntity(context, "moveon"),
          },
            {
              target: "level2Left",
              cond: (context) => !!getEntity(context, "left"),
          },
          {
            target: "level2Right",
            cond: (context) => !!getEntity(context, "right"),
          },
          {
            target: "#backstory4",
            cond: (context) => getIntent(context) === "backstory",
          },
            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `You made it. It moved! Where to go next?. Remember you only have 3 trys to pick the right direction.${getImage("mazeUP")}`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, you can give one of the 4 directions: "up", "down", "left" and "right". Go on give it a try! You only have 2 trys left.`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, this is your last try! Please don't waste it. Say something! She will come, if you don't!`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Oh no! You made a teribble choice! She's coming! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("That is not correct. Focus!"),
          on: { ENDSPEECH: "prompt" },
        },
        },
        },
      
      level2Left: {
        entry: [assign({ count: 1 })], 
          initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            {
              target: "Moveon",
              cond: (context) => !!getEntity(context, "moveon"),
          },
            {
              target: "level3Left",
              cond: (context) => !!getEntity(context, "down"),
          },
          {
            target: "#backstory5",
            cond: (context) => getIntent(context) === "backstory",
          },
            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `Way to go! What's our next move? ${getImage("mazeLEFT")}`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, you can give one of the 4 directions: "up", "down", "left" and "right". Go on give it a try! You only have 2 trys left.`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, this is your last try! Please don't waste it. Say something! She will come, if you don't!`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Oh no! You made a teribble choice! She's coming! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("That is not correct. Focus!"),
          on: { ENDSPEECH: "prompt" },
        },
        },
      },
      level3Left: {
        entry: [assign({ count: 1 })], 
          initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            {
              target: "Moveon",
              cond: (context) => !!getEntity(context, "moveon"),
          },
            {
              target: "levelFinishLeft",
              cond: (context) => !!getEntity(context, "left"),
          },
          {
            target: "#backstory6",
            cond: (context) => getIntent(context) === "backstory",
          },
            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `That's it! Keep going. Only 1 more move left! ${getImage("mazeLEFTDOWN")}`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, you can give one of the 4 directions: "up", "down", "left" and "right". Go on give it a try! You only have 2 trys left.`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, this is your last try! Please don't waste it. Say something! She will come, if you don't!`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Oh no! You made a teribble choice! She's coming! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("That is not correct. Focus!"),
          on: { ENDSPEECH: "prompt" },
        },
        },
      },
      levelFinishLeft: {
        id: "levelFinishLeft",
        entry: send((context) => ({
          type: "SPEAK",
          value: `You made it ${context.name}! You really made it. The code is 36. You can move on now ${getImage("mazeLEFTLEFT")}`
        })),
        on: { ENDSPEECH: "StorageRoom"},
    },

    //CHOICE TO GO RIGHT ON THE MAZE
    level2Right: {
      entry: [assign({ count: 1 })], 
        initial: "prompt", 
      on: {
        RECOGNISED: [
          {
            target: "#ShutDown",
            cond: (context) => !!getEntity(context, "shutDown"),
          },
          {
            target: "Moveon",
            cond: (context) => !!getEntity(context, "moveon"),
        },
          {
            target: "level3Right",
            cond: (context) => !!getEntity(context, "down"),
        },
        {
          target: "#backstory7",
          cond: (context) => getIntent(context) === "backstory",
        },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I didn't hear you speaking."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        initial: "choice",
        states: {
          choice: {
            always: [{
              target: "prompt2",
              cond: (context) => context.count === 2
              },
              {target: "prompt3",
              cond: (context) => context.count === 3
              },
              {
              target: "prompt4",
              cond: (context) => context.count > 3
              },
              "prompt1",
          ]
          },
        prompt1: {
          entry: [assign({ count: 2 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `Way to go! What's our next move? ${getImage("mazeRIGHT")}`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt2: {
          entry: [assign({ count: 3 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `${context.name}, you can give one of the 4 directions: "up", "down", "left" and "right". Go on give it a try! You only have 2 trys left.`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt3: {
          entry: [assign({ count: 4 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `${context.name}, this is your last try! Please don't waste it. Say something! She will come, if you don't!`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt4: {
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `Oh no! You made a teribble choice! She's coming! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
              })),
              on: { ENDSPEECH: "#monster" },
            },
          },
        },
    },},
      nomatch: {
        id: "nomatch",
        entry: say("That is not correct. Focus!"),
        on: { ENDSPEECH: "prompt" },
      },
      },
    },
    level3Right: {
      entry: [assign({ count: 1 })], 
        initial: "prompt", 
      on: {
        RECOGNISED: [
          {
            target: "#ShutDown",
            cond: (context) => !!getEntity(context, "shutDown"),
          },
          {
            target: "levelFinishRight",
            cond: (context) => !!getEntity(context, "right"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
      {
        target: "#backstory8",
        cond: (context) => getIntent(context) === "backstory",
      },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I didn't hear you speaking."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        initial: "choice",
        states: {
          choice: {
            always: [{
              target: "prompt2",
              cond: (context) => context.count === 2
              },
              {target: "prompt3",
              cond: (context) => context.count === 3
              },
              {
              target: "prompt4",
              cond: (context) => context.count > 3
              },
              "prompt1",
          ]
          },
        prompt1: {
          entry: [assign({ count: 2 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `That's it! Keep going. Only 1 more move left! ${getImage("mazeRIGHTDOWN")}`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt2: {
          entry: [assign({ count: 3 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `${context.name}, you can give one of the 4 directions: "up", "down", "left" and "right". Go on give it a try! You only have 2 trys left.`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt3: {
          entry: [assign({ count: 4 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `${context.name}, this is your last try! Please don't waste it. Say something! She will come, if you don't!`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt4: {
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `Oh no! You made a teribble choice! She's coming! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
              })),
              on: { ENDSPEECH: "#monster" },
            },
          },
        },
    },},
      nomatch: {
        id: "nomatch",
        entry: say("That is not correct. Focus!"),
        on: { ENDSPEECH: "prompt" },
      },
      },
    },
    levelFinishRight: {
      id: "levelFinishRight",
      entry: send((context) => ({
        type: "SPEAK",
        value: `You made it ${context.name}! You really made it. The code is 36. You can move on now ${getImage("mazeRIGHTRIGHT")}`
      })),
      on: { ENDSPEECH: "StorageRoom"},
  },
Moveon: {    
  entry: [assign({ count: 1 })], 
  initial: "prompt", 
  on: {
    RECOGNISED: [
      {
        target: "#ShutDown",
        cond: (context) => !!getEntity(context, "shutDown"),
      },
      {
        target: "StorageRoom",
        cond: (context) => !!getEntity(context, "first"),
    },
    {
      target: "LibraryRoom",
      cond: (context) => !!getEntity(context, "second"),
    },
    {
      target: "BasementRoom",
      cond: (context) => !!getEntity(context, "third"),
    },
    {
      target: "BedroomRoom",
      cond: (context) => !!getEntity(context, "fourth"),
    },
    {
      target: "Finale",
      cond: (context) => !!getEntity(context, "unlock"),
    },
    {
      target: "#instructions",
      cond: (context) => !!getHelp(context),
      actions: assign({
        helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
      }),
    },
    {
      target: "#backstory9",
      cond: (context) => getIntent(context) === "backstory",
    },
      {
        target: ".nomatch",
      },
    ],
    TIMEOUT: ".prompt",
  },
  states:{
  noinput:{
    id: "noinput",
    entry: [say(
      "I didn't hear you speaking."
    )],
    on: { ENDSPEECH: "prompt" },
  },
  prompt: {
    initial: "choice",
    states: {
      choice: {
        always: [{
          target: "prompt2",
          cond: (context) => context.count === 2
          },
          {target: "prompt3",
          cond: (context) => context.count === 3
          },
          {
          target: "prompt4",
          cond: (context) => context.count > 3
          },
          "prompt1",
      ]
      },
    prompt1: {
      entry: [assign({ count: 2 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `I'm so excited. We finished the room! Where do we go next? If you have the codes just say "Unlock the door" or "I have the codes" to try the door. ${getImage("roomCorridor")} `
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt2: {
      entry: [assign({ count: 3 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: "You can start with room number 1 or 2 or 3 or room 4. It doesn't matter really! Go on! Pick a room!"
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt3: {
      entry: [assign({ count: 4 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: "If you keep on staring at me, she will know you don't want to play her game! That's not good. Please, please pick a room!"
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt4: {
        initial: "prompt",
        states: {
          prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Oh no! You made a teribble choice! She knows! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
          })),
          on: { ENDSPEECH: "#monster" },
        },
      },
    },
},},
  nomatch: {
    id: "nomatch",
    entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
    on: { ENDSPEECH: "prompt" },
  },
  },},
  Portrait: {
    id:"Portrait",
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Congrats",
          cond: (context) => !!getEntity(context, "keyword"),
        },
        {
          target: "#monster",
          cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, ""),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "Shh! She's going away!"
        )],
        on: { ENDSPEECH: "#Congrats" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `Oh no! That's the trap! Please hide somewhere and don't make a single sound. If she hears you, you won't have another chance!`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
        on: { ENDSPEECH: "prompt" },
      },
      },
    },
    Congrats: {
      id: "Congrats",
      entry: send((context) => ({
        type: "SPEAK",
        value: `You made it ${context.name}! You really made it. You can move on now`
      })),
      on: { ENDSPEECH: "StorageRoom"},
    },
    CongratsFamilyPhoto: {
      entry: [
        say("You made it! The code behind the family photo is 25"),
        assign((context) => ({family: `25`}))
      ],
      on: { ENDSPEECH: "StorageRoom"},
    },
    FamilyPhoto: {
          //riddle of the photo : answer 
          entry: [assign({ count: 1 })], 
          initial: "prompt", 
        on: {
          RECOGNISED: [
            {
              target: "#ShutDown",
              cond: (context) => !!getEntity(context, "shutDown"),
            },
            // {
            //   target: "#helpPhase1",
            //   cond: (context) => !!getHelp(context),
            //   actions: assign({
            //     helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
            //   }),
            // },
            {
              target: "Moveon",
              cond: (context) => !!getEntity(context, "moveon"),
          },
            {
              target: "CongratsFamilyPhoto",
              cond: (context) => !!getEntity(context, "riddleTomorrow"),
          },
          {
            target: "#repeatriddleTomorrow",
            cond: (context) => getIntent(context) === "repeat",
          },
            {
              target: ".nomatch",
            },
          ],
          TIMEOUT: ".prompt",
        },
        states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "I didn't hear you speaking."
          )],
          on: { ENDSPEECH: "prompt" },
        },
        prompt: {
          initial: "choice",
          states: {
            choice: {
              always: [{
                target: "prompt2",
                cond: (context) => context.count === 2
                },
                {target: "prompt3",
                cond: (context) => context.count === 3
                },
                {
                target: "prompt4",
                cond: (context) => context.count > 3
                },
                "prompt1",
            ]
            },
          prompt1: {
            entry: [assign({ count: 2 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `You chose the family photo. The riddle you have to solve is. 
                      Often talked of but never seen, I'm ever coming but never been. Daily looked for but never here, 
                      I'm still approaching and coming near. Thousands wait upon its visit, but somehow they never reach it. They expect me 
                      to appear but alas they'll never find me here. What am I?`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt2: {
            entry: [assign({ count: 3 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `You have to answer the riddle ${context.name}. I can repeat it if you want. Just say so.`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt3: {
            entry: [assign({ count: 4 })],
                  initial: "prompt",
                  states: {
                    prompt: {
                    entry: send((context) => ({
                      type: "SPEAK",
                      value: `${context.name}, you're running out of time. Please answer now!`
                    })),
                    on: { ENDSPEECH: "ask" },
              },
              ask: {
                entry: send("LISTEN"),
              },
            },
          },
          prompt4: {
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Looks like you've run out of time. I'm sorry ${context.name}.`
                })),
                on: { ENDSPEECH: "#monster" },
              },
            },
          },
      },},
        nomatch: {
          id: "nomatch",
          entry: say("No! That is not correct. Please focus!"),
          on: { ENDSPEECH: "prompt" },
        },
        },
        },
        //new room
    LibraryRoom: {
      //lamp = trap , riddle and pic game.
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "ManPortrait",
          cond: (context) => !!getEntity(context, "manportrait"),
      },
      {
        target: "Chandelier",
        cond: (context) => !!getEntity(context, "chandelier"),
      },
      {
        target: "Landscape",
        cond: (context) => !!getEntity(context, "landscape"),
      },
      {
        target: "remindGreen",
        cond: (context) => !!getEntity(context, "remindme"),
      },
      {
        target: "#instructions",
        cond: (context) => !!getHelp(context),
        actions: assign({
          helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
        }),
      },
      {
        target: "#backstory12",
        cond: (context) => getIntent(context) === "backstory",
      },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You picked the library room. You have to solve three riddles here. You can choose between the man's portrait, the chandelier or the landscape. Be careful ${context.name}, one of them is a trap. What do you choose? Please note that if you already played this room say "Move on". ${getImage("Library")}`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: "Which object is it?"
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: "If you keep on staring at me, she will know you don't want to play her game! That's not good. Please, please pick an object!"
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Oh no! You made a teribble choice! She knows! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
  
    //trap room chandelier
    Chandelier: {
      id:"Chandelier",
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "#ShutDown",
            cond: (context) => !!getEntity(context, "shutDown"),
          },
          {
            target: "CongratsChandelier",
            cond: (context) => !!getEntity(context, "keyword"),
          },
          {
            target: "#monster",
            cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, ""),
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".noinput",
      },
      states:{
        noinput:{
          id: "noinput",
          entry: [say(
            "Shh! She's going away!"
          )],
          on: { ENDSPEECH: "#CongratsChandelier" },
        },
        prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Oh no! That's the trap! Please hide somewhere and don't make a single sound. If she hears you, you won't have another chance!`
          })),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          id: "nomatch",
          entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
          on: { ENDSPEECH: "prompt" },
        },
        },
      },
      CongratsChandelier: {
        id: "CongratsChandelier",
        entry: send((context) => ({
          type: "SPEAK",
          value: `You made it ${context.name}! You really made it. You can move on now`
        })),
        on: { ENDSPEECH: "LibraryRoom"},
      },

      //library riddle => pen
      ManPortrait: {
        //riddle of the photo : answer 
        entry: [assign({ count: 1 })], 
        initial: "prompt", 
      on: {
        RECOGNISED: [
          {
            target: "#ShutDown",
            cond: (context) => !!getEntity(context, "shutDown"),
          },
          // {
          //   target: "#helpPhase1",
          //   cond: (context) => !!getHelp(context),
          //   actions: assign({
          //     helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
          //   }),
          // },
          {
            target: "Moveon",
            cond: (context) => !!getEntity(context, "moveon"),
        },
          {
            target: "CongratsManPortrait",
            cond: (context) => !!getEntity(context, "riddlePen"),
        },
        {
          target: "#repeatriddlePen",
          cond: (context) => getIntent(context) === "repeat",
        },
        {
          target: "#backstory14",
          cond: (context) => getIntent(context) === "backstory",
        },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I didn't hear you speaking."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        initial: "choice",
        states: {
          choice: {
            always: [{
              target: "prompt2",
              cond: (context) => context.count === 2
              },
              {target: "prompt3",
              cond: (context) => context.count === 3
              },
              {
              target: "prompt4",
              cond: (context) => context.count > 3
              },
              "prompt1",
          ]
          },
        prompt1: {
          entry: [assign({ count: 2 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `You chose the man's portrait. The riddle you have to solve is. Silently I drink and dive in fluids dark as night.
                    I beat the mighty warrior but never in fight.
                    The black blood in my veins your thirst for knowledge slakes.
                    My spittle is more venomous than that of poison snakes. What am I?`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt2: {
          entry: [assign({ count: 3 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `You have to answer the riddle ${context.name}. I can repeat it if you want. Just say so.`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt3: {
          entry: [assign({ count: 4 })],
                initial: "prompt",
                states: {
                  prompt: {
                  entry: send((context) => ({
                    type: "SPEAK",
                    value: `${context.name}, you're running out of time. Please answer now!`
                  })),
                  on: { ENDSPEECH: "ask" },
            },
            ask: {
              entry: send("LISTEN"),
            },
          },
        },
        prompt4: {
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `Looks like you've run out of time. I'm sorry ${context.name}.`
              })),
              on: { ENDSPEECH: "#monster" },
            },
          },
        },
    },},
      nomatch: {
        id: "nomatch",
        entry: say("That is not correct. Try again! Please focus!"),
        on: { ENDSPEECH: "prompt" },
      },
      },
      },
    CongratsManPortrait: {
      entry: [
        say("You solved it! That's so cool! I think my brain is tired now! The number behind the man's portrait is 94. You can move on now"),
        assign((context) => ({man: `94`}))
      ],
      on: { ENDSPEECH: "LibraryRoom"},
    },
    //clock game here => pick a key on;ly 2 trys
    Landscape: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "CongratsLandscape",
          cond: (context) => !!getEntity(context, "silver"),
      },
      {
        target: "Moveon",
        cond: (context) => !!getEntity(context, "moveon"),
    },
    {
      target: "#backstory15",
      cond: (context) => getIntent(context) === "backstory",
    },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {
            target: "prompt3",
            cond: (context) => context.count > 2
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You chose the landscape. You see the clock in front of you? You can't tell the time like that! I can't tell the time either way. 
                  My mom didn't teach me yet. You can teach me the time later! Now you have to pick the right key between the gold key, the silver key and the 
                  bronze key to unlock the clock and get the clock hands. Be careful
                  ${context.name}, you only have 2 tries. Also, I won't be able to help you in this one. I have to check if she's near.${getImage("ClockSolved")}`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You picked the wrong key. Be carefull, this is your last try!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
  CongratsLandscape: {
    entry: [send((context) => ({
      type: "SPEAK",
      value: `You solved it! That's so cool! The code you need is the time showed by the clock hands. You can move on now ${getImage("ClockRiddle")}`
    })),
      assign((context) => ({landscape: `715`}))],
    on: { ENDSPEECH: "LibraryRoom"},
  },

  BasementRoom: {
    //tool rack = riddle, bottles= riddle, washing machine = trap
    entry: [assign({ count: 1 })], 
    initial: "prompt", 
  on: {
    RECOGNISED: [
      {
        target: "#ShutDown",
        cond: (context) => !!getEntity(context, "shutDown"),
      },
      {
        target: "Moveon",
        cond: (context) => !!getEntity(context, "moveon"),
    },
      {
        target: "WashingMachine",
        cond: (context) => !!getEntity(context, "washingmachine"),
    },
    {
      target: "ToolRack",
      cond: (context) => !!getEntity(context, "toolrack"),
    },
    {
      target: "Bottles",
      cond: (context) => !!getEntity(context, "bottles"),
    },
    {
      target: "remindBlue",
      cond: (context) => !!getEntity(context, "remindme"),
    },
    {
      target: "#instructions",
      cond: (context) => !!getHelp(context),
      actions: assign({
        helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
      }),
    },
    {
      target: "#backstory16",
      cond: (context) => getIntent(context) === "backstory",
    },
      {
        target: ".nomatch",
      },
    ],
    TIMEOUT: ".prompt",
  },
  states:{
  noinput:{
    id: "noinput",
    entry: [say(
      "I didn't hear you speaking."
    )],
    on: { ENDSPEECH: "prompt" },
  },
  prompt: {
    initial: "choice",
    states: {
      choice: {
        always: [{
          target: "prompt2",
          cond: (context) => context.count === 2
          },
          {target: "prompt3",
          cond: (context) => context.count === 3
          },
          {
          target: "prompt4",
          cond: (context) => context.count > 3
          },
          "prompt1",
      ]
      },
    prompt1: {
      entry: [assign({ count: 2 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `You picked the basement room. You have to solve three riddles here. You can choose between the tool rack, the washing machine or the bottles. Be careful ${context.name}, one of them is a trap. What do you choose first? Please note that if you already played this room say "Move on". ${getImage("Basement")}`
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt2: {
      entry: [assign({ count: 3 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: "Well, whick object is it?"
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt3: {
      entry: [assign({ count: 4 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: "If you keep on staring at me, she will know you don't want to play her game! That's not good. Please, please pick an object!"
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt4: {
        initial: "prompt",
        states: {
          prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Oh no! You made a teribble choice! She knows! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
          })),
          on: { ENDSPEECH: "#monster" },
        },
      },
    },
},},
  nomatch: {
    id: "nomatch",
    entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
    on: { ENDSPEECH: "prompt" },
  },
  },
  },

  //trap basement room => washing machine
  WashingMachine: {
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "CongratsWashingMachine",
          cond: (context) => !!getEntity(context, "keyword"),
        },
        {
          target: "#monster",
          cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, ""),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "Shh! She's going away!"
        )],
        on: { ENDSPEECH: "#CongratsWashingMachine" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `Oh no! That's the trap! Please hide somewhere and don't make a single sound. If she hears you, you won't have another chance!`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
        on: { ENDSPEECH: "prompt" },
      },
      },
    },
    CongratsWashingMachine: {
      id: "CongratsWashingMachine",
      entry: send((context) => ({
        type: "SPEAK",
        value: `You made it ${context.name}! You really made it. You can move on now`
      })),
      on: { ENDSPEECH: "BasementRoom"},
    },
    //riddle 1 of 2 in basement => the breath/ their breath/ breath
    Bottles: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "CongratsBottles",
          cond: (context) => !!getEntity(context, "riddleBreath"),
      },
      {
        target: "#repeatriddleBreath",
        cond: (context) => getIntent(context) === "repeat",
      },
      {
        target: "#backstory18",
        cond: (context) => getIntent(context) === "backstory",
      },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You chose the bottles. The riddle you have to solve is this. There was a competition where the contestants had to hold something. 
                  At the end of the event, the winner was a person who had no hands or feet. What was it that the contestants had to hold?`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You have to answer the riddle ${context.name}. I can repeat it if you want. Just say so.`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name}, you're running out of time. Please answer now!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
  CongratsBottles: {
    id: "CongratsChandelier",
    entry: [send((context) => ({
      type: "SPEAK",
      value: `You solved it! That's so cool! I think my brain is tired now! The number inside the bottles is 58. You can move on now`
    })),
    assign((context) => ({bottles: `58`}))],
    on: { ENDSPEECH: "BasementRoom"},
  },
  // riddle 2 of 2 in basement => time

  ToolRack: {
    //riddle of the photo : answer 
    entry: [assign({ count: 1 })], 
    initial: "prompt", 
  on: {
    RECOGNISED: [
      {
        target: "#ShutDown",
        cond: (context) => !!getEntity(context, "shutDown"),
      },
      {
        target: "Moveon",
        cond: (context) => !!getEntity(context, "moveon"),
    },
      {
        target: "CongratsToolRack",
        cond: (context) => !!getEntity(context, "riddleTime"),
    },
    {
      target: "#repeatriddleTime",
      cond: (context) => getIntent(context) === "repeat",
    },
    {
      target: "#backstory19",
      cond: (context) => getIntent(context) === "backstory",
    },
      {
        target: ".nomatch",
      },
    ],
    TIMEOUT: ".prompt",
  },
  states:{
  noinput:{
    id: "noinput",
    entry: [say(
      "I didn't hear you speaking."
    )],
    on: { ENDSPEECH: "prompt" },
  },
  prompt: {
    initial: "choice",
    states: {
      choice: {
        always: [{
          target: "prompt2",
          cond: (context) => context.count === 2
          },
          {target: "prompt3",
          cond: (context) => context.count === 3
          },
          {
          target: "prompt4",
          cond: (context) => context.count > 3
          },
          "prompt1",
      ]
      },
    prompt1: {
      entry: [assign({ count: 2 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `You chose the tool rack. The riddle you have to solve is this. When I'm visible to you, you can never see me, but when I'm invisible you wish you could. 
                I am plenty enough if you are a person who is patient, but all the more scarce if you're someone who is hasty. 
                I am greater than anything else in the world, but still, I am within the control of you who value my existence. Who am I?`
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt2: {
      entry: [assign({ count: 3 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `You have to answer the riddle ${context.name}. I can repeat it if you want. Just say so.`
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt3: {
      entry: [assign({ count: 4 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `${context.name}, you're running out of time. Please answer now!`
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt4: {
        initial: "prompt",
        states: {
          prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Looks like you've run out of time. I'm sorry ${context.name}.`
          })),
          on: { ENDSPEECH: "#monster" },
        },
      },
    },
},},
  nomatch: {
    id: "nomatch",
    entry: say("That is not correct. Try again! Please focus!"),
    on: { ENDSPEECH: "prompt" },
  },
  },
  },
CongratsToolRack: {
  id: "CongratsToolRack",
  entry: [send((context) => ({
    type: "SPEAK",
    value: `You solved it! That's so cool! I think my brain is tired now! The number behind the tool rack is 17. You can move on now`
  })),
  assign((context) => ({tool: `17`}))],
  on: { ENDSPEECH: "BasementRoom"},
},

    BedroomRoom: {
    // images game = computer, bed = riddle, trap
    entry: [assign({ count: 1 })], 
    initial: "prompt", 
  on: {
    RECOGNISED: [
      {
        target: "#ShutDown",
        cond: (context) => !!getEntity(context, "shutDown"),
      },
      {
        target: "Moveon",
        cond: (context) => !!getEntity(context, "moveon"),
    },
      {
        target: "Bed",
        cond: (context) => !!getEntity(context, "bed"),
    },
    {
      target: "Closet",
      cond: (context) => !!getEntity(context, "closet"),
    },
    {
      target: "Computer",
      cond: (context) => !!getEntity(context, "computer"),
    },
    {
      target: "remindSilver",
      cond: (context) => !!getEntity(context, "remindme"),
    },
    {
      target: "#instructions",
      cond: (context) => !!getHelp(context),
      actions: assign({
        helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
      }),
    },
    {
      target: "#backstory20",
      cond: (context) => getIntent(context) === "backstory",
    },
      {
        target: ".nomatch",
      },
    ],
    TIMEOUT: ".prompt",
  },
  states:{
  noinput:{
    id: "noinput",
    entry: [say(
      "I didn't hear you speaking."
    )],
    on: { ENDSPEECH: "prompt" },
  },
  prompt: {
    initial: "choice",
    states: {
      choice: {
        always: [{
          target: "prompt2",
          cond: (context) => context.count === 2
          },
          {target: "prompt3",
          cond: (context) => context.count === 3
          },
          {
          target: "prompt4",
          cond: (context) => context.count > 3
          },
          "prompt1",
      ]
      },
    prompt1: {
      entry: [assign({ count: 2 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: `You picked the bedroom. You have to solve three riddles here. You can choose between the bed, the closet or the computer. Be careful ${context.name}, one of them is a trap. What do you choose first? Please note that if you already played this room say "Move on". ${getImage("Bedroom")}`
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt2: {
      entry: [assign({ count: 3 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: "Which object do you choose?"
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt3: {
      entry: [assign({ count: 4 })],
            initial: "prompt",
            states: {
              prompt: {
              entry: send((context) => ({
                type: "SPEAK",
                value: "If you keep on staring at me, she will know you don't want to play her game! That's not good. Please, please pick an object!"
              })),
              on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
      },
    },
    prompt4: {
        initial: "prompt",
        states: {
          prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Oh no! You made a teribble choice! She knows! It's too late now. I have to hide, she can't see me here! I'm so sorry ${context.name}. I'm so sorry, please don't be mad at me. There is nothing I can do now.`
          })),
          on: { ENDSPEECH: "#monster" },
        },
      },
    },
},},
  nomatch: {
    id: "nomatch",
    entry: say("Sorry I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
    on: { ENDSPEECH: "prompt" },
  },
  },
  },

  //bedroom trap => closet
  Closet: {
    id:"Closet",
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "CongratsCloset",
          cond: (context) => !!getEntity(context, "keyword"),
        },
        {
          target: "#monster",
          cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, ""),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "Shh! She's going away!"
        )],
        on: { ENDSPEECH: "#CongratsCloset" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `Oh no! That's the trap! Please hide somewhere and don't make a single sound. If she hears you, you won't have another chance!`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("that is not correct. Please, focus!"),
        on: { ENDSPEECH: "prompt" },
      },
      },
    },
    CongratsCloset: {
      id: "CongratsCloset",
      entry: send((context) => ({
        type: "SPEAK",
        value: `You made it ${context.name}! You really made it. You can move on now`
      })),
      on: { ENDSPEECH: "BedroomRoom"},
    },
    //riddle 1 of 1 bedroom => paper
    Bed: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "#CongratsBed",
          cond: (context) => !!getEntity(context, "riddlePaper"),
      },
      {
        target: "Moveon",
        cond: (context) => !!getEntity(context, "moveon"),
    },
    {
      target: "#repeatriddlePaper",
      cond: (context) => getIntent(context) === "repeat",
    },
    {
      target: "#backstory21",
      cond: (context) => getIntent(context) === "backstory",
    },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You chose the bed. The riddle you have to solve is this. I have been the beginning of ideas for all time, yet I am just one simple small object, 
                  the things that you can use me for can be frustrating and also I can be pretty. 
                  I have some of the most valuable thing in the world on me, yet almost everyone owns me. With me you can make anything. What am I?`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You have to answer the riddle ${context.name}. I can repeat it if you want. Just say so.`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name}, you're running out of time. Please answer now!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
    CongratsBed: {
    id: "CongratsBed",
    entry: [send((context) => ({
      type: "SPEAK",
      value: `You solved it! That's so cool! I think my brain is tired now! The number under the bed is 62. You can move on now`
    })),
    assign((context) => ({bed: `62`}))],
    on: { ENDSPEECH: "BedroomRoom"},
  },
   Computer: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "lion",
          cond: (context) => !!getEntity(context, "lion"),
      },
      {
        target: "#backstory22",
        cond: (context) => getIntent(context) === "backstory",
      },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `You chose the computer game. You have to match the paintings to their pairs. 
                  The theme is preditor and prey, try saying "the lion eats the sheep" ${getImage("PreyGame")}`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name} didn't you hear me? You have to match the preditor to the prey! Try saying "the lion eats the sheep".`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name}, you're running out of time. Please answer now!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
    //lion completed image of lion =>
    lion: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "spider1",
          cond: (context) => !!getEntity(context, "spider"),
      },
      {
        target: "snake1",
        cond: (context) => !!getEntity(context, "snake"),
    },
    {
      target: "#instructions",
      cond: (context) => !!getHelp(context),
      actions: assign({
        helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
      }),
    },
    {
      target: "#backstory17",
      cond: (context) => getIntent(context) === "backstory",
    },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Just like that! Bravo! Keep going! ${getImage("Lion")}`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name} what's next?`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name}, you're running out of time. Please answer now!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
    spider1: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
      {
        target: "CongratsComputer",
        cond: (context) => !!getEntity(context, "snake"),
    },
    {
      target: "#instructions",
      cond: (context) => !!getHelp(context),
      actions: assign({
        helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
      }),
    },
    {
      target: "#backstory13",
      cond: (context) => getIntent(context) === "backstory",
    },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Well done, ${context.name}! Keep going! ${getImage("Spider")}`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name} what's next?`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name}, you're running out of time. Please answer now!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },
    snake1: {
      //riddle of the photo : answer 
      entry: [assign({ count: 1 })], 
      initial: "prompt", 
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "CongratsComputer",
          cond: (context) => !!getEntity(context, "spider"),
      },
      {
        target: "#instructions",
        cond: (context) => !!getHelp(context),
        actions: assign({
          helpme: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
        }),
      },
      {
        target: "#backstory10",
        cond: (context) => getIntent(context) === "backstory",
      },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".prompt",
    },
    states:{
    noinput:{
      id: "noinput",
      entry: [say(
        "I didn't hear you speaking."
      )],
      on: { ENDSPEECH: "prompt" },
    },
    prompt: {
      initial: "choice",
      states: {
        choice: {
          always: [{
            target: "prompt2",
            cond: (context) => context.count === 2
            },
            {target: "prompt3",
            cond: (context) => context.count === 3
            },
            {
            target: "prompt4",
            cond: (context) => context.count > 3
            },
            "prompt1",
        ]
        },
      prompt1: {
        entry: [assign({ count: 2 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `Bravo! Keep going! ${getImage("Snake")}`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt2: {
        entry: [assign({ count: 3 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name} what's next?`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt3: {
        entry: [assign({ count: 4 })],
              initial: "prompt",
              states: {
                prompt: {
                entry: send((context) => ({
                  type: "SPEAK",
                  value: `${context.name}, you're running out of time. Please answer now!`
                })),
                on: { ENDSPEECH: "ask" },
          },
          ask: {
            entry: send("LISTEN"),
          },
        },
      },
      prompt4: {
          initial: "prompt",
          states: {
            prompt: {
            entry: send((context) => ({
              type: "SPEAK",
              value: `Looks like you've run out of time. I'm sorry ${context.name}.`
            })),
            on: { ENDSPEECH: "#monster" },
          },
        },
      },
  },},
    nomatch: {
      id: "nomatch",
      entry: say("That is not correct. Try again! Please focus!"),
      on: { ENDSPEECH: "prompt" },
    },
    },
    },  
  CongratsComputer: {
    entry: [send((context) => ({
      type: "SPEAK",
      value: `You actually got it! The number given from the computer is 71. That one was too hard for me you know. But i still got it on my last try. ${getImage("DonePGame")}`
    })),
    assign((context) => ({computer: `71`}))],
    on: { ENDSPEECH: "BedroomRoom"},
  },
  //unlock door state here:
  //story befor that: Can I ask you a question ${name}? 
  //state no => unlock door
  //state yes => can you take me with you if you make it out? You are the only friend I have! => no => unlock state => yes => happy unlock state hint about the locks.
  //bedroom lock => 7162 grey lock
  //basement lock => 5817 blue lock
  //library lock => 94715 green lock
  //storage lock => 3625 red lock
  //yes or no state => 13
  //unlock doors => 17
  remindBlue: {
    entry: send((context) => ({
      type: "SPEAK",
      value: `The code behind the bottles is ${context.bottles} and the code behind the tool rack is ${context.tool}`
    })),
    on: { ENDSPEECH: "BlueLock"},
  },
  remindRed: {
    entry: send((context) => ({
      type: "SPEAK",
      value: `The code from the tv is ${context.tv} and the code behind the family photo is ${context.family}`
    })),
    on: { ENDSPEECH: "RedLock"},
  },
  remindSilver: {
    entry: send((context) => ({
      type: "SPEAK",
      value: `The code from the computer is ${context.computer} and the code under the bed is ${context.bed}`
    })),
    on: { ENDSPEECH: "FinaleDoor"},
  },
  remindGreen: {
    entry: send((context) => ({
      type: "SPEAK",
      value: `The code behind the landscape painting is ${context.landscape} and the code behind the man's portrait is ${context.man}`
    })),
    on: { ENDSPEECH: "GreenLock"},
  },
  Finale: {
    entry: send((context) => ({
      type: "SPEAK",
      value: `I'm so happy for you ${context.name}. You made it through. I will never forget you ${context.name}. Please don't forget me!`
    })),
    on: { ENDSPEECH: "FinaleDoor"},
  },
  FinaleDoor: { 
    id:"FinaleDoor",
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "#RedLock",
          cond: (context) => !!getEntity(context, "silverlockcombo"), 
        },
        {
          target: "remindSilver",
          cond: (context) => !!getEntity(context, "remindme"),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I'm afraid I don't hear you."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `You have the codes ready, right? The first lock is the silver one. Please tell me the password. You only have 1 try here. If you are not sure about the password say "go back" to take a closer look at the rooms again. Or ask for a reminder of the codes the objects gave you by saying "reminder". ${getImage("silverLock")}`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("I'm afraid that is not the correct password. Better luck next time!"),
        on: { ENDSPEECH: "#monster" },
      },
      },
  },
  RedLock: { 
    id:"RedLock",
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "#GreenLock",
          cond: (context) => !!getEntity(context, "redlockcombo"), 
        },
        {
          target: "remindRed",
          cond: (context) => !!getEntity(context, "remindme"),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I'm afraid I don't hear you."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `You have the codes ready, right? The second lock is the red one. Please tell me the password. You only have 1 try here. If you are not sure about the password say "go back" to take a closer look at the rooms again. Or ask for a reminder of the codes the objects gave you by saying "reminder". ${getImage("redLock")}`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("I'm afraid that is not the correct password. Better luck next time!"),
        on: { ENDSPEECH: "#monster" },
      },
      },
  },
  GreenLock: { 
    id:"GreenLock",
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "#BlueLock",
          cond: (context) => !!getEntity(context, "greenlockcombo"), 
        },
        {
          target: "remindGreen",
          cond: (context) => !!getEntity(context, "remindme"),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I'm afraid I don't hear you."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `You have the codes ready, right? The third lock is the green one. Please tell me the password. You only have 1 try here. If you are not sure about the password say "go back" to take a closer look at the rooms again. Or ask for a reminder of the codes the objects gave you by saying "reminder". ${getImage("greenLock")}`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("I'm afraid that is not the correct password. Better luck next time!"),
        on: { ENDSPEECH: "#monster" },
      },
      },
  },
  BlueLock: { 
    id:"BlueLock",
    initial: "prompt",
    on: {
      RECOGNISED: [
        {
          target: "#ShutDown",
          cond: (context) => !!getEntity(context, "shutDown"),
        },
        {
          target: "Moveon",
          cond: (context) => !!getEntity(context, "moveon"),
      },
        {
          target: "Unlock",
          cond: (context) => !!getEntity(context, "bluelockcombo"), 
        },
        {
          target: "remindBlue",
          cond: (context) => !!getEntity(context, "remindme"),
        },
        {
          target: ".nomatch",
        },
      ],
      TIMEOUT: ".noinput",
    },
    states:{
      noinput:{
        id: "noinput",
        entry: [say(
          "I'm afraid I don't hear you."
        )],
        on: { ENDSPEECH: "prompt" },
      },
      prompt: {
        entry: send((context) => ({
          type: "SPEAK",
          value: `You have the codes ready, right? The last lock is the blue one. Please tell me the password. You only have 1 try here. If you are not sure about the password say "go back" to take a closer look at the rooms again. Or ask for a reminder of the codes the objects gave you by saying "remind me". ${getImage("blueLock")}`
        })),
        on: { ENDSPEECH: "ask" },
      },
      ask: {
        entry: send("LISTEN"),
      },
      nomatch: {
        id: "nomatch",
        entry: say("I'm afraid that is not the correct password. Better luck next time!"),
        on: { ENDSPEECH: "#monster" },
      },
      },
  },
  Unlock: {
    entry: send((context) => ({
      type: "SPEAK",
      value: `You made it! You finishe the game! I hope I can see you again someday. Hope you enjoyed the game! Thank you so much for playing ${getImage("GameWin")}`
    })),
    on: { ENDSPEECH: "#init"},
  },
      },
    },
  },
};
