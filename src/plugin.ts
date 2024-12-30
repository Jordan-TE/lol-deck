import streamDeck, { LogLevel } from "@elgato/streamdeck";
import { FlashTimer, IgniteTimer, HealTimer, GhostTimer, BarrierTimer, ExhaustTimer, ClarityTimer, TeleportTimer, CleanseTimer } from "./actions/timeSummonerSpell";

// Enable trace logging
streamDeck.logger.setLevel(LogLevel.TRACE);

// Array of actions to register
const actions = [
    new FlashTimer(),
    new IgniteTimer(),
    new HealTimer(),
    new GhostTimer(),
    new BarrierTimer(),
    new ExhaustTimer(),
    new ClarityTimer(),
    new TeleportTimer(),
    new CleanseTimer()
];

// Register all actions
actions.forEach(action => streamDeck.actions.registerAction(action));

// Finally, connect to the Stream Deck.
streamDeck.connect();