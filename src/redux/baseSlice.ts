import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';

export type Faces = {
  jack_diamonds: boolean;
  jack_hearts: boolean;
  jack_clubs: boolean;
  jack_spades: boolean;
  queen_diamonds: boolean;
  queen_hearts: boolean;
  queen_clubs: boolean;
  queen_spades: boolean;
  king_diamonds: boolean;
  king_hearts: boolean;
  king_clubs: boolean;
  king_spades: boolean;
};

export type Face = 'jack' | 'queen' | 'king';

const baseSlice = createSlice<
  {
    health: number;
    weapon: number;
    faces: Faces;
    currentFace: keyof Faces | null;
    stats: Record<Face, {health: number; weapon: number}>;
  },
  SliceCaseReducers<any>,
  string
>({
  name: 'state',
  initialState: {
    health: 0,
    weapon: 0,
    faces: {
      jack_diamonds: true,
      jack_hearts: true,
      jack_clubs: true,
      jack_spades: true,
      queen_diamonds: true,
      queen_hearts: true,
      queen_clubs: true,
      queen_spades: true,
      king_diamonds: true,
      king_hearts: true,
      king_clubs: true,
      king_spades: true,
    },
    currentFace: null,
    stats: {
      jack: {
        health: 20,
        weapon: 10,
      },
      queen: {
        health: 30,
        weapon: 15,
      },
      king: {
        health: 40,
        weapon: 20,
      },
    },
  },
  reducers: {
    updateHealth(state, action: PayloadAction<number>) {
      const new_stat = state.health + action.payload;
      state.health = new_stat < 0 ? 0 : new_stat;
    },
    updateWeapon(state, action: PayloadAction<number>) {
      const new_stat = state.weapon + action.payload;
      state.weapon = new_stat < 0 ? 0 : new_stat;
    },
    setNewFace(state, action: PayloadAction<keyof Faces>) {
      const type = action.payload.split('_')[0] as Face;

      state.health = state.stats[type].health;
      state.weapon = state.stats[type].weapon;
      state.currentFace = action.payload;
    },
    setFaceState(
      state,
      action: PayloadAction<{name: keyof Faces; state: boolean}>,
    ) {
      state.faces[action.payload.name] = action.payload.state;
    },
    killFace(state) {
      state.faces[state.currentFace] = false;
    },
    restoreFace(state) {
      state.faces[state.currentFace] = true;
    },
    refreshAll(state) {
      for (const key in state.faces) {
        state.faces[key] = true;
        state.health = 0;
        state.weapon = 0;
        state.currentFace = null;
      }
    },
  },
});

export const {
  updateHealth,
  updateWeapon,
  setFaceState,
  setNewFace,
  killFace,
  restoreFace,
  refreshAll,
} = baseSlice.actions;
export default baseSlice.reducer;
