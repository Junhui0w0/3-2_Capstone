const mongoose = require('mongoose');

const GameStateSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    // state: { type: Number, required: true, default: 1 },
    savedAt: { type: Date, default: Date.now },
    playerStatus: {
        type: {
            x: { type: Number, required: true, default: 16.6 },
            y: { type: Number, required: true, default: 5.75 },
            progress: { type: Number, required: true, default: 0 },
            //progress 뺴야함
            is_Elevator_Disabled: { type: Number, required: true, default: 0 },
            Game_Start: { type: Number, required: true, default: 0 },
            Story_4F_first: { type: Number, required: true, default: 0 },
            Has_Interated_Elevator: { type: Number, required: true, default: 0 },
            Is_4F_Locked: { type: Number, required: true, default: 0 },
            Has_4F_Key_Hint1: { type: Number, required: true, default: 0 },
            IsDoorUnlocked:{type: Number, require: true, default:0},
            Is_3F_Start: { type: Number, required: true, default: 0 },
            Has_news_paper: { type: Number, required: true, default: 0 },
            Is_3F_Locked: { type: Number, required: true, default: 0 },
            Has_3F_Hint: { type: Number, required: true, default: 0 },
            is_3F_Open: { type: Number, required: true, default: 0 },
            Is_2F_Start: { type: Number, required: true, default: 0 },
            Is_Today_Time: { type: Number, required: true, default: 0 },
            Is_Cat: { type: Number, required: true, default: 0 },
            Has_Keyring: { type: Number, required: true, default: 0 },
            Is_2F_Hint: { type: Number, required: true, default: 0 },
            Is_2F_Story_Trigger: { type: Number, required: true, default: 0 },
            is_2F_Locked: {type:Number, require: true, default: 0},
            Is_1F_Start: { type: Number, required: true, default: 0 },
            Is_1F_Locked: { type: Number, required: true, default: 0 },
            Play_Cat_1F: { type: Number, required: true, default: 0 },
            Diary_Open: { type: Number, required: true, default: 0 },
            Is_B1_Start: { type: Number, required: true, default: 0 },
            B1_Cat: { type: Number, required: true, default: 0 },
            Has_Exit_Key: { type: Number, required: true, default: 0 },
            Current_Scene_Name: { type: String, required: true, default:"Start"}
        },
        required: true
    },

    playerStatus2: {
        type: {
            x: { type: Number, required: true, default: 16.6 },
            y: { type: Number, required: true, default: 5.75 },
            progress: { type: Number, required: true, default: 0 },
            //progress 뺴야함
            is_Elevator_Disabled: { type: Number, required: true, default: 0 },
            Game_Start: { type: Number, required: true, default: 0 },
            Story_4F_first: { type: Number, required: true, default: 0 },
            Has_Interated_Elevator: { type: Number, required: true, default: 0 },
            Is_4F_Locked: { type: Number, required: true, default: 0 },
            Has_4F_Key_Hint1: { type: Number, required: true, default: 0 },
            IsDoorUnlocked:{type: Number, require: true, default:0},
            Is_3F_Start: { type: Number, required: true, default: 0 },
            Has_news_paper: { type: Number, required: true, default: 0 },
            Is_3F_Locked: { type: Number, required: true, default: 0 },
            Has_3F_Hint: { type: Number, required: true, default: 0 },
            is_3F_Open: { type: Number, required: true, default: 0 },
            Is_2F_Start: { type: Number, required: true, default: 0 },
            Is_Today_Time: { type: Number, required: true, default: 0 },
            Is_Cat: { type: Number, required: true, default: 0 },
            Has_Keyring: { type: Number, required: true, default: 0 },
            Is_2F_Hint: { type: Number, required: true, default: 0 },
            Is_2F_Story_Trigger: { type: Number, required: true, default: 0 },
            is_2F_Locked: {type:Number, require: true, default: 0},
            Is_1F_Start: { type: Number, required: true, default: 0 },
            Is_1F_Locked: { type: Number, required: true, default: 0 },
            Play_Cat_1F: { type: Number, required: true, default: 0 },
            Diary_Open: { type: Number, required: true, default: 0 },
            Is_B1_Start: { type: Number, required: true, default: 0 },
            B1_Cat: { type: Number, required: true, default: 0 },
            Has_Exit_Key: { type: Number, required: true, default: 0 },
            Current_Scene_Name: { type: String, required: true, default:"Start"}
        },
        required: true
    },

    playerStatus3: {
        type: {
            x: { type: Number, required: true, default: 16.6 },
            y: { type: Number, required: true, default: 5.75 },
            progress: { type: Number, required: true, default: 0 },
            //progress 뺴야함
            is_Elevator_Disabled: { type: Number, required: true, default: 0 },
            Game_Start: { type: Number, required: true, default: 0 },
            Story_4F_first: { type: Number, required: true, default: 0 },
            Has_Interated_Elevator: { type: Number, required: true, default: 0 },
            Is_4F_Locked: { type: Number, required: true, default: 0 },
            Has_4F_Key_Hint1: { type: Number, required: true, default: 0 },
            IsDoorUnlocked:{type: Number, require: true, default:0},
            Is_3F_Start: { type: Number, required: true, default: 0 },
            Has_news_paper: { type: Number, required: true, default: 0 },
            Is_3F_Locked: { type: Number, required: true, default: 0 },
            Has_3F_Hint: { type: Number, required: true, default: 0 },
            is_3F_Open: { type: Number, required: true, default: 0 },
            Is_2F_Start: { type: Number, required: true, default: 0 },
            Is_Today_Time: { type: Number, required: true, default: 0 },
            Is_Cat: { type: Number, required: true, default: 0 },
            Has_Keyring: { type: Number, required: true, default: 0 },
            Is_2F_Hint: { type: Number, required: true, default: 0 },
            Is_2F_Story_Trigger: { type: Number, required: true, default: 0 },
            is_2F_Locked: {type:Number, require: true, default: 0},
            Is_1F_Start: { type: Number, required: true, default: 0 },
            Is_1F_Locked: { type: Number, required: true, default: 0 },
            Play_Cat_1F: { type: Number, required: true, default: 0 },
            Diary_Open: { type: Number, required: true, default: 0 },
            Is_B1_Start: { type: Number, required: true, default: 0 },
            B1_Cat: { type: Number, required: true, default: 0 },
            Has_Exit_Key: { type: Number, required: true, default: 0 },
            Current_Scene_Name: { type: String, required: true, default:"Start"}
        },
        required: true
    }

});

const GameState = mongoose.model('GameState', GameStateSchema);

module.exports = GameState;