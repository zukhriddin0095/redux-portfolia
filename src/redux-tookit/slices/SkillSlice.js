import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  selected: null,
  isModalOpen: false,
};

export const getSkills = createAction("skill/getSkills");
export const showModal = createAction("skill/showModal");
export const deleteSkill = createAction("skill/deleteSkill");
export const controlModal = createAction("skill/controlModal");
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

const skillReducer = createReducer(initialState, {
  [showModal]: (state, { payload }) => {
    state.isModalOpen = true;
    payload.resetFields();
    state.selected = null;
  },
  [controlModal]: (state) => {
    state.isModalOpen = !state.isModalOpen;
  },
  [addSkill]: (state, { payload }) => {
    if (state.selected === null) {
      state.skills.push(payload);
    } else {
      state.skills = state.skills.map((el) => {
        if (el.id === state.selected) {
          return payload;
        } else {
          return el;
        }
      });
    }
  },
  [deleteSkill]: (state, { payload }) => {
    state.skills = state.skills.filter((el) => el.id !== payload);
  },
  [editSkill]: (state, { payload: { id, form } }) => {
    state.isModalOpen = true;
    let skill = state.skills.find((el) => el.id === id);
    state.selected = id;
    form.setFieldsValue(skill);
  },
});

export default skillReducer;
