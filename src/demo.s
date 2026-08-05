*=========================================================================*
* AMIGA 500 DEMO - Bouncing checkered ball                                *
*                                                                          *
* Pure 68000 assembly, direct custom-chip programming (no Intuition,      *
* no bitplanes). The background gradient is drawn entirely by the        *
* copper (changing COLOR00 per raster line); the ball is hardware         *
* sprite 0, moved every frame by rewriting its POS/CTL words.             *
*                                                                          *
* Assemble with vasm (mot syntax), Amiga-hunk executable output:          *
*   vasmm68k_mot -Fhunkexe -o demo src/demo.s -I include                  *
*                                                                          *
* Run from AmigaDOS (CLI) or Workbench on a real/emulated Amiga 500.      *
* Exit: this demo takes over the whole machine and never hands control    *
* back to the OS (classic "coma" style, like most 1980s/90s one-file      *
* demos) - press the emulator's Reset (Ctrl-Amiga-Amiga on real hw) to    *
* get back to Workbench.                                                  *
*=========================================================================*

        include "exec_lvo.i"
        include "hw.i"

GRAVITY         equ     $00002800       ; ~0.16 px/frame^2  (16.16 fixed point)
FLOORY          equ     (180<<16)       ; floor line, lores Y units
XMIN            equ     (20<<16)
XMAX            equ     (140<<16)
SETTLE_THRESH   equ     $00006000       ; below this |vy|, ball has "settled"
DAMPING_SHIFT   equ     2               ; bounce keeps 3/4 of speed (1 - 1/4)

*-------------------------------------------------------------------------
* Entry point
*-------------------------------------------------------------------------
        SECTION demo,CODE

start:
        move.l  4.w,a6
        jsr     _LVOForbid(a6)          ; stop task switching, we own the CPU now

        lea     CUSTOM,a5               ; a5 = custom chip base, kept for whole program
        lea     vars(pc),a4             ; a4 = our variables, kept for whole program

        move.w  #$7fff,_INTENA(a5)      ; disable all interrupts (kills the OS'
        move.w  #$7fff,_INTREQ(a5)      ; own vblank server so our copper sticks)
        move.w  #$7fff,_DMACON(a5)      ; disable all DMA before reconfiguring

        move.w  #$2c81,_DIWSTRT(a5)
        move.w  #$f4c1,_DIWSTOP(a5)

        lea     copperlist(pc),a0
        move.l  a0,_COP1LC(a5)

        lea     sprdata(pc),a0
        move.l  a0,_SPR0PTH(a5)         ; sprite 0 pointer, set once

        move.w  #$0fff,_COLOR17(a5)     ; ball color 1: white
        move.w  #$0f00,_COLOR18(a5)     ; ball color 2: red
        move.w  #$0000,_COLOR19(a5)     ; ball outline: black

        move.w  #$82a0,_DMACON(a5)      ; enable master+copper+sprite DMA

*-------------------------------------------------------------------------
* Main loop - runs once per video frame
*-------------------------------------------------------------------------
mainloop:
        bsr     waitline                ; sync to a fixed raster line (~50Hz)

        ;--- integrate vertical physics (16.16 fixed point) ---
        move.l  vely(a4),d1
        add.l   #GRAVITY,d1
        move.l  posy(a4),d0
        add.l   d1,d0
        cmp.l   #FLOORY,d0
        blt.s   .noyclip

        move.l  #FLOORY,d0              ; clamp to floor
        move.l  d1,d2
        asr.l   #DAMPING_SHIFT,d2
        sub.l   d2,d1                   ; d1 = vely * 3/4
        neg.l   d1                      ; bounce: reverse direction

        move.l  d1,d3
        bpl.s   .absok
        neg.l   d3
.absok:
        cmp.l   #SETTLE_THRESH,d3
        bge.s   .noreset
        moveq   #0,d0                   ; ball has settled -> relaunch from top
        moveq   #0,d1
.noreset:
        move.l  d1,vely(a4)
.noyclip:
        move.l  d0,posy(a4)

        ;--- integrate horizontal physics ---
        move.l  velx(a4),d1
        move.l  posx(a4),d0
        add.l   d1,d0
        cmp.l   #XMIN,d0
        bgt.s   .xminok
        move.l  #XMIN,d0
        tst.l   d1
        bpl.s   .xminok
        neg.l   d1
        move.l  d1,velx(a4)
.xminok:
        cmp.l   #XMAX,d0
        blt.s   .xmaxok
        move.l  #XMAX,d0
        move.l  velx(a4),d1
        bmi.s   .xmaxok
        neg.l   d1
        move.l  d1,velx(a4)
.xmaxok:
        move.l  d0,posx(a4)

        ;--- convert fixed-point position to sprite hardware coordinates ---
        move.l  posx(a4),d0
        swap    d0                      ; d0.w = integer lores X
        move.w  d0,d3

        move.l  posy(a4),d0
        swap    d0                      ; d0.w = integer lores Y
        move.w  d0,d4

        move.w  d3,d5                   ; HSTART = 129 + X*2
        add.w   d5,d5
        add.w   #129,d5

        move.w  d4,d6                   ; VSTART = 44 + Y
        add.w   #44,d6
        move.w  d6,d7
        add.w   #16,d7                  ; VSTOP = VSTART + sprite height

        move.w  d6,d2                   ; build SPR0POS
        lsl.w   #8,d2
        move.w  d5,d0
        lsr.w   #1,d0
        and.w   #$ff,d0
        or.w    d0,d2

        move.w  d7,d0                   ; build SPR0CTL
        and.w   #$ff,d0
        lsl.w   #8,d0
        move.w  d5,d1
        and.w   #1,d1
        or.w    d1,d0

        lea     sprdata(pc),a0
        move.w  d2,(a0)
        move.w  d0,2(a0)

        bra     mainloop

*-------------------------------------------------------------------------
* Wait until the raster reaches a fixed line (~once per frame, 50Hz PAL)
*-------------------------------------------------------------------------
waitline:
        move.l  _VPOSR(a5),d0
        and.l   #$1ff00,d0
        cmp.l   #(300<<8),d0
        bne.s   waitline
        rts

*-------------------------------------------------------------------------
* Variables (16.16 fixed point unless noted)
*-------------------------------------------------------------------------
        SECTION vars,DATA
posx:   dc.l    (20<<16)
posy:   dc.l    0
velx:   dc.l    $00014000       ; ~1.25 px/frame, rightward
vely:   dc.l    0

*-------------------------------------------------------------------------
* Copper list: static sky-to-ground colour gradient on COLOR00.
* Ends with the standard "wait forever" terminator so it holds until the
* next frame restarts it automatically.
*-------------------------------------------------------------------------
        SECTION copper,DATA
copperlist:
        dc.w    $2c07,$fffe             ; wait line $2c
        dc.w    $0180,$0002             ; COLOR00
        dc.w    $3507,$fffe             ; wait line $35
        dc.w    $0180,$0002             ; COLOR00
        dc.w    $3f07,$fffe             ; wait line $3f
        dc.w    $0180,$0013             ; COLOR00
        dc.w    $4907,$fffe             ; wait line $49
        dc.w    $0180,$0024             ; COLOR00
        dc.w    $5307,$fffe             ; wait line $53
        dc.w    $0180,$0125             ; COLOR00
        dc.w    $5d07,$fffe             ; wait line $5d
        dc.w    $0180,$0136             ; COLOR00
        dc.w    $6707,$fffe             ; wait line $67
        dc.w    $0180,$0146             ; COLOR00
        dc.w    $7107,$fffe             ; wait line $71
        dc.w    $0180,$0147             ; COLOR00
        dc.w    $7a07,$fffe             ; wait line $7a
        dc.w    $0180,$0258             ; COLOR00
        dc.w    $8407,$fffe             ; wait line $84
        dc.w    $0180,$0269             ; COLOR00
        dc.w    $8e07,$fffe             ; wait line $8e
        dc.w    $0180,$026a             ; COLOR00
        dc.w    $9807,$fffe             ; wait line $98
        dc.w    $0180,$027a             ; COLOR00
        dc.w    $a207,$fffe             ; wait line $a2
        dc.w    $0180,$038b             ; COLOR00
        dc.w    $ac07,$fffe             ; wait line $ac
        dc.w    $0180,$038c             ; COLOR00
        dc.w    $b607,$fffe             ; wait line $b6
        dc.w    $0180,$039d             ; COLOR00
        dc.w    $c007,$fffe             ; wait line $c0
        dc.w    $0180,$04ae             ; COLOR00 - horizon glow
        dc.w    $c007,$fffe             ; wait line $c0 (ground band starts)
        dc.w    $0180,$0210             ; COLOR00
        dc.w    $c907,$fffe             ; wait line $c9
        dc.w    $0180,$0100             ; COLOR00
        dc.w    $d307,$fffe             ; wait line $d3
        dc.w    $0180,$0100             ; COLOR00
        dc.w    $dc07,$fffe             ; wait line $dc
        dc.w    $0180,$0000             ; COLOR00
        dc.w    $e607,$fffe             ; wait line $e6
        dc.w    $0180,$0000             ; COLOR00
        dc.w    $f007,$fffe             ; wait line $f0
        dc.w    $0180,$0000             ; COLOR00
        dc.w    $ffff,$fffe             ; end of copper list (wait forever)

*-------------------------------------------------------------------------
* Sprite 0 data: POS/CTL (updated every frame) + 16 lines of checkered
* ball bitmap (2 bitplanes: color 1=white, color 2=red, color 3=outline)
* + terminating zero pair.
*-------------------------------------------------------------------------
        SECTION sprite,DATA
sprdata:
        dc.w    0,0                     ; SPR0POS,SPR0CTL - written each frame
        dc.w    $0000,$0000              ; row 0
        dc.w    $0f70,$0ef0              ; row 1
        dc.w    $1f08,$10f8              ; row 2
        dc.w    $3f0c,$20f4              ; row 3
        dc.w    $4e9e,$7162              ; row 4
        dc.w    $40de,$7f22              ; row 5
        dc.w    $449e,$7b62              ; row 6
        dc.w    $0e0e,$71f0              ; row 7
        dc.w    $7070,$0f8e              ; row 8
        dc.w    $7922,$46de              ; row 9
        dc.w    $7b02,$44fe              ; row 10
        dc.w    $7972,$468e              ; row 11
        dc.w    $30fc,$2f04              ; row 12
        dc.w    $10f8,$1f08              ; row 13
        dc.w    $0ef0,$0f70              ; row 14
        dc.w    $0000,$0000              ; row 15
        dc.w    0,0                      ; end-of-sprite terminator

        END
