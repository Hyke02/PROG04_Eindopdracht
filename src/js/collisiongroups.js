import { CollisionEndEvent, CollisionGroup, CollisionGroupManager } from "excalibur";

export const player = CollisionGroupManager.create('player')
export const playerBullet = CollisionGroupManager.create('playerBullet')
export const enemy = CollisionGroupManager.create('enemy')
export const enemyBullet = CollisionGroupManager.create('enemyBullet')
