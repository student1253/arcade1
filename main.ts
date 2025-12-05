controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, kočka, směrX, směrY)
    pause(200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function () {
    nepřítelživoty += -1
    rychlost += 10
    info.changeScoreBy(1)
    pause(200)
})
let směrY = 0
let směrX = 0
let projectile: Sprite = null
let kočka: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
kočka = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
kočka.setPosition(44, 47)
info.setScore(0)
info.setLife(3)
controller.moveSprite(kočka, 100, 100)
let nepřítel = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Enemy)
nepřítel.setPosition(129, 100)
let nepřítelživoty = 10
let rychlost = 0
forever(function () {
    if (kočka.overlapsWith(nepřítel)) {
        info.changeLifeBy(-1)
        pause(500)
    }
    if (nepřítelživoty == 0) {
        game.gameOver(true)
    }
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        směrY = -100
        směrX = 0
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        směrY = 100
        směrX = 0
    }
})
forever(function () {
    nepřítel.follow(kočka, rychlost)
    scene.cameraFollowSprite(kočka)
})
forever(function () {
    if (controller.right.isPressed()) {
        směrY = 0
        směrX = 100
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        směrY = 0
        směrX = -100
    }
})
