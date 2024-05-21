const presets = {
    preset1: {
        system_prompt: '### System:\nYou are an AI assistant that follows instruction extremely well. Help as much as you can.\n\n',
        prompt_template: '### User:\n{0}\n\n### Response:\n',
        user_instruction: 'Explain the theory of relativity.',
        max_tokens: 150,
        temp: 0.7,
        top_k: 40,
        top_p: 0.9,
        min_p: 0.1,
        repeat_penalty: 1.1,
        repeat_last_n: 64,
        n_batch: 1,
        n_predict: 150
    },
    preset2: {
        system_prompt: '### System:\nYou are a helpful assistant specializing in technical explanations.\n\n',
        prompt_template: '### User:\n{0}\n\n### Response:\n',
        user_instruction: 'Describe how a computer works.',
        max_tokens: 200,
        temp: 0.6,
        top_k: 50,
        top_p: 0.8,
        min_p: 0.2,
        repeat_penalty: 1.2,
        repeat_last_n: 80,
        n_batch: 2,
        n_predict: 200
    },
    preset3: {
        system_prompt: '### System:\nYou are an AI designed to provide detailed historical information.\n\n',
        prompt_template: '### User:\n{0}\n\n### Response:\n',
        user_instruction: 'Tell me about the French Revolution.',
        max_tokens: 180,
        temp: 0.65,
        top_k: 60,
        top_p: 0.85,
        min_p: 0.15,
        repeat_penalty: 1.0,
        repeat_last_n: 72,
        n_batch: 1,
        n_predict: 180
    },
    preset4: {
        system_prompt: '### System:\nYou are an AI designed to provide detailed historical information.\n\n',
        prompt_template: '### User:\n{0}\n\n### Response:\n',
        user_instruction: 'Tell me about the French Revolution.',
        max_tokens: 180,
        temp: 0.65,
        top_k: 60,
        top_p: 0.85,
        min_p: 0.15,
        repeat_penalty: 1.0,
        repeat_last_n: 72,
        n_batch: 1,
        n_predict: 180
    },

}


function setPreset(presetName) {
    const preset = presets[presetName];
    document.getElementById('system-prompt').value = preset.system_prompt;
    document.getElementById('prompt-template').value = preset.prompt_template;
    document.getElementById('user-instruction').value = preset.user_instruction;
    document.getElementById('max-tokens').value = preset.maxTokens;
    document.getElementById('temp').value = preset.temp;
    document.getElementById('temp-value').innerText = preset.temp;
    document.getElementById('top-k').value = preset.topK;
    document.getElementById('top-p').value = preset.topP;
    document.getElementById('top-p-value').innerText = preset.topP;
    document.getElementById('min-p').value = preset.minP;
    document.getElementById('min-p-value').innerText = preset.minP;
    document.getElementById('repeat-penalty').value = preset.repeatPenalty;
    document.getElementById('repeat-penalty-value').innerText = preset.repeatPenalty;
    document.getElementById('repeat-last-n').value = preset.repeatLastN;
    document.getElementById('n-batch').value = preset.nBatch;
    document.getElementById('n-predict').value = preset.nPredict;
}

