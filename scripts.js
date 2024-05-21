document.getElementById('temp').addEventListener('input', function() {
    document.getElementById('temp-value').innerText = this.value;
});
document.getElementById('top-p').addEventListener('input', function() {
    document.getElementById('top-p-value').innerText = this.value;
});
document.getElementById('min-p').addEventListener('input', function() {
    document.getElementById('min-p-value').innerText = this.value;
});
document.getElementById('repeat-penalty').addEventListener('input', function() {
    document.getElementById('repeat-penalty-value').innerText = this.value;
});

document.getElementById('prompt-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const systemPrompt = document.getElementById('system-prompt').value;
    const promptTemplate = document.getElementById('prompt-template').value;
    const userInstruction = document.getElementById('user-instruction').value;
    const maxTokens = document.getElementById('max-tokens').value;
    const temp = document.getElementById('temp').value;
    const topK = document.getElementById('top-k').value;
    const topP = document.getElementById('top-p').value;
    const minP = document.getElementById('min-p').value;
    const repeatPenalty = document.getElementById('repeat-penalty').value;
    const repeatLastN = document.getElementById('repeat-last-n').value;
    const nBatch = document.getElementById('n-batch').value;
    const nPredict = document.getElementById('n-predict').value;

    const prompt = userInstruction;

    fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: prompt,
            prompt_temmplate : promptTemplate,
            system_template: systemPrompt,
            max_tokens: parseInt(maxTokens),
            temp: parseFloat(temp),
            top_k: parseInt(topK),
            top_p: parseFloat(topP),
            min_p: parseFloat(minP),
            repeat_penalty: parseFloat(repeatPenalty),
            repeat_last_n: parseInt(repeatLastN),
            n_batch: parseInt(nBatch),
            n_predict: parseInt(nPredict)
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.response;
    })
    .catch(error => console.error('Error:', error));
});

