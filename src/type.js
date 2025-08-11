'use strict';

new TypeIt('.home__title--strong',{
    loop: true,
    speed: 100,
})
.pause(2000)
.delete()
.type('Front-end Engineer')
.pause(1000)
.move(-8)
.delete(10)
.type('Back-end ')
.pause(1000)
.move(null,{ to:'END'})
.pause(1000)
.delete()
.pause(500)
.type('Developer')
.pause(1000)
.delete()

.go();
