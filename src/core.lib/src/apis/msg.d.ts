import { Peer, RawMessage, SendMessageElement } from '@/core/entities';
import { GeneralCallResult } from '@/core/services/common';
export declare class NTQQMsgApi {
    static setEmojiLike(peer: Peer, msgSeq: string, emojiId: string, set?: boolean): Promise<unknown>;
    static getMultiMsg(peer: Peer, rootMsgId: string, parentMsgId: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    } | undefined>;
    static activateChat(peer: Peer): Promise<void>;
    static activateChatAndGetHistory(peer: Peer): Promise<void>;
    static setMsgRead(peer: Peer): Promise<GeneralCallResult>;
    static getMsgHistory(peer: Peer, msgId: string, count: number): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    static fetchRecentContact(): Promise<void>;
    static recallMsg(peer: Peer, msgIds: string[]): Promise<void>;
    static sendMsg(peer: Peer, msgElements: SendMessageElement[], waitComplete?: boolean, timeout?: number): Promise<RawMessage>;
    static forwardMsg(srcPeer: Peer, destPeer: Peer, msgIds: string[]): Promise<void>;
    static multiForwardMsg(srcPeer: Peer, destPeer: Peer, msgIds: string[]): Promise<RawMessage>;
}
