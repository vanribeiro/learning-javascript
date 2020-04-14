/**
 * This code example was pulled and adapted from the book:
 * Title: Aprendendo Padrões de Projeto em PHP
 * Author: William Sanders
 * Language(wich I'm Reading): Portuguese
 */

interface IState{
    turnLightOn(): void;
    turnLightOff(): void;
}

export default IState;