import { RoomState, PlayerSex, PokerKey, PokerCategory } from "./enum";

export interface IPlayerEntity {
    id: string;
    nickName: string;
    sex: PlayerSex;
    coin: number;
}

export interface IPlayerEntityInRoom {
    id: string;
    ready: boolean;
    owner: boolean;
}

export interface IRoomEntity {
    id: string;
    players: IPlayerEntityInRoom[];
    state: RoomState;
}

export interface IPokerEntity {
    key: PokerKey,
    category: PokerCategory
}

export type TPokerKeyCount = Map<PokerKey, number>;
export type TPokerKeyCountToKey = Map<number, PokerKey[]>;