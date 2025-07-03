import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_ad_copy(product_name, description, audience):
    prompt = f"""
    Create a Facebook ad for the following:
    Product: {product_name}
    Description: {description}
    Target Audience: {audience}

    Include a short catchy headline, a one-sentence description, and a call to action.
    """
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    
    return response.choices[0].message['content'].strip()
