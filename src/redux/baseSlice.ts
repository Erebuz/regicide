import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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

const baseSlice = createSlice({
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
    setNewFace(state, action: PayloadAction<Face>) {
      state.health = state.stats[action.payload].health;
      state.weapon = state.stats[action.payload].weapon;
    },
    setFaceState(
      state,
      action: PayloadAction<{name: keyof Faces; state: boolean}>,
    ) {
      state.faces[action.payload.name] = action.payload.state;
    },
  },
});

export const {updateHealth, updateWeapon, setFaceState, setNewFace} =
  baseSlice.actions;
export default baseSlice.reducer;
