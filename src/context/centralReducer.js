// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "SELECT_SERVICE":
      return {
        ...state,
        user: {
          ...state.user,
          service: action.payload,
        },
      }
    case "REMOVE_SERVICE":
      return {
        ...state,
        user: {
          ...state.user,
          service: "empty",
        },
      }
    case "SUBMIT_CONSENT_FORM":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
          suitable: true,
          quest1: action.payload.question1,
          quest2: action.payload.question2,
          quest3: action.payload.question3,
          quest4: action.payload.question4,
          quest5: action.payload.question5,
          quest6: action.payload.question6,
          quest7: action.payload.question7,
          quest8: action.payload.question8,
          quest9: action.payload.question9,
          quest10: action.payload.question10,
          quest11: action.payload.question11,
          quest12: action.payload.question12,
          quest13: action.payload.question13,
          quest14: action.payload.question14,
          quest15: action.payload.question15,
          quest16: action.payload.question16,
          quest17: action.payload.question17,
          namePrint: action.payload.namePrint,
          dateSign: action.payload.dateSign,
          canvas: action.payload.canvas,
          
        },
      }
    case "SET_TIME":
      return {
        ...state,
        user: {
          ...state.user,
          time: action.payload.time,
          timeUnix: +state.user.dateUnix + action.payload.timeUnix
        },
      }
    case "SET_DATE":
      return {
        ...state,
        user: {
          ...state.user,
          date: action.payload.date,
          dateUnix: action.payload.dateUnix
        },
      }
    default:
      return state
  }
}
