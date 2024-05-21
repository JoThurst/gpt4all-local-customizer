from flask import Flask, request, jsonify
from flask_cors import CORS
from gpt4all import GPT4All

app = Flask(__name__)
CORS(app)
gpt4all_model = GPT4All(model_name="gpt4all-falcon-newbpe-q4_0.gguf", model_path="./LLMS/", n_ctx=2048, verbose=True)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    system_prompt = data.get('system_prompt')
    prompt_template = data.get('prompt_template')

    prompt = data.get('prompt')
    max_tokens = data.get('max_tokens')
    temp = data.get('temp')
    top_k = data.get('top_k')
    top_p = data.get('top_p')
    min_p = data.get('min_p')
    repeat_penalty = data.get('repeat_penalty')
    repeat_last_n = data.get('repeat_last_n')
    n_batch = data.get('n_batch')
    n_predict = data.get('n_predict')

    with gpt4all_model.chat_session(system_prompt=system_prompt,prompt_template=prompt_template):
        response = gpt4all_model.generate(
        prompt=prompt,
        max_tokens=max_tokens,
        temp=temp,
        top_k=top_k,
        top_p=top_p,
        min_p=min_p,
        repeat_penalty=repeat_penalty,
        repeat_last_n=repeat_last_n,
        n_batch=n_batch,
        n_predict=n_predict)
        return jsonify({'response' : response})

    # Generate response using GPT4All model with provided parameters



if __name__ == '__main__':
    app.run(debug=True)
