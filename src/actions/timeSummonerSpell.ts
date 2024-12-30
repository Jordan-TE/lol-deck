import { action, KeyUpEvent, SingletonAction } from "@elgato/streamdeck";

export class SummonerSpellTimer extends SingletonAction {
    private readonly coolDownImage: string;
    private readonly readyImage: string;
    private readonly duration: number;
    private startTime: number | null = null;
    private timerInterval: NodeJS.Timeout | null = null;

    constructor(coolDownImage: string, readyImage: string, duration: number) {
        super();
        this.coolDownImage = coolDownImage;
        this.readyImage = readyImage;
        this.duration = duration;
    }

    override async onKeyUp(event: KeyUpEvent) {
        if (this.startTime === null) {
            this.startTimer(event);
        } else {
            this.stopTimer(event);
        }
    }

    startTimer(event: KeyUpEvent) {
        this.startTime = Date.now();
        event.action.setImage(this.coolDownImage);
        this.timerInterval = setInterval(() => {
            if (this.startTime !== null) {
                const elapsedTime = Date.now() - this.startTime;
                const remainingTime = this.duration - elapsedTime;
                if (remainingTime <= 0) {
                    this.stopTimer(event);
                    event.action.setImage(this.readyImage);
                    event.action.setTitle(""); 
                } else {
                    const seconds = Math.floor(remainingTime / 1000);
                    event.action.setTitle(`${seconds}s`);
                }
            }
        }, 1000);
    }

    stopTimer(event: KeyUpEvent) {
        if (this.timerInterval !== null) {
            clearInterval(this.timerInterval); 
        }
        this.timerInterval = null;
        this.startTime = null;
        event.action.setImage(this.readyImage);
        event.action.setTitle(""); 
    }
}

@action({ UUID: "com.mkstorm.lol-deck.flash" })
export class FlashTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Flash_cool_down_HD",
            "imgs/actions/summonersSpells/Flash_HD",
            300000 // 300 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.ignite" })
export class IgniteTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Ignite_cool_down_HD",
            "imgs/actions/summonersSpells/Ignite_HD",
            180000 // 180 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.heal" })
export class HealTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Heal_cool_down_HD",
            "imgs/actions/summonersSpells/Heal_HD",
            240000 // 240 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.ghost" })
export class GhostTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Ghost_cool_down_HD",
            "imgs/actions/summonersSpells/Ghost_HD",
            240000 // 240 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.barrier" })
export class BarrierTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Barrier_cool_down_HD",
            "imgs/actions/summonersSpells/Barrier_HD",
            180000 // 180 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.exhaust" })
export class ExhaustTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Exhaust_cool_down_HD",
            "imgs/actions/summonersSpells/Exhaust_HD",
            240000 // 240 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.clarity" })
export class ClarityTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Clarity_cool_down_HD",
            "imgs/actions/summonersSpells/Clarity_HD",
            240000 // 240 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.teleport" })
export class TeleportTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Teleport_cool_down_HD",
            "imgs/actions/summonersSpells/Teleport_HD",
            3600 // 360 seconds
        );
    }
}

@action({ UUID: "com.mkstorm.lol-deck.cleanse" })
export class CleanseTimer extends SummonerSpellTimer {
    constructor() {
        super(
            "imgs/actions/summonersSpells/Cleanse_cool_down_HD",
            "imgs/actions/summonersSpells/Cleanse_HD",
            240000 // 240 seconds
        );
    }
}