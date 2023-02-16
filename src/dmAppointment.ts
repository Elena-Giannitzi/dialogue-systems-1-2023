import { MachineConfig, send, Action, assign } from "xstate";
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
  lecture: {
    intent: "None",
    entities: { title: "Dialogue systems lecture" },
  },
  lunch: {
    intent: "None",
    entities: { title: "Lunch at the canteen" },
  },
  coffee: {
    intent: "None",
    entities: { title: "Coffee break" }
  },
  doctor: {
    intent: "None",
    entities: { title: "Booking a doctor's appointment" }
  },
  dentist: {
    intent: "None",
    entities: { title: "Time for a dental check up" }
  },
  date: {
    intent: "None",
    entities: { title: "Going out on a date" }
  },
  dinner: {
    intent: "None",
    entities: { title: "Time for dinner" }
  },
  shopping: {
    intent: "None",
    entities: { title: "Organizing a shopping spree" }
  },
  "business meeting": {
    intent: "None",
    entities: { title: "Scheduling a business meeting" }
  },
  hair: {
    intent: "None",
    entities: { title: "Time for a haircut or a new hairstyle" }
  },
  nails: {
    intent: "None",
    entities: { title: "Getting our nails done" }
  },
  makeover: {
    intent: "None",
    entities: { title: "Getting a makeover" }
  },
  presentation: {
    intent: "None",
    entities: { title: "Let's shcedule an appointment for your big presentation" }
  },
  school: {
    intent: "None",
    entities: { title: "Reminder about teacher-parent meeting" }
  },
  car: {
    intent: "None",
    entities: { title: "Getting a car-service" }
  },
  "on friday": {
    intent: "None",
    entities: { day: "Friday" },
  },
  "on saturday": {
    intent: "None",
    entities: { day: "Saturday" },
  },
  "on sunday": {
    intent: "None",
    entities: { day: "Sunday" },
  },
  "on monday": {
    intent: "None",
    entities: { day: "Monday" },
  },
  "on tuesday": {
    intent: "None",
    entities: { day: "Tuesday" },
  },
  "on wednesday": {
    intent: "None",
    entities: { day: "Wednesday" },
  },"on thursday": {
    intent: "None",
    entities: { day: "Thursday" },
  },
  "at 7": {
    intent: "None",
    entities: { time: "07:00" },
  },
  "at 7:30": {
    intent: "None",
    entities: { time: "07:30" },
  },
  "at 8": {
    intent: "None",
    entities: { time: "08:00" },
  },
  "at 8:30": {
    intent: "None",
    entities: { time: "08:30" },
  },
  "at 9": {
    intent: "None",
    entities: { time: "09:00" },
  },
  "at 9:30": {
    intent: "None",
    entities: { time: "09:30" },
  },
  "at 10": {
    intent: "None",
    entities: { time: "10:00" },
  },
  "at 10:30": {
    intent: "None",
    entities: { time: "10:30" },
  },
  "at 11": {
    intent: "None",
    entities: { time: "11:00" },
  },
  "at 11:30": {
    intent: "None",
    entities: { time: "11:30" },
  },
  "at 12": {
    intent: "None",
    entities: { time: "12:00" },
  },
  "at 12:30": {
    intent: "None",
    entities: { time: "12:30" },
  },
  "at 1": {
    intent: "None",
    entities: { time: "01:00" },
  },
  "at 1:30": {
    intent: "None",
    entities: { time: "01:30" },
  },
  "at 2": {
    intent: "None",
    entities: { time: "02:00" },
  },
  "at 2:30": {
    intent: "None",
    entities: { time: "02:30" },
  },
  "at 3": {
    intent: "None",
    entities: { time: "03:00" },
  },
  "at 3:30": {
    intent: "None",
    entities: { time: "03:30" },
  },
  "at 4": {
    intent: "None",
    entities: { time: "04:00" },
  },
  "at 4:30": {
    intent: "None",
    entities: { time: "04:30" },
  },
  "at 5": {
    intent: "None",
    entities: { time: "05:00" },
  },
  "at 5:30": {
    intent: "None",
    entities: { time: "05:30" },
  },
  "at 6": {
    intent: "None",
    entities: { time: "06:00" },
  },
  "at 6:30": {
    intent: "None",
    entities: { time: "06:30" },
  },
  "in the morning": {
    intent: "None",
    entities: { daytime: "in the morning" },
  },
  "in the evening": {
    intent: "None",
    entities: { daytime: "in the evening" },
  },
  "at noon": {
    intent: "None",
    entities: { daytime: "at noon" },
  },
  "in the afternoon": {
    intent: "None",
    entities: { daytime: "in the afternoon" },
  },
  "yes": {
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
  "that's right": {
    intent: "None",
    entities: { confirm: "that's right" },
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
  "create a meeting": {
    intent: "None",
    entities: { answer: "create a meeting" },
  },
  "ask a question about someone": {
    intent: "None",
    entities: { answerWho: "ask a 'who is' question" },
  },
  "ask a question": {
    intent: "None",
    entities: { answerWho: "ask a 'who is' question" },
  },
};

// asking for user's name not needed

const getEntity = (context: SDSContext, entity: string) => {
  // lowercase the utterance and remove tailing "."
  let u = context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "");
  if (u in grammar) {
    if (entity in grammar[u].entities) {
      return grammar[u].entities[entity];}
  }
  return false;
};


export const dmMachine: MachineConfig<SDSContext, any, SDSEvent> = {
  initial: "idle",
  states: {
    idle: {
      on: {
        CLICK: "init",
      },
    },
    init: {
      on: {
        TTS_READY: "welcome",
        CLICK: "welcome",
      },
    },
    welcome: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "optionMeeting",
            cond: (context) => !!getEntity(context, "answer"),
            actions: assign({
              answer: (context) => getEntity(context, "answer"),
            }),
          },
          {
            target: "optionQuestion",
            cond: (context) => !!getEntity(context, "answerWho"),
            actions: assign({
              answerWho: (context) => getEntity(context, "answerWho"),
            }),
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say("Hello, Elena. What would you like to do today? Would you like to create a meeting or ask a question about someone?"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, could you please repeat youself? Would you like to create a meeting or ask a question about someone?"
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    optionMeeting: {
      entry: say("Okay!"),
      on: { ENDSPEECH: "organizeMeeting" },
      },
    optionQuestion: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, ${context.answerWho}.`,
      })),
      on: { ENDSPEECH: "QuestionWhoIsX" }, // askQuestion ==> What would you like to ask?
      },
    QuestionWhoIsX: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          { target: ".info",
            actions: assign({personIs:  
              context => {return context.recResult[0].utterance}
            })
              
            },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        info: {
          invoke: {
            id: 'getInfo',
            src: (context, event) => kbRequest(context.personIs),
            onDone: [{
              target: 'success',
              cond: (context, event) => event.data.Abstract !== "",
              actions: assign({ info: (context, event) => event.data })
            },
            {
              target: 'failure',
            },
          ],
            onError: {
              target: 'failure',
            }
          }
        },
        success: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Here is what I found on the web about ${context.personIs} ${context.info.Abstract}`
          })),
          on: {ENDSPEECH: "#meetingXQuestion"}
        },
        failure: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Sorry, I'm afraid I found nothing on the web about ${context.personIs}. Give it another go!`
          })),
          on: {ENDSPEECH: "prompt"}
        },
        prompt: {
          entry: say("Whom would you like to know about? May I suggest Rihanna, Beyoncé, Taylor Swift, Tom Holland, Harry Styles? Just say the name!"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, could you please repeat youself? I didn't catch the name correctly!"
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },

    meetingXQuestion: {
      id:"meetingXQuestion",
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "denyMeeting",
            cond: (context) => !!getEntity(context, "reject"),
            actions: assign({
              reject: (context) => getEntity(context, "reject"),
            }), 
          },
          {
            target: "acceptMeeting",
            cond: (context) => !!getEntity(context, "confirm"),
            actions: assign({
              confirm: (context) => getEntity(context, "confirm"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say("Would you like to meet them?"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I am afraid I didn't hear you clearly!"
          ),
          on: {ENDSPEECH: "prompt"},
        },
      },
    },
    denyMeeting: {
      entry: say("Very well! I hope the information I gave you, where enough then. Have a wonderful day!"),
      on: { ENDSPEECH: "init" },
    },
    acceptMeeting: {
      entry: [
        say("That's so great to hear! Hope it goes exactly as you expect!"),
        assign((context) => ({title: `meeting with ${context.personIs}`}))
      ],
      on: { ENDSPEECH: "askDate" },
      },
    organizeMeeting: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "info",
            cond: (context ) => !!getEntity(context, "title"),
            actions: assign({
              title: (context) => getEntity(context, "title"),
            }),
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say("Let's create a meeting. What is it about?"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't know what it is. Tell me something I know."
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    info: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, ${context.title}`,
      })),
      on: { ENDSPEECH: "askDate" },
      },
    askDate: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "date",
            cond: (context) => !!getEntity(context, "day"),
            actions: assign({
              day: (context) => getEntity(context, "day"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say("On which day is the meeting taking place?"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't think I understood what you said! Could you please repeat yourself?"
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    date: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, meeting scheduled for ${context.day}`,
      })),
      on: { ENDSPEECH: "WholeDay" },
    },
    WholeDay: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "negative",
            cond: (context) => !!getEntity(context, "reject"),
            actions: assign({
              reject: (context) => getEntity(context, "reject"),
            }), 
          },
          {
            target: "positive",
            cond: (context) => !!getEntity(context, "confirm"),
            actions: assign({
              confirm: (context) => getEntity(context, "confirm"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say("Will it take the whole day?"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't know what it is. Tell me something I know."
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    negative: {
      entry: say("Very well then!"),
      on: { ENDSPEECH: "Time" },
    },
    positive: {
      entry: say("Whole day, huh? Make sure to grab some coffee and a small snack then!"),
      on: { ENDSPEECH: "meetConfirmWholeDay" },
    },
    meetConfirmWholeDay: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "wholeDayPositive",
            cond: (context) => !!getEntity(context, "confirm"),
            actions: assign({
              confirm: (context) => getEntity(context, "confirm"),
            }), 
          },
          {
            target: "wholeDayRethink",
            cond: (context) => !!getEntity(context, "reject"),
            actions: assign({
              reject: (context) => getEntity(context, "reject"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Do you want me to create a meeting titled ${context.title}, on ${context.day} for the whole day?`,
          })),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't know what it is. Tell me something I know."
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    wholeDayPositive: {
      entry: say("Great!"),
      on: { ENDSPEECH: "CreatedMeeting" },
    },
    wholeDayRethink: {
      entry: say("Very well! Starting over!"),
      on: { ENDSPEECH: "welcome" },
    },
    Time: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "time",
            cond: (context) => !!getEntity(context, "time"),
            actions: assign({
              time: (context) => getEntity(context, "time"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say("What time is your meeting?"),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't know what it is. Tell me something I know."
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    time: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, time is set for ${context.time}`,
      })),
      on: { ENDSPEECH: "PartOfDay" },
    },
    PartOfDay: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "meetday",
            cond: (context) => !!getEntity(context, "daytime"),
            actions: assign({
              daytime: (context) => getEntity(context, "daytime"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say(`In the morning, at noon, in the afternoon, in the evening or at night?`),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't know what it is. Tell me something I know."
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    meetday: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, meeting ${context.daytime}`,
      })),
      on: { ENDSPEECH: "meetConfirm" },
    },
    meetConfirm: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "posConfirmation",
            cond: (context) => !!getEntity(context, "confirm"),
            actions: assign({
              confirm: (context) => getEntity(context, "confirm"),
            }), 
          },
          {
            target: "rethink",
            cond: (context) => !!getEntity(context, "reject"),
            actions: assign({
              reject: (context) => getEntity(context, "reject"),
            }), 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Do you want me to create a meeting titled ${context.title}, on ${context.day} at ${context.time} ${context.daytime}?`,
          })),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(
            "Sorry, I don't know what it is. Tell me something I know."
          ),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    posConfirmation: {
      entry: say("Great!"),
      on: { ENDSPEECH: "CreatedMeeting" },
    },
    rethink: {
      entry: say("Very well, starting over!"),
      on: { ENDSPEECH: "welcome" },
    },
    CreatedMeeting: {
      entry: say("You're meeting has been created successfully. Have a nice day!"),
      on: { ENDSPEECH: "init" },
    },
  },
};


const kbRequest = (text: string) =>
  fetch(
    new Request(
      `https://cors.eu.org/https://api.duckduckgo.com/?q=${text}&format=json&skip_disambig=1`
    )
  ).then((data) => data.json());
