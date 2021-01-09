/// <reference types="react" />
declare type ShouldForwardProp = (name: React.ReactText, defaultValidator: (p: React.ReactText) => boolean) => boolean;
export declare const shouldForwardProp: ShouldForwardProp;
declare type CreateShouldForwardProp = (blacklist: Array<string>) => (name: React.ReactText, defaultValidator: (p: React.ReactText) => boolean) => boolean;
export declare const createShouldForwardProp: CreateShouldForwardProp;
export {};
