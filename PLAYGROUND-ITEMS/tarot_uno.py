import os
import random
import streamlit as st

# Carpeta de cartas
BASE_DIR = os.path.dirname(__file__)
ASSETS_DIR = os.path.join(BASE_DIR, "UNO-CARDS")  # tu carpeta de cartas

# Carta de respaldo
cover_card = os.path.join(ASSETS_DIR, "Cover-uno.svg")

# Diccionario con todas las cartas
cards = {
    # Yellow
    "Yellow-0": os.path.join(ASSETS_DIR, "Yellow-0.svg"),
    "Yellow-1": os.path.join(ASSETS_DIR, "Yellow-1.svg"),
    "Yellow-2": os.path.join(ASSETS_DIR, "Yellow-2.svg"),
    "Yellow-3": os.path.join(ASSETS_DIR, "Yellow-3.svg"),
    "Yellow-4": os.path.join(ASSETS_DIR, "Yellow-4.svg"),
    "Yellow-5": os.path.join(ASSETS_DIR, "Yellow-5.svg"),
    "Yellow-6": os.path.join(ASSETS_DIR, "Yellow-6.svg"),
    "Yellow-7": os.path.join(ASSETS_DIR, "Yellow-7.svg"),
    "Yellow-8": os.path.join(ASSETS_DIR, "Yellow-8.svg"),
    "Yellow-9": os.path.join(ASSETS_DIR, "Yellow-9.svg"),
    "Yellow-Draw2-1": os.path.join(ASSETS_DIR, "Yellow-Draw2-1.svg"),
    "Yellow-Draw2-2": os.path.join(ASSETS_DIR, "Yellow-Draw2-2.svg"),
    "Yellow-Skip-1": os.path.join(ASSETS_DIR, "Yellow-Skip-1.svg"),
    "Yellow-Skip-2": os.path.join(ASSETS_DIR, "Yellow-Skip-2.svg"),
    "Yellow-Reverse-1": os.path.join(ASSETS_DIR, "Yellow-Reverse-1.svg"),
    "Yellow-Reverse-2": os.path.join(ASSETS_DIR, "Yellow-Reverse-2.svg"),

    # Blue
    "Blue-0": os.path.join(ASSETS_DIR, "Blue-0.svg"),
    "Blue-1": os.path.join(ASSETS_DIR, "Blue-1.svg"),
    "Blue-2": os.path.join(ASSETS_DIR, "Blue-2.svg"),
    "Blue-3": os.path.join(ASSETS_DIR, "Blue-3.svg"),
    "Blue-4": os.path.join(ASSETS_DIR, "Blue-4.svg"),
    "Blue-5": os.path.join(ASSETS_DIR, "Blue-5.svg"),
    "Blue-6": os.path.join(ASSETS_DIR, "Blue-6.svg"),
    "Blue-7": os.path.join(ASSETS_DIR, "Blue-7.svg"),
    "Blue-8": os.path.join(ASSETS_DIR, "Blue-8.svg"),
    "Blue-9": os.path.join(ASSETS_DIR, "Blue-9.svg"),
    "Blue-Draw2-1": os.path.join(ASSETS_DIR, "Blue-Draw2-1.svg"),
    "Blue-Draw2-2": os.path.join(ASSETS_DIR, "Blue-Draw2-2.svg"),
    "Blue-Skip-1": os.path.join(ASSETS_DIR, "Blue-Skip-1.svg"),
    "Blue-Skip-2": os.path.join(ASSETS_DIR, "Blue-Skip-2.svg"),
    "Blue-Reverse-1": os.path.join(ASSETS_DIR, "Blue-Reverse-1.svg"),
    "Blue-Reverse-2": os.path.join(ASSETS_DIR, "Blue-Reverse-2.svg"),

    # Red
    "Red-0": os.path.join(ASSETS_DIR, "Red-0.svg"),
    "Red-1": os.path.join(ASSETS_DIR, "Red-1.svg"),
    "Red-2": os.path.join(ASSETS_DIR, "Red-2.svg"),
    "Red-3": os.path.join(ASSETS_DIR, "Red-3.svg"),
    "Red-4": os.path.join(ASSETS_DIR, "Red-4.svg"),
    "Red-5": os.path.join(ASSETS_DIR, "Red-5.svg"),
    "Red-6": os.path.join(ASSETS_DIR, "Red-6.svg"),
    "Red-7": os.path.join(ASSETS_DIR, "Red-7.svg"),
    "Red-8": os.path.join(ASSETS_DIR, "Red-8.svg"),
    "Red-9": os.path.join(ASSETS_DIR, "Red-9.svg"),
    "Red-Draw2-1": os.path.join(ASSETS_DIR, "Red-Draw2-1.svg"),
    "Red-Draw2-2": os.path.join(ASSETS_DIR, "Red-Draw2-2.svg"),
    "Red-Skip-1": os.path.join(ASSETS_DIR, "Red-Skip-1.svg"),
    "Red-Skip-2": os.path.join(ASSETS_DIR, "Red-Skip-2.svg"),
    "Red-Reverse-1": os.path.join(ASSETS_DIR, "Red-Reverse-1.svg"),
    "Red-Reverse-2": os.path.join(ASSETS_DIR, "Red-Reverse-2.svg"),

    # Green
    "Green-0": os.path.join(ASSETS_DIR, "Green-0.svg"),
    "Green-1": os.path.join(ASSETS_DIR, "Green-1.svg"),
    "Green-2": os.path.join(ASSETS_DIR, "Green-2.svg"),
    "Green-3": os.path.join(ASSETS_DIR, "Green-3.svg"),
    "Green-4": os.path.join(ASSETS_DIR, "Green-4.svg"),
    "Green-5": os.path.join(ASSETS_DIR, "Green-5.svg"),
    "Green-6": os.path.join(ASSETS_DIR, "Green-6.svg"),
    "Green-7": os.path.join(ASSETS_DIR, "Green-7.svg"),
    "Green-8": os.path.join(ASSETS_DIR, "Green-8.svg"),
    "Green-9": os.path.join(ASSETS_DIR, "Green-9.svg"),
    "Green-Draw2-1": os.path.join(ASSETS_DIR, "Green-Draw2-1.svg"),
    "Green-Draw2-2": os.path.join(ASSETS_DIR, "Green-Draw2-2.svg"),
    "Green-Skip-1": os.path.join(ASSETS_DIR, "Green-Skip-1.svg"),
    "Green-Skip-2": os.path.join(ASSETS_DIR, "Green-Skip-2.svg"),
    "Green-Reverse-1": os.path.join(ASSETS_DIR, "Green-Reverse-1.svg"),
    "Green-Reverse-2": os.path.join(ASSETS_DIR, "Green-Reverse-2.svg"),

    # Wild y Draw4
    "Wild-1": os.path.join(ASSETS_DIR, "Wild-1.svg"),
    "Wild-2": os.path.join(ASSETS_DIR, "Wild-2.svg"),
    "Wild-3": os.path.join(ASSETS_DIR, "Wild-3.svg"),
    "Wild-4": os.path.join(ASSETS_DIR, "Wild-4.svg"),
    "Draw4-1": os.path.join(ASSETS_DIR, "Draw4-1.svg"),
    "Draw4-2": os.path.join(ASSETS_DIR, "Draw4-2.svg"),
    "Draw4-3": os.path.join(ASSETS_DIR, "Draw4-3.svg"),
    "Draw4-4": os.path.join(ASSETS_DIR, "Draw4-4.svg")
}

# Significados base (puedes personalizar)
meanings = {card: f"Significado de {card}. Interpreta según tu intuición." for card in cards}

# Streamlit UI
st.title("🎴 Tarot UNO Interactivo")

num_cards = st.slider("Número de cartas a sacar", 1, 5, 3)

if st.button("Sacar cartas"):
    drawn_cards = random.sample(list(cards.keys()), num_cards)
    st.write("Tus cartas están boca abajo:")
    
    for card in drawn_cards:
        if st.button(f"Voltear carta {card}"):
            st.image(cards[card], caption=f"{card}: {meanings[card]}")
        else:
            st.image(cover_card, caption="Carta cubierta")
