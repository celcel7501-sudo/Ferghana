export type LibEntry = {
  id: string;
  name: string;
  cluster: string;
  style: string;
  exclude?: string;
  sections?: string[];
};

export const LIBRARY: LibEntry[] = [
  {
    id: 'lib-trap-night',
    name: 'Trap mélodique nocturne',
    cluster: 'Hip-hop & Rap',
    style:
      'Melodic trap, 140 BPM in half-time, a smooth male tenor with light pitch correction, sung hooks and rapped verses that sit just behind the beat, gliding 808 bass under dark atmospheric synth pads, crisp rolling hi-hats with short triplet runs, a filtered piano loop in the intro, wide reverb on the hook and a close dry verse vocal, moody and reflective',
    exclude: 'acoustic, country, cheerful nursery tone, fast hyperpop',
    sections: ['Intro', 'Verse 1', 'Hook', 'Verse 2', 'Hook', 'Bridge', 'Hook', 'Outro'],
  },
  {
    id: 'lib-boombap',
    name: 'Boom bap storytelling 90s',
    cluster: 'Hip-hop & Rap',
    style:
      'Mid-90s East Coast boom bap, 92 BPM, a confident male rapper with a conversational storytelling flow and clear diction, dusty sampled jazz piano and an upright bass loop, hard swung drums with a crunchy snare, vinyl crackle, scratched hook phrases from a turntable, mono-leaning mix with the vocal up front, nostalgic and gritty',
    exclude: 'EDM, heavy autotune, festival drop, saturated 808s',
  },
  {
    id: 'lib-party',
    name: 'Party rap ensoleillé',
    cluster: 'Hip-hop & Rap',
    style:
      'Upbeat West Coast party rap, 98 BPM, a playful female rapper with a bouncy rhythmic flow and call-and-response ad-libs, rubbery synth bass and a talk-box style lead, handclaps on two and four, a whistled melody in the hook, group chant on the chorus, bright polished mix, sunny and confident',
    exclude: 'sad, long instrumental intro, dark atmosphere',
  },
  {
    id: 'lib-drill',
    name: 'Drill UK sombre',
    cluster: 'Hip-hop & Rap',
    style:
      'UK drill, 142 BPM, an aggressive close-mic male rap with clipped triplet delivery, sliding 808 bass under a dark cinematic string motif, tight clapped percussion, sparse space around the bass, cold narrow mix with the vocal forward, tense and street-level',
    exclude: 'acoustic, bright pop, happy, ballad',
  },
  {
    id: 'lib-house',
    name: 'Melodic house vocal chop',
    cluster: 'Électro & Dance',
    style:
      'Melodic house, 124 BPM, a breathy female vocal with a chopped phrase as the main hook, tight four-on-the-floor kick, arpeggio synth that opens up through the build, deep pads, rolling bassline, huge reverb on the drop and a filtered intro, euphoric and progressive',
    exclude: 'live drums, acoustic guitar, rap, tempo under 118',
    sections: ['Intro', 'Build', 'Drop', 'Breakdown', 'Build', 'Drop', 'Outro'],
  },
  {
    id: 'lib-techno',
    name: 'Techno industrielle',
    cluster: 'Électro & Dance',
    style:
      'Raw industrial techno, 138 BPM, sparse spoken-word vocal treated as texture, driving saturated kick, white-noise sequencer, acid-modulated bassline, metallic reverb hits, dry sonic mix with ping-pong delay on percussion, hypnotic and mechanical',
    exclude: 'pop melodies, lyrical voice, acoustic, soft breaks',
  },
  {
    id: 'lib-lofi',
    name: 'Lo-fi chill café',
    cluster: 'Ambient & Cinéma',
    style:
      'Lo-fi hip-hop, 76 BPM, no lead vocal, felted piano with a lazy melody, dusty drums with a muffled snare, soft played bass, vinyl crackle and room ambience, light tape saturation, cosy domestic atmosphere',
    exclude: 'loud vocals, drop, distortion, loud master',
  },
  {
    id: 'lib-altrnb',
    name: 'R&B alternatif moderne',
    cluster: 'R&B & Soul',
    style:
      'Modern alternative R&B, 78 BPM, a hushed male vocal with falsetto in the hook and pitched-down vocal layers as texture, sparse minimal beat with deep sub bass and crisp snaps, hazy reverb-washed synth pads, a short reversed guitar phrase between lines, lots of space in the mix, moody and cool',
    exclude: 'big live drums, bright pop, orchestra, fast tempo',
  },
  {
    id: 'lib-neosoul',
    name: 'Néo-soul organique',
    cluster: 'R&B & Soul',
    style:
      'Neo soul, 88 BPM, a husky female contralto phrasing behind the beat with lower third harmonies, extended-chord Rhodes, clean funk guitar picking, live groovy drums, round melodic bass, warm analogue mix, refined and warm-hearted',
    exclude: 'obvious autotune, trap hi-hats, saturated synths',
  },
  {
    id: 'lib-gospel',
    name: 'Gospel choir soul',
    cluster: 'R&B & Soul',
    style:
      'Gospel soul, 96 BPM, a powerful lead vocal answered by a massive choir on every line, Hammond organ, shuffling gospel drums with hand-played bass, stacked three-part harmonies peaking on the bridge, live one-take recording feel, uplifting and communal',
    exclude: 'pop synths, autotune, dark atmosphere',
  },
  {
    id: 'lib-jazz',
    name: 'Jazz trio intime',
    cluster: 'R&B & Soul',
    style:
      'Intimate jazz trio, 82 BPM, a husky female vocalist with spoken-leaning phrasing, open-voiced acoustic piano, walking double bass, brushes on the snare, natural club room sound with audible dynamics, late-night and distinguished',
    exclude: 'closed drums, synths, loud master',
  },
  {
    id: 'lib-bedroom',
    name: 'Bedroom pop chagrin',
    cluster: 'Pop',
    style:
      'Bedroom pop, 94 BPM, a breathy female vocal doubled on the chorus with a slow vibrato, bright arpeggiated acoustic guitar, round synth bass, understated hand-played drums, soft analog pads, short intimate reverb with light tape hiss, tender and nostalgic',
    exclude: 'symphonic orchestra, heavy distortion, big EDM production',
  },
  {
    id: 'lib-dancepop',
    name: 'Dance-pop radio 124 BPM',
    cluster: 'Pop',
    style:
      'Catchy dance-pop, 124 BPM, a bright female vocal with a short chanted hook in the first five seconds, punchy kick and clap, bouncy synth bass, playful vocal chop riff, staccato bright synths, loud polished mix, fun and confident',
    exclude: 'slow intro, ballad, long instrumental start, tempo under 110',
    sections: ['Hook', 'Verse 1', 'Pre-Chorus', 'Chorus', 'Verse 2', 'Chorus', 'Outro'],
  },
  {
    id: 'lib-hyperpop',
    name: 'Hyperpop saturé',
    cluster: 'Pop',
    style:
      'Maximalist hyperpop, 158 BPM, an androgynous pitched-ambiguous vocal stacked in octaves with detuned formants, cascading detuned synths, distorted 808 bassline, slammed compressed claps, permanent risers, ultra-bright compressed mix with brutal transitions, chaotic and euphoric',
    exclude: 'acoustic, jazz, dark mix, slow tempo',
  },
  {
    id: 'lib-kballad',
    name: 'K-ballad cinématique',
    cluster: 'Pop',
    style:
      'Korean ballad, 74 BPM, an emotional female vocal in Korean with a dramatic dynamic arc, piano-driven foundation, orchestral strings rising, drums entering on the second verse, clean electric guitar support, concert-hall reverb, heartfelt and cinematic',
    exclude: 'rap, EDM drop, distortion',
  },
  {
    id: 'lib-chanson',
    name: 'Chanson française moderne',
    cluster: 'Pop',
    style:
      'Chanson française contemporaine, 92 BPM, a raspy warm male voice telling the story close to the microphone, hand-played folk guitar, discreet accordion and strings, soft double bass, light percussion, intimate mix with space around the voice, poetic and tender',
    exclude: 'trap, autotune, drop, EDM brightness',
  },
  {
    id: 'lib-citypop',
    name: 'City-pop japonais 80s',
    cluster: 'Musiques du monde',
    style:
      '80s Japanese city-pop, 104 BPM, silky female soprano in Japanese, gated reverb drums, DX7 electric piano, slap bass, saxophone solo, very wide stereo image with vintage brightness, glamorous nostalgia',
    exclude: 'heavy distortion, trap, lo-fi',
  },
  {
    id: 'lib-afrobeats',
    name: 'Afrobeats moderne',
    cluster: 'Musiques du monde',
    style:
      'Modern afrobeats, 102 BPM, a smooth male tenor with melodic hooks in Yoruba and English, syncopated African percussion, round log-drum bass, highlife guitar arpeggios, claps and shakers, bright polished production with a flexible groove, sunny and danceable',
    exclude: 'slow tempo, orchestra, rock distortion',
  },
  {
    id: 'lib-afrohouse',
    name: 'Afro house organique',
    cluster: 'Musiques du monde',
    style:
      'Organic afro house, 122 BPM, layered tribal chants as the main hook, warm pads, organic tribal percussion, deep groovy bass, dub delays on percussion, uplifting modern polished production, ecstatic night ritual',
    exclude: 'dominant rap vocal, rock, classical orchestra',
  },
  {
    id: 'lib-reggaeton',
    name: 'Reggaeton urbain',
    cluster: 'Musiques du monde',
    style:
      'Urban reggaeton, 94 BPM, a confident male tenor with melodic repeated hook, classic dembow pattern, groovy synth bass, melodic synth lead, light percussion, loud club mix with answer backing vocals, sensual summer party',
    exclude: 'rock, tempo under 88, slow ballad',
  },
  {
    id: 'lib-indierock',
    name: 'Indie rock drive',
    cluster: 'Rock & Métal',
    style:
      'Nervous indie rock, 126 BPM, a gritty committed male vocal with fifth-harmony double tracking, two interlocking guitars in counterpoint, dry driving drums, gain-wrapped bass, discreet organ support, live recording with open cymbals, anxious energy',
    exclude: 'trap, dominant synths, autotune, drop',
  },
  {
    id: 'lib-arena',
    name: 'Arena rock hymne',
    cluster: 'Rock & Métal',
    style:
      'Hymnic arena rock, 134 BPM, a gritty male vocal pushing into the top with crowd chants on the chorus, saturated power-chord guitars, imposing drums, thick bass, guitar solo on the bridge, huge concert-hall reverb, triumphant and defiant',
    exclude: 'lo-fi, whispered vocal, minimal electronic',
  },
  {
    id: 'lib-metalcore',
    name: 'Metalcore contemporain',
    cluster: 'Rock & Métal',
    style:
      'Modern metalcore, 152 BPM, alternating harsh screams and clean sung chorus, ultra-tight drop-tuned guitars, blast double-kick runs, half-time breakdown, discreet cinematic synth layer, dense modern mix with controlled low end, cathartic and determined',
    exclude: 'dominant acoustic, pop, autotune, light groove',
  },
  {
    id: 'lib-country',
    name: 'Country folk acoustique',
    cluster: 'Country & Folk',
    style:
      'Acoustic country folk, 100 BPM, a warm honest male vocal with close harmony, strummed acoustic guitar, discreet pedal steel, fiddle, brushed drums, warm woody room reverb, rooted and sincere',
    exclude: 'synths, trap, heavy distortion',
  },
  {
    id: 'lib-bluegrass',
    name: 'Bluegrass enlevé',
    cluster: 'Country & Folk',
    style:
      'Fast acoustic bluegrass, 138 BPM, high harmonised male vocals around one shared microphone, rolling banjo, mandolin tremolo, fiddle, played bass, instrumental breaks between verses, joyful virtuosic take',
    exclude: 'drums, synths, saturated electric',
  },
  {
    id: 'lib-ambient',
    name: 'Ambient cinématique',
    cluster: 'Ambient & Cinéma',
    style:
      'Evolving cinematic ambient, 66 BPM, no drums, granular pads with very long attack, sparse felt piano, subtle strings, deeply reverbed background textures, slow build with no percussion until the final swell, vast and contemplative',
    exclude: 'present drums, groove, spoken voice',
  },
  {
    id: 'lib-trailer',
    name: 'Trailer épique',
    cluster: 'Ambient & Cinéma',
    style:
      'Epic orchestral-electro trailer, 96 BPM, epic choir stabs, taiko and large percussion, string ostinato, braams and risers, stepped build with dramatic silences and impacted hits, majestic menace',
    exclude: 'pop, intimate lead vocal, lo-fi',
  },
  {
    id: 'lib-shorthook',
    name: 'Hook 30 s pour short vertical',
    cluster: 'Électro & Dance',
    style:
      'Catchy dance-pop, 124 BPM, a bright female vocal with a short chanted hook in the first five seconds, punchy kick and clap, bouncy synth bass, playful vocal chop riff, loud polished mix, fun and confident',
    exclude: 'slow intro, ballad, long instrumental start',
    sections: ['Hook', 'Verse 1', 'Hook', 'Hook'],
  },
];

export const CLUSTERS = Array.from(new Set(LIBRARY.map((e) => e.cluster)));
