*-----------------------------------------------------------------------*
* hw.i - Custom chip hardware register equates (Amiga OCS, $DFF000 base)*
* These are fixed physical addresses, identical on every OCS/ECS Amiga. *
*-----------------------------------------------------------------------*

CUSTOM          equ     $dff000

_DMACONR        equ     $002
_VPOSR          equ     $004
_VHPOSR         equ     $006
_INTENAR        equ     $01c
_INTREQR        equ     $01e

_DMACON         equ     $096
_INTENA         equ     $09a
_INTREQ         equ     $09c

_DIWSTRT        equ     $08e
_DIWSTOP        equ     $090
_DDFSTRT        equ     $092
_DDFSTOP        equ     $094

_COP1LC         equ     $080
_COP2LC         equ     $084
_COPJMP1        equ     $088
_COPJMP2        equ     $08a

_SPR0PTH        equ     $120
_SPR0PTL        equ     $122

_SPR0POS        equ     $140
_SPR0CTL        equ     $142
_SPR0DATA       equ     $144
_SPR0DATB       equ     $146

_COLOR00        equ     $180
_COLOR17        equ     $1a2            ; sprite pair 0/1 color 1
_COLOR18        equ     $1a4            ; sprite pair 0/1 color 2
_COLOR19        equ     $1a6            ; sprite pair 0/1 color 3

CIAAPRA         equ     $bfe001         ; bit6 = left mouse button (0=pressed)
