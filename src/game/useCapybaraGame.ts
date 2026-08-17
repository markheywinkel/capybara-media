import { useCallback, useState } from 'react';
import { advanceProductionDay, continueToNextDay, createInitialState, selectPitch, type GameState } from './engine';

export interface CapybaraGameApi {
  state: GameState;
  selectPitch: (pitchId: string) => void;
  advanceProductionDay: () => void;
  continueToNextDay: () => void;
}

export function useCapybaraGame(): CapybaraGameApi {
  const [state, setState] = useState<GameState>(() => createInitialState());

  return {
    state,
    selectPitch: useCallback((pitchId: string) => setState((s) => selectPitch(s, pitchId)), []),
    advanceProductionDay: useCallback(() => setState((s) => advanceProductionDay(s)), []),
    continueToNextDay: useCallback(() => setState((s) => continueToNextDay(s)), []),
  };
}
