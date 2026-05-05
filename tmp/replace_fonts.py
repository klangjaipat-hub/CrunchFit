#!/usr/bin/env python3
import re

# Read the file
with open('/workspace/src/app/App.tsx', 'r') as f:
    content = f.read()

# Replace all instances of DB_HeaventRounded with Poppins
content = content.replace("font-['DB_HeaventRounded']", "font-['Poppins']")

# Write the file back
with open('/workspace/src/app/App.tsx', 'w') as f:
    f.write(content)

print("Replacement complete!")
