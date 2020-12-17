class Audio{
    /**
     * Gère la partie audio du projet
     * @see https://createjs.com/getting-started/soundjs
     */
    constructor(){
        createjs.Sound.registerSound("sound/ping1.mp3", "pong1");
        createjs.Sound.registerSound("sound/ping2.mp3", "pong2");
        createjs.Sound.registerSound("sound/ping3.mp3", "pong3");
        createjs.Sound.registerSound("sound/ping4.mp3", "pong4");
        createjs.Sound.registerSound("sound/disappointment.mp3", "disappointment");
    }
    /**
     * Joue une note aléatoirepa
     */
    playNote(){
        //let notes=["do","re","mi","fa","sol","la","si"];
        let notes=[
            "pong1"
            ,"pong2"
            ,"pong3"
            ,"pong4"
        ];
        let note =notes[Math.floor(Math.random() * notes.length)];
        createjs.Sound.play(note);

    }
    /**
     * Perdu
     */
    fausseNote(){
        createjs.Sound.play("disappointment");
    }
}