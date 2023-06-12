@namespace
class SpriteKind:
    Block = SpriteKind.create()
    kill = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global mySprite8, mySprite
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    game.splash("His madness has weakend")
    game.splash("now finish this.")
    mySprite8 = sprites.create(img("""
            2 2 1 2 2 2 2 2 2 2 2 1 2 2 2 2 
                    2 2 2 1 1 1 1 2 2 2 2 2 2 2 2 1 
                    2 2 2 2 2 2 2 1 2 2 2 2 1 1 1 1 
                    2 2 2 2 2 2 2 2 1 1 1 1 2 2 2 1 
                    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    2 2 2 2 2 1 2 2 2 2 2 2 2 2 2 1 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 1 1 2 2 2 2 
                    2 2 2 2 2 1 2 2 2 2 1 1 2 2 2 2 
                    1 2 2 2 2 2 2 2 2 2 2 1 2 2 2 2 
                    1 1 2 2 2 2 2 1 1 1 1 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 2 2 2 2 2 1 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        """),
        SpriteKind.kill)
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile12
    """))
    mySprite = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . 1 2 2 2 2 2 2 2 1 . . . . . 
                    . . 1 2 1 1 1 1 1 2 1 . . . . . 
                    . . 1 2 2 1 2 2 1 2 1 . . . . . 
                    . . 1 2 2 1 2 2 1 2 1 . . . . . 
                    . . 1 2 2 2 2 2 1 2 1 . . . . . 
                    . . 1 2 2 2 2 2 2 2 1 . . . . . 
                    . . 1 2 1 2 1 2 1 2 1 . . . . . 
                    . . . 1 . 1 . 1 . 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.player)
    tiles.place_on_random_tile(mySprite8, assets.tile("""
        myTile13
    """))
sprites.on_overlap(SpriteKind.player, SpriteKind.Block, on_on_overlap)

def on_b_pressed():
    global myDart
    myDart = darts.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 8 8 8 8 . . . . . . . 
                    . . . . . 8 2 2 8 . . . . . . . 
                    . . . . . 8 2 2 8 . . . . . . . 
                    . . . . . 8 8 8 8 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.projectile)
    myDart.throw_dart()
    myDart.set_trace()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap2(sprite4, otherSprite4):
    global mySprite3, mySprite7
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    game.show_long_text("RUN", DialogLayout.BOTTOM)
    game.show_long_text("RUN", DialogLayout.BOTTOM)
    game.show_long_text("RUN RUN RUN RUN!", DialogLayout.BOTTOM)
    music.play(music.string_playable("E B C5 A B G A F ", 120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile11
    """))
    mySprite3 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    tiles.place_on_random_tile(mySprite3, assets.tile("""
        myTile6
    """))
    mySprite3.follow(mySprite, 95)
    mySprite7 = sprites.create(img("""
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
        """),
        SpriteKind.Block)
    tiles.place_on_random_tile(mySprite7, assets.tile("""
        myTile10
    """))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    game.set_game_over_message(False, " HE wants revenge.")
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap3)

def on_on_overlap4(sprite2, otherSprite2):
    global mySprite
    tiles.set_current_tilemap(tilemap("""
        level6
    """))
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile15
    """))
    mySprite = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . 1 2 2 2 2 2 2 2 1 . . . . . 
                    . . 1 2 1 1 1 1 1 2 1 . . . . . 
                    . . 1 2 2 1 2 2 1 2 1 . . . . . 
                    . . 1 2 2 1 2 2 1 2 1 . . . . . 
                    . . 1 2 2 2 2 2 1 2 1 . . . . . 
                    . . 1 2 2 2 2 2 2 2 1 . . . . . 
                    . . 1 2 1 2 1 2 1 2 1 . . . . . 
                    . . . 1 . 1 . 1 . 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.player)
sprites.on_overlap(SpriteKind.player, SpriteKind.kill, on_on_overlap4)

def on_on_overlap5(sprite5, otherSprite5):
    game.set_game_over_message(False, "They want revenge.")
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap5)

mySprite7: Sprite = None
mySprite3: Sprite = None
myDart: Dart = None
mySprite8: Sprite = None
mySprite: Sprite = None
game.splash("Level 1.")
game.splash("Make your way through the maze..")
game.splash("But don't touch it.")
game.splash("あなたは彼らを助けなければなりません")
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(mySprite2, assets.tile("""
    myTile6
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
scroller.scroll_background_with_camera(scroller.CameraScrollMode.BOTH_DIRECTIONS)
tiles.place_on_random_tile(mySprite, assets.tile("""
    myTile2
"""))
scene.camera_follow_sprite(mySprite)
mySprite4 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
MySprite5 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
MySprite6 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
tiles.place_on_random_tile(mySprite4, assets.tile("""
    myTile7
"""))
tiles.place_on_random_tile(MySprite5, assets.tile("""
    myTile8
"""))
tiles.place_on_random_tile(MySprite6, assets.tile("""
    myTile9
"""))
mySprite4.follow(mySprite, 80)
MySprite5.follow(mySprite, 80)
mySprite9 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . . . 8 2 2 8 . . . . . . . 
            . . . . . 8 2 2 8 . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.projectile)