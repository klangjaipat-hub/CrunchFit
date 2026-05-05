#!/usr/bin/env python3

# Read the entire file
with open('/workspace/src/app/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Perform the replacement
new_content = content.replace("font-['DB_HeaventRounded']", "font-['Poppins']")

# Write back
with open('/workspace/src/app/App.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

# Count changes
original_count = content.count("font-['DB_HeaventRounded']")
new_count = new_content.count("font-['Poppins']")

print(f"✓ Replaced {original_count} instances of 'DB_HeaventRounded' with 'Poppins'")
print(f"✓ File now contains {new_count} instances of 'Poppins'")
