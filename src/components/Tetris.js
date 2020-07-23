import React, { useState } from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { createStage } from '../gameHelpers';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                            <div>
                                <Display text={`Score: ${score}`} />
                                <Display text={`rows: ${rows}`} />
                                <Display text={`Level: ${level}`} />
                            </div>
                        )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;