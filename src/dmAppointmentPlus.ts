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
  "dinner date": {
    intent: "None",
    entities: { title: "dinner date" }
  },
  "coffee date": {
    intent: "None",
    entities: { title: "coffee date" }
  },
  gym: {
    intent: "None",
    entities: { title: "workout" }
  },
  workout: {
    intent: "None",
    entities: { title: "workout" }
  },
  "schedule a day at the gym": {
    intent: "None",
    entities: { title: "workout" }
  },
  "schedule a dinner date": {
    intent: "None",
    entities: { title: "dinner date" }
  },
  "schedule a coffee date": {
    intent: "None",
    entities: { title: "coffee date" }
  },
  "schedule a zoom call": {
    intent: "None",
    entities: { title: "zoom call" }
  },
  "schedule a project presentation": {
    intent: "None",
    entities: { title: "presentation" }
  },
  "schedule a work presentation": {
    intent: "None",
    entities: { title: "presentation" }
  },
  "schedule a presentation": {
    intent: "None",
    entities: { title: "presentation" }
  },
  "schedule a doctor's appointment": {
    intent: "None",
    entities: { title: "check up at the doctor's office" }
  },
  "i would like to create a lunch meeting": {
    intent: "None",
    entities: { title: "lunch at the canteen" }
  },
  "i would like to create a presentation": {
    intent: "None",
    entities: { title: "project presentation" }
  },
  "i would like to create a dinner date": {
    intent: "None",
    entities: { title: "dinner date" }
  },
  "i would like to create a coffee date": {
    intent: "None",
    entities: { title: "coffee date" }
  },
  "i would like to book a doctor's appointment": {
    intent: "None",
    entities: { title: "check up at the doctor's office" }
  },
  "i would like to visit the museum": {
    intent: "None",
    entities: { title: "a day at the museum" }
  },
  "i would like to create a lecture meeting": {
    intent: "None",
    entities: { title: "lecture meeting" }
  },
  "i would like to create a business meeting": {
    intent: "None",
    entities: { title: "business meeting" }
  },
  "i would like to schedule a zoom call": {
    intent: "None",
    entities: { title: "meeting via zoom call" }
  },
  "i would like to schedule a dentist's appointment": {
    intent: "None",
    entities: { title: "dental check up" }
  },
  "i would like schedule a visit at the hair salon": {
    intent: "None",
    entities: { title: "getting a new hairstyle" }
  },
  "i would like to shedule a visit at the nail salon": {
    intent: "None",
    entities: { title: "getting our nails done" }
  },
  "on friday": {
    intent: "None",
    entities: { day: "Friday" },
  },
  "tomorrow": {
    intent: "None",
    entities: { day: "tomorrow" },
  },
  "next week": {
    intent: "None",
    entities: { day: "next week" },
  },
  "on the weekend": {
    intent: "None",
    entities: { day: "the weekend" },
  },
  "next month": {
    intent: "None",
    entities: { day: "next month" },
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
  "at 7:00": {
    intent: "None",
    entities: { time: "07:00" },
  },
  "at 7:30": {
    intent: "None",
    entities: { time: "07:30" },
  },
  "at 8:00": {
    intent: "None",
    entities: { time: "08:00" },
  },
  "at 8:30": {
    intent: "None",
    entities: { time: "08:30" },
  },
  "at 9:00": {
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
  "at 1:00": {
    intent: "None",
    entities: { time: "01:00" },
  },
  "at 1:30": {
    intent: "None",
    entities: { time: "01:30" },
  },
  "at 2:00": {
    intent: "None",
    entities: { time: "02:00" },
  },
  "at 2:30": {
    intent: "None",
    entities: { time: "02:30" },
  },
  "at 3:00": {
    intent: "None",
    entities: { time: "03:00" },
  },
  "at 3:30": {
    intent: "None",
    entities: { time: "03:30" },
  },
  "at 4:00": {
    intent: "None",
    entities: { time: "04:00" },
  },
  "at 4:30": {
    intent: "None",
    entities: { time: "04:30" },
  },
  "at 5:00": {
    intent: "None",
    entities: { time: "05:00" },
  },
  "at 5:30": {
    intent: "None",
    entities: { time: "05:30" },
  },
  "at 6:00": {
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
  "during break": {
    intent: "None",
    entities: { daytime: "during break" },
  },
  "during lunch": {
    intent: "None",
    entities: { daytime: "during lunch" },
  },
  "during work break": {
    intent: "None",
    entities: { daytime: "during work break" },
  },
  "during lunch break": {
    intent: "None",
    entities: { daytime: "during lunch break" },
  },
  "during spring break": {
    intent: "None",
    entities: { daytime: "during spring break" },
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
  "create a meeting": {
    intent: "None",
    entities: { answer: "create a meeting" },
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
  "try again": {
    intent: "None",
    entities: { again: "try again" },
  },
  "go again": {
    intent: "None",
    entities: { again: "try again" },
  },
  "go back": {
    intent: "None",
    entities: { again: "try again" },
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

const getFamous = (context: SDSContext) => {
  let u = context.recResult[0].utterance
  u = u.replace("Who is ","")
  u = u.replace("Tell me about ","")
  u = u.replace("What do you know about ","")
  u = u.replace("Tell me what you know about ","")
  u = u.replace("Tell me what do you know about ","")
  u = u.replace("Do you know anything about ","")
  u = u.replace("Can you tell me something about ","")
  u = u.replace("Can you tell me anything about ","")
  u = u.replace("What can you tell me about ","")
  u = u.replace("Do you know ","")
  u = u.replace("What is ","")
  u = u.replace("What's ","")
  u = u.replace("é","e")
  u = u.replace("?","")
  u = u.replace('"',"")
  u = u.replace(/\.$/g, "")
  return u
}

const getEntity = (context: SDSContext, entity: string) => {
  // lowercase the utterance and remove tailing "."
  let u = context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "");
  if (u in grammar) {
    if (entity in grammar[u].entities) {
      return grammar[u].entities[entity];}
  }
  return false;
};

const backgroundInit = () => {
  document.body.style.backgroundImage = 'url("./imagesGame/roomCorridor.jpg")';
}

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
              value: "Very well then. System is shutting down!"
            })),
            on: { ENDSPEECH: "#init" },
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


// function getImage(thing: any) {
//   const elem = document.getElementById("image");
//   if (elem) {
//     const img = elem.innerHTML = `<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
//     <img src="/img/${thing}.jpg" class="center"/>
//   </div>`;
//     return img
//   }
// };

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
      entry: say('Hi! I\'m here to help you getting started! You can start by telling me your name or your nickname.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    helpBegin: {
      id:"helpBegin",
      entry: say('Hi! I\'m here to help you create a meeting. You can start by asking a question like "Who is Taylor Swift?" or just say "create a meeting". Give it a go! Please note that sometimes your question is recognized by the system but is not shown. If that happens you will see the speaker sign going on without you hearing anything. In that case clisck on the circle and say "Try again".'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    helpConfirmOrReject: {
      id:"helpConfirmOrReject",
      entry: say('Help has arrived. You can say "yes" or "no" to either confirm or reject the meeting.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      }
    },
    helpMeeting: {
      id:"helpMeeting",
      entry: say('Hey, need a hand? You can just say the topic of the meeting you would like to create. Try something like "lecture", "doctor" or "hair".'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      },
    },
    helpDay: {
      id:"helpDay",
      entry: say('In this state, you need to say the day your meeting will take place. Try saying somethig like "tomorrow", "on monday" and so on.'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      },
    },
    helpTime: {
      id:"helpTime",
      entry: say('Help is on the way! In this state, you need to say the day your meeting will take place. Try saying somethig like "during lunch" or a more specific timeline like: "at 9.00"'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      },
    },
    helpDaytime: {
      id:"helpDaytime",
      entry: say('Need a hand I see! Here you can specify more the part of the day your meeting is taking place? Is it during lunch maybe? During break? Somtime during the morning?'),
      on: {
          ENDSPEECH: 'Assistant.hist'
      },
    },
    Assistant: {
      initial: 'introduction',
      states: {
          hist: {
              type: 'history',
              history: 'deep'
          },
        introduction: {      //1st og state => ask for name
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
                target: "#Sure",
                cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, "") && context.recResult[0].confidence <= 0.7,
                actions: assign({
                  name: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
                }),
              },
              {
                target: "welcome",
                cond: (context) => !!context.recResult[0].utterance.replace(/\.$/g, "") && context.recResult[0].confidence > 0.7,
                actions: assign({
                  name: (context) => context.recResult[0].utterance.replace(/\.$/g, "")
                }),
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
              "I didn't hear you speaking."
            )],
            on: { ENDSPEECH: "prompt" },
          },
          ...promptFunction("Hello and welcome to way out! I have been watching you and I have to admit it's my great honor to finally meet you. I am surprised yet intrigued by your intellegent skills. You can even consider me as your biggest fan. I created this room especially for you.","Can you please tell me your name?","Last chance to tell me your name"),
          nomatch: {
            id: "nomatch",
            entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
            on: { ENDSPEECH: "prompt.prompt2" },
          },
          },},
          Sure: {  //1st confirmation state => confirm name
            id: "Sure",
            initial: "prompt",
            entry: [assign({ count: 1 })],
            on: {
              RECOGNISED: [
                {
                  target: "#ShutDown",
                  cond: (context) => !!getEntity(context, "shutDown"),
                },
                {
                  target: "introduction",
                  cond: (context) => getIntent(context) === "reject",
                  actions: assign({
                    confirm: (context) => context.nluResult.query
                  })
                },
                {
                  target: "welcome",
                  cond: (context) => getIntent(context) === "confirm",
                  actions: assign({
                    confirm: (context) => context.nluResult.query
                  })
                },
                {
                  target: "#helpConfirmOrReject",
                  cond: (context) => !!getHelp(context),
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
                  "Sorry, I think I dozed off for a second."
                )],
                on: { ENDSPEECH: "prompt" },
              },
              //prompt states here: 
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
                            value: `Did I hear your name correctly, ${context.name} ${getImage("roomCorridor")}?`
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
                            value: `${context.name}, is this your name?`
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
                            value: `Last chance ${context.name}. Are you sure this is your name?`
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
                        value: "Very Well! System shutting down."
                      })),
                      on: { ENDSPEECH: "#init" },
                    },
                  },
                },
            },},
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
          },
        },
        welcome: {  // 2nd og state => create meeting or ask a question
          initial: "prompt",
          entry: [assign({ count: 1 })],
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "optionMeeting",
                cond: (context) => !!getEntity(context, "answer") && context.recResult[0].confidence > 0.95,
                actions: assign({
                  answer: (context) => getEntity(context, "answer") 
                }),
              },
              {
                target: "ConfirmMeetingQuestion",    // state 2, confirm state 1 => confirm you want to create a meeting
                cond: (context) => !!getEntity(context, "answer") && context.recResult[0].confidence <= 0.95,
                actions: assign({
                  answer: (context) => getEntity(context, "answer") 
                }),
              },
              {
                target: "#helpBegin",
                cond: (context) => !!getHelp(context),
              },
              { target: ".#info",
                cond: (context) => !!getFamous(context) && context.recResult[0].confidence > 0.7,
                actions: assign({personIs:  
                  context => {return getFamous(context)}
                })   
                },
                { target: "#confirmWhoQuestion",
                cond: (context) => !!getFamous(context) && context.recResult[0].confidence <= 0.7,
                actions: assign({personIs:  
                  context => {return getFamous(context)}
                })   
                },
              {
                target: ".nomatch",
              },
            ],
            TIMEOUT: ".noinput",
          },
          states: {
            info: {
              id: "info",
              invoke: {
                id: 'getInfo',
                // src: context => nluRequest(context.recResult[0].utterance),
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
                value: `Here is what I found on the web about ${context.personIs}. ${context.info.Abstract}`
              })),
              on: {ENDSPEECH: "#meetingXQuestion"}
            },
            failure: {
              entry: send((context) => ({
                entry: [assign({ count: 1 })],
                type: "SPEAK",
                value: `Sorry, I'm afraid I found nothing on the web about ${context.personIs}. Give it another go!`
              })),
              on: {ENDSPEECH: "prompt.prompt2"}
            },
            //prompts here
            noinput:{
              id: "noinput",
              entry: [say(
                "Did you say something? My mind was wondering elsewhere. It seems I didn't hear a single sound."
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
                          value: `Nice to meet you ${context.name}. How can I help you today? I can either create a meeting for you or answer a question you might have! You can always say "Help" to hear further explanation. Please note that sometimes your question is recognized by the system but is not shown. If that happens you will see the speaker sign going on without you hearing anything. In that case click on the circle and say "Try again".`
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
                          value: `${context.name} what would you like to do? Create a meeting or ask a question? I know a lot about celebrities.`
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
                          value: `Last chance! What do you want to do?`
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
                      value: "Very Well! System shutting down."
                    })),
                    on: { ENDSPEECH: "#init" },
                  },
                },
              },
          },},
          nomatch: {
            id: "nomatch",
            entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
            on: { ENDSPEECH: "prompt.prompt2" },
          },
          },
        },
        ConfirmMeetingQuestion: { // state 1 of confirms sates in welcome state => confirm meeting option
          id:"ConfirmMeetingQuestion",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "welcome",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "optionMeeting",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure you would like to create a meeting?","You chose the option to create a meeting. Is this correct?","Last chance to change your mind. Do you still want to create a meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        confirmWhoQuestion: { // state 2 of confirm states in welcome ==> confrim question option
          id:"confirmWhoQuestion",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "welcome",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "welcome.info",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Is this the question you would like to ask?","Are you sure this is what you want to know?","Last chance to select an option. Are you certain about your question?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        optionMeeting: {
          entry: say("Okay!"),
          on: { ENDSPEECH: "organizeMeeting" },
        },
        ShutDown: {
          id: "ShutDown",
          entry: say("Shutting down!"),
          on: { ENDSPEECH: "#init" },
        },
        meetingXQuestion: { //3rd og state that's linked to the question option in welcome ==> do you want to meet the celebrity?
          id:"meetingXQuestion",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "welcome",
                cond: (context) => !!getEntity(context, "again"),
              },
              {
                target: "showAVideo",
                cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence > 0.95,
                actions: assign({
                  confirm: (context) => getEntity(context, "reject"),
                }),
              },
              {
                target: "#confirmDenial",
                cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence <= 0.95,
                actions: assign({
                  confirm: (context) => getEntity(context, "reject"),
                }),
              },
              {
                target: "#acceptMeeting",
                cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence > 0.95,
                actions: assign({
                  confirm: (context) => getEntity(context, "confirm"),
                }), 
              },
              {
                target: "#confirmAccept",
                cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence <= 0.95,
                actions: assign({
                  confirm: (context) => getEntity(context, "confirm"),
                }), 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Would you like to meet them? Remember that you can always say 'Help' to hear further explanation.","Hey! Do you want to meet them?","I'm not gonna ask again! Yes or No?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        // deny confirm here
        confirmDenial: { // state 2 of confirm states in welcome ==> confrim question option
          id:"confirmDenial",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetingXQuestion",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "showAVideo",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, you would NOT like to meet them?","Are you sure?","Last chance, are you sure you do not want to meet them?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        //accept confirm here
        confirmAccept: { // state 2 of confirm states in welcome ==> confrim question option
          id:"confirmAccept",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetingXQuestion",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "acceptMeeting",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, you WOULD like to meet them?","Are you sure?","Last chance, are you sure you WANT to meet them?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        //state to show a video before denying the meeting => Would you maybe like to see a video about context.personIs? 
        showAVideo: {
          entry: [assign({ count: 1 })],
          id:"showAVideo",
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "denyVideo",
                cond: (context) => !!getEntity(context, "reject")  && context.recResult[0].confidence > 0.85,
                actions: assign({
                  reject: (context) => getEntity(context, "reject")
                }), 
              },
              {
                target: "ConfirmNoVideo",
                cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence <= 0.85,
                actions: assign({
                  reject: (context) => getEntity(context, "reject")
                }), 
              },
              {
                target: "acceptVideo",
                cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence > 0.85,
                actions: assign({
                  confirm: (context) => getEntity(context, "confirm")
                }), 
              },
              {
                target: "ConfirmVideo",
                cond: (context) => getIntent(context) === "confirm" && context.recResult[0].confidence <= 0.85,
                actions: assign({
                  confirm: (context) => context.nluResult.query,
                }), 
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
                "Sorry, I think I dozed off for a second."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            //prompt states here: 
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
                          value: `So ${context.name} would you maybe like me to show you a video about ${context.personIs}? Please note that I can only show a few celebrity videos for now. You can always say 'help' to ask for further explanation.`
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
                          value: `${context.name}, would you like to see a video about ${context.personIs}?`
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
                          value: `Last chance ${context.name}. Should I open Youtube or not?`
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
                      value: "Very Well! System shutting down."
                    })),
                    on: { ENDSPEECH: "#init" },
                  },
                },
              },
          },},
          nomatch: {
            id: "nomatch",
            entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
            on: { ENDSPEECH: "prompt.prompt2" },
          },
        },
        },
        //state to confrim rejection here
        ConfirmNoVideo: { 
          id:"ConfirmNoVideo",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "showAVideo",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "denyVideo",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, you don't want to see a video?","Are you 100% sure you DON'T want me to open Youtube?","Last chance! Are you positive about me not showing you a video?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        //state to accept video answer here => are you sure you want to see a video?
        ConfirmVideo: { 
          id:"ConfirmVideo",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "showAVideo",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "acceptVideo",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, you WANT to see a video?","Are you 100% sure you WANT me to open Youtube?","Last chance! Are you positive about me showing you a video?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        denyVideo: {
          entry: say("Okay!"),
          on: { ENDSPEECH: "denyMeeting" },
          },
        acceptVideo: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Here is ${context.personIs}'s channel on Youtube! Feel free to choose a video of your likings.`
          })),
          on: { ENDSPEECH: "playVideoOfCeleb"}, 
          },
          playVideoOfCeleb: {
            entry: "playVideo",
            always: "#init"
          },
        denyMeeting: {
          id: "denyMeeting",
          entry: say("Very well! I hope the information I gave you, where enough then. Have a wonderful day!"),
          on: { ENDSPEECH: "#init" }, //youtube video option here later 
        },
        acceptMeeting: {
          id: "acceptMeeting",
          entry: [
            say("That's so great to hear! Hope it goes exactly as you expect!"),
            assign((context) => ({title: `meeting with ${context.personIs}`}))
          ],
          on: { ENDSPEECH: "askDate" },
          },
        organizeMeeting: { //4th state that's linked to create a meeting option => title of meeting
          initial: "prompt",
          entry: [assign({ count: 1 })],
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "info",
                cond: (context ) => !!getEntity(context, "title") && context.recResult[0].confidence > 0.7,
                actions: assign({
                  title: (context) => getEntity(context, "title"),
                }),
              },
              {
                target: "ConfirmTitle",
                cond: (context ) => !!getEntity(context, "title") && context.recResult[0].confidence <= 0.7,
                actions: assign({
                  title: (context) => getEntity(context, "title"),
                }),
              },
              {
                target: "#helpMeeting",
                cond: (context) => !!getHelp(context),
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
                "I can't hear you speaking."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("Let's create a meeting! What is it about? You can always say 'help' to ask for further explanation.","What title would you like for your meeting?","Last chance! What's the name of the meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        ConfirmTitle: {  //confirm title of meeting state
          id: "ConfirmTitle",
          initial: "prompt",
          entry: [assign({ count: 1 })],
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "organizeMeeting",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                })
              },
              {
                target: "info",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                })
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
                "Sorry, I think I dozed off for a second."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            //prompt states here: 
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
                          value: `Are you sure you want your meeting to be called ${context.title}?`
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
                          value: `Should I give your meeting the title ${context.title}?`
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
                          value: `Last chance ${context.name}. Are you sure you want to create a meeting titled ${context.title}?`
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
                      value: "Very Well! System shutting down."
                    })),
                    on: { ENDSPEECH: "#init" },
                  },
                },
              },
          },},
          nomatch: {
            id: "nomatch",
            entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
            on: { ENDSPEECH: "prompt.prompt2" },
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
          entry: [assign({ count: 1 })],
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "date",
                cond: (context) => !!getEntity(context, "day") && context.recResult[0].confidence > 0.7,
                actions: assign({
                  day: (context) => getEntity(context, "day"),
                }), 
              },
              {
                target: "ConfirmDate",
                cond: (context) => !!getEntity(context, "day") && context.recResult[0].confidence <= 0.7,
                actions: assign({
                  day: (context) => getEntity(context, "day"),
                }), 
              },
              {
                target: "#helpDay",
                cond: (context) => !!getHelp(context),
              },
              {
                target: ".nomatch",
              },
            ],
            TIMEOUT: ".noinput",
          },
          // ...promptFunction("On which day is the meeting taking place?")
          states:{
            noinput:{
              id: "noinput",
              entry: [say(
                "I'm afraid I can't hear you."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("On which day is the meeting taking place? You can always say 'help' to ask for further explanation.","I would like tha day of your meeting, please!","Last chance! Can I please have the day of your meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        ConfirmDate: { // state 2 of confirm states in welcome ==> confrim question option
          id:"ConfirmDate",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "askDate",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "date",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
                          value: `So, ${context.name}, are you sure your meeting is for ${context.day}?`
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
                          value: `Should I arrange the meeting for ${context.day}?`
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
                          value: `Is your meeting for ${context.day}, ${context.name}? Last chance to answer!`
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
                      value: "Very Well! System shutting down."
                    })),
                    on: { ENDSPEECH: "#init" },
                  },
                },
              },
          },},
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
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
          entry: [assign({ count: 1 })],
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "negative",
                cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence > 0.85,
                actions: assign({
                  reject: (context) => getEntity(context, "reject"),
                }), 
              },
              {
                target: "ConfirmNegative",
                cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence <= 0.85,
                actions: assign({
                  reject: (context) => getEntity(context, "reject"),
                }), 
              },
              {
                target: "positive",
                cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence > 0.85,
                actions: assign({
                  confirm: (context) => getEntity(context, "confirm"),
                }), 
              },
              {
                target: "ConfirmPositive",
                cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence <= 0.85,
                actions: assign({
                  confirm: (context) => getEntity(context, "confirm"),
                }), 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
                "Did you say something?"
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("Will it take the whole day? You can always say 'help' to ask for further explanation.","Uh, should I mark the whole day?","This is the last time you can answer. Is your meeting scheduled for the whole day?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        // here goes the confirm negative state
        ConfirmNegative: { 
          id:"ConfirmNegative",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "WholeDay",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "negative",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, your meeting will NOT take the whole day and proceed to choosing a specific time?","Would you like to choose the time then?","Last chance! Do you want me to ask about time?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        negative: {
          entry: say("Very well then!"),
          on: { ENDSPEECH: "Time" },
        },
        // here goes the confirm positive state
        ConfirmPositive: { 
          id:"ConfirmPositive",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "WholeDay",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "positive",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, your meeting WILL take the whole day?","Should I seal the meeting for the whole day?","Last chance! Is the meeting lasting the whole day?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        positive: {
          entry: say("Whole day, huh? Make sure to grab some coffee and a small snack then!"),
          on: { ENDSPEECH: "meetConfirmWholeDay" },
        },
        meetConfirmWholeDay: {
            id: "meetConfirmWholeDay",
            entry: [assign({ count: 1 })],
            initial: "prompt",
            on: {
              RECOGNISED: [
                {
                  target: "#ShutDown",
                  cond: (context) => !!getEntity(context, "shutDown"),
                },
                {
                  target: "wholeDayRethink",
                  cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence > 0.85,
                  actions: assign({
                    reject: (context) => getEntity(context, "reject")
                  })
                },
                {
                  target: "ConfirmRethink",
                  cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence <= 0.85,
                  actions: assign({
                    reject: (context) => getEntity(context, "reject")
                  })
                },
                {
                  target: "wholeDayPositive",
                  cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence > 0.85,
                  actions: assign({
                    confirm: (context) => getEntity(context, "confirm")
                  })
                },
                {
                  target: "ConfirmCreation",
                  cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence <= 0.85,
                  actions: assign({
                    confirm: (context) => getEntity(context, "confirm")
                  })
                },
                {
                  target: "#helpConfirmOrReject",
                  cond: (context) => !!getHelp(context),
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
                  "That's odd. I don't hear your voice."
                )],
                on: { ENDSPEECH: "prompt" },
              },
              //prompt states here: 
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
                            value: `So, ${context.name} do you want me to create a meeting titled ${context.title}, for ${context.day} for the whole day? You can always say 'help' to ask for further explanation.`
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
                            value: `Should I create a meeting titled ${context.title}, for ${context.day} for the whole day?`
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
                            value: `Am I creating the meeting or not? Last chance to answer!`
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
                        value: "Very Well! System shutting down."
                      })),
                      on: { ENDSPEECH: "#init" },
                    },
                  },
                },
            },},
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
          },
        },
        // confirm rething state here => are you sure you do not want to creare the meeting?
        ConfirmRethink: { 
          id:"ConfirmRethink",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetConfirmWholeDay",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "wholeDayRethink",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure, you DO NOT want to create the meeting and return to the home page?","Are you sure you want to return to the home page?","Last chance! If you reply 'yes' your meeting will be canceled. Do you want to proceed?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        // confirm meeting for the whole day state here => are you sure you want to create the meeting for the whole day?
        ConfirmCreation: { 
          id:"ConfirmCreation",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetConfirmWholeDay",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "wholeDayPositive",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("If you reply yes, your meeting will be created and you won't be able to make any changes. Do you want to proceed?","Are you sure, you WANT to create the meeting?","Last chance! Your meeting will be officially created. Do you want to proceed?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        wholeDayPositive: {
          entry: say("Great!"),
          on: { ENDSPEECH: "CreatedMeeting" },
        },
        wholeDayRethink: {
          id: "wholeDayRethink",
          entry: say("Very well! Starting over!"),
          on: { ENDSPEECH: "welcome" },
        },
        Time: {
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "time",
                cond: (context) => !!getEntity(context, "time") && context.recResult[0].confidence > 0.8,
                actions: assign({
                  time: (context) => getEntity(context, "time"),
                }), 
              },
              {
                target: "ConfirmTime",
                cond: (context) => !!getEntity(context, "time") && context.recResult[0].confidence <= 0.8,
                actions: assign({
                  time: (context) => getEntity(context, "time"),
                }), 
              },
              {
                target: "#helpTime",
                cond: (context) => !!getHelp(context),
              },
              {
                target: ".nomatch",
              },
            ],
            TIMEOUT: ".noinput",
          },
          // ...promptFunction("At what time is your meeting taking place?")
          states:{
            noinput:{
              id: "noinput",
              entry: [say(
                "Sorry, I'm afraid I don't hear you speaking."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("At what time is your meeting taking place? You can always say 'help' to ask for further explanation.","Could you please tell me the time of your meeting?","Last chance! Your meeting should be scheduled for?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        // confrim time state => are sure the meeting is at that specific time?
        ConfirmTime: { 
          id:"ConfirmTime",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "Time",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "time",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            // ...promptFunction("Are you sure, your meeting is at that ","Are you sure about the day of your meeting?","Last chance! Do you want me to put your meeting on that day?"),
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
                          value: `So, ${context.name}, are you sure your meeting is at ${context.time}?`
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
                          value: `Should I arrange the meeting for ${context.time}?`
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
                          value: `Is your meeting at ${context.time}, ${context.name}? Last chance to answer!`
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
                      value: "Very Well! System shutting down."
                    })),
                    on: { ENDSPEECH: "#init" },
                  },
                },
              },
          },},
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
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
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetday",
                cond: (context) => !!getEntity(context, "daytime") && context.recResult[0].confidence > 0.8,
                actions: assign({
                  daytime: (context) => getEntity(context, "daytime"),
                }), 
              },
              {
                target: "ConfirmDaytime",
                cond: (context) => !!getEntity(context, "daytime") && context.recResult[0].confidence <= 0.8,
                actions: assign({
                  daytime: (context) => getEntity(context, "daytime"),
                }), 
              },
              {
                target: "#helpDaytime",
                cond: (context) => !!getHelp(context),
              },
              {
                target: ".nomatch",
              },
            ],
            TIMEOUT: ".noinput",
          },
          // ...promptFunction("Could you please be a bit more specific about the daytime? Is your meeting take place in the morning, during lunch, in the afternoon, at night?")
          states:{
            noinput:{
              id: "noinput",
              entry: [say(
                "Is this microphone working? I don't hear a single sound."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("Could you please be a bit more specific about the daytime? You can always say 'help' to ask for further explanation.","Is your meeting take place in the morning, during lunch, in the afternoon, at night?","Last chance! In which part of the day should I place your meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        // confirm state about part of day here => are you sure the meeting is during that part of day?
        ConfirmDaytime: { 
          id:"ConfirmDaytime",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "PartOfDay",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "meetday",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
                          value: `So, ${context.name}, are you sure your meeting is ${context.daytime}?`
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
                          value: `Should I arrange the meeting ${context.daytime}?`
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
                          value: `Is your meeting ${context.daytime}, ${context.name}? Last chance to answer!`
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
                      value: "Very Well! System shutting down."
                    })),
                    on: { ENDSPEECH: "#init" },
                  },
                },
              },
          },},
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
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
          id: "meetConfirm",
          entry: [assign({ count: 1 })],
            initial: "prompt",
            on: {
              RECOGNISED: [
                {
                  target: "#ShutDown",
                  cond: (context) => !!getEntity(context, "shutDown"),
                },
                {
                  target: "rethink",
                  cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence > 0.85,
                  actions: assign({
                    reject: (context) => getEntity(context, "reject")
                  })
                },
                {
                  target: "ConfirmRejection",
                  cond: (context) => !!getEntity(context, "reject") && context.recResult[0].confidence <= 0.85,
                  actions: assign({
                    reject: (context) => getEntity(context, "reject")
                  })
                },
                {
                  target: "posConfirmation",
                  cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence > 0.85,
                  actions: assign({
                    confirm: (context) => getEntity(context, "confirm")
                  })
                },
                {
                  target: "ConfirmMeeting",
                  cond: (context) => !!getEntity(context, "confirm") && context.recResult[0].confidence <= 0.85,
                  actions: assign({
                    confirm: (context) => getEntity(context, "confirm")
                  })
                },
                {
                  target: "#helpConfirmOrReject",
                  cond: (context) => !!getHelp(context),
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
                  "I don't hear you."
                )],
                on: { ENDSPEECH: "prompt" },
              },
              //prompt states here: 
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
                            value: `So ${context.name} do you want me to create a meeting titled ${context.title}, for ${context.day} at ${context.time} ${context.daytime}? You can always say 'help' to ask for further explanation.`
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
                            value: `Should I create a meeting titled ${context.title}, for ${context.day} at ${context.time} ${context.daytime}?`
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
                            value: `Am I creating the meeting ${context.title}, for ${context.day} at ${context.time} ${context.daytime} or not? Last chance to answer!`
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
                        value: "Very Well! System shutting down."
                      })),
                      on: { ENDSPEECH: "#init" },
                    },
                  },
                },
            },},
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
          },
        },
        //confrim state for confirmig the rejection of the meeting => are you sure you do not want to create the meeting titled X on X at X?
        ConfirmRejection: { 
          id:"ConfirmRejection",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetConfirm",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "rethink",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure you want to CANCEL the meeting and return to the home page? If you reply 'yes' your meetinf will be canceled!","Your meeting will be canceled. Do ypu wish to proceed?","Last chance to change you mind! Do you want to cancel the meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
            },
            },
        },
        //confirm state for confirming the acceptance of the meeting => are you sure you DO want to create the meeting titled X on X at X?
        ConfirmMeeting: { 
          id:"ConfirmMeeting",
          entry: [assign({ count: 1 })],
          initial: "prompt",
          on: {
            RECOGNISED: [
              {
                target: "#ShutDown",
                cond: (context) => !!getEntity(context, "shutDown"),
              },
              {
                target: "meetConfirm",
                cond: (context) => getIntent(context) === "reject",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "posConfirmation",
                cond: (context) => getIntent(context) === "confirm",
                actions: assign({
                  confirm: (context) => context.nluResult.query
                }) 
              },
              {
                target: "#helpConfirmOrReject",
                cond: (context) => !!getHelp(context),
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
            ...promptFunction("Are you sure you want to CREATE the meeting? If you reply 'yes' your meetinf will be officially created!","Your meeting will be created and you won't be able to make any changes. Do ypu wish to proceed?","Last chance to change your mind! Do you want to create the meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt.prompt2" },
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
          on: { ENDSPEECH: "playSpotify" },
        },
      playSpotify: {
        entry: "playMusic",
        always: "#init"
      },
      },
    },
  },
};

const kbRequest = (text: string) =>
  fetch(
    new Request(
      `https://cors.eu.org/https://api.duckduckgo.com/?q=${text}&format=json&skip_disambig=1`
    )
  ).then((data) => data.json());

// Part 2.3 here in prose and code ideas: 
// Question: Can you implement a similar threshold for natural language understanding? How can 
//it be combined with the ASR threshold? Justify your choice and provide a sketch implementation.

//Answer: For this part I thought of using the getIntent function and getEntity functio (the later probably with a different name now) I created for Lab4. 
//In more detail, I was thinking of checkig the confidence score in the entities and intents the system would pick up from the azure (nluResult). 
//That way, we could deal with unexpected input as if we already have it. For instance, in my azure grammar, I have the phrase "I would like to create a dinner date" with
// the words dinner date being the entities. That means that we could change this 2 words with any 2 word sequence like coffee date, doctor meeting, etc. The app would be
//more prepared when handling user input and less confused. Of course there would be cases where we would still have the no match state appearing. However this times will be way
//less in count than just usig the regular grammar, I do now. My idea of the code was something like this: 

//context.nluResult.prediction.entities[0].confidenceScore >= 1 then continue to the next state
//or context.nluResult.prediction.entities[0].confidenceScore < 1 then move the confirmation state => Did you mean that? Are you sure you would like that? etc...
//we could also do it with changing the entities with intents like so: 
//context.nluResult.prediction.intents[0].confidenceScore >= 1 then continue to the next state
//context.nluResult.prediction.intents[0].confidenceScore < 1 or move to the confirmation state => Did you mean that? Are you sure you would like that? etc...

//so a full example of the code for part 3 is for example the create a meeting state we could have something like this: 
/* const getEntityNLU = (context: SDSContext, category: string) => {
  const result = [];
  const entities = context.nluResult.prediction.entities
  for (let i = 0; i < entities.length; i++) {
    if (entities[i].category === category) {
      result.push(entities[i].text.replace("é","e").replace(/\.$/g, ""));
      return result
    }
  }
  return false;
};

organizeMeeting: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "info",
            cond: (context ) => !!getEntity(context, "meeting") && context.nluResult.prediction.entities[0].confidenceScore >= 1,
            actions: assign({
              title: (context) => context.nluResult.prediction.entities[0].text.replace(/\.$/g, ""),
            }),
          },
          {
            target: "ConfirmMeetingTitle", //the confirmation state
            cond: (context ) => !!getEntity(context, "meeting") && context.nluResult.prediction.entities[0].confidenceScore < 1,
            actions: assign({
              title: (context) => context.nluResult.prediction.entities[0].text.replace(/\.$/g, ""),
            }),
          },
          {
            target: "info",
            actions: assign({
              title: (context) => context.nluResult.query.replace(/\.$/g, ""),
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
                "I'm afraid I don't hear you."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("What kind of meeting is it?","How would you like your meeting to be called?","Last chance! What kind of meeting is it?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt" },
            },
            },
        },
      ConfirmMeetingTitle: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "info",
            cond: (context ) => getIntent(context) === "reject" // in states like this one that use the getIntent function we could use the context.nluResult.prediction.intents[0].confidenceScore < 1, and/or >= 1 respectively.
            actions: assign({
              title: (context) => context.nluResult.query.replace(/\.$/g, ""),
            }),
          },
          {
            target: "organizeMeeting", //the confirmation state
            cond: (context ) => getIntent(context) === "reject",
            actions: assign({
              title: (context) => context.nluResult.query.replace(/\.$/g, ""),
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
                "I'm afraid I don't hear you."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("Are you sure about your meetings title?", "Would you like to proceed?","Are you sure you would not like to change your meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt" },
            },
            },
        },
    info: { // the next state
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, ${context.title}`,
      })),
      on: { ENDSPEECH: "askDate" },
      },


      //I also tried to implement a mix of both for example using the getEntityNLU function and the context.recResult[0].confidence > 0.8 and context.recResult[0].confidence <= 0.8. But, I wasn't sure if something like this was correct, that's why I took it out. The example of the second code was this: 

organizeMeeting: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "info",
            cond: (context ) => !!getEntity(context, "meeting") && context.recResult[0].confidence > 0.8,
            actions: assign({
              title: (context) => context.nluResult.prediction.entities[0].text.replace(/\.$/g, ""),
            }),
          },
          {
            target: "ConfirmMeetingTitle", //the confirmation state
            cond: (context ) => !!getEntity(context, "meeting") && context.recResult[0].confidence <= 0.8,
            actions: assign({
              title: (context) => context.nluResult.prediction.entities[0].text.replace(/\.$/g, ""),
            }),
          },
          {
            target: "info",
            actions: assign({
              title: (context) => context.nluResult.query.replace(/\.$/g, ""),
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
                "I'm afraid I don't hear you."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("What kind of meeting is it?","How would you like your meeting to be called?","Last chance! What kind of meeting is it?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt" },
            },
            },
        },
      ConfirmMeetingTitle: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "info",
            cond: (context ) => getIntent(context) === "reject" // in states like this one that use the getIntent function we could use the context.nluResult.prediction.intents[0].confidenceScore < 1, and/or >= 1 respectively.
            actions: assign({
              title: (context) => context.nluResult.query.replace(/\.$/g, ""),
            }),
          },
          {
            target: "organizeMeeting", //the confirmation state
            cond: (context ) => getIntent(context) === "reject",
            actions: assign({
              title: (context) => context.nluResult.query.replace(/\.$/g, ""),
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
                "I'm afraid I don't hear you."
              )],
              on: { ENDSPEECH: "prompt" },
            },
            ...promptFunction("Are you sure about your meetings title?", "Would you like to proceed?","Are you sure you would not like to change your meeting?"),
            nomatch: {
              id: "nomatch",
              entry: say("Sorry, I'm afraid I didn't hear you. Could you please speak a bit more clear and slow?"),
              on: { ENDSPEECH: "prompt" },
            },
            },
        },
    info: { // the next state
      entry: send((context) => ({
        type: "SPEAK",
        value: `OK, ${context.title}`,
      })),
      on: { ENDSPEECH: "askDate" },
      },
*/

//Note: However when I tried to ran it, it would display an error in the app when it would reach that point. (it wasn't able to find the confidence), or it would work but as if
//the confidence threshold was never implemented.