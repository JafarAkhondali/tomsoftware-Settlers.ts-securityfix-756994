import { TexturePoint } from './texture-point';

export const TextureBlockSize = 2;

export interface ILandscapeTexture {
	getTextureA(tp: TexturePoint, x: number, y: number): [number, number];
	getTextureB(tp: TexturePoint, x: number, y: number): [number, number];
	getPattern(): TexturePoint[];
}