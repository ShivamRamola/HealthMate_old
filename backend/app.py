from flask import Flask, render_template, request
import openai

app = Flask(__name__)

# Replace with your actual API key
openai.api_key = 'Your_OpenAI_API_Key'

# Home route
@app.route("/")
def home():
    return render_template("index.html")

# Chat route to process the user's query
@app.route("/chat", methods=["POST"])
def chat():
    user_query = request.form.get("user_query")  # Get the query from the user input form

    if user_query:
        # Use OpenAI GPT-3 API to get the answer for the query
        response = openai.Completion.create(
            engine="text-davinci-003",  # or another GPT engine
            prompt=user_query,
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7
        )

        # Extract the answer from the response
        bot_response = response.choices[0].text.strip()
        return render_template("index.html", user_query=user_query, bot_response=bot_response)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
