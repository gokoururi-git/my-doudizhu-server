export enum PlayerSex {
    unknow = -1,
    male = 1,
    female
}

export enum RoomState {
    WAITTING_PLAYERS = 1,
    PROCESSING,
    FINISHED
}

export enum UserState {
    LEISURELY = 1,
    PLAYING,
    REVIEWING
}

export enum PokerKey {
    A = 1,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    J,
    Q,
    K,
    QUEEN,
    KING,
}

export enum PokerCategory {
    OTHER = -1,
    Heart = 1,
    Diamond,
    Spade,
    Club,
    
}

export enum PokerRuleSetKey {
    INVALID = -1,
    SINGLE = 1,
    PAIR,
    THREE,
    BOMB,
    THREE_WITH_SINGLE,
    THREE_WITH_PAIR,
    SEQUENCE,
    SEQUENCE_PAIR,
    SEQUENCE_THREE,
    SEQUENCE_BOMB,
    PLANE
}