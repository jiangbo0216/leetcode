import {zRealignment} from './z-realignment'

it('zRealignment' ,() =>{
  expect(zRealignment('ABCDEFG', 3)).
toMatchInlineSnapshot(`
"AFG
BE
CD
"
`)

expect(zRealignment('abcdefghijklmnopq', 5)).
toMatchInlineSnapshot(`
"ajk
bil
chm
dgnq
efop
"
`)
})