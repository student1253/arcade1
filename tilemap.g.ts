// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010a04040404040404040404040405010109030303030303030303030303060101090303080808030308080803030601010903060c0c0c09060c0c0c09030601020903060c0c0c09060c0c0c09030601020903060c0c0c09060c0c0c090306010209030304040403030404040303060102090303080808030308080803030601010903060c0c0c09060c0c0c09030601010903060c0c0c09060c0c0c09030601010903060c0c0c09060c0c0c090306010109030304040403030404040303060201090303030303030303030303030602010b080808080808080808080808070201010101010101010102020202020101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
