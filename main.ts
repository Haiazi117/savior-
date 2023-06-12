namespace SpriteKind {
    export const Block = SpriteKind.create()
    export const kill = SpriteKind.create()
    export const wepon = SpriteKind.create()
    export const j = SpriteKind.create()
    export const OTHER = SpriteKind.create()
    export const Lastone = SpriteKind.create()
    export const bulet = SpriteKind.create()
    export const LASTOFHIM = SpriteKind.create()
    export const SECRET1 = SpriteKind.create()
    export const endsecret1 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LASTOFHIM, function (sprite, otherSprite) {
    game.splash("Please...")
    game.setGameOverMessage(false, "Don't give up on me")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite4, otherSprite4) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.SECRET1)
    game.showLongText("RUN", DialogLayout.Bottom)
    game.showLongText("RUN", DialogLayout.Bottom)
    game.showLongText("RUN RUN RUN RUN!", DialogLayout.Bottom)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
    mySprite3 = sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ........................22222...............................
        .......................2222222....................eee.......
        .....................22222222221.........eeeeeeeeeeeeeeee...
        ...................111222222222111.......eeeeeeeeeeeeeeeee..
        .................1111222222222111111....eeeeeeeeeeeeeeeeeee.
        ...............11211112222222211111111..eeeeeee555e5ee55eee.
        ..............112211811211212118111111..eee5e5e5eee5ee5e5ee.
        ..............112211211211111111111111..eee555e5eee5ee55eee.
        .............1112211111111111111111111..eee5e5e55ee5ee5eeee.
        .............1111111211111111111111aaa1.eeeeeee5eee5ee5eeee.
        .............1aaa111111111111111111aaa1.eeeeeee55eeeee5eeee.
        ..............aaa111111111111111111aaa1.eeeeeeeeeee5eeeeeee.
        ..............aaa1811111f1111111811111..eeee5e5eee5e5eeeeee.
        ..............111818111111111118181111..eee5e5e5ee555eeeeee.
        ..............111181811111111181811111..eee5e5e5ee5eeeeeeee.
        ..............11111818111111181811111...eeeeeeeeeee555eeeee.
        ...............111118181111181811111....eeeeeeeeeeeeeeeeeee.
        ................1111181888881811111.......eeeeeeeeeeeeeeee..
        ..................11118888888111...................e........
        ......................1111111......................e........
        .........................88........................e........
        .........................88.......................88........
        .........................88........................8........
        .........................88......................888........
        .........................88.....................88..........
        ........................8888.............88888888...........
        ....................8888.88.8.......888888..................
        ....................8....88.888888888.......................
        ....................8....88.................................
        ....................8....88.................................
        ...................8.....88.................................
        ...................8.....88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        ........................8888................................
        .......................8888.................................
        ......................8...88................................
        ......................8....8................................
        ......................8....8................................
        ....................888....888..............................
        ....................888....888..............................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile6`)
    mySprite3.follow(mySprite, 95)
    mySprite7 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 1 9 1 9 1 9 1 9 9 1 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 
        9 1 9 9 9 9 1 9 1 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 1 1 9 1 1 9 9 9 9 9 
        9 9 9 9 1 9 9 9 9 9 9 9 1 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.j)
    tiles.placeOnRandomTile(mySprite7, assets.tile`myTile10`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 4442, 856, 255, 0, 149, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 50)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 1 1 1 1 1 2 1 . . . . . 
        . . 1 2 2 1 2 2 1 2 1 . . . . . 
        . . 1 2 2 1 2 2 8 2 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 1 2 1 2 1 2 1 . . . . . 
        . . . 1 . 1 . 1 . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 1 1 1 1 1 2 1 . . . . . 
        . . 1 2 2 1 2 2 1 2 1 . . . . . 
        . . 1 2 2 1 2 2 8 2 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 1 2 1 2 1 2 1 1 . . . . . 
        . . . . 1 . 1 . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.splash("Finally...")
    game.splash("One down five to go.")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite3, otherSprite3) {
    game.setGameOverMessage(false, " HE wants revenge.")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OTHER, function (sprite3, otherSprite3) {
    game.splash("My will is not my own")
    game.setGameOverMessage(false, "Please help me")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SECRET1, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.SECRET1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    tiles.setCurrentTilemap(tilemap`level12`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile23`)
    game.showLongText("They didn't deserve to die the way they did..", DialogLayout.Bottom)
    mySprite11 = sprites.create(img`
        8 8 1 8 8 8 8 8 1 1 1 1 8 8 8 8 
        1 1 1 8 8 1 1 1 1 8 1 8 1 1 1 8 
        8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 1 
        8 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
        8 1 8 8 8 8 8 8 8 8 8 8 8 8 1 8 
        8 1 8 8 8 8 1 1 1 1 1 8 8 8 1 8 
        8 1 8 1 1 1 1 8 8 8 8 1 8 8 1 8 
        1 8 8 8 1 1 8 8 8 8 8 8 1 8 1 8 
        1 8 8 8 8 8 8 8 8 8 8 8 1 8 1 8 
        1 8 8 8 8 8 8 8 8 8 8 1 8 8 1 8 
        1 8 8 8 8 8 8 8 8 8 1 8 8 8 1 1 
        1 1 8 8 8 8 8 8 8 1 1 8 8 8 8 1 
        1 8 1 1 8 8 8 1 1 1 8 8 8 8 8 1 
        1 8 8 1 1 1 1 1 8 8 8 8 8 8 1 1 
        1 1 1 1 8 8 1 1 1 1 1 8 8 1 1 8 
        8 1 1 8 8 8 8 8 8 8 8 1 1 1 8 8 
        `, SpriteKind.endsecret1)
    tiles.placeOnRandomTile(mySprite11, assets.tile`myTile25`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.endsecret1, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.endsecret1)
    sprites.destroyAllSpritesOfKind(SpriteKind.SECRET1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite2 = sprites.create(img`
        1 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 8 8 8 8 8 1 8 8 8 1 1 
        1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 8 
        1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
        1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        1 8 8 1 8 1 8 1 1 8 1 1 8 8 8 1 
        1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        1 8 8 1 8 1 8 1 8 1 8 8 1 8 8 1 
        1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        8 1 8 1 8 1 1 1 8 1 8 8 1 8 8 1 
        8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
        1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
        8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile6`)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 1 1 1 1 1 2 1 . . . . . 
        . . 1 2 2 1 2 2 1 2 1 . . . . . 
        . . 1 2 2 1 2 2 1 2 1 . . . . . 
        . . 1 2 2 2 2 2 8 2 1 . . . . . 
        . . 1 2 2 2 2 2 2 2 1 . . . . . 
        . . 1 2 1 2 1 2 1 2 1 . . . . . 
        . . . 1 . 1 . 1 . 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    scene.cameraFollowSprite(mySprite)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 1 2 1 2 2 2 2 1 . . . 
        . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
        1 1 1 1 1 f f f 1 f f f 1 1 1 1 
        1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
        1 a a 1 1 f f f 1 f f f a a 1 1 
        1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
        . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 1 2 1 2 2 2 2 1 . . . 
        . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
        1 1 1 1 1 f f f 1 f f f 1 1 1 1 
        1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
        1 a a 1 1 f f f 1 f f f a a 1 1 
        1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
        . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 1 2 1 2 2 2 2 1 . . . 
        . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
        1 1 1 1 1 f f f 1 f f f 1 1 1 1 
        1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
        1 a a 1 1 f f f 1 f f f a a 1 1 
        1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
        . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile7`)
    tiles.placeOnRandomTile(MySprite5, assets.tile`myTile8`)
    tiles.placeOnRandomTile(MySprite6, assets.tile`myTile9`)
    mySprite4.follow(mySprite, 80)
    MySprite5.follow(mySprite, 80)
    MySprite6.follow(mySprite, 80)
    light.showAnimation(light.rainbowAnimation, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.j, function (sprite, otherSprite) {
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    game.splash("Finish this last maze..")
    game.splash("Then face his madness")
    tiles.setCurrentTilemap(tilemap`level8`)
    mySprite8 = sprites.create(img`
        1 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 
        1 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 
        1 5 1 1 5 5 5 5 5 5 5 5 1 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 5 5 1 5 5 
        5 1 5 5 5 5 5 5 5 5 5 5 5 1 1 5 
        5 1 5 1 1 1 5 5 5 5 5 5 5 5 1 5 
        5 1 5 1 1 1 1 1 1 5 5 5 5 5 1 5 
        1 5 5 5 5 5 1 1 1 5 5 5 5 1 1 5 
        1 5 5 5 5 5 5 5 1 5 5 5 1 5 5 5 
        5 1 5 5 5 5 5 5 1 5 5 5 1 1 1 1 
        5 1 5 5 5 5 5 5 5 5 5 5 1 1 5 1 
        5 5 1 5 5 5 5 5 5 5 5 5 5 1 5 1 
        5 1 5 5 5 5 5 1 1 5 5 5 5 5 5 1 
        5 5 1 5 5 5 1 1 1 5 5 1 1 1 1 1 
        5 5 1 1 1 1 5 5 1 1 1 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.Lastone)
    tiles.placeOnRandomTile(mySprite8, assets.tile`myTile23`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile17`)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 1 2 1 2 2 2 2 1 . . . 
        . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
        1 1 1 1 1 f f f 1 f f f 1 1 1 1 
        1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
        1 a a 1 1 f f f 1 f f f a a 1 1 
        1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
        . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.OTHER)
    MySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 1 2 1 2 2 2 2 1 . . . 
        . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
        1 1 1 1 1 f f f 1 f f f 1 1 1 1 
        1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
        1 a a 1 1 f f f 1 f f f a a 1 1 
        1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
        . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.OTHER)
    MySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 1 2 1 2 2 2 2 1 . . . 
        . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
        1 1 1 1 1 f f f 1 f f f 1 1 1 1 
        1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
        1 a a 1 1 f f f 1 f f f a a 1 1 
        1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
        . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.OTHER)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile20`)
    tiles.placeOnRandomTile(MySprite5, assets.tile`myTile19`)
    tiles.placeOnRandomTile(MySprite6, assets.tile`myTile18`)
    mySprite4.follow(mySprite, 80)
    MySprite5.follow(mySprite, 80)
    MySprite6.follow(mySprite, 80)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite5, otherSprite5) {
    game.setGameOverMessage(false, "They want revenge.")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.LASTOFHIM, function (sprite, otherSprite) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lastone, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.OTHER)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lastone)
    game.splash("Please end my suffering ")
    game.showLongText("Press A or Space bar to shoot", DialogLayout.Bottom)
    music.play(music.stringPlayable("D G F D G E F C ", 120), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level9`)
    mySprite9 = sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ........................22222...............................
        .......................2222222....................eee.......
        .....................22222222221.........eeeeeeeeeeeeeeee...
        ...................111222222222111.......eeeeeeeeeeeeeeeee..
        .................1111222222222111111....eeeeeeeeeeeeeeeeeee.
        ...............11211112222222211111111..eeeeeee555e5ee55eee.
        ..............112211811211212118111111..eee5e5e5eee5ee5e5ee.
        ..............112211211211111111111111..eee555e5eee5ee55eee.
        .............1112211111111111111111111..eee5e5e55ee5ee5eeee.
        .............1111111211111111111111aaa1.eeeeeee5eee5ee5eeee.
        .............1aaa111111111111111111aaa1.eeeeeee55eeeee5eeee.
        ..............aaa111111111111111111aaa1.eeeeeeeeeee5eeeeeee.
        ..............aaa1811111f1111111811111..eeee5e5eee5e5eeeeee.
        ..............111818111111111118181111..eee5e5e5ee555eeeeee.
        ..............111181811111111181811111..eee5e5e5ee5eeeeeeee.
        ..............11111818111111181811111...eeeeeeeeeee555eeeee.
        ...............111118181111181811111....eeeeeeeeeeeeeeeeeee.
        ................1111181888881811111.......eeeeeeeeeeeeeeee..
        ..................11118888888111...................e........
        ......................1111111......................e........
        .........................88........................e........
        .........................88.......................88........
        .........................88........................8........
        .........................88......................888........
        .........................88.....................88..........
        ........................8888.............88888888...........
        ....................8888.88.8.......888888..................
        ....................8....88.888888888.......................
        ....................8....88.................................
        ....................8....88.................................
        ...................8.....88.................................
        ...................8.....88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        .........................88.................................
        ........................8888................................
        .......................8888.................................
        ......................8...88................................
        ......................8....8................................
        ......................8....8................................
        ....................888....888..............................
        ....................888....888..............................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.LASTOFHIM)
    mySprite9.follow(mySprite, 55)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(mySprite9)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile24`)
    tiles.placeOnRandomTile(mySprite9, assets.tile`myTile22`)
})
let mySprite9: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite8: Sprite = null
let mySprite11: Sprite = null
let projectile: Sprite = null
let mySprite7: Sprite = null
let mySprite3: Sprite = null
let MySprite6: Sprite = null
let MySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
game.splash("Level 1.")
game.splash("Make your way through the maze..")
game.splash("But don't touch it.")
game.splash("あなたは彼らを助けなければなりません")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite2 = sprites.create(img`
    1 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 8 8 8 8 8 1 8 8 8 1 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 8 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 1 8 1 8 1 1 8 1 1 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 1 8 1 8 1 8 1 8 8 1 8 8 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    8 1 8 1 8 1 1 1 8 1 8 8 1 8 8 1 
    8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile6`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 2 2 2 2 2 2 2 1 . . . . . 
    . . 1 2 1 1 1 1 1 2 1 . . . . . 
    . . 1 2 2 1 2 2 1 2 1 . . . . . 
    . . 1 2 2 1 2 2 1 2 1 . . . . . 
    . . 1 2 2 2 2 2 8 2 1 . . . . . 
    . . 1 2 2 2 2 2 2 2 1 . . . . . 
    . . 1 2 1 2 1 2 1 2 1 . . . . . 
    . . . 1 . 1 . 1 . 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
scene.cameraFollowSprite(mySprite)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 1 2 1 2 2 2 2 1 . . . 
    . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
    1 1 1 1 1 f f f 1 f f f 1 1 1 1 
    1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
    1 a a 1 1 f f f 1 f f f a a 1 1 
    1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
    . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
    . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
MySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 1 2 1 2 2 2 2 1 . . . 
    . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
    1 1 1 1 1 f f f 1 f f f 1 1 1 1 
    1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
    1 a a 1 1 f f f 1 f f f a a 1 1 
    1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
    . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
    . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
MySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 1 2 1 2 2 2 2 1 . . . 
    . 1 1 1 1 1 1 1 1 2 2 1 1 1 1 . 
    1 1 1 1 1 f f f 1 f f f 1 1 1 1 
    1 a a 1 1 f 2 f 1 f 2 f a a 1 1 
    1 a a 1 1 f f f 1 f f f a a 1 1 
    1 1 1 8 1 1 2 1 1 1 1 8 1 1 1 . 
    . 1 1 1 8 1 1 1 1 1 8 1 1 1 . . 
    . 1 1 1 1 8 8 8 8 8 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite4, assets.tile`myTile7`)
tiles.placeOnRandomTile(MySprite5, assets.tile`myTile8`)
tiles.placeOnRandomTile(MySprite6, assets.tile`myTile9`)
mySprite4.follow(mySprite, 80)
MySprite5.follow(mySprite, 80)
MySprite6.follow(mySprite, 80)
let mySprite10 = sprites.create(img`
    1 8 8 8 1 1 1 1 8 8 8 8 8 8 1 8 
    1 1 1 1 8 8 1 1 1 1 8 8 1 1 1 1 
    1 1 8 8 8 8 8 1 1 1 1 1 1 8 8 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 8 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 8 
    1 1 8 8 8 8 1 1 1 1 1 8 8 8 1 8 
    1 1 8 8 8 8 1 f 1 f 1 8 8 8 1 8 
    1 1 1 8 8 8 1 1 1 6 1 8 8 8 1 8 
    1 1 1 8 8 8 1 1 1 1 1 8 8 8 1 8 
    1 1 1 8 8 8 1 1 1 1 1 8 8 8 1 8 
    1 1 1 1 8 8 8 8 8 8 8 8 8 8 1 1 
    8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 1 
    8 1 8 8 8 8 8 8 8 8 8 8 8 1 1 1 
    8 1 8 8 8 8 8 8 8 8 8 8 8 1 8 1 
    8 1 1 1 8 8 8 1 1 1 1 1 1 1 1 1 
    8 8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 
    `, SpriteKind.SECRET1)
tiles.placeOnRandomTile(mySprite10, assets.tile`myTile4`)
light.showAnimation(light.rainbowAnimation, 500)
