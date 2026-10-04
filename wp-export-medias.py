#!/usr/bin/env python3
"""
Télécharge tous les médias d'un site WordPress via /wp-json/wp/v2/media
"""

import os
import re
import requests

SITE = "https://www.solidaires35.fr"
DEST = "public"

page = 1
while True:
    resp = requests.get(f"{SITE}/wp-json/wp/v2/media", 
                        params={"per_page": 100, "page": page})
    medias = resp.json()
    if not medias:
        break

    for media in medias:
        # Chemin relatif type "2023/05/photo.jpg"
        chemin = (media.get("media_details") or {}).get("file")
        if not chemin:
            match = re.search(r"/uploads/(.+)$", media.get("source_url", ""))
            if match:
                chemin = match.group(1)
            else:
                os.path.basename(media.get("source_url", ""))

        dest = os.path.join(DEST, chemin)
        os.makedirs(os.path.dirname(dest), exist_ok=True)

        contenu = requests.get(media["source_url"]).content
        with open(dest, "wb") as f:
            f.write(contenu)
        print(chemin)

    page += 1