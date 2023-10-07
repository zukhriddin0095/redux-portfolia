// import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   skills: [],
// };

// export const getSkills = createAction("skill/getSkills");
// export const deleteSkill = createAction("skill/deleteSkill");
// export const editSkill = createAction("skill/editSkill");
// export const addSkill = createAction("skill/addSkill", ({ name, percent }) => {
//   return {
//     payload: {
//       name,
//       percent,
//       id: nanoid(),
//     },
//   };
// });

// // const skillReducer = createReducer(initialState, {
// //   [addSkill]: (state, { payload }) => {
// //     state.skills.push(payload);
// //   },
// //   [deleteSkill]: (state, { payload }) => {
// //     state.skills = state.skills.filter((el) => el.id !== payload);
// //   },
// //   // [editSkill]: (state, {payload}) => {
// //   //  let skill = state.skills.find(el => el.id === payload) 
// //   //   state.selected = payload
// //   // }
// // });
// const skillReducer = createReducer(initialState, (builder) => {
//     builder.addCase(addSkill, (state, { payload }) => {
//     state.skills.push(payload);
//   }).
//   addCase(deleteSkill, (state, { payload }) => {
//     state.skills = state.skills.filter((el) => el.id !== payload);
//   })
//   // [editSkill]: (state, {payload}) => {
//   //  let skill = state.skills.find(el => el.id === payload)
//   //   state.selected = payload
//   // }
// });

// export default skillReducer;



import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
};

export const getSkills = createAction("skill/getSkills");
export const deleteSkill = createAction("skill/deleteSkill");
export const editSkill = createAction("skill/editSkill");
export const addSkill = createAction("skill/addSkill", ({ name, percent }) => {
  return {
    payload: {
      name,
      percent,
      id: nanoid(),
    },
  };
});

// const skillReducer = createReducer(initialState, {
//   [addSkill]: (state, { payload }) => {
//     state.skills.push(payload);
//   },
//   [deleteSkill]: (state, { payload }) => {
//     state.skills = state.skills.filter((el) => el.id !== payload);
//   },
//   // [editSkill]: (state, {payload}) => {
//   //  let skill = state.skills.find(el => el.id === payload)
//   //   state.selected = payload
//   // }
// });
const skillReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addSkill, (state, { payload }) => {
      state.skills.push(payload);
    })
    .addCase(deleteSkill, (state, { payload }) => {
      state.skills = state.skills.filter((el) => el.id !== payload);
    });
  [editSkill]: (state, {payload}) => {
   let skill = state.skills.find(el => el.id === payload)
    state.selected = payload
  }
});

export default skillReducer;
