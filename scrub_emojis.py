
import os

mapping = {
    "âœ¦": "✨",
    "â–¾": "▾",
    "âš—ï¸": "⚒️",
    "ðŸŽ²": "🎲",
    "âš”ï¸": "⚔️",
    "ðŸ“š": "📖",
    "âœ•": "✕",
    "âœ¦": "✦", # Using the diamond for card heads as per previous intent
}

path = r"C:\Users\Thorn\.openclaw\workspace\projects\arcane-forge\index.html"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

for old, new in mapping.items():
    content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Surgical scrub complete.")
