DEMO    = demo
SRC     = src/demo.s
INCLUDE = include

VASM    = vasmm68k_mot
VASMFLAGS = -Fhunkexe -I$(INCLUDE)

all: $(DEMO)

$(DEMO): $(SRC) $(INCLUDE)/hw.i $(INCLUDE)/exec_lvo.i
	$(VASM) $(VASMFLAGS) -o $(DEMO) $(SRC)

clean:
	rm -f $(DEMO)

.PHONY: all clean
