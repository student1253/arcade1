// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000404040404040404040404040404040404050c0c0c0c0c0c0c0c0c0c0c0c0b0404060d0d0d0d0d0d0d0d0d0d0d0d0a0404060d0d0808080d0d0808080d0d0a0404060d0a0e0f10060a0e0f10060d0a0404060d0a0e0f10060a0e0f10060d0a0404060d0a010203060a010203060d0a0404060d0d0c0c0c0d0d0c0c0c0d0d0a0404060d0d0808080d0d0808080d0d0a0404060d0a0e0f10060a0e0f10060d0a0404060d0a0e0f10060a0e0f10060d0a0404060d0a010203060a010203060d0a0404060d0d0c0c0c0d0d0c0c0c0d0d0a0404060d0d0d0d0d0d0d0d0d0d0d0d0a040407080808080808080808080808090404040404040404040404040404040404`, img`
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
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
